import React from 'react';
import {useMarkdown} from "./MarkDownProvider";
import "../resources/styles.css"

const BasicInfo = ()  => {

    const [,setMarkdown] = useMarkdown();

    const onChechboxClicked = (event) =>{
        // let active = event.target.checked
    }

    let defaultKeys = {
        "title" : "Hi , I'm"
    }

    let addingValue = {
        "title" : {
            "left" : `# ${defaultKeys["title"]}`,
            "center" : ""
        }
    }

    const updateMarkdown = (event) => {
        const value = event.target.value;
        const id = event.target.id 

        setMarkdown(addingValue[id]["left"] + " " +  value)
    }

    const updateMarkdownFromLable = (event) =>{
        const value = event.target.value;
        const id = event.target.id.substring(6)
        defaultKeys[id] = value;
        const userValue = event.target.nextElementSibling.value

        setMarkdown(addingValue[id]["left"]  + " " + userValue)
        console.log(addingValue[id]["left"]  + " " + id)
    }
    
    return (
        <React.Fragment>
            <div className='d-flex ps-1 py-3 d-flex align-items-center'>
                <input type={"checkbox"} id={"title"} value="title" onChange={onChechboxClicked}
                className="form-check-input"/>
                <h3 className='ps-3 m-0 f-raleway fw-light'>Title</h3>
            </div>
            <div class="m-1 ms-5 row">
                <input type="text" class="form-control my-1" placeholder="Your intro" defaultValue={defaultKeys["title"]} 
                aria-label="title" id = "lable-title" onChange={updateMarkdownFromLable}/>
                <input type="text" class="form-control my-1" placeholder="Name" 
                aria-label="title" id='title' onChange = {updateMarkdown}/>
            </div>
        </React.Fragment>
    );
}
 
export default BasicInfo;