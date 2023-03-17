import React , {Component} from "react";
import ToolTip from "../Common/ToolTip";

class MatrixIcon extends Component {
    render() { 
        const{icon , imgClass , tooltipValue} = this.props;
        return (
            <React.Fragment>
                <div className="col-2 m-2"><img src={icon} alt={icon} className={imgClass} data-tip data-for={"for" + tooltipValue} /></div>
                <ToolTip text = {tooltipValue} id = {"for" + tooltipValue} />
            </React.Fragment>
        );
    }
}
 
export default MatrixIcon;