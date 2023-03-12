import React from 'react'

const HeadingLabel = ({additionalClass , onChechboxClicked , title , onSwitchClicked}) => {
    return ( 
        <div className='d-flex ps-1 py-3 d-flex align-items-center justify-content-between'>
            <div className='d-flex align-items-center'>
                <input type={"checkbox"} id={title.toLowerCase() + "-checkbox"} value={title.toLowerCase()} 
                onChange={(event) => onChechboxClicked(event)}
                className= {"form-check-input m-0 " + additionalClass}/>
                <h3 className='ps-3 m-0 f-raleway fw-light'>{title}</h3>
            </div>

            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id={title.toLowerCase() + "-switch"} onChange = {(event) => onSwitchClicked(event)} value={title.toLowerCase()}/>
                <label className="form-check-label" htmlFor={title.toLowerCase() + "-switch"}>Center</label>
            </div>

        </div>
     );
}
 
export default HeadingLabel;