import React from 'react';
// import '../styles/ContactPage.css'
// import { Prompt } from 'react-router-dom'

const Contact = () => {
    //     return (  );
    // }



    // class ContactPage extends React.Component {

    // state = {
    //     value: ''
    // }

    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     this.setState({
    //         value: ''
    //     })
    // }

    // handleChange = (e) => {
    //     this.setState({
    //         value: e.target.value
    //     })
    // }
    // render() {
    return (
        <>
            <div class="container">

                <div class="row">

                    <div class="col-xl-8 offset-xl-2 py-5">

                        <h1>Contact form </h1>


                        <form name="contact" method="POST"
                        // data-netlify="true"
                        // onSubmit={this.handleSubmit}
                        >
                            <input type="hidden" name="form-name" value="contact" action="/" />
                            <p>
                                <label>Your Name: <input type="text" name="name" /></label>
                            </p>
                            <p>
                                <label>Your Email: <input type="email" name="email" /></label>
                            </p>
                            <p>
                                <label>Message: <textarea name="message"></textarea></label>
                            </p>
                            <p>
                                <button type="submit">Send</button>
                            </p>
                            {/* <input type="hidden" name="form-name" value="the-name-of-the-html-form" />
                            <h3>Napisz do nas</h3>
                            <textarea name="message"
                                // value={this.state.value}
                                // onChange={this.handleChange} 
                                placeholder={"Wpisz wiadomość"}>

                            </textarea>
                            <button type="submit">Wyślij</button> */}
                            {/* <div class="messages"></div>
                                <div class="controls">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="form_name">Firstname *</label>
                                                <input type="text" id="form_name" name="name" class="form-control" placeholder="Please enter your firstname *" required="required" data-error="Firstname is required" />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="form_email">Email *</label>
                                                <input type="text" id="form_email" name="email" class="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required" />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="form_message">Message *</label>
                                                <textarea name="message" id="form_message" class="form-control" value={this.state.value} onChange={this.handleChange} placeholder="Wpisz wiadomość" rows="4" required="required" data-error="Please, leave us a message."></textarea>
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div> */}
                            {/* <div className="field">
                                        <div data-netlify-recaptcha="true"></div>
                                    </div> */}
                            {/* <div className="col-md-12">
                                            <input type="submit" class="btn btn-success btn-send" value="Send message" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <p className="text-muted">
                                                <strong>*</strong> These fields are required
                                        </p>
                                        </div>
                                    </div>
                                </div> */}
                        </form>
                        {/* <Prompt
                            when={this.state.value}
                            message="Formularz nie został wysłany. Opuszczenie strony spowoduje utratę wprowadzonych informacji" /> */}

                    </div>

                </div>

            </div>
        </>

    );
    // }
}
export default Contact;
// export default ContactPage;