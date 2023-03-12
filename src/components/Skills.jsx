import React from 'react'
import HeadingLabel from './HeadingLabel';
import "../resources/styles.css"

const Skills = () => {
    return ( 
        <React.Fragment>
            <HeadingLabel disableState ={false} onChechboxClicked = {null} 
            onSwitchClicked ={null} title = "Skills" checkedstate = {true} checkAlign = {false}/>
            <h5 className='ps-1 fw-normal'>Programming Languages</h5>
        </React.Fragment>
     );
}
 
export default Skills;