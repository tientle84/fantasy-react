import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderSubServiceItem({subService}) {
    return(
        <div>
            <h4>{subService.subName} (${subService.price})</h4>
            <p>{subService.detail}</p>
        </div>        
    );
}

function ServiceInfo(props) {
    const subServices = props.service.subServices.map((subService, index) => {
        return (
            <div key={index} className="col-md-6 mx-auto m-1">
                <RenderSubServiceItem subService={subService} />
            </div>
        );
    });

    if(props.service) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem><Link to="/services">Services</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.service.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>{props.service.name}</h2>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    {subServices}                   
                </div>
            </div>
        );
    }
    return <div />;   
}

export default ServiceInfo;