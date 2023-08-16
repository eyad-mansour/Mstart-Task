import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getClimedDeals } from "../../app/actions/profileActions/climedActions";
import { selectCLimedDeals } from '../../app/features/profile/profileSlice';
import ProfileClimed from './ProfileClimed'

const ProfileClimedList = () => {
    const deals = useSelector(selectCLimedDeals);
    const dispatch = useDispatch();
    useEffect(() => {
        getClimedDeals(dispatch)
    }, [dispatch])
    console.log(deals)

    return (
        <div className="profile-climed-container">
            {deals && deals.map((deal, index) =>
                <ProfileClimed key={index} deal={deal} />
            )}
        </div>
    );
}

export default ProfileClimedList;