import React , {Component} from "react";
import "../../resources/styles.css";

class Footer extends Component {
    render() { 
        return (
            <React.Fragment>
                <div className="footer-class">
                    <div className="p-0 pt-3 container-fluid row">
                        {/* Logo */}
                        <a href="/" className="text-decoration-none col-12 col-sm-5 d-flex justify-content-center justify-content-sm-start">
                            <h2 className="f-raleway ms-3 ms-md-4 text-white">Create
                            <span className="text-primary">ME</span></h2></a>
                        {/* social links */}
                        <div className="col-12 col-sm-7 d-flex mt-3 mt-sm-0 justify-content-center justify-content-sm-end align-items-center">
                            <a href="https://github.com/kavindu-mane" className="mx-1 social-icons-bg" target={"_blank"} rel="noreferrer">
                            <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg" alt="github" className="social-icons m-2"/>
                            </a>
                            <a href="https://linkedin.com/in/kavindu-wanniarachchi" className="mx-1 social-icons-bg" target={"_blank"} rel="noreferrer">
                            <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg" alt="linkedin" className="social-icons m-2"/>
                            </a>
                            <a href="https://twitter.com/kavindu_mane" className="mx-1 social-icons-bg" target={"_blank"} rel="noreferrer">
                            <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/twitter.svg" alt="twitter" className="social-icons m-2"/>
                            </a>
                            <a href="https://facebook.com/mane.on.fb" className="mx-1 social-icons-bg" target={"_blank"} rel="noreferrer">
                            <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/facebook.svg" alt="facebook" className="social-icons m-2"/>
                            </a>
                            <a href="https://instagram.com/kavindu_m_wanniarachchi" className="mx-1 social-icons-bg" target={"_blank"} rel="noreferrer">
                            <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/instagram.svg" alt="instagram" className="social-icons m-2"/>
                            </a>
                        </div>
                    </div>
                    {/* copyright */}
                    <p className="copyright-text text-center mt-3 pb-2 mb-0"> <span className="text-warning">&lt;/&gt;</span>&ensp;with&ensp;&#10084;&#65039;&ensp;Kavindu Manahara</p>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Footer;