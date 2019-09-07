import React from 'react';
import ContactForm from '../pages/Contact.js';
const Footer = () => {
    return (
        <footer className="bg-color4 text-white py-4 mt-4 ">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="row">
                            Social media icons
                        </div>
                        <div className="row">
                            O mnie
                        </div>
                        <div className="row">
                            Disclaimer
                        </div>
                        <div className="row">
                            <p>
                                &copy; Paweł Hińcza 2019
                        </p>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <ContactForm />
                    </div>
                </div>


            </div>

        </footer>
    );
}

export default Footer;