import React , {useState , useEffect} from 'react';
import {useMarkdown} from "./MarkDownProvider";
import "../resources/styles.css"

const BasicInfo = ()  => {

    const [,setMarkdown] = useMarkdown();
    const [title , setTitle] = useState("Hi , I'm")
    const [titleValue , setTitleValue] = useState("")
    const [subtitle , setSubtitle] = useState("abcdddd")
    const [active , setActive] = useState({"title": true , "subtitle":true})
    const [align , setAlign] = useState({"title": "left" , "subtitle":"left"})

    const onChechboxClicked = (event) =>{
        // let active = event.target.checked
    }

    let addingValue = {
        "title" : {
            "left" : `# ${title}`,
            "center" : ""
        },
        "subtitle" : {
            "left" : `### ${subtitle}`,
            "center" : ""
        }
    }

    let settings = {
        "title":  `${addingValue["title"][align["title"]]}  ${titleValue}`,
        "subtitle": `${addingValue["title"][align["subtitle"]]}`
        
    }

    const idToSetValue = (id , value) => {
        if (id === "title") setTitle(value);
        if (id === "subtitle") setSubtitle(value)
    }

    const updateMarkdown = (event) => {
        const value = event.target.value;
        setTitleValue(value)
    }

    const updateMarkdownFromLable = (event) =>{
        const value = event.target.value;
        const id = event.target.id.substring(6);
        idToSetValue(id , value);
    }

    // useEffect for title
    // useEffect(() => {
    //     setMarkdown(addingValue["title"]["left"]  + " " + titleValue)
    // },[title])

    // useEffect(() => {
    //     setMarkdown(addingValue["title"]["left"]  + " " + titleValue)
    // },[titleValue])

    // useEffect for subtitle
    // useEffect(() => {
    //     setMarkdown(addingValue["subtitle"]["left"])
    // },[subtitle])

    useEffect(() => {
        setMarkdown("")
        Object.keys(settings).forEach(element => {
            let currentElemet = settings[element]
            if(active[element]){
                setMarkdown(prevState => ([...prevState , ...currentElemet]))
            }
        });
    },[subtitle])

    
    return (
        <React.Fragment>
            {/* Title - labal */}
            <div className='d-flex ps-1 py-3 d-flex align-items-center'>
                <input type={"checkbox"} id={"title"} value="title" onChange={onChechboxClicked}
                className="form-check-input m-0 opacity-0"/>
                <h3 className='ps-3 m-0 f-raleway fw-light'>Title</h3>
            </div>
            {/* title input values */}
            <div class="m-1 ms-5 row">
                <input type="text" class="form-control my-1" placeholder="Your intro" defaultValue={title} 
                aria-label="title" id = "lable-title" onChange={updateMarkdownFromLable}/>
                <input type="text" class="form-control my-1" placeholder="Name" 
                aria-label="title" id='title' onChange = {updateMarkdown}/>
            </div>

              {/* Subtitle - labal */}
              <div className='d-flex ps-1 py-3 d-flex align-items-center'>
                <input type={"checkbox"} id={"title"} value="title" onChange={onChechboxClicked}
                className="form-check-input m-0"/>
                <h3 className='ps-3 m-0 f-raleway fw-light'>Subtitle</h3>
            </div>
            {/* Subtitle input values */}
            <div class="m-1 ms-5 row">
                <input type="text" class="form-control my-1" placeholder="Your Subtitle" defaultValue={subtitle} 
                aria-label="subtitle" id = "lable-subtitle" onChange={updateMarkdownFromLable}/>
            </div>
        </React.Fragment>
    );
}
 
export default BasicInfo;