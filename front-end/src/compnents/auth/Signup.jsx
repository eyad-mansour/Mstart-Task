import './signup.css';
import { useDispatch } from "react-redux";
import { signup } from "../../app/actions/authActions/signupActions";

const Signup = () => {

    const dispatch = useDispatch();

    return (
        <div className="sign-up-form">
            <h2>Create an Account</h2>
            <form onSubmit={(e) => signup(e, dispatch)}>

                <input
                    className="signup-input"
                    type="text"
                    name='username'
                    placeholder="Username"
                    id="username"
                    required
                />
                <input
                    className="signup-input"
                    type="email"
                    name='email'
                    placeholder="Email"
                    id="email"
                    required
                />
                <input
                    className="signup-input"
                    type="password"
                    name='password'
                    placeholder="Password"
                    id="password"
                    required
                />
                <input
                    className="signup-input"
                    type="password"
                    placeholder="Confirm Password"
                    id="confirmPassword"
                    name="confirmPassword"
                    required
                />
                <button
                    className="signup-input" type="submit">
                    Sign Up
                </button>
            </form>
        </div>
    );
}

export default Signup;