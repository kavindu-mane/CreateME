import React , {Component} from "react";
import "../resources/styles.css"

class Section extends Component {
    render() { 
        const{style_class , caption_1 , caption_2 , caption_3} = this.props;
        let style = "col-12 px-1 d-flex d-md-block justify-content-center " + style_class

        return (
            <React.Fragment>
                <div className="container my-5">
                    <div className="row d-flex align-items-center pb-5">
                        <div className= {style}>
                            <div className="text-center">
                                <h1 className="f-raleway">{caption_1}<h1 className="text-primary">{caption_2}</h1></h1>
                                <h6 className="text-secondary fw-normal">{caption_3}</h6>
                            </div>

                        </div>
                        <div className= {style}>
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Section;