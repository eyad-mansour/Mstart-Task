import { useDispatch, useSelector } from "react-redux";
import { deleteDeal } from "../../app/actions/dealActions/deleteDealAction";
import { tokenState } from "../../app/features/auth/authSlice";

const ProfileCreated = ({ deal, index }) => {
    const dealId = deal.id
    const token = useSelector(tokenState);
    const dispatch = useDispatch();

    return (
        <div className="">
            <div className="deal-card">
                {/* <h2 className="deal-title">Deal {index + 1}</h2> */}
                <h2 className="deal-title">{deal.Name}</h2>
                <div className="deal-details">
                    <p className="deal-description">{deal.Currency}</p>
                    <p className="deal-status">Status: {deal.Server_DateTime}</p>
                    <p className="deal-amount">Amount: {deal.Amount}</p>
                    <button className="delete-button" onClick={(e) => deleteDeal(e, dispatch, dealId, token)}>Delete</button>
                </div>
            </div>
        </div>
    );
}

export default ProfileCreated;