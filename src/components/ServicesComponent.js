import React from 'react';
import { Card, CardImg, CardText, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderServiceItem({service}) {
    return(
        <Card>
            <Link to={`/services/${service.id}`}>
                <CardImg top src={service.image} alt={service.name} />
                <CardBody>                    
                    <CardText><strong>{service.name}</strong></CardText>
                </CardBody>
            </Link>
        </Card>
    );
}

function Services(props) {
    const services = props.services.map(service => {
        return (
            <div key={service.id} className="col-md-4 mx-auto m-1">
                <RenderServiceItem service={service} />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col mt-3">
                    <h2>Our Services</h2>
                    <hr />
                </div>
            </div>
            <div className="row">
                {services}
            </div>
        </div>
    ); 
}

export default Services;