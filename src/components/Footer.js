// src/components/Footer.js
import React from 'react';
import './Footer.css';
import 'font-awesome/css/font-awesome.min.css';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="quick-links">
    <div className="links-grid">
        <div className="links-column">
        <h2 id='p1' class='ok'>   Quick Links</h2>

            <ul>
                <li><a href="0">Bags</a></li>
                <li><a href="0">Shoes</a></li>
                <li><a href="0">Lookbook</a></li>
              
            </ul>
        </div>
        <div className="links-column">
        <h2 id='p1'>   Info</h2>

            <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact us</a></li>
                <li><a href="#">Shipping policy</a></li>
                <li><a href="#">Blog</a></li>
            </ul>
        </div>
        <div className="links-column">
        <h2 id='p1' >   Our mission</h2>

            <ul id='p1'>
                <li id='l1'><a href="#"></a>
                </li>
                <li id='l1'>Quality materials,good designs,craftsmanship and sustainability.
                </li>
                
            </ul>
        </div>
    </div>
</div>
<div className="footer-section">
    <div className="subscribe-section">
        <h2 id='p1'>Subscribe to Our Emails</h2>
        <input type="email" placeholder="Email" />
        <span className="arrow">&#x2794;</span> 
        </div>

    <div className="social-media">
        
    <div className="social-media-icons">
                        <a href="#"><i className="fa fa-facebook"></i></a>
                        <a href="#"><i className="fa fa-instagram"></i></a>
                        <a href="#"><i className="fa fa-youtube"></i></a>
                        <a href="#"><i className="fa fa-tiktok"></i></a>
                        <a href="#"><i className="fa fa-twitter"></i></a>
                    </div>
    </div>
</div>
<div className="footer-info">
                <div className="country-selection">
                    <label htmlFor="country" id='p1'>Country/region</label><br></br>
                   
                    <select id="country">
                        <option value="Canada">Canada | CAD $</option>
                        <option value="USA">USA</option>
                        <option value="UK">UK</option>
                        <option value="Australia">Australia</option>
                        {/* Add more countries as needed */}
                    </select>
                    
                </div>
                
                <div className="payment-options">
                <img src={require('../assets/visa.png')} alt="Visa" />
<img src={require('../assets/mastercard.png')} alt="MasterCard" />
<img src={require('../assets/america1.png')} alt="American Express" />
<img src={require('../assets/paypal.png')} alt="PayPal" />
<img src={require('../assets/discover.png')} alt="Discover" />

                </div>
            </div>
            <p id='p3'>© 2024, theme-dawn-demo Powered by Shopify</p>

        </footer>
    );
};

export default Footer;
