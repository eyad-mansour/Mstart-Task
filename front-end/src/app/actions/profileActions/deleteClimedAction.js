import axios from "axios";
import { deleteClaimedFailed, deleteClaimedSuccess, requestDeleteDeal, requestDeleteClaimed } from "../../features/profile/profileSlice";

export const deleteDeal = async (e, dispatch, dealID, token) => {
    try {
        e.preventDefault();
        dispatch(requestDeleteClaimed());
        await axios
            .delete(`${process.env.REACT_APP_PORT}/claimed/${dealID}`, { headers: { Authorization: `Bearer ${token}` } })
            .then((res) => {
                dispatch(deleteClaimedSuccess(res));
                alert('Your claimed deal has been deleted');
                window.location.href = '/profile'
            })
            .catch((err) => {
                console.log(err)
                dispatch(deleteClaimedFailed(err.response.data));
            });
    } catch (error) {
        dispatch(deleteClaimedFailed(error.response.data));
    }
};