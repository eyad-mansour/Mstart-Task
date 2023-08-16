import axios from "axios";
import { getProfileDealsRequest, getProfileDealsFail, getProfileDealsSuccess, } from '../../features/profile/profileSlice';

export const getCreatedDeals = (dispatch) => {
    try {
        dispatch(getProfileDealsRequest());
        const userID = JSON.parse(localStorage.getItem("user"))
        const userId = userID ? userID.id : null;

        const getDeals = async () => {
            const response = await axios.get(`${process.env.REACT_APP_PORT}/deals`, {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
            });
            return response.data;
        };

        const showDeal = async () => {
            const deals = await getDeals();
            const userCreatedDeals = deals.deals.filter(deal => deal.User_ID === userId);
            dispatch(getProfileDealsSuccess(userCreatedDeals));

        };
        showDeal();
    } catch (error) {
        dispatch(getProfileDealsFail(error))
    }

}