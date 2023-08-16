import axios from "axios";
import { getDealsFailed, getDealsSuccess, requestGetDeals } from '../../features/deals/dealsSlice'
export const getDeals = (dispatch) => {
    try {
        dispatch(requestGetDeals());
        const getDeals = async () => {
            const response = await axios.get(`${process.env.REACT_APP_PORT}/deals`, {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
            });
            return response.data;
        };

        const showDeal = async () => {
            const deals = await getDeals();
            dispatch(getDealsSuccess(deals));
        };
        showDeal();

    } catch (error) {
        dispatch(getDealsFailed(error))

    }

}