import React from 'react';

const Contact = () => {
    return (
        <section className="contact py-5 mb-0 mt-5" style = {{backgroundColor: '#FBD062'}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <h1 className="text-black" style = {{fontWeight: 800}}>Let us handle your <br/> project , professionally.</h1>
                        <p className = 'text-secondary'>With well written codes , we build amazing apps for all platforms , mobile and web apps in general</p>
                    </div>
                    <div className="col-md-7 mx-auto">
                        <form action="">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Email Address *"/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Subject *"/>
                            </div>
                            <div className="form-group">
                                <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                            </div>
                            <div className="form-group text-center">
                                <button type="button" className="btn btn-primary"> Submit </button>
                            </div>
                        </form>
                    </div>
                </div>
                <p className = 'text-center mt-3'>Copyright Creative Agency 2020</p>
            </div>
       </section>
    );
};

export default Contact;