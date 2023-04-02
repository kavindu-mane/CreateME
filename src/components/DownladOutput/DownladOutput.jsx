import React from 'react'
import { useMarkdown } from '../Providers/MarkDownProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DownladOutput = () => {
    const [markdown,] = useMarkdown();

    const downloadMD = () => {
        const link = document.createElement('a')
        const file = new Blob([markdown] , {type:"text/plain"})
        link.href = URL.createObjectURL(file)
        link.download = "README.md"
        link.click()
        URL.revokeObjectURL(link.href)
        notification("Downloaded")
    }

    const notification = (text) => {
        toast.success(text, 
            {position: "top-center", autoClose: 3000, hideProgressBar: true, closeOnClick: true,
            pauseOnHover: true, draggable: true, progress: undefined, theme: "colored"});
    }

    return ( 
        <React.Fragment>
            <p className="text-center fs-1" style={{color: "var(--addons-title-color)"}}>Successfully created..</p>
 
            <div className="row d-flex justify-content-center p-5">
                <div className="col-12 col-sm-4 d-flex justify-content-center">
                    <button className='btn btn-primary my-3 d-flex justify-content-center download-btn'
                    onClick={downloadMD}>
                    <span className="material-symbols-outlined rotate-span">download</span>&ensp;Donwload</button>
                </div>
                <div className="col-12 col-sm-4 d-flex justify-content-center">
                    <button className='btn btn-primary my-3 d-flex justify-content-center download-btn'
                    onClick={() => {navigator.clipboard.writeText(markdown); notification("Text copied")}}>
                    <span className="material-symbols-outlined rotate-span">file_copy</span>&ensp;Copy</button>
                </div>
                <div className="col-12 col-sm-4 d-flex justify-content-center">
                    <button className='btn btn-primary my-3 d-flex justify-content-center download-btn'
                    onClick={() => {window.location.reload();}}>
                    <span className="material-symbols-outlined rotate-span">autorenew</span>&ensp;Retry</button>
                </div>
            </div>

            {/*click events notification */}
            <ToastContainer position="top-center" autoClose={3000} hideProgressBar newestOnTop={false} closeOnClick
            rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored"/>
        </React.Fragment>
     );
}
 
export default DownladOutput;