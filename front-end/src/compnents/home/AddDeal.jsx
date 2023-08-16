import './addDeal.css'
import { addDeal } from '../../app/actions/dealActions/addDealAction';
import { useDispatch, useSelector } from 'react-redux';
import { userState, tokenState } from '../../app/features/auth/authSlice';

const AddDeal = () => {
    const user = useSelector(userState);
    const token = useSelector(tokenState);
    const dispatch = useDispatch();

    return (
        <div className="add-deal-container">
            <form onSubmit={(e) => addDeal(e, dispatch, user, token)}>
                <label htmlFor='name'>Name</label>
                <input name='name' id='name' />

                <label htmlFor='description'>Description</label>
                <textarea name='description' id='description' rows="5" />

                <label htmlFor="status">Currency</label>
                <select name='status' id="status">
                    <option value="active">active</option>
                    <option value="inactive">inactive</option>
                </select>

                <label htmlFor='amount'> Amount </label>
                <input type='number' name='amount' id='amount' />

                <label htmlFor="currency"> Currency </label>
                <select name='currency' id="currency" >
                    <option value="USD">USD</option>
                    <option value="JOD">JOD</option>
                </select>
                <button type='submit'>Add Deal</button>

            </form>
        </div>
    );
}

export default AddDeal;