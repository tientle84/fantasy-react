import React, { Component } from "react";
import {
    Breadcrumb,
    BreadcrumbItem,
    Card,
    CardHeader,
    CardText,
    CardBody,
} from "reactstrap";
import { Link } from "react-router-dom";
import firebase, { auth, provider } from "../firebase.js";

class Booking extends Component {
    constructor() {
        super();
        this.state = {
            service: "Manicure",
            date: "",
            note: "",
            items: [],
            user: null,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    login() {
        auth.signInWithPopup(provider).then((result) => {
            const user = result.user;
            this.setState({
                user,
            });
        });
    }

    logout() {
        auth.signOut().then(() => {
            this.setState({
                user: null,
            });
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const itemsRef = firebase.database().ref("items");
        const item = {
            customer: this.state.user.email,
            service: this.state.service,
            date: this.state.date,
            note: this.state.note,
        };
        itemsRef.push(item);
        this.setState({
            service: "Manicure",
            date: "",
            note: "",
        });
    }

    componentDidMount() {
        auth.onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user });
            }
        });
        const itemsRef = firebase.database().ref("items");
        itemsRef.on("value", (snapshot) => {
            let items = snapshot.val();
            let newState = [];
            for (let item in items) {
                if (
                    this.state.user != null &&
                    items[item].customer === this.state.user.email
                ) {
                    newState.push({
                        id: item,
                        service: items[item].service,
                        date: items[item].date,
                        note: items[item].note,
                    });
                }
            }
            this.setState({
                items: newState,
            });
        });
    }

    removeItem(itemId) {
        const itemRef = firebase.database().ref(`/items/${itemId}`);
        itemRef.remove();
        this.setState({
            service: "Manicure",
            date: "",
            note: "",
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem>
                                <Link to="/home">Home</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem active>Booking</BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <h2>Booking</h2>
                    </div>
                    <div className="col">
                        {this.state.user ? (
                            <button
                                className="btn btn-primary float-right"
                                onClick={this.logout}
                            >
                                Logout
                            </button>
                        ) : (
                            <button
                                className="btn btn-primary float-right"
                                onClick={this.login}
                            >
                                Log In
                            </button>
                        )}
                    </div>
                </div>
                <hr />

                {this.state.user ? (
                    <div>
                        <div className="user-profile">
                            <img src={this.state.user.photoURL} alt="" />
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-4">
                                    <form onSubmit={this.handleSubmit}>
                                        <select
                                            name="service"
                                            id="service"
                                            className="form-control"
                                            value={this.state.service}
                                            onChange={this.handleChange}
                                        >
                                            <option value="Manicure">
                                                Manicure
                                            </option>
                                            <option value="Pedicure">
                                                Pedicure
                                            </option>
                                            <option value="Nail Enhancements">
                                                Nail Enhancements
                                            </option>
                                            <option value="Kid Services">
                                                Kid Services
                                            </option>
                                            <option value="Waxing">
                                                Waxing
                                            </option>
                                            <option value="Facial">
                                                Facial
                                            </option>
                                        </select>
                                        <input
                                            type="date"
                                            id="date"
                                            name="date"
                                            className="form-control"
                                            placeholder="Date"
                                            onChange={this.handleChange}
                                            value={this.state.date}
                                        ></input>
                                        <input
                                            type="text"
                                            name="note"
                                            placeholder="Your note..."
                                            onChange={this.handleChange}
                                            value={this.state.note}
                                        />
                                        <button className="btn btn-primary">
                                            Book
                                        </button>
                                    </form>
                                </div>

                                <div className="col-sm-8">
                                    {this.state.items.map((item) => {
                                        return (
                                            <div key={item.id} className="row">
                                                <div className="col mx-auto m-1">
                                                    <Card>
                                                        <CardHeader>
                                                            <div className="row">
                                                                <div className="col-8">
                                                                    <h4>
                                                                        {
                                                                            item.service
                                                                        }{" "}
                                                                        (
                                                                        {
                                                                            item.date
                                                                        }
                                                                        )
                                                                    </h4>
                                                                </div>
                                                                <div className="col-4">
                                                                    <button
                                                                        className="btn btn-primary float-right"
                                                                        onClick={() =>
                                                                            this.removeItem(
                                                                                item.id
                                                                            )
                                                                        }
                                                                    >
                                                                        Cancel
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </CardHeader>
                                                        <CardBody>
                                                            <CardText>
                                                                Your note:{" "}
                                                                {item.note}
                                                            </CardText>
                                                        </CardBody>
                                                    </Card>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>
                        <h4>Please login to book an appointment.</h4>
                    </div>
                )}
            </div>
        );
    }
}

export default Booking;
