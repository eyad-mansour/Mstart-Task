import axios from "axios";
import { requestSignup, signupFailed, signupSuccess } from "../../features/auth/authSlice";

export const signup = async (e, dispatch) => {
    try {
        e.preventDefault();

        const data = new FormData(e.currentTarget);

        if (data.get("password") !== data.get("confirmPassword")) {
            alert("Error: Passwords do not match.");
            return;
        }
        const pass = data.get('password')

        if (!/.{8,}/.test(pass)) {
            alert("Error: Passwords is too short.");
            return;
        }
        const user = {
            Name: data.get("username"),
            Password: data.get("password"),
            Email: data.get("email"),
            role: 'user',
            Server_DateTime: new Date().toUTCString(),
            DateTime_UTC: new Date().toUTCString(),
            Update_DateTime_UTC: new Date().toISOString(),
            Status: 'active',
        };

        dispatch(requestSignup());
        await axios
            .post(`${process.env.REACT_APP_PORT}/signup`, user)
            .then((res) => {
                if (res.status === 201) {
                    dispatch(signupSuccess(res.data));
                    localStorage.setItem("token", res.data.token);
                    localStorage.setItem("user", JSON.stringify(res.data));
                    window.location.href = '/home';
                }
            })
            .catch((err) => {
                dispatch(signupFailed(err.response.data));
                if (err.response.status === 409) {
                    alert("Error: Username or email already exists.");
                } else if (err.response.status === 400) {
                    if (err.response.data.includes("Password")) {
                        alert("Error: Invalid password format.");
                    }
                    if (err.response.data.includes("Username")) {
                        alert("Error: Invalid username format.");
                    }
                    if (err.response.data.includes("Email")) {
                        alert("Error: Invalid email.");
                    }
                } else {
                    alert("Error: Something went wrong.");
                }
            });
    } catch (err) {
        dispatch(signupFailed(err.response.data));
        window.alert("Error: Something went wrong.");
    }
};
