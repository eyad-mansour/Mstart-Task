import './login.css'
import { login } from '../../app/actions/authActions/loginActions'
import { useDispatch } from 'react-redux';

const Login = () => {
    const dispatch = useDispatch()
    return (
        <div className="login-form">
            <h2>login</h2>
            <form onSubmit={(e) => login(e, dispatch)}>
                <input
                    className='login-input'
                    type="email"
                    id='identifier'
                    name="identifier"
                    placeholder="Email"
                    required
                />
                <input
                    className='login-input'
                    type="password"
                    placeholder="Password"
                    id="password"
                    name="password"
                    required
                />
                <button
                    className='login-button'
                    type="submit">
                    Log In
                </button>
            </form>
        </div>
    );
}

export default Login;