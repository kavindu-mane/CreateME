import React from 'react'

const ScrollToTop = () => {

    return ( 
        <React.Fragment>
            <div className="rounded-circle scroll-to-top fs-2 text-center" onClick={() => window.scrollTo(0,0)} id="scroll-top">
            <span className="material-symbols-outlined fw-bold">keyboard_double_arrow_up</span>
            </div>
        </React.Fragment>
    );
}
 
export default ScrollToTop;