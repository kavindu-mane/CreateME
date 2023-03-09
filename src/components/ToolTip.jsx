import React , {Component} from 'react';
import ReactTooltip from 'react-tooltip';
import "../resources/styles.css";

class ToolTips extends Component {
  render() {
    const{id , text} = this.props;
    return (
    <ReactTooltip id={id}  place = "top" effect='solid' className={'custom-tooltip'}>
      <span>{text}</span>
    </ReactTooltip>
    );
  }
}
 
export default ToolTips;