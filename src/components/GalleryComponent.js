import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function Gallery(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Our Work</BreadcrumbItem>
                    </Breadcrumb>                    
                </div>
            </div>

            <div className="row row-content">
                <div className="col">                
                    <h2>Our Work</h2>
                    <hr />
                </div>
            </div>
            <div className="row row-gallery">
                <div className="col-sm-6 col-md-4 col-lg-3 mb-4"><a href="/assets/images/1.jpg" data-lightbox="photos"><img className="zoom img-fluid" src="/assets/images/1.jpg" /></a></div>
                <div className="col-sm-6 col-md-4 col-lg-3 mb-4"><a href="/assets/images/2.jpg" data-lightbox="photos"><img className="zoom img-fluid" src="/assets/images/2.jpg" /></a></div>
                <div className="col-sm-6 col-md-4 col-lg-3 mb-4"><a href="/assets/images/3.jpg" data-lightbox="photos"><img className="zoom img-fluid" src="/assets/images/3.jpg" /></a></div>
                <div className="col-sm-6 col-md-4 col-lg-3 mb-4"><a href="/assets/images/4.jpg" data-lightbox="photos"><img className="zoom img-fluid" src="/assets/images/4.jpg" /></a></div>
                <div className="col-sm-6 col-md-4 col-lg-3 mb-4"><a href="/assets/images/5.jpg" data-lightbox="photos"><img className="zoom img-fluid" src="/assets/images/5.jpg" /></a></div>
                <div className="col-sm-6 col-md-4 col-lg-3 mb-4"><a href="/assets/images/6.jpg" data-lightbox="photos"><img className="zoom img-fluid" src="/assets/images/6.jpg" /></a></div>
                <div className="col-sm-6 col-md-4 col-lg-3 mb-4"><a href="/assets/images/7.jpg" data-lightbox="photos"><img className="zoom img-fluid" src="/assets/images/7.jpg" /></a></div>
                <div className="col-sm-6 col-md-4 col-lg-3 mb-4"><a href="/assets/images/8.jpg" data-lightbox="photos"><img className="zoom img-fluid" src="/assets/images/8.jpg" /></a></div>
                <div className="col-sm-6 col-md-4 col-lg-3 mb-4"><a href="/assets/images/9.jpg" data-lightbox="photos"><img className="zoom img-fluid" src="/assets/images/9.jpg" /></a></div>
                <div className="col-sm-6 col-md-4 col-lg-3 mb-4"><a href="/assets/images/10.jpg" data-lightbox="photos"><img className="zoom img-fluid" src="/assets/images/10.jpg" /></a></div>
                <div className="col-sm-6 col-md-4 col-lg-3 mb-4"><a href="/assets/images/11.jpg" data-lightbox="photos"><img className="zoom img-fluid" src="/assets/images/11.jpg" /></a></div>
                <div className="col-sm-6 col-md-4 col-lg-3 mb-4"><a href="/assets/images/12.jpg" data-lightbox="photos"><img className="zoom img-fluid" src="/assets/images/12.jpg" /></a></div>
                <div className="col-sm-6 col-md-4 col-lg-3 mb-4"><a href="/assets/images/13.jpg" data-lightbox="photos"><img className="zoom img-fluid" src="/assets/images/13.jpg" /></a></div>
                <div className="col-sm-6 col-md-4 col-lg-3 mb-4"><a href="/assets/images/14.jpg" data-lightbox="photos"><img className="zoom img-fluid" src="/assets/images/14.jpg" /></a></div>
                <div className="col-sm-6 col-md-4 col-lg-3 mb-4"><a href="/assets/images/15.jpg" data-lightbox="photos"><img className="zoom img-fluid" src="/assets/images/15.jpg" /></a></div>
                <div className="col-sm-6 col-md-4 col-lg-3 mb-4"><a href="/assets/images/16.jpg" data-lightbox="photos"><img className="zoom img-fluid" src="/assets/images/16.jpg" /></a></div>
                <div className="col-sm-6 col-md-4 col-lg-3 mb-4"><a href="/assets/images/17.jpg" data-lightbox="photos"><img className="zoom img-fluid" src="/assets/images/17.jpg" /></a></div>
                <div className="col-sm-6 col-md-4 col-lg-3 mb-4"><a href="/assets/images/18.jpg" data-lightbox="photos"><img className="zoom img-fluid" src="/assets/images/18.jpg" /></a></div>
                <div className="col-sm-6 col-md-4 col-lg-3 mb-4"><a href="/assets/images/19.jpg" data-lightbox="photos"><img className="zoom img-fluid" src="/assets/images/19.jpg" /></a></div>
                <div className="col-sm-6 col-md-4 col-lg-3 mb-4"><a href="/assets/images/20.jpg" data-lightbox="photos"><img className="zoom img-fluid" src="/assets/images/20.jpg" /></a></div>
                <div className="col-sm-6 col-md-4 col-lg-3 mb-4"><a href="/assets/images/21.jpg" data-lightbox="photos"><img className="zoom img-fluid" src="/assets/images/21.jpg" /></a></div>
                <div className="col-sm-6 col-md-4 col-lg-3 mb-4"><a href="/assets/images/22.jpg" data-lightbox="photos"><img className="zoom img-fluid" src="/assets/images/22.jpg" /></a></div>
                <div className="col-sm-6 col-md-4 col-lg-3 mb-4"><a href="/assets/images/23.jpg" data-lightbox="photos"><img className="zoom img-fluid" src="/assets/images/23.jpg" /></a></div>
                <div className="col-sm-6 col-md-4 col-lg-3 mb-4"><a href="/assets/images/24.jpg" data-lightbox="photos"><img className="zoom img-fluid" src="/assets/images/24.jpg" /></a></div>
                <div className="col-sm-6 col-md-4 col-lg-3 mb-4"><a href="/assets/images/25.jpg" data-lightbox="photos"><img className="zoom img-fluid" src="/assets/images/25.jpg" /></a></div>
                <div className="col-sm-6 col-md-4 col-lg-3 mb-4"><a href="/assets/images/26.jpg" data-lightbox="photos"><img className="zoom img-fluid" src="/assets/images/26.jpg" /></a></div>
                <div className="col-sm-6 col-md-4 col-lg-3 mb-4"><a href="/assets/images/27.jpg" data-lightbox="photos"><img className="zoom img-fluid" src="/assets/images/27.jpg" /></a></div>
                <div className="col-sm-6 col-md-4 col-lg-3 mb-4"><a href="/assets/images/28.jpg" data-lightbox="photos"><img className="zoom img-fluid" src="/assets/images/28.jpg" /></a></div>                                                
            </div>
        </div>
    );
}

export default Gallery;