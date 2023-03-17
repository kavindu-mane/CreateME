import React , {Component} from "react";
import Buttons from "../components/Common/Buttons";
import Sections from "../components/Home/Sections";
import "../resources/styles.css"

class Home extends Component {
    render() { 
        return (
            <React.Fragment>
                <div className="intro-div">
                    {/* intro */}
                    <div data-aos="zoom-in-up" data-aos-duration="1000">
                        <div className="container text-center p-2 p-md-5 pb-md-2" >
                            <h1 className="pt-3 pt-md-5 f-raleway intro">Create Amazing 
                            <span className="text-primary"> GitHub Profile README</span> Without 
                            <span className="text-"> Coding.</span></h1>
                            <h5 className="text-secondary fw-normal">Show your skills, 
                            experience and projects and many more. Generate markdown for your profile with 
                            just a few clicks!
                            </h5>
                        </div>
                    </div>
                    
                    {/* 2 buttons for go to repo and create pages*/}
                    <div className="container d-flex justify-content-center pb-5">
                        <div data-aos="fade-right" data-aos-duration="1000">
                            <Buttons text = {"VISIT REPO (DEV)"} style_class ={"btn-secondary"} link = {"https://github.com/kavindu-mane/profile-readme-generator"}/>
                        </div>
                        <div data-aos="fade-left" data-aos-duration="1000">
                            <Buttons style_class = {"btn-primary"} text = {"GET START"} link = {"create"}/>
                        </div>
                    </div>

                    {/* sections */}
                    <Sections/>

                    {/* 2 buttons for go to repo and create pages*/}
                    <div className="container d-flex justify-content-center pb-5">
                        <div data-aos="fade-right" data-aos-duration="1000">
                            <Buttons text = {"VISIT REPO (DEV)"} style_class ={"btn-secondary"} link = {"https://github.com/kavindu-mane/profile-readme-generator"}/>
                        </div>
                        <div data-aos="fade-left" data-aos-duration="1000">
                            <Buttons style_class = {"btn-primary"} text = {"GET START"} link = {"create"}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Home;