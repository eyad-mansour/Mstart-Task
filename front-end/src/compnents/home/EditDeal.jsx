import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateDeals } from "../../app/actions/dealActions/updateDealAction";
import { tokenState } from "../../app/features/auth/authSlice";

const EditDeal = ({ deal }) => {
    const [name, setName] = useState(deal.Name);
    const [description, setDescription] = useState(deal.Description);
    const [status, setStatus] = useState(deal.Status);
    const [amount, setAmount] = useState(deal.Amount);
    const [currency, setCurrency] = useState(deal.Currency);
    const token = useSelector(tokenState);
    const dispatch = useDispatch();

    return (
        <div className="Edit-deal-container">
            <div className="edit-deal-container">
                <h3>Edit Deal</h3>

                <form id="name">
                    <label>Name</label>
                    <input
                        type="text"
                        placeholder="Name"
                        defaultValue={deal.Name}
                        name="nama"
                        onChange={(e) => setName(e.target.value)}
                    />
                </form>
                <form id="description" isRequired>
                    <label>Description</label>
                    <textarea
                        type="text"
                        placeholder="Description"
                        defaultValue={deal.Description}
                        resize="none"
                        rows={5}
                        name="description"
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </form>
                <form id="status" isRequired>
                    <label>Status</label>
                    <select
                        defaultValue={deal.Status}
                        name="status"
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                    </select>
                </form>
                <form id="amount" isRequired>
                    <label>Amount</label>
                    <input
                        type="number"
                        placeholder="Amount"
                        defaultValue={deal.Amount}
                        resize="none"
                        name="amount"
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </form>
                <form id="currency" isRequired>
                    <label>currency</label>
                    <select
                        defaultValue={deal.Currency}
                        name="currency"
                        onChange={(e) => setCurrency(e.target.value)}
                    >
                        <option value="USD">USD</option>
                        <option value="JOD">JOD</option>
                    </select>
                </form>
                <button
                    onClick={() => {
                        updateDeals(deal, name, description, status, currency, amount, token, dispatch);
                    }
                    }
                >
                    Edit
                </button>
                {console.log(deal)}
            </div>
        </div >
    );
}

export default EditDeal;