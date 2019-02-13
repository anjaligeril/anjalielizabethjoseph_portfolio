import React ,{Component} from 'react'
import './css/ServicesCSS.css'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
class Services extends Component{
    render(){
        return(
            <div className="services-outer">
            <div className="servicesSection text-left">
                <ReactCSSTransitionGroup transitionName="fade"
                                         transitionAppear={true}
                                         transitionAppearTimeout={1500}
                                         transitionEnterTimeout={1500}
                                         transitionLeaveTimeout={800}>
                <span className="heading-meta title">What I do?</span>
                <h2 className="subheading title">Here are some of my expertise</h2>
                </ReactCSSTransitionGroup>
                <div className="row  row-pt-md">
                    <ReactCSSTransitionGroup transitionName="slide2"
                                             transitionAppear={true}
                                             transitionAppearTimeout={2000}
                                             transitionEnterTimeout={2000}
                                             transitionLeaveTimeout={1000}>
                    <div className=" col-md-4 text-center">
                        <div className="box1 services color-1">
                            <span className="icon  "><i className="glyphicon glyphicon-flash"></i></span>
                            <div className="desc">
                                <h3 className="title">Web Design
                                </h3>
                                <p>My passion is building simple, beautiful user experiences.</p>
                            </div>
                        </div>
                    </div>
                    <div className=" col-md-4 text-center ">
                        <div className="box1 services color-2">
                            <span className=" icon "><i className="glyphicon glyphicon-send"></i></span>
                            <div className="desc">
                                <h3 className="title">Consulting
                                </h3>
                                <p>Looking for a new project and not sure about it?
                                    I can help you with building your back-end system or make your
                                    front end responsive.</p>
                            </div>
                        </div>
                    </div>
                    <div className=" col-md-4 text-center ">
                        <div className="box1 services color-3">
                            <span className=" icon "><i className=" fa fa-rocket"></i></span>
                            <div className="desc">
                                <h3 className="title">Mobile App Development
                                </h3>
                                <p>Looking to bring something special to your mobile apps? I work in native programming languages and adhere to Google and
                                    Apple’s design style guidelines for best user experiences.
                                </p>
                            </div>
                        </div>
                    </div>
                    </ReactCSSTransitionGroup>
                    <ReactCSSTransitionGroup transitionName="slide5"
                                             transitionAppear={true}
                                             transitionAppearTimeout={2000}
                                             transitionEnterTimeout={2000}
                                             transitionLeaveTimeout={1000}>
                    <div className="col-md-4 text-center ">
                        <div className=" box1 services color-4">
                            <span className=" icon "><i className=" fa fa-black-tie"></i></span>
                            <div className="desc">
                                <h3 className="title">Digital Marketing
                                </h3>
                                <p>Content marketing, Social Media integration, Search engine optimization -
                                    Contact me for any of your digital marketing needs.</p>
                            </div>
                        </div>
                    </div>
                    <div className=" col-md-4 text-center ">
                        <div className="box1 services color-5">
                            <span className="icon "> <i className="  fa fa-lightbulb-o"></i></span>
                            <div className="desc">
                                <h3 className="title">Website Maintenance and Support
                                </h3>
                                <p>Troubles with your existing website?
                                    Need support for crafting responsive designs which work seamlessly
                                    across multiple websites? I can help you with existing website maintenance
                                    and support activities.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="  col-md-4 text-center ">
                        <div className="box1 services color-6">
                            <span className="icon  "><i className="fa fa-magic"></i></span>
                            <div className="desc">
                                <h3 className="title">Logos and Banners</h3>
                                <p>Professional Logo and Banner designed tailored to your business and Industry.</p>
                            </div>
                        </div>
                    </div>
                    </ReactCSSTransitionGroup>
                </div>

            </div>
            </div>
        )
    }
}

export default Services;