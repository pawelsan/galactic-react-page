import React from 'react';
const Contact = () => {
    return (
        <>
            <div class="container">

                <div class="row">

                    <div class="col-xl-8 offset-xl-2 py-5">

                        <h1>Contact form </h1>


                        <form name="contact" method="POST" data-netlify="true" data-netlify-recaptcha="true">
                            <div class="messages"></div>
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
                                            <textarea name="message" id="form_message" class="form-control" placeholder="Message for me *" rows="4" required="required" data-error="Please, leave us a message."></textarea>
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div data-netlify-recaptcha="true"></div>
                                    </div>
                                    <div className="col-md-12">
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
                            </div>
                        </form>

                    </div>

                </div>

            </div>
        </>

    );
}

export default Contact;