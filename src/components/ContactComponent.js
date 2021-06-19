import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function Contact(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>                    
                </div>
            </div>

            <div className="row row-content">
                <div className="col-12">
                    <h2>Send us your Feedback</h2>
                    <hr />
                </div>
                <div className="col-md-10 mx-auto">
                    <form id="feedbackForm">
                        <div className="form-group row">
                            <label for="firstName" className="col-md-2 col-form-label">First Name</label>
                            <div className="col-md-10">
                                <input type="text" className="form-control" id="firstName" name="firstName" placeholder="First Name" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="lastName" className="col-md-2 col-form-label">Last Name</label>
                            <div className="col-md-10">
                                <input type="text" className="form-control" id="lastName" name="lastName" placeholder="Last Name" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="areaCode" className="col-md-2 col-form-label">Contact Tel.</label>
                            <div className="col-5 col-md-3">
                                <input type="tel" className="form-control" id="areaCode" name="areaCode" placeholder="Area code" />
                            </div>
                            <div className="col-7">
                                <input type="tel" className="form-control" name="telNum" placeholder="Tel. number" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="email" className="col-md-2 col-form-label">Email</label>
                            <div className="col-md-10">
                                <input type="email" className="form-control" id="email" name="email" placeholder="Email" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col offset-md-2">
                                May we contact you?
                                <div className="form-check form-check-inline">
                                    <input type="radio" className="form-check-input" id="contactYes" name="contactRadios" value="yes" />
                                    <label for="contactYes" className="form-check-label">Yes</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input type="radio" className="form-check-input" id="contactNo" name="contactRadios" value="no" />
                                    <label for="contactNo" className="form-check-label">No</label>
                                </div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="feedback" className="col-md-2 col-form-label">Your Feedback</label>
                            <div className="col-md-10">
                                <textarea className="form-control" id="feedback" name="feedback" rows="8"></textarea>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="offset-md-2 col-md-10">
                                <button type="submit" className="btn btn-primary">Send Feedback</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;