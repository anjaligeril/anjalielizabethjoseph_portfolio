import React ,{Component} from 'react'
import './css/WorkCSS.css'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
class Work extends Component {
    render() {
        return (
            <div class="work-outer">
                <div className="work text-left">
                    <ReactCSSTransitionGroup transitionName="fade"
                                             transitionAppear={true}
                                             transitionAppearTimeout={1500}
                                             transitionEnterTimeout={1500}
                                             transitionLeaveTimeout={800}>
                    <span className="heading-meta title">My Works</span>
                    <h2 className="subheading title">My Project works</h2>

                        <div className="row row-bottom-padded-sm " >

                            <div className="col-md-12 text-center">
                                <p className="work-menu"><span><a
                                    href="#" className="active">Web Design</a></span> <span><a href="#">Software</a></span> <span><a
                                    href="#">Apps</a></span></p>
                            </div>
                        </div>
                    </ReactCSSTransitionGroup>
                        <div className="row">
                            <ReactCSSTransitionGroup transitionName="slide2"
                                                     transitionAppear={true}
                                                     transitionAppearTimeout={1000}
                                                     transitionEnterTimeout={1000}
                                                     transitionLeaveTimeout={1000}>
                            <div className="col-md-6 " >
                                <div className="project img1">
                                    <div className="desc ">
                                        <div className="con ">
                                            <h3><a href="https://tdlmortgages.com/">TDL Mortgages</a></h3>
                                            <span>Website</span>
                                            <p className="icon">
                                                <span><a href="#"><i className="glyphicon glyphicon-share-alt"></i></a></span>
                                                <span><a href="#"><i className="glyphicon glyphicon-eye-open"></i> 100</a></span>
                                                <span><a href="#"><i className="glyphicon glyphicon-heart"></i> 49</a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 " >
                                <div className="project img2">
                                    <div className="desc ">
                                        <div className="con ">
                                            <h3><a href="http://triosdevelopers.com/~A.E.Joseph/ProjectDestinationKerala/">Destination Kerala</a></h3>
                                            <span>Website</span>
                                            <p className="icon">
                                                <span><a href="#"><i className="glyphicon glyphicon-share-alt"></i></a></span>
                                                <span><a href="#"><i className="glyphicon glyphicon-eye-open"></i> 100</a></span>
                                                <span><a href="#"><i className="glyphicon glyphicon-heart"></i> 49</a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </ReactCSSTransitionGroup>
                            <ReactCSSTransitionGroup transitionName="slide5"
                                                     transitionAppear={true}
                                                     transitionAppearTimeout={1000}
                                                     transitionEnterTimeout={1000}
                                                     transitionLeaveTimeout={1000}>
                            <div className="col-md-6 " >
                                <div className="project img3 " >
                                    <div className="desc ">
                                        <div className="con ">
                                            <h3><a href="https://wordpress.anjalielizabethjoseph.ca/">Food Fiesta</a></h3>
                                            <span>Website</span>
                                            <p className="icon">
                                                <span><a href="#"><i className="glyphicon glyphicon-share-alt"></i></a></span>
                                                <span><a href="#"><i className="glyphicon glyphicon-eye-open"></i> 100</a></span>
                                                <span><a href="#"><i className="glyphicon glyphicon-heart"></i> 49</a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 " >
                                <div className="project img4 " >
                                    <div className="desc ">
                                        <div className="con ">
                                            <h3><a href="work.html">Work 04</a></h3>
                                            <span>Application</span>
                                            <p className="icon">
                                                <span><a href="#"><i className="glyphicon glyphicon-share-alt"></i></a></span>
                                                <span><a href="#"><i className="glyphicon glyphicon-eye-open"></i> 100</a></span>
                                                <span><a href="#"><i className="glyphicon glyphicon-heart"></i> 49</a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </ReactCSSTransitionGroup>
                        </div>

                </div>

            </div>
        );
    }
}

export default Work;