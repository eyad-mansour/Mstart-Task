import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCreatedDeals } from "../../app/actions/profileActions/createdDealsActions";
import { selectProfileDeals } from '../../app/features/profile/profileSlice';
import ProfileCreated from "./ProfileCreated";

const ProfileCreatedList = () => {


    const deals = useSelector(selectProfileDeals);
    const dispatch = useDispatch();

    useEffect(() => {
        getCreatedDeals(dispatch)
    }, [dispatch])

    return (
        <div className="profile-created">
            {deals && deals.map((deal, index) => <ProfileCreated key={index} deal={deal} />)}
        </div>
    );
}

export default ProfileCreatedList;