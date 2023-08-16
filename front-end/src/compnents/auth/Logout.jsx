import { logout } from '../../app/actions/authActions/logoutActions'
import { useDispatch } from 'react-redux';

const styles = {
    button: {
        background: '#FA9884',
        color: '#FFF3E2',
        border: 'none',
        padding: '5px 10px',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '0.8em',
        borderRadius: '2px',
    },
};

const Logout = () => {
    const dispatch = useDispatch();
    return (
        <div className="home-container">
            <button style={styles.button} onClick={() => logout(dispatch)}>
                Logout
            </button>
        </div>

    );
}

export default Logout;
