import React ,{Component} from 'react'
import { slide as Menu } from 'react-burger-menu'
import Img1 from './images/img1.jpg'
import './css/PortfolioCSS.css'
import {Route} from "react-router-dom"
import About from './About'
import Services from './Services'
import Experience from './Experience'
import Work from './Work'
import Contact from './Contact'
import {Link} from 'react-router-dom'
import './css/style.css'
import SkillsCloud from "./SkillsCloud";
import './css/Animation.css'

class PortFolio extends Component{

    constructor (props) {
        super(props)
        this.state = {
            menuOpen: false
        }
    }


    handleStateChange (state) {
        this.setState({menuOpen: state.isOpen})
    }


    closeMenu () {
        this.setState({menuOpen: false})
    }



    toggleMenu () {
        this.setState({menuOpen: !this.state.menuOpen})
    }

    render(){

        return(
            <div className="wrapper" >

                <Menu className="menu"   noOverlay  isOpen={this.state.menuOpen}
                      onStateChange={(state) => this.handleStateChange(state)} >

                    <div className="navigation">
                        <div className=" navi affix">
                            <div className="well">
                                <div className="text-center  ">
                                    <img src={Img1} height="150" width="150" className="img-circle" alt="photo"/>
                                    <h3 className="title head ">Anjali Elizabeth Joseph</h3>
                                    <h5 className="head title">Front End Developer in Toronto</h5>
                                </div>
                                <div className="nav ">

                                    <ul>
                                        <li className="active menu-item title"><Link to={"/"} onClick={() => this.closeMenu()}>Home</Link></li>
                                        <li className="menu-item title"><Link to={"/about"} onClick={() => this.closeMenu()}>About Me</Link></li>
                                        <li className="menu-item title"><Link to={"/services"} onClick={() => this.closeMenu()}>Services</Link></li>
                                        <li className="menu-item title"><Link to={"/experience"} onClick={() => this.closeMenu()}>Education & Experience</Link></li>
                                        <li className="menu-item title"><Link to={"/work"} onClick={() => this.closeMenu()}>My Works</Link></li>
                                        <li className="menu-item title"><Link to={"/contact"} onClick={() => this.closeMenu()}>Contact</Link></li>
                                    </ul>
                                </div>
                                <div className="footer  ">
                                    <ul className="list">
                                        <li><a href="#"><i className="fa fa-facebook-square"></i></a></li>
                                        <li><a href="#"><i className="	fa fa-twitter-square"></i></a></li>
                                        <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                        <li><a href="#"><i className="fa fa-linkedin-square"></i></a></li>
                                    </ul>
                                </div>


                        </div>

                        </div>
                    </div>
                </Menu>

                    <div className="content ">
                        <Route path="/" exact component={SkillsCloud}  />
                        <Route path="/about" exact component={About}/>
                        <Route path="/services" component={Services}/>
                        <Route path="/experience" component={Experience}/>
                        <Route path="/work" component={Work}/>
                        <Route path="/contact" component={Contact}/>
                    </div>


            </div>

        );
    }
}

export default PortFolio;