import React from 'react'

const AddOnsTitle = ({title , repo , dev , acc}) => {
    return ( 
        <React.Fragment>
               <div className='ps-3'>
                    <a href={repo} target={"_blank"} rel="noreferrer" 
                    className='fs-4 text-decoration-none addons-title' style={{fontFamily: "'Lato', sans-serif"}}>{title}</a>
                    <span className='fs-6 fst-italic'>&ensp;by&ensp;<a href={acc}
                    className='text-decoration-none addons-author'>{dev}</a></span>
               </div>
        </React.Fragment>
     );
}
 
export default AddOnsTitle;