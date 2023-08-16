import axios from "axios";
import base64 from "base-64";
import { loginFailed, loginSuccess, requestLogin } from "../../features/auth/authSlice";
import { getDeals } from "../dealActions/getDealAction";

export const login = async (e, dispatch) => {
    try {
        e.preventDefault();

        const data = new FormData(e.currentTarget);
        const user = {
            identifier: data.get("identifier"),
            password: data.get("password"),
        };

        const encoded = base64.encode(`${user.identifier}:${user.password}`);

        dispatch(requestLogin());
        await axios
            .post(`${process.env.REACT_APP_PORT}/login`, {}, { headers: { Authorization: `Basic ${encoded}` } })
            .then((res) => {
                if (res.status === 200) {
                    dispatch(loginSuccess(res.data));
                    localStorage.setItem("token", res.data.token);
                    localStorage.setItem("user", JSON.stringify(res.data));
                    getDeals(dispatch);
                    window.location.href = '/home'
                }
            })
            .catch((err) => {
                dispatch(loginFailed(err.response.data));
                if (err.response.status === 403) {
                    alert("Invalid username or password.");
                } else {
                    alert("Something went wrong.");
                }
            });
    } catch (err) {
        dispatch(loginFailed(err.response.data));
        alert("Error: Something went wrong.");
    }
};
