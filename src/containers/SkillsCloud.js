import React, { Component } from 'react';
import randomColor from 'randomcolor';
import TagCloud from 'react-tag-cloud';

import './css/CloudSkillsCSS.css';
import Video from './images/background.mp4'
import Cv from "./images/cv.pdf";
import Image1 from'./images/img2.jpg'
import Image2 from'./images/img3.jpeg'
import Image3 from './images/img4.jpeg'
import Image4 from './images/img5.jpg'
import Image5 from './images/img6.jpg'
import Image6 from './images/img7.jpg'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import BackgroundSlideshow from 'react-background-slideshow'

const styles = {
    large: {
        fontSize: 60,
        fontWeight: 'bold'
    },
    small: {
        opacity: 0.7,
        fontSize: 16
    }
};

class SkillsCloud extends Component {
    componentDidMount() {


        setInterval(() => {
            this.forceUpdate();
        }, 3000);
    }


    render() {
        return (
            <div className="SkillsCloudBody ">

                <video autoPlay muted loop className="video1">
                    <source src={Video} type="video/mp4" />
                </video>


                <ReactCSSTransitionGroup
                    transitionName="fade"
                    transitionAppear={true}
                    transitionAppearTimeout={2500}
                    transitionEnterTimeout={2500}
                    transitionLeaveTimeout={3000}>


                    <div className="skills1">
                        <h1>Anjali Elizabeth Joseph</h1>
                        <h3>I’m a Toronto based  web designer & front‑end developer focused on crafting clean  & user‑friendly experiences. </h3>
                    </div>

                    <div className="SkillsCloud-outer">


                        <div className="col-lg-1"></div>

                        <div className="SkillsCloud-inner col-lg-10">

                            <TagCloud
                                className='tag-cloud'
                                    style={{padding:7,
                                        fontFamily: 'Georgia',
                                        }}
                                >
                                <div
                                    style={{
                                        fontSize: 30,
                                        color: randomColor()

                                    }}>React.js</div>
                                <div style={{

                                    fontSize: 30,
                                    color: randomColor()
                                }}> BootStrap </div>
                                <div style={{
                                                fontSize: 30,
                                    color: randomColor()
                                }} >JavaScript</div>
                                <div style={{

                                    fontSize: 30,
                                    color: randomColor()
                                }} >HTML5</div>
                                <div style={{

                                    fontSize: 30,
                                   color: randomColor()
                                }}>CSS</div>
                                <div style={{

                                    fontSize: 30,
                                    color: randomColor()
                                }} >PHP</div>
                                <div style={{

                                    fontSize: 30,
                                   color: randomColor()
                                }}>JQuery</div>
                                <div style={{

                                    fontSize: 30,
                                    color: randomColor()
                                }}>Java</div>
                                <div style={{

                                    fontSize: 30,
                                    color: randomColor()
                                }}>C</div>
                                <div style={{

                                    fontSize: 30,
                                    color: randomColor()
                                }}>C++</div>
                                <div style={{

                                    fontSize: 30,
                                    color: randomColor()
                                }} >C#</div>
                                <div style={{

                                    fontSize: 30,
                                    color: randomColor()
                                }}>ASP.net</div>
                                <div style={{

                                    fontSize: 30,
                                    color: randomColor()
                                }} >Python</div>
                                <div style={{

                                    fontSize: 30,
                                    color: randomColor()
                                }}>JSP</div>
                                <div style={{

                                    fontSize: 30,
                                    color: randomColor()
                                }}>MySQL</div>
                                <div style={{

                                    fontSize: 30,
                                    color: randomColor()
                                }}>MicroSoft SQL</div>
                                <div style={{

                                   fontSize: 30,
                                    color: randomColor()
                                }}>JSON</div>
                                <div style={{

                                    fontSize: 30,
                                    color: randomColor()
                                }}>XML</div>
                                <div style={{

                                    fontSize: 30,
                                    color: randomColor()
                                }}>Angular.js</div>
                                <div style={{

                                    fontSize: 30,
                                    color: randomColor()
                                }}>Linux & Apache</div>
                                <div style={{

                                    fontSize: 30,
                                    color: randomColor()
                                }}>Android</div>
                                <div style={{

                                    fontSize: 30,
                                    color: randomColor()
                                }}>Mobile Web</div>
                                <div style={{

                                    fontSize: 30,
                                    color: randomColor()
                                }}>IOS</div>
                                <div style={{

                                    fontSize: 30,
                                    color: randomColor()
                                }}>WordPress</div>
                                <div style={{

                                    fontSize: 30,
                                    color: randomColor()
                                }}>PHP</div>
                                <div style={{

                                    fontSize: 30,
                                    color: randomColor()
                                }}>Laravel</div>
                                <div style={{

                                    fontSize: 30,
                                    color: randomColor()
                                }}>JQuery</div>
                            </TagCloud>

                        </div>

                        <div className="col-lg-1"></div>

                    </div>


                    <div className="headButton ">

                        <a className="link1" href="mailto:anjali99malu@gmail.com">anjali99malu@gmail.com</a>
                        <a className="link1" target="_blank" href={Cv}>Resume  <i
                            className="fa fa-download"></i></a>



                        <a className="link1" target="_blank" href="https:/www.linkedin.com/in/anjali-elizabeth-joseph">LinkedIn <i
                            className="fa fa-linkedin-square"></i></a>



                        <a className="link1"  target="_blank" href="https://github.com/anjaligeril"> GitHub <i
                            className="fa fa-github"></i></a>

                    </div>
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}

export default SkillsCloud;