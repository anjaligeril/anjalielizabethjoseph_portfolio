import React ,{Component} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './css/AboutCSS.css'
import Img1 from "./images/profilePic.jpg";
import SkillBar from 'react-skillbars';
import Cv from "./images/cv.pdf";
class About extends Component{
    SKILLS = [
        {
            "type": "HTML5",
            "level": 100
        },
        {
            "type": "CSS",
            "level": 99
        },
        {
            "type": "BootStrap",
            "level": 97
        },
        {
            "type": "JavaScript",
            "level": 95
        },
        {
            "type": "React.js",
            "level": 75
        },
        {
            "type": "MySQL",
            "level": 95
        },
        {
            "type": "Java",
            "level": 75
        },
        {
            "type": "WordPress",
            "level": 95
        },
        {
            "type": "PHP",
            "level": 80
        }


    ];
    render(){
        return(

            <div className="aboutme-outer">

            <div className="aboutme text-left">
                <ReactCSSTransitionGroup transitionName="fade"
                                         transitionAppear={true}
                                         transitionAppearTimeout={3000}
                                         transitionEnterTimeout={2500}
                                         transitionLeaveTimeout={2500}>

                <span className="heading-meta title">About Me</span>
                <h2 className="subheading title">Who Am I?</h2>
                    <div className="row">
                        <div className="  col-lg-1 col-md-1 col-sm-1 "></div>
                        <div className="  col-lg-4 col-md-4 col-sm-4 ">
                            <img src={Img1} height="250" width="250" className="img-circle profilePic" alt="photo"/>
                        </div>
                        <div className="  col-lg-6 col-md-6 col-sm-6 ">

                            <div className="text descrip"><p  className="title">Hi I am <strong>Anjali Elizabeth Joseph..</strong><br/> I am an aspiring web designer and front end developer from Toronto,Canada. I like creating intuitive, dynamic user experiences. I love CSS, JavaScript which along with other acronyms gives me superpower to develop compelling front-end, intuitive yet minimalistic interfaces, and engaging designs. I work to the principle that Simple is beautiful, while carefully including the finest details and interactions.
                                 I can create all kind of websites or online shops, helping you out with your business or project.
                            </p></div>

                        </div>
                        <div className="  col-lg-1 col-md-1 col-sm-1 "></div>
                    </div>
                        <div className="row">
                        <div className="  col-lg-2 col-md-2 col-sm-2 "></div>
                        <div className="col-lg-8 col-md-8 col-sm-8 skillss" >
                            <h3 className="subheading title">My Skills</h3>
                            <SkillBar skills={this.SKILLS} animationDuration={2000} animationDelay={600}/>
                        </div>
                        <div className="  col-lg-2 col-md-2 col-sm-2 "></div>
                        </div>

                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 " >
                            <div className="hire">
                                <h2 className="title">I am happy to work for you . Let's make something special.</h2>
                                <a href="mailto:anjali99malu@gmail.com" className="btn-hire">Hire me</a>
                            </div>
                        </div>
                        </div>
            </ReactCSSTransitionGroup>

            </div>

            </div>
        )
    }
}

export default About;