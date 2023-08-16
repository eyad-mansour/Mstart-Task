import ProfileClimedList from './ProfileClimedList';
import ProfileCreatedList from './ProfileCreatedList';
import './profile.css'
const ProfileContainer = () => {
    return (
        <div className="profile-container">
            <div className="profile-claimed">
                <h2>Claimed Deals</h2>
                <ProfileClimedList />
            </div>
            <div className="profile-created">
                <h2>Created Deals</h2>
                <ProfileCreatedList />
            </div>
        </div>
    );
}

export default ProfileContainer;