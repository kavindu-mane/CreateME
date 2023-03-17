import React from 'react'

const SocilaMediaInput = ({icon , placeholder}) => {
    return (
        <React.Fragment>
            <div className="col-12 col-md-6 ps-2 pe-0 mb-3">
                <div className="input-group">
                    <span className="input-group-text bg-primary">
                    <img src={`https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/${icon}.svg`} 
                                style={{width:"25px" , filter:"invert()"}} alt={icon}/>
                    </span>
                    <input type="text" className="form-control" aria-label="user names" placeholder={placeholder}/>
                </div>
            </div>
        </React.Fragment>
      
     );
}
 
export default SocilaMediaInput;