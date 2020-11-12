import React from 'react';
import './Contact.css';

import Navbar from './Navbar';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import CallIcon from '@material-ui/icons/Call';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Contact() {
    return (
        <div className="contact">
           <div className="header">
                <div className="header__left">
                    <Navbar /> 
                    <h2>Contact</h2> 
                </div>

                <div className="header__right">
                    <h2>ti-interior hub</h2>
                </div>
            </div>

            <div className="contact__card">
                <div className="contact__cardDetail">
                    <div className="contact__cardLeft">
                        <img src={require("./images/0.jpg")} alt="media"/>
                        <h2>Chandrani Dey Sarkar</h2>
                        <p>Creative Interior Designer and Developer with 12+ years of working experience(made in India products)</p>
                    </div>

                    <div className="contact__cardRight">
                        <div className="contact__cardRightIcons">
                            <WhatsAppIcon 
                                style={{ color: "rgb(70, 187, 37)" }} 
                                fontSize="large" 
                                className="contact__cardRightIcon" 
                            />
                            <p>9674028773</p>
                        </div>
                        <div className="contact__cardRightIcons">
                            <CallIcon style={{ color: "rgb(42, 115, 187)" }} fontSize="large" className="contact__cardRightIcon" />
                            <p>8910781061</p>
                        </div>
                        <div className="contact__cardRightIcons">
                            <MailOutlineIcon style={{ color: "rgb(255, 30, 30)" }} fontSize="large" className="contact__cardRightIcon" />
                            <p>tiinteriorhub@gmail.com</p>
                        </div>
                        <div className="contact__cardRightIcons">
                            <FacebookIcon 
                                className="contact__cardRightActiveIcon"
                                fontSize="large"
                                style={{marginRight:"40px", color: "rgb(66, 103, 178)"}} 
                                onClick={() => window.open("https://www.facebook.com/chandrani.deysarkar", '_blank')} 
                            />
                            <InstagramIcon 
                                className="contact__cardRightActiveIcon"
                                fontSize="large"
                                style={{marginRight:"40px", color: "rgb(221, 42, 123)"}} 
                                onClick={() => window.open("https://www.instagram.com/designchandrani/?hl=en", '__blank')} 
                            />
                            <LinkedInIcon 
                                className="contact__cardRightActiveIcon"
                                fontSize="large"
                                style={{color: "rgb(40,103,178)"}} 
                                onClick={() => window.open("https://www.linkedin.com/in/chandrani-d-06368546/", '_blank')} 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
