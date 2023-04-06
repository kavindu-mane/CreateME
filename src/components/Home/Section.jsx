import React , {Component} from "react";

class Section extends Component {
    render() { 
        const{style_class , caption_1 , caption_2 , caption_3} = this.props;
        let style = "col-12 px-1 d-flex d-md-block justify-content-center " + style_class
        let aosData1 = "fade-right"
        let aosData2 = "fade-left"
        if(caption_2 === "MARKDOWN"){
            aosData1 = "zoom-out"
            aosData2 = "zoom-in"
        }

        return (
            <React.Fragment>
                <div className="container my-5">
                    <div className="row d-flex align-items-center pb-5">
                        <div className= {style}>
                            <div data-aos={aosData1} data-aos-duration="1000">
                                <div className="text-center">
                                    <h1 className="f-raleway section-heading">{caption_1}<br/><span className="text-primary section-heading">{caption_2}</span></h1>
                                    <p className="text-secondary fw-normal fs-6">{caption_3}</p>
                                </div>
                            </div>
                        </div>
                        <div className= {style}>
                            <div data-aos={aosData2} data-aos-duration="1000">
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Section;