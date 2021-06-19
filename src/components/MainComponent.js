import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Carousel from './CarouselComponent';
import Services from './ServicesComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { SERVICES } from '../shared/services';
import ServiceInfo from './ServiceInfoComponent';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            services: SERVICES
        };
    }

    render() {
        const HomePage = () => {    // have to used arrow function here for using this and get state
            return (
                <div className="container">
                    <Carousel />
                    

                </div>
            );
        }

        const ServiceWithId = ({match}) => {
            return (
                <ServiceInfo
                    service={this.state.services.filter(service => service.id === +match.params.serviceId)[0]}                    
                />
            );
        };  

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/services' render={() => <Services services={this.state.services} />} />
                    <Route path='/services/:serviceId' component={ServiceWithId} />
                    <Route exact path='/aboutus' render={() => <About component={About} />} />
                    <Route exact path='/contactus' render={() => <Contact component={Contact} />} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;