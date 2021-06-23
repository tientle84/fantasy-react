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
                <div className="col-sm-6 col-md-4 col-lg-3 mb-4"><a href="/assets/images/1.jpg" data-lightbox="photos"><img className="zoom img-fluid" src="/assets/images/1.jpg" alt="" /></a></div>
                <div className="col-sm-6 col-md-4 col-lg-3 mb-4"><a href="/assets/images/2.jpg" data-lightbox="photos"><img className="zoom img-fluid" src="/assets/images/2.jpg" alt="" /></a></div>
                <div className="col-sm-6 col-md-4 col-lg-3 mb-4"><a href="/assets/images/3.jpg" data-lightbox="photos"><img className="zoom img-fluid" src="/assets/images/3.jpg" alt="" /></a></div>
                <div className="col-sm-6 col-md-4 col-lg-3 mb-4"><a href="/assets/images/4.jpg" data-lightbox="photos"><img className="zoom img-fluid" src="/assets/images/4.jpg" alt="" /></a></div>
                <div className="col-sm-6 col-md-4 col-lg-3 mb-4"><a href="/assets/images/5.jpg" data-lightbox="photos"><img className="zoom img-fluid" src="/assets/images/5.jpg" alt="" /></a></div>
                <div className="col-sm-6 col-md-4 col-lg-3 mb-4"><a href="/assets/images/6.jpg" data-lightbox="photos"><img className="zoom img-fluid" src="/assets/images/6.jpg" alt="" /></a></div>
                <div className="col-sm-6 col-md-4 col-lg-3 mb-4"><a href="/assets/images/7.jpg" data-lightbox="photos"><img className="zoom img-fluid" src="/assets/images/7.jpg" alt="" /></a></div>
                <div className="col-sm-6 col-md-4 col-lg-3 mb-4"><a href="/assets/images/8.jpg" data-lightbox="photos"><img className="zoom img-fluid" src="/assets/images/8.jpg" alt="" /></a></div>
                <div className="col-sm-6 col-md-4 col-lg-3 mb-4"><a href="/assets/images/9.jpg" data-lightbox="photos"><img className="zoom img-fluid" src="/assets/images/9.jpg" alt="" /></a></div>
                <div className="col-sm-6 col-md-4 col-lg-3 mb-4"><a href="/assets/images/10.jpg" data-lightbox="photos"><img className="zoom img-fluid" src="/assets/images/10.jpg" alt="" /></a></div>
                <div className="col-sm-6 col-md-4 col-lg-3 mb-4"><a href="/assets/images/11.jpg" data-lightbox="photos"><img className="zoom img-fluid" src="/assets/images/11.jpg" alt="" /></a></div>
                <div className="col-sm-6 col-md-4 col-lg-3 mb-4"><a href="/assets/images/12.jpg" data-lightbox="photos"><img className="zoom img-fluid" src="/assets/images/12.jpg" alt="" /></a></div>
                <div className="col-sm-6 col-md-4 col-lg-3 mb-4"><a href="/assets/images/13.jpg" data-lightbox="photos"><img className="zoom img-fluid" src="/assets/images/13.jpg" alt="" /></a></div>
                <div className="col-sm-6 col-md-4 col-lg-3 mb-4"><a href="/assets/images/14.jpg" data-lightbox="photos"><img className="zoom img-fluid" src="/assets/images/14.jpg" alt="" /></a></div>
                <div className="col-sm-6 col-md-4 col-lg-3 mb-4"><a href="/assets/images/15.jpg" data-lightbox="photos"><img className="zoom img-fluid" src="/assets/images/15.jpg" alt="" /></a></div>
                <div className="col-sm-6 col-md-4 col-lg-3 mb-4"><a href="/assets/images/16.jpg" data-lightbox="photos"><img className="zoom img-fluid" src="/assets/images/16.jpg" alt="" /></a></div>
                <div className="col-sm-6 col-md-4 col-lg-3 mb-4"><a href="/assets/images/17.jpg" data-lightbox="photos"><img className="zoom img-fluid" src="/assets/images/17.jpg" alt="" /></a></div>
                <div className="col-sm-6 col-md-4 col-lg-3 mb-4"><a href="/assets/images/18.jpg" data-lightbox="photos"><img className="zoom img-fluid" src="/assets/images/18.jpg" alt="" /></a></div>
                <div className="col-sm-6 col-md-4 col-lg-3 mb-4"><a href="/assets/images/19.jpg" data-lightbox="photos"><img className="zoom img-fluid" src="/assets/images/19.jpg" alt="" /></a></div>
                <div className="col-sm-6 col-md-4 col-lg-3 mb-4"><a href="/assets/images/20.jpg" data-lightbox="photos"><img className="zoom img-fluid" src="/assets/images/20.jpg" alt="" /></a></div>
                <div className="col-sm-6 col-md-4 col-lg-3 mb-4"><a href="/assets/images/21.jpg" data-lightbox="photos"><img className="zoom img-fluid" src="/assets/images/21.jpg" alt="" /></a></div>
                <div className="col-sm-6 col-md-4 col-lg-3 mb-4"><a href="/assets/images/22.jpg" data-lightbox="photos"><img className="zoom img-fluid" src="/assets/images/22.jpg" alt="" /></a></div>
                <div className="col-sm-6 col-md-4 col-lg-3 mb-4"><a href="/assets/images/23.jpg" data-lightbox="photos"><img className="zoom img-fluid" src="/assets/images/23.jpg" alt="" /></a></div>
                <div className="col-sm-6 col-md-4 col-lg-3 mb-4"><a href="/assets/images/24.jpg" data-lightbox="photos"><img className="zoom img-fluid" src="/assets/images/24.jpg" alt="" /></a></div>
                <div className="col-sm-6 col-md-4 col-lg-3 mb-4"><a href="/assets/images/25.jpg" data-lightbox="photos"><img className="zoom img-fluid" src="/assets/images/25.jpg" alt="" /></a></div>
                <div className="col-sm-6 col-md-4 col-lg-3 mb-4"><a href="/assets/images/26.jpg" data-lightbox="photos"><img className="zoom img-fluid" src="/assets/images/26.jpg" alt="" /></a></div>
                <div className="col-sm-6 col-md-4 col-lg-3 mb-4"><a href="/assets/images/27.jpg" data-lightbox="photos"><img className="zoom img-fluid" src="/assets/images/27.jpg" alt="" /></a></div>
                <div className="col-sm-6 col-md-4 col-lg-3 mb-4"><a href="/assets/images/28.jpg" data-lightbox="photos"><img className="zoom img-fluid" src="/assets/images/28.jpg" alt="" /></a></div>                                                
            </div>
        </div>
    );
}

export default Gallery;