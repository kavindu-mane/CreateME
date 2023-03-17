import React , {Component} from "react";
import StatImage from "../../resources/stats.svg";
import ExampleImage from "../../resources/example.png"

class ImageArea extends Component {
    render() { 
        let{image} = this.props;
        let cls = ""
        if(image === "stats"){
            image = StatImage
            cls = "image-area"
        }else{
            image = ExampleImage
            cls = "image-area-example"
        }
        return (
            <React.Fragment>
                <div className="row d-flex justify-content-center mt-3 mx-2">
                    <img src={image} alt="section-images" className = {cls}/>
                </div>
            </React.Fragment>
        );
    }
}
 
export default ImageArea;