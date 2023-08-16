import { Link } from 'react-router-dom';
import logo from '../../assets/Free_Sample_By_Wix.jpg';
import './header.css';
import { isAuthState, tokenState, userState } from "../../app/features/auth/authSlice";
import Logout from '../auth/Logout'
import { useSelector } from 'react-redux';
import AddDeal from '../home/AddDeal';

const Header = () => {
    const isAuth = useSelector(isAuthState);
    const user = useSelector(userState);
    const token = useSelector(tokenState);
    return (
        <div className="header">
            <a href="/" className="logo">
                <img style={{ width: '60px' }} src={logo} alt='logo-left' />
            </a>
            <div className="navigation">
                <Link to="/">Home</Link>
                {/* <Link to="/signup"></Link>
                <Link to="/login">Login</Link> */}
                {!isAuth && !token && <Link to='/signup' >Signup</Link>}
                {!isAuth && !token && <Link to='/login' >Login</Link>}
                {isAuth && token && <Link to='/add_deal' >Add Deal</Link>}
                {isAuth && token && <Link to='/home' >Deals</Link>}
                {isAuth && token && <Link to='/profile' >Profile</Link>}
                <Link to='/' >{isAuth && token && <Logout />}</Link>
                {/* <Link to='/add_deal' >{isAuth && token && <AddDeal />}</Link> */}

            </div>
        </div>
    );
}

export default Header;