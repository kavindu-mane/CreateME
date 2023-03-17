import React ,{ Component } from "react";
import Buttons from "../Common/Buttons";
import ToolTip from "../Common/ToolTip";
import  "../../resources/styles.css"

class Header extends Component {
    render() { 
        return (
            <React.Fragment >
              <div className="position-fixed container-fluid header-bg pb-2">
                <div className="mx-md-5 mt-3 d-flex justify-content-between">
                    {/* Logo */}
                    <a href="/" className="text-decoration-none" data-tip data-for="forLogo">
                      <h2 className="f-raleway ms-3 ms-md-5">Create
                      <span className="text-primary">ME</span></h2></a>
                    <ToolTip text = "CreateME" id = "forLogo"/>

                    <div className="d-flex align-items-center me-3 me-md-5">
                        {/* get start button */}
                        <Buttons style_class = {"btn-primary"} text = {"GET START"} link = {"create"}/>
                        {/* theme changer button */}
                        <button onClick={this.themeClick}
                        className="theme-btn p-1 ms-2 rounded-circle d-flex align-items-center bg-transparent border-0">
                        <span className="material-symbols-outlined theme-icon"></span>
                        </button>
                    </div>
                </div>
              </div>
            </React.Fragment>
    );}

    themeClick() {
        if (localStorage.getItem("theme") === "light-theme") {
          localStorage.setItem("theme", "dark-theme");
          document.querySelector("html").className = "dark-theme";
      
        } else {
          localStorage.setItem("theme", "light-theme");
          document.querySelector("html").className = "light-theme";
        }
      }
}

export default Header;