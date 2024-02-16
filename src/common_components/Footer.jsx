import React from 'react';
import { useNavigate } from 'react-router';
import footerLogo1 from '../assets/img/footer-logo1.png';
import footerLogo2 from '../assets/img/footer-logo2.png'; 

const Footer = () => {
    return (
        <>
         <footer>
            <div className="copyright">
                <div className="footer-logo">
                <img src={footerLogo1} alt="" onClick={() => useNavigate('/')}/>
                <img src={footerLogo2} alt="" onClick={() => useNavigate('/')}/>
                </div>
                <p>2021 TripAdvisor LLC All rights reserved</p>
            </div>
            <div className="privacy">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of USe</a>
                <a href="#">Sitemap</a>
            </div>
            <div className="version">
                <p>
                This is the version of our website addressed to speakers of English in India. If you are a resident of another country <br />
or region, please select the appropriate versio of Tripadvisor for your country or region in the drop-down menu. more
                </p>
            </div>
         </footer>
        </>
    )
}

export default Footer;