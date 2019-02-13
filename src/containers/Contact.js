import React ,{Component} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './css/ContactCSS.css'
class Contact extends Component{
    render(){
        return(
            <div className="contactSection-outer">
            <div className="contactSection text-left">
                <ReactCSSTransitionGroup transitionName="fade"
                                         transitionAppear={true}
                                         transitionAppearTimeout={1500}
                                         transitionEnterTimeout={1500}
                                         transitionLeaveTimeout={800}>
                <span className="heading-meta title">Get in Touch</span>
                <h2 className="subheading title">Contact</h2>
                <div className="row mapLocation">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" id="map">
                        <div className="mapouter">
                            <div className="gmapcanvas">
                                <iframe width="100%" height="400" id="gmapcanvas"
                                        src="https://maps.google.com/maps?q=trios%20college%20brampton&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                        frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="row">

                    <div className="col-md-5 col-lg-5 col-sm-12">
                        <div className="contact-feature contact-feature-sm "
                             >
                            <div className="contact-icon">
                                <i className="glyphicon glyphicon-envelope"></i>
                            </div>
                            <div className="contact-text">
                                <h3 className="title"><a href="mailto:anjali99malu@gmail.com">anjali99malu@gmail.com</a></h3>
                            </div>
                        </div>

                        <div className="contact-feature contact-feature-sm "
                             >
                            <div className="contact-icon">
                                <i className="	fa fa-map-marker"></i>
                            </div>
                            <div className="contact-text">
                                <h3 className="title">triOS College Business Technology Healthcare - Brampton Campus,252 Queen St E, Brampton, ON L6V 1C1</h3>
                            </div>
                        </div>

                        <div className="contact-feature contact-feature-sm "
                             >
                            <div className="contact-icon">
                                <i className="glyphicon glyphicon-phone"></i>
                            </div>
                            <div className="contact-text">
                                <h3 className="title"><a href="tel://">+416 822 3193</a></h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7 col-lg-7 col-sm-12 col-md-push-1">
                        <h4 className="title">Have a question or want to work together? </h4>
                        <div className="row">

                            <div className="col-md-10 col-lg-10 col-sm-10 col-md-offset-1 col-md-pull-1 "
                                 >
                                <form action="">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Name"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Email"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Subject"/>
                                    </div>
                                    <div className="form-group">
                                        <textarea name="" id="message" cols="30" rows="7" className="form-control"
                                                  placeholder="Message"></textarea>
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" className="btn btn-primary btn-send-message"
                                               value="Send Message"/>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>

                </div>
                </ReactCSSTransitionGroup>
                </div>
            </div>



        )
    }
}

export default Contact;