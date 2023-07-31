import {createContext, useState} from 'react';
import axios from 'axios';
import base64 from 'base-64';
import cookies from 'react-cookies';

export const authContext = createContext();

const AuthContextProvider = (props) => {
  const [isAuth, setIsAuth] = useState(false);
  const [role, setRole] = useState('');
  const [capabilities, setCapabilities] = useState();

  const handleSignup = async (e) => {
    e.preventDefault();
    const data = {
      Name: e.target.Name.value,
      Email: e.target.Email.value,
      Password: e.target.Password.value,
      Status: e.target.Status.value,
      Server_DateTime: new Date().toISOString(),
      DateTime_UTC: new Date().toISOString(),
      Update_DateTime_UTC: new Date().toISOString(),
    };
    console.log(data);
    await axios
      .post(`${process.env.REACT_APP_BACKEND}/signup`, data)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => console.log(e));
  };
  const handleSignIn = async (e) => {
    e.preventDefault();
    const data = {
      Email: e.target.Email.value,
      Password: e.target.Password.value,
    };
    const encodedCreditial = base64.encode(`${data.Name}:${data.Password}`);
    console.log(encodedCreditial);
    await axios
      .post(
        `${process.env.REACT_APP_BACKEND}/login`,
        {},
        {
          headers: {
            authorization: `Basic ${encodedCreditial}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        cookies.remove();
        cookies.save('token', res.data.token);
        cookies.save('userID', res.data.id);
        cookies.save('Name', res.data.Name);
        cookies.save('role', res.data.role);
        cookies.save('capabilities', JSON.stringify(res.data.capabilities));
        setIsAuth(true);
      })
      .catch((err) => console.log(err));
  };
  const logOut = () => {
    cookies.remove('token');
    setIsAuth(false);
  };
  const checkToken = () => {
    const token = cookies.load('token');
    const role = cookies.load('role');
    if (token) {
      setIsAuth(true);
      setRole(role);
      setCapabilities(cookies.load('capabilities'));
    }
  };
  const userALC = (capabilities, userID) => {
    if (
      capabilities.includes('delete') ||
      parseInt(cookies.load('userID')) === userID
    ) {
      return true;
    } else {
      return false;
    }
  };
  const value = {
    isAuth,
    logOut,
    setIsAuth,
    handleSignIn,
    handleSignup,
    checkToken,
    role,
    capabilities,
    userALC,
  };
  return (
    <authContext.Provider value={value}>
      <>{props.children}</>
    </authContext.Provider>
  );
};
export default AuthContextProvider;
