import React , {Component} from "react";
import "../resources/styles.css"
import ToolTip from "./ToolTip";

class MatrixRow extends Component {
    render() { 
        let{icon_1 , icon_2 , icon_3 , icon_4 , section} = this.props;
        if (section === 1){
            const link = "https://raw.githubusercontent.com/devicons/devicon/master/icons/"
            icon_1 = link +  icon_1 + "/" + icon_1 + "-original.svg"
            icon_2 = link +  icon_2 + "/" + icon_2 + "-original.svg"
            icon_3 = link +  icon_3 + "/" + icon_3 + "-original.svg"
            icon_4 = link +  icon_4 + "/" + icon_4 + "-original.svg"
        }else{<facebook />
            const link = "https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/"
            icon_1 = link + icon_1 + ".svg"
            icon_2 = link + icon_2 + ".svg"
            icon_3 = link + icon_3 + ".svg"
            icon_4 = link + icon_4 + ".svg"
        }
        return (
            <React.Fragment>
                <div className="row d-flex justify-content-center">
                    <div className="col-2 m-2"><img src={icon_1} alt={icon_1} className="icon-rotate p-1"/><ToolTip/></div>
                    <div className="col-2 m-2"><img src={icon_2} alt={icon_2} className="icon-rotate p-1"/></div>
                    <div className="col-2 m-2"><img src={icon_3} alt={icon_3} className="icon-rotate p-1"/></div>
                    <div className="col-2 m-2"><img src={icon_4} alt={icon_4} className="icon-rotate p-1"/></div>                
                </div>
            </React.Fragment>
        );
    }
}
 
export default MatrixRow;