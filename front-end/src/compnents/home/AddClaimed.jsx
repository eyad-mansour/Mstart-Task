import { addClaimed } from "../../app/actions/profileActions/addClaimedAction";
import { useDispatch, useSelector } from 'react-redux';
import { userState, tokenState } from '../../app/features/auth/authSlice';
import { deleteDeal } from "../../app/actions/dealActions/deleteDealAction";

const AddClaimed = ({ dealID }) => {
    const user = useSelector(userState);
    const token = useSelector(tokenState);
    const dispatch = useDispatch();


    return (
        <div className="add-claimed-container">
            <button className="delete-deal" onClick={(e) => addClaimed(e, dispatch, user, dealID, token)}>Claime</button>

        </div>
    );
}

export default AddClaimed;