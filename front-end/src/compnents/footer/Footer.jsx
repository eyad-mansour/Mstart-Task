import './footer.css';
import insta from '../../assets/insta.png'
import twitter from '../../assets/twitter.png'
import facebook from '../../assets/faceook.png'

const Footer = () => {
    return (
        <div>
            <section className='footer'>
                <div className="social">
                    <a href="#">
                        <img style={{ padding: '4px' }} src={insta}></img>
                    </a>
                    <a href="#">
                        <img style={{ padding: '4px' }} src={twitter}></img>
                    </a>
                    <a href="#">
                        <img style={{ padding: '4px' }} src={facebook}></img>
                    </a>
                </div>
                <p>
                    &copy;{new Date().getFullYear()} Eyad Mansour. All Rights Reserved
                </p>
            </section >
        </div >
    );
}

export default Footer;