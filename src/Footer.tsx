import React from 'react';
import './Footer.css';
import {Link} from "react-router-dom";
import face from "./assets/facebooklogo.png";
import insta from "./assets/instagramlogo.png";
// import whats from "./assets/whatsapplogo.png";
import phn from "./assets/phoneicon.png";
import mail from "./assets/emailicon.png";
import feed from "./assets/feedbacklogo.webp";
const Footer: React.FC = () => {
    return (
        <footer className="footer-main">
            <div className="footer-container-main">
                <div className="footer-section-main social-main">
                    <h3>Follow Us At!</h3>
                    <div className="social-icons-main">
                        <a href="https://www.facebook.com/" target="_blank"><img src={face} alt="Facebook" /></a>
                        <a href="https://www.instagram.com/" target="_blank"><img src={insta} alt="Instagram" /></a>
                        {/* <a href="https://web.whatsapp.com/" target="_blank"><img src={whats} alt="WhatsApp" /></a> */}
                    </div>
                </div>
                <div className="footer-section-main contact-main">
                    <h3>Contact Us</h3>
                    <p><img src={phn} alt="Phone" />  Contact.No: 9810288245</p>
                    <p><img src={mail} alt="Email" /> Rental5@gmail.com</p>
                  <Link to="fee"><p><img src={feed} alt="Feedback" /> Customer Feedback</p></Link>
                </div>
                <div className="footer-section-main company-main">
                    <h3>Policies</h3>
                    <Link to="fa"><p>FAQs</p></Link>
                    <Link to="contract"><p>T&COs</p></Link>
                    <Link to ="pri"><p>Privacy Policy</p></Link>
                    <Link to="LateReturnPolicy "><p>Late Return Policy</p></Link>
                    {/* <Link to="CancellationPolicy "><p>Cancellation Policy</p></Link> */}

                </div>
            </div>
        </footer>
    );
};

export default Footer;
