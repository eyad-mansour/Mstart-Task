import AddClaimed from './AddClaimed';
import DealMenu from './DealMenu';
import './deal.css'
const Deal = ({ deal, index }) => {
    return (
        <div className="deal-container">
            <div className="deal-card">
                {/* <h2 className="deal-title">Deal {index + 1}</h2> */}
                <h2 className="deal-title">{deal.Name}</h2>
                <div className="deal-details">
                    <p className="deal-description">{deal.Description}</p>
                    <p className="deal-status">Status: {deal.Status}</p>
                    <p className="deal-amount">Amount: {deal.Amount}</p>
                    <DealMenu deal={deal} />
                    <AddClaimed dealID={deal} />
                </div>
            </div>
        </div>
    );
}

export default Deal;