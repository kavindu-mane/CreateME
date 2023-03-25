import React from 'react'

const DownladOutput = () => {
    return ( 
        <React.Fragment>
            <p className="text-center fs-1" style={{color: "var(--addons-title-color)"}}>Create successfully...</p>
 
            <div className="row d-flex justify-content-center p-5">
                <div className="col-12 col-sm-4 d-flex justify-content-center">
                    <button className='btn btn-primary my-3 d-flex justify-content-center' style={{width:"150px"}}>
                    <span class="material-symbols-outlined">download</span>&ensp;Donwload</button>
                </div>
                <div className="col-12 col-sm-4 d-flex justify-content-center">
                    <button className='btn btn-primary my-3 d-flex justify-content-center' style={{width:"150px"}}>
                    <span class="material-symbols-outlined">file_copy</span>&ensp;Copy</button>
                </div>
                <div className="col-12 col-sm-4 d-flex justify-content-center">
                    <button className='btn btn-primary my-3 d-flex justify-content-center' style={{width:"150px"}}>
                    <span class="material-symbols-outlined">autorenew</span>&ensp;Retry</button>
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default DownladOutput;