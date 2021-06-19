import React from 'react';

function Carousel(props) {
    return (
        <div className="row row-content">
            <div className="col-md-12 mx-auto">
                <div id="homeCarousel" className="carousel slide carousel-fade" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#homeCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#homeCarousel" data-slide-to="1"></li>
                        <li data-target="#homeCarousel" data-slide-to="2"></li>
                    </ol>

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="/assets/images/slider-3.jpg" alt="FANTASY NAILS SPA" />
                            <div className="carousel-caption">
                                <h3>Fantasy Nails Spa, Here To Serve You</h3>
                                <p className="d-none d-sm-block">Your #1 Nail Salon</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="/assets/images/slider-1.jpg" alt="PROFESSIONAL SERVICES" />
                            <div className="carousel-caption">
                                <h3>Professional Services For All</h3>
                                <p className="d-none d-sm-block">Nail care, Waxing, Eyelash, Massage, and Facial services</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="/assets/images/slider-2.jpg" alt="PROFESSIONAL AND FRIENDLY STAFF" />
                            <div className="carousel-caption">
                                <h3>Professional And Friendly Staff</h3>
                                <p className="d-none d-sm-block">Dedication To Customer Satisfaction</p>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#homeCarousel" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#homeCarousel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Carousel;