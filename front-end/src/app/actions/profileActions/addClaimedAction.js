import axios from "axios";
import { addDealFailed, addDealSuccess, requestAddDeal } from '../../features/deals/dealsSlice';
import { deleteDeal } from '../dealActions/deleteDealAction';

export const addClaimed = async (e, dispatch, user, dealID, token) => {

    try {
        e.preventDefault();
        const deal = {
            User_ID: user.id,
            Deal_ID: dealID.id,
            Server_DateTime: new Date().toISOString(),
            DateTime_UTC: new Date().toISOString(),
            Amount: dealID.Amount,
            Currency: dealID.Currency,
        }
        if (deal.Status === "inactive") {
            return dispatch(addDealFailed("try another deal this deal is inactive!!"));
        } else {
            await axios.post(`${process.env.REACT_APP_PORT}/claimed/`, deal, {
                headers: { Authorization: `Bearer ${token}` },
            }).then((res) => {
                dispatch(addDealSuccess(res))
                alert('your deal has been added to your account')

            }).catch((error) => {
                dispatch(addDealFailed(error))
            })
        }
    } catch (error) {
        dispatch(addDealFailed(error.response.data))
    }

}