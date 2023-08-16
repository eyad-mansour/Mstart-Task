import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDeals } from "../../app/actions/dealActions/getDealAction";
import { dealsState } from '../../app/features/deals/dealsSlice';
import Deal from './Deal';

const DealList = () => {
    const deals = useSelector(dealsState);
    const dispatch = useDispatch();
    useEffect(() => {
        getDeals(dispatch)
    }, [dispatch])

    return (
        <div className="deal-list">
            {deals.deals && deals.deals.map((deal, index) => <Deal key={index} deal={deal} />)}
        </div>
    );
}

export default DealList;