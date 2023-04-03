import React , {useState} from "react";
import Editor from "./Editor";
import Preview from "./Preview";

const Demo = () => {

    const btnClass = "btn btn-sm m-2 rounded-2 text-white d-flex"
    const [currentShow , setCurrentShow] = useState(<Preview/>)

    const moveModes = (event , view) => {
        if(view === "markdown") setCurrentShow(<Editor/>)
        else setCurrentShow(<Preview/>)
        event.target.classList.add("btn-primary")
        event.target.classList.remove("btn-secondary")

        const prevBtn = document.getElementById(view === "markdown" ? "preview-btn":"markdown-btn")
        prevBtn.classList.add("btn-secondary")
        prevBtn.classList.remove("btn-primary")
        
    }

    return (
        <React.Fragment>
            <div className="">
                <div className="d-flex move-btn-bg rounded-top py-1 pe-2 justify-content-end">
                    <button className={btnClass + " ms-3 btn-secondary"} onClick= {(event) => moveModes(event , "markdown")} id="markdown-btn">
                    <span className="material-symbols-outlined me-1" style={{transform:"scale(0.8)"}}>arrow_downward</span>Markdown</button>
                    <button className={btnClass + " btn-primary"} onClick= {(event) => moveModes(event ,"preview")} id="preview-btn">
                    <span className="material-symbols-outlined me-1" style={{transform:"scale(0.8)"}}>visibility</span>Preview</button>
                </div>
            
                <div className="px-2" >
                    {currentShow}
                </div>
            </div>
        </React.Fragment>
    );
}
 
export default Demo;