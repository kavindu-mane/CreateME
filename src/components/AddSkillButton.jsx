import React from 'react'
import "../resources/styles.css"

const AddSkillButton = ({icon , sign , link}) => {
    return ( 
        <React.Fragment>
            <div className="p-0 m-2 m d-inline-flex">
                <button className='btn skill-btn-bg px-1 rounded-2 d-flex align-items-center' id={icon}>
                    <img src={link} className="pe-1 me-3 border-end border-1 border-dark" alt={icon} width={29} height={29}/>
                    {icon.toUpperCase()}
                    <span className="material-symbols-outlined ps-1 ms-3 border-start border-1 border-dark">{sign}</span>
                </button>
            </div>
        </React.Fragment>
     );
}
 
export default AddSkillButton;