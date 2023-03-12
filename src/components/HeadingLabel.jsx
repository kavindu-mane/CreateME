import React from 'react'

const HeadingLabel = ({disableState , onChechboxClicked , title , onSwitchClicked , checkedstate , checkAlign}) => {
    return ( 
        <div className='d-flex ps-1 py-3 d-flex align-items-center justify-content-between'>
            <div className='d-flex align-items-center'>
                <input type={"checkbox"} id={"checkbox-" + title.toLowerCase() } value={title.toLowerCase()} 
                onChange={(event) => onChechboxClicked(event)}
                className= {"form-check-input m-0" + (disableState ? " opacity-0": "")} style={{cursor:"pointer"}} 
                disabled={disableState} checked = {checkedstate}/>
                <h3 className='ps-3 m-0 f-raleway fw-light'>{title}</h3>
            </div>

            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id={"switch-" + title.toLowerCase()} 
                onChange = {(event) => onSwitchClicked(event)} value={title.toLowerCase()} style={{cursor:"pointer"}} checked = {checkAlign}/>
                <label className="form-check-label" htmlFor={title.toLowerCase() + "-switch"}
                style={{cursor:"pointer"}} >Center</label>
            </div>

        </div>
     );
}
 
export default HeadingLabel;