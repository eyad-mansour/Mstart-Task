import axios from "axios";
import {
    getClimedDealsSuccess, getClimedDealsRequest, getClimedDealsFail,
} from '../../features/profile/profileSlice';

export const getClimedDeals = (dispatch) => {
    try {
        dispatch(getClimedDealsRequest());
        const userID = JSON.parse(localStorage.getItem("user"))
        const userId = userID ? userID.id : null;
        console.log(userId)
        const getDeals = async () => {
            const response = await axios.get(`${process.env.REACT_APP_PORT}/claimed`, {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
            });
            return response.data;
        };
        const showDeal = async () => {
            const deals = await getDeals();
            const userClimedDeals = deals.claimed.filter(deal => deal.User_ID === userId);
            dispatch(getClimedDealsSuccess(userClimedDeals));

        };
        showDeal();
    } catch (error) {
        dispatch(getClimedDealsFail(error))

    }
}