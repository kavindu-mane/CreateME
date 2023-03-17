import React , {Component} from "react";
import MatrixIcon from "./MatrixIcon";

class MatrixRow extends Component {
    render() { 
        let{icon_1 , icon_2 , icon_3 , icon_4 , section} = this.props;
        const tooltipValue = [icon_1 , icon_2 , icon_3 , icon_4]
        let imgClass = "icon-rotate p-1"

        if (section === 1){
            const link = "https://raw.githubusercontent.com/devicons/devicon/master/icons/"
            icon_1 = link +  icon_1 + "/" + icon_1 + "-original.svg"
            icon_2 = link +  icon_2 + "/" + icon_2 + "-original.svg"
            icon_3 = link +  icon_3 + "/" + icon_3 + "-original.svg"
            icon_4 = link +  icon_4 + "/" + icon_4 + "-original.svg"
        }else{
            const link = "https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/"
            icon_1 = link + icon_1 + ".svg"
            icon_2 = link + icon_2 + ".svg"
            icon_3 = link + icon_3 + ".svg"
            icon_4 = link + icon_4 + ".svg"
            imgClass += " icon-filter"
        }
        return (
            <React.Fragment>
                <div className="row d-flex justify-content-center">
                    <MatrixIcon icon = {icon_1} imgClass = {imgClass} tooltipValue = {tooltipValue[0]}/>
                    <MatrixIcon icon = {icon_2} imgClass = {imgClass} tooltipValue = {tooltipValue[1]}/>
                    <MatrixIcon icon = {icon_3} imgClass = {imgClass} tooltipValue = {tooltipValue[2]}/>
                    <MatrixIcon icon = {icon_4} imgClass = {imgClass} tooltipValue = {tooltipValue[3]}/>
                </div>
            </React.Fragment>
        );
    }
}
 
export default MatrixRow;