import axios from "axios";
import { addDealFailed, addDealSuccess, requestAddDeal } from '../../features/deals/dealsSlice';

export const addDeal = async (e, dispatch, user, token) => {

    try {
        e.preventDefault();
        const data = new FormData(e.currentTarget);

        const deal = {
            Name: data.get("name"),
            Description: data.get("description"),
            Status: data.get("status"),
            Amount: data.get("amount"),
            Currency: data.get("currency"),
            Server_DateTime: new Date().toISOString(),
            DateTime_UTC: new Date().toISOString(),
            Update_DateTime_UTC: new Date().toISOString(),
            User_ID: user.id
        }
        if (deal.Name === "" && deal.Description === "" && deal.Amount === "") {
            return dispatch(addDealFailed("Please fill in all fields"));
        } else {
            await axios.post(`${process.env.REACT_APP_PORT}/deal/`, deal, {
                headers: { Authorization: `Bearer ${token}` },
            }).then((res) => {
                dispatch(addDealSuccess(res))
                window.location.href = '/home'
            }).catch((error) => {
                dispatch(addDealFailed(error))
            })
        }
    } catch (error) {
        dispatch(addDealFailed(error.response.data))
    }

}