import axios from "axios";
import { requestUpdateDeal, updateDealFailed, updateDealSuccess } from "../../features/deals/dealsSlice";

export const updateDeals = async (deal, name, description, status, currency, amount, token, dispatch) => {
    try {
        const updatedDeal = {
            Name: name,
            Description: description,
            Status: status,
            Currency: currency,
            Amount: amount,
            Update_DateTime_UTC: new Date().toISOString(),
            DateTime_UTC: new Date().toISOString(),
            Server_DateTime: new Date().toISOString(),
        };
        dispatch(requestUpdateDeal());
        if (updatedDeal.Name === "" || updatedDeal.Description === "") {
            return alert('Please fill out all fields.');
        } else {
            await axios
                .put(`${process.env.REACT_APP_PORT}/deal/${deal.id}`, updatedDeal, {
                    headers: { Authorization: `Bearer ${token}` },
                })
                .then((res) => {

                    dispatch(updateDealSuccess(res.data));
                    alert('your deal has been update');
                })
                .catch((err) => {
                    dispatch(updateDealFailed(err.response.data));
                });
        }
    } catch (error) {

        dispatch(updateDealFailed(error.response.data));
    }
};