import React from 'react';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">                
                    <div className="col-6">
                        <h5>Business Hours</h5>
                        <dl className="row">
                            <dt className="col-6">Mon - Fri</dt>
                            <dd className="col-6">10:00 am - 8:30 pm</dd>
                            <dt className="col-6">Saturday</dt>
                            <dd className="col-6">10:00 am - 7:00 pm</dd>
                            <dt className="col-6">Sunday</dt>
                            <dd className="col-6">12:00 pm - 5:00 pm</dd>
                        </dl>
                        <h5>Social</h5>
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="http://facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube" /></a>
                    </div>

                    <div className="col-6">
                        <h5>Fantasy Nails Spa</h5>
                        <i className="fa fa-map-marker"></i> 9999 Banana Road, Apple, ZZ 12345<br />
                        <a role="button" className="btn btn-link" href="tel:9876543210"><i className="fa fa-phone"></i> (987) 654-3210</a><br />
                        <a role="button" className="btn btn-link" href="mailto:info@fantasynail.com"><i className="fa fa-envelope-o"></i> info@fantasynail.com</a>
                    </div>
                </div>
            </div>  
        </footer>
    );
}

export default Footer;