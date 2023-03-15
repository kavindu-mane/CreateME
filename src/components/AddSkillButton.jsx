import React from 'react'
import "../resources/styles.css"

const AddSkillButton = ({icon , availability , link , index , buttonClick}) => {
    let sign = availability ? "close" : "add"
    let Colorclass = availability ? "added-skill" : "available-skill "

    return ( 
        <React.Fragment>
            <div className="p-0 m-2 m d-inline-flex">
                <button className={'skill-btn-bg px-1 rounded-2 d-flex align-items-center ' + Colorclass} id={"skill-" + index}
                onClick = {(event) => {buttonClick(event)} }>
                    <img src={link} className="pe-1 me-3 border-end border-1 border-dark" alt={icon} width={29} height={29} id = {"imgsk-" + index}/>
                    {icon.toUpperCase()}
                    <span className="material-symbols-outlined ps-1 ms-3 border-start border-1 border-dark" id = {"spnsk-" + index}>{sign}</span>
                </button>
            </div>
        </React.Fragment>
     );
}
 
export default AddSkillButton;