import React , {Component} from "react";
import "../resources/styles.css"

class Buttons extends Component {
    render() {
        const{style_class , text , link} = this.props;

        let styles = "btn btn-sm px-2 py-1 px-md-3 py-md-2 me-3 " + style_class

        return (
            <React.Fragment>
                <a className={styles}
                style={{borderRadius:"6px"}}
                href = {link}>
                    <span className="fw-bold btn-font" >{text}</span></a>
            </React.Fragment>
        );
    }
}
 
export default Buttons;