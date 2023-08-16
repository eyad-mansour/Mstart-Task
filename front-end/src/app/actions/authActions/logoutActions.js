import { logoutFailed, logoutSuccess, requestLogout } from "../../features/auth/authSlice";

export const logout = async (dispatch) => {
    dispatch(requestLogout());
    try {
        dispatch(logoutSuccess());
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.location.href = '/'
    } catch (err) {
        dispatch(logoutFailed(err.response.data));
        window.alert("Error: something went wrong.");
    }
};
