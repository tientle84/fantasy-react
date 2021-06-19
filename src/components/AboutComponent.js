import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function About(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>About Us</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>About Us</h2>
                    <hr />
                </div>
            </div>

            <div className="row row-content"> 
                <div className="col-sm-6">
                    <div className="card bg-light mb-3">
                        <h3 className="card-header">Fantasy Nails Spa</h3>
                        <div className="card-body">
                            <dl className="row">
                                <dt className="col-6">Address</dt>
                                <dd className="col-6">9999 Banana Road, Apple, ZZ 12345</dd>
                                <dt className="col-6">Phone</dt>
                                <dd className="col-6">(987) 654-3210</dd>
                                <dt className="col-6">Email</dt>
                                <dd className="col-6">info@fantasynail.com</dd>
                                <dt className="col-6">Hours</dt>
                                <dd className="col-6">Mon - Fri: 10:00 am - 8:30 pm<br />Saturday: 10:00 am - 7:00 pm<br />Sunday: 12:00 pm - 5:00 pm</dd>
                            </dl>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                        <h3 className="card-header">Our Mission</h3>        
                        <div className="card-body">                               
                            <p>If you are looking for a place where helps you to rejuvenate your beauty, come and try our salon. The Fantasy Nails Spa Salon located conveniently in Apple - ZZ state.</p>
                            <p>When walking through our door, you will always have a chance to be served with the best quality and at decent prices. Hundreds of beautiful and stylish nail models along with numerous gel colors and many other beauty services are available for you to choose freely!</p>
                            <p>Besides, Fantasy Nails Spa Salon uses the most famous and trust product from top manufacture to ensure high quality in every work we do. Therefore, let yourself to sit back, relax, and savor the experience!</p>
                        </div> 
                    </div>                
                </div> 
            </div> 
        </div>
    );
}

export default About;