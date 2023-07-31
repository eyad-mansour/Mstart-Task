import {useEffect, useContext} from 'react';
import {When} from 'react-if';
import Deal from './components/Deal';
import Sign from './components/Sign';
import {authContext} from './context/AuthContext';

function App() {
  const {isAuth, logOut, checkToken} = useContext(authContext);
  useEffect(() => {
    checkToken();
  }, []);

  return (
    <>
      <When condition={!isAuth}>
        <Sign />
      </When>
      <When condition={isAuth}>
        <button onClick={logOut}>logout</button>
        <Deal />
      </When>
    </>
  );
}

export default App;
