import React , {Component} from "react";
import "../resources/styles.css";

class Footer extends Component {
    render() { 
        return (
            <React.Fragment>
                <div className="footer-class">
                    <div className="p-0 pt-3 container-fluid d-flex justify-content-between">
                        {/* Logo */}
                        <a href="/" className="text-decoration-none">
                            <h2 className="f-raleway ms-3 ms-md-4 text-white">Create
                            <span className="text-primary">ME</span></h2></a>
                        {/* social links */}
                        <div className="row me-3 me-md-4">
                            <a href="https://github.com/kavindu-mane" className="col-2 mx-1 social-icons-bg" target={"_blank"} rel="noreferrer">
                            <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg" alt="github" className="social-icons"/>
                            </a>
                            <a href="https://linkedin.com/in/kavindu-wanniarachchi" className="col-2 mx-1 social-icons-bg" target={"_blank"} rel="noreferrer">
                            <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg" alt="linkedin" className="social-icons"/>
                            </a>
                            <a href="https://twitter.com/kavindu_mane" className="col-2 mx-1 social-icons-bg" target={"_blank"} rel="noreferrer">
                            <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/twitter.svg" alt="twitter" className="social-icons"/>
                            </a>
                            <a href="https://facebook.com/mane.on.fb" className="col-2 mx-1 social-icons-bg" target={"_blank"} rel="noreferrer">
                            <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/facebook.svg" alt="facebook" className="social-icons"/>
                            </a>
                            <a href="https://instagram.com/kavindu_m_wanniarachchi" className="col-2 mx-1 social-icons-bg" target={"_blank"} rel="noreferrer">
                            <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/instagram.svg" alt="instagram" className="social-icons"/>
                            </a>
                        </div>
                    </div>
                    {/* copyright */}
                    <p className="text-secondary text-center mt-3 pb-2 mb-0">&copy; Copyright 2023 | Kavindu Wanniarachchi</p>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Footer;