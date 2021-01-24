import React, { Component } from 'react'



import '../App.css';




class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            values: {
                eventID: '',
                title: '',
                description: '',
                date: '',
                location: '',
                tag: ''
            }
        };
    }

    handleInputChange = e =>
    this.setState({
        values: { ...this.state.values, [e.target.name]: e.target.value }
    });

    submitForm = e => {
        e.preventDefault();
        this.setState({ isSubmitting: true });
        fetch(process.env.REACT_APP_DOMAIN + '/events', {
            method: "POST",
            body: JSON.stringify(this.state.values),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => {
            this.setState({ isSubmitting: false });
            return res.json();
        })
        .then(data => {
            console.log(data);
            !data.hasOwnProperty("error")
                ? this.setState({ message: data.success })
                : this.setState({ message: data.error, isError: true });
        });
    }

    render() {
        return (
            <div className="host-form-div">
                <form onSubmit={this.submitForm}>
                    <div className="fields">
                        <label htmlFor="eventID" >EventID: </label>
                        <input
                            type="text"
                            name="eventID"
                            id="eventID"
                            value={this.state.values.eventID}
                            onChange={this.handleInputChange}
                            title="EventID"
                            required
                        />
                    </div>
                    <div className="fields">
                        <label htmlFor="title">Event Title: </label>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            value={this.state.values.title}
                            onChange={this.handleInputChange}
                            title="title"
                            required
                        />
                    </div>
                    <div className="fields">
                        <label htmlFor="date">Event Date: </label>
                        <input
                            type="date"
                            name="date"
                            id="date"
                            value={this.state.values.date}
                            onChange={this.handleInputChange}
                            title="date"
                            required
                        />
                    </div>
                    <div className="fields">
                        <label htmlFor="location">Event Location: </label>
                        <input
                            type="text"
                            name="location"
                            id="location"
                            value={this.state.values.location}
                            onChange={this.handleInputChange}
                            title="location"
                            required
                        />
                    </div>
                    <div className="fields">
                        <label htmlFor="tag">Event Tag:</label>
                        <select name= 'tag' value={this.state.values.tag} onChange={this.handleInputChange}>
                            <option value="Art">Art</option>
                            <option value="Career">Career</option>
                            <option value="Volunteer">Volunteer</option>
                            <option value="Education">Education</option>
                        </select>
                    </div>
                    <div className="fields">
                        <label htmlFor="description" >Event Description: </label>
                        <input className="textarea"
                            type='text'
                            name="description"
                            id="description"
                            value={this.state.values.description}
                            onChange={this.handleInputChange}
                            title="description"
                            required
                        />

                    </div>    
                    <div className="fields">                                    
                    <button type="submit" className="register-btn">Register</button>
                    </div>
                </form>
            </div>
        )
    }
}


export default Form;


