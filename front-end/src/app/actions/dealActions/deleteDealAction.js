import axios from "axios";
import { deleteDealFailed, deleteDealSuccess, requestDeleteDeal } from "../../features/deals/dealsSlice";

export const deleteDeal = async (e, dispatch, dealID, token) => {
    try {
        e.preventDefault();
        dispatch(requestDeleteDeal());
        await axios
            .delete(`${process.env.REACT_APP_PORT}/deal/${dealID}`, { headers: { Authorization: `Bearer ${token}` } })
            .then((res) => {
                dispatch(deleteDealSuccess(res));
                alert('Your deal has been deleted');
                window.location.href = '/home'
            })
            .catch((err) => {
                console.log(err)
                dispatch(deleteDealFailed(err.response.data));
            });
    } catch (error) {
        dispatch(deleteDealFailed(error.response.data));
    }
};