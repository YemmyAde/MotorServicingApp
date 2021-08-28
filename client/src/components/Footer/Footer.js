import React from "react";
import FooterLink  from "./FooterLink";
import './css/footer.css'
import { FaLongArrowAltRight } from 'react-icons/fa'

const Footer = () => {
return (
    <footer>
        <div className="box">
    
            <div className="container">
                
                <div className="row">
                    <div className="column">
                        <div className="footer-heading">About </div>
                        <FooterLink to="/about-us">About Us</FooterLink>
                        <FooterLink to="/our-team">Our Team</FooterLink>
                        <FooterLink to="/services">Services</FooterLink>
                    </div>
                    <div className="column">
                        <div className="footer-heading">Services</div>
                        <FooterLink to ="/services">Anti Lock Brake Service</FooterLink>
                        <FooterLink to ="/services">Perfomance Upgrades</FooterLink>
                        <FooterLink to ="/services">Engine Diagnostics</FooterLink>
                        <FooterLink to ="/services">Full Maintenance</FooterLink>
                    </div>
                    
                    <div className="column">
                        <div className="footer-heading">Contact us</div>
                        <FooterLink href="#">
                        <i className="fab fa-facebook-f">
                            <span style={{ marginLeft: "10px" }}>
                            Facebook
                            </span>
                        </i>
                        </FooterLink>
                        <FooterLink href="#">
                        <i className="fab fa-instagram">
                            <span style={{ marginLeft: "10px" }}>
                            Instagram
                            </span>
                        </i>
                        </FooterLink>
                        <FooterLink href="#">
                        <i className="fab fa-twitter">
                            <span style={{ marginLeft: "10px" }}>
                            Twitter
                            </span>
                        </i>
                        </FooterLink>
                        <FooterLink href="#">
                        <i className="fab fa-youtube">
                            <span style={{ marginLeft: "10px" }}>
                            Youtube
                            </span>
                        </i>
                        </FooterLink>
                    </div>

                    <div className="column ">
                        <div className="footer-heading">Service Hours</div>
                        <h2>Monday - Friday   <FaLongArrowAltRight style={{ marginLeft: "10px",marginRight: "10px" }}/> 7.00 - 16.30</h2>
                        <h2>Saturday - Sunday <FaLongArrowAltRight style={{ marginLeft: "10px",marginRight: "10px" }}/> 9.00 - 16.30</h2>
                    </div>
                </div>
                <br/>
                <hr className="line"/>
                <div className="bottom-stuff">
                    <FooterLink to='/' className='footer-logo'>
                        Motorify
                        <i class='fas fa-car' />
                    </FooterLink>
                    <p class="tiny">© 2021 Motorify. All rights reserved.</p>
                </div>
            </div>
        </div>
    </footer>
);
};
export default Footer;
