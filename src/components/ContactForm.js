import React from 'react';
import { Prompt } from 'react-router-dom'


const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "", email: "", message: ""
        };
    }

    handleSubmit = (e) => {
        this.setState({
            name: "", email: "", message: ""
        })
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...this.state })
        })
            .then(() => alert("Success! Your message has been sent"))
            .catch(error => alert(error));

        e.preventDefault();

    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        const { name, email, message } = this.state;
        return (
            <>
                <div className="col py-5">

                    <h1>Contact form </h1>


                    <form
                        onSubmit={this.handleSubmit}
                    >
                        <input type="hidden" name="form-name" value="contact"

                        />
                        <div class="messages"></div>
                        <div class="controls">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="form_name">Firstname *</label>
                                        <input type="text" id="form_name" name="name" value={name} onChange={this.handleChange} className="form-control text-color4 bg-color2 border-color3" placeholder="Please enter your firstname *" required="required" data-error="Firstname is required" />
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="form_email">Email *</label>
                                        <input type="text" id="form_email" name="email" value={email} onChange={this.handleChange} className="form-control text-color4 bg-color2 border-color3" placeholder="Please enter your email *" required="required" data-error="Valid email is required" />
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label htmlFor="form_message">Message *</label>
                                        <textarea name="message" id="form_message" className="form-control text-color4 bg-color2 border-color3" value={message} onChange={this.handleChange} placeholder="Wpisz wiadomość" rows="4" required="required" data-error="Please, leave us a message."></textarea>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <input type="submit" class="btn btn-color1 text-color4 btn-send" value="Send message" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <p className="text-color2">
                                        <strong>*</strong> These fields are required
                                        </p>
                                </div>
                            </div>
                        </div>
                    </form>
                    <Prompt
                        when={this.state.message}
                        message="The form has not been sent. If you leave, your input will be lost" />

                </div>
            </>

        );
    }
}
export default ContactForm;