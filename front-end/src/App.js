import './app.css'
import { Route, Routes } from 'react-router';
import Login from './compnents/auth/Login';
import Signup from './compnents/auth/Signup';
import Footer from './compnents/footer/Footer';
import Header from './compnents/header/Header';
import Welcome from './compnents/land/Welcome';
import Home from './compnents/home/Home'
import AddDeal from './compnents/home/AddDeal';
import ProfileContainer from './compnents/profile/ProfileContainer'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={< Welcome />} />
        <Route path='/home' element={< Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/add_deal' element={<AddDeal />} />
        <Route path='/profile' element={<ProfileContainer />} />
      </Routes>
      <Footer />
    </>

  );
}

export default App;
