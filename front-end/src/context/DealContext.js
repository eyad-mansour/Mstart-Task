import {createContext} from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import cookies from 'react-cookies';

export const DealContext = createContext();

const DealContextProvider = (props) => {
  const [deals, setDeals] = useState([]);
  const [showDealComponent, setShowDealComponent] = useState(false);

  const getAllDeal = async () => {
    await axios
      .get(`${process.env.REACT_APP_BACKEND}/deals`, {
        headers: {
          authorization: `Bearer ${cookies.load('token')}`,
        },
      })
      .then((response) => {
        const allDeals = response.data;
        setDeals(allDeals);
        setShowDealComponent(true);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  const deleteOneDeal = async (deal) => {
    await axios.delete(
      `${process.env.REACT_APP_BACKEND}/deal/${deal.id}/${deal.UserID}`,
      {
        headers: {
          authorization: `Bearer ${cookies.load('token')}`,
        },
      }
    );
    getAllDeal();
  };

  const deleteOneClaimed = async (id) => {
    await axios.delete(`${process.env.REACT_APP_BACKEND}/claimed/${id}`, {
      headers: {
        authorization: `Bearer ${cookies.load('token')}`,
      },
    });
    getAllDeal();
  };
  const addDeal = async (e) => {
    e.preventDefault();
    const data = {
      Name: e.target.Name.value,
      UserID: cookies.load('userID'),
    };

    await axios
      .post(`${process.env.REACT_APP_BACKEND}/deal`, data, {
        headers: {
          authorization: `Bearer ${cookies.load('token')}`,
        },
      })
      .then((res) => {
        getAllDeal();
      })
      .catch((e) => console.log(e));
  };
  const value = {
    deals,
    getAllDeal,
    deleteOneClaimed,
    deleteOneDeal,
    showDealComponent,
    addDeal,
  };

  return (
    <DealContext.Provider value={value}>{props.children}</DealContext.Provider>
  );
};
export default DealContextProvider;
