import React , {useState} from "react";
import Editor from "./Editor";
import Preview from "./Preview";
import "../resources/styles.css"

const Demo = () => {

    const btnClass = "btn btn-secondary btn-sm m-2 rounded-2"
    const [currentShow , setCurrentShow] = useState(<Preview/>)

    const moveModes = (event , view) => {
        if(view === "markdown") setCurrentShow(<Editor/>)
        else setCurrentShow(<Preview/>)
    }

    return (
        <React.Fragment>
            <div className="">
                <div className="d-flex move-btn-bg rounded-top py-1 pe-2 justify-content-end">
                    <button className={btnClass + " ms-3"} onClick= {(event) => moveModes(event , "markdown")}>Markdown</button>
                    <button className={btnClass} onClick= {(event) => moveModes(event ,"preview")}>Preview</button>
                </div>
            
                <div className="px-2" >
                    {currentShow}
                </div>
            </div>
        </React.Fragment>
    );
}
 
export default Demo;