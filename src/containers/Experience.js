import React ,{Component} from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './css/ExperienceCSS.css'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
class Experience extends Component{
    render(){
        return(
            <div className="experienceSection-outer">
            <div className="experienceSection text-left">
                <ReactCSSTransitionGroup transitionName="fade"
                                         transitionAppear={true}
                                         transitionAppearTimeout={1500}
                                         transitionEnterTimeout={1500}
                                         transitionLeaveTimeout={800}>
                <span className="heading-meta title">Education & Experience </span>
                <h2 className="subheading title"> My Education & Work Experience</h2>
                </ReactCSSTransitionGroup>
                <div className="row">
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work work"

                            iconStyle={{ background: 'orange', color: '#fff' }}
                            icon={<i className="fa fa-briefcase icon1"></i>}
                        >
                            <h4 className="vertical-timeline-element-title title">Web Application Developer Intern</h4>
                            <h5 className="vertical-timeline-element-subtitle subtitle">Toronto, Canada.</h5>
                            <h5 className="year">Dec 2018</h5>
                            <p className="description">
                                Working as a web application development intern at TDL Mortgages Brampton,Toronto.
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work work"

                            iconStyle={{ background: 'purple', color: '#fff' }}
                            icon={<i className="glyphicon glyphicon-education icon1"></i>}
                        >
                            <h4 className="vertical-timeline-element-title title">Diploma in Web Application Development</h4>
                            <h5 className="vertical-timeline-element-subtitle subtitle">Toronto, Canada.</h5>
                            <h5 className="year">June 2018 - August 2019 </h5>
                            <p className="description">
                                Currently pursuing Web Application Development Course at Trios College Brampton, Toronto.
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work work"

                            iconStyle={{ background: 'blue', color: '#fff' }}
                            icon={<i className="fa fa-briefcase icon1"></i>}
                        >
                            <h4 className="vertical-timeline-element-title title">Assistant Professor(CSE)</h4>
                            <h5 className="vertical-timeline-element-subtitle subtitle">Kerala, India.</h5>
                            <h5 className="year">March 2014 - March 2018</h5>
                            <p className="description">
                                Worked as an Assistant Professor in the Department of Computer Science and Engineering
                                at Mahathma Gandhi University, Kerala,India.
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work work"

                            iconStyle={{ background: 'red', color: '#fff' }}
                            icon={<i className="glyphicon glyphicon-education icon1"></i>}
                        >
                            <h4 className="vertical-timeline-element-title title">MTech in Computer Science and Engineering</h4>
                            <h5 className="vertical-timeline-element-subtitle subtitle">Kerala, India.</h5>
                            <h5 className="year">August 2011 - July 2013</h5>
                            <p className="description">
                                Completed Master of Technology in Comptuter Science and
                                Engineering from Mahathma Gandhi University, Kerala, India.
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work work"

                            iconStyle={{ background: 'yellow', color: '#fff' }}
                            icon={<i className="glyphicon glyphicon-education icon1"></i>}
                        >
                            <h4 className="vertical-timeline-element-title title">BTech in Computer Science and Engineering</h4>
                            <h5 className="vertical-timeline-element-subtitle subtitle">Kerala ,India.</h5>
                            <h5 className="year">September 2007 - June 2011</h5>
                            <p className="description">
                                Completed Bachelor of Technology in Computer Science and
                                Engineering  from Mahathma Gandhi University, Kerala, India.
                            </p>
                        </VerticalTimelineElement>


                        <VerticalTimelineElement
                            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                            icon={<i className="fa fa-female icon1"></i>}
                        />
                    </VerticalTimeline>
                </div>
            </div>
            </div>
        )
    }
}

export default Experience;