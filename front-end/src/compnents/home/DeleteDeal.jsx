import { useDispatch, useSelector } from "react-redux";
import { deleteDeal } from "../../app/actions/dealActions/deleteDealAction";
import { tokenState } from "../../app/features/auth/authSlice";

const DeleteDeal = (dealID) => {
    const dealId = dealID.deal.id
    const token = useSelector(tokenState);
    const dispatch = useDispatch();

    return (
        <button onClick={(e) => deleteDeal(e, dispatch, dealId, token)} className="delete-deal">
            Delete
        </button>
    );
}

export default DeleteDeal;