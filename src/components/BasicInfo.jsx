import React , {useState , useEffect} from 'react';
import {useMarkdown} from "./MarkDownProvider";
import "../resources/styles.css"

const BasicInfo = ()  => {

    const [,setMarkdown] = useMarkdown();
    const [title , setTitle] = useState("Hi , I'm")
    const [titleValue , setTitleValue] = useState("")
    const [subtitle , setSubtitle] = useState("A passionate frontend developer from Sri Lanka")
    const [work , setWork] = useState({"working":"🔭 I'm currently working on",
                                        "collaborate":"👯 I'm looking to collaborate on",
                                        "help":"🤝 I'm looking for help with",
                                        "learning":"🌱 I'm currently learning",
                                        "about":"💬 Ask me about",
                                        "reach":"📫 How to reach me",
                                        "project":"👨‍💻 All of my projects are available at",
                                        "article":"📝 I regularly write articles on",
                                        "experience":"📄 Know about my experiences",
                                        "fun":"⚡ Fun fact",
                                        })
    const [workValue , setWorkValue] = useState({"working":"",
                                        "collaborate":"",
                                        "help":"",
                                        "learning":"",
                                        "about":"",
                                        "reach":"",
                                        "project":"",
                                        "article":"",
                                        "experience":"",
                                        "fun":"",
                                        })
    const [active , setActive] = useState({"title": true ,
                                        "subtitle":false ,
                                        "work":false})
    const [align , setAlign] = useState({"title": "center" , 
                                        "subtitle":"left" , 
                                        "work":"left"})

    const onChechboxClicked = (event) =>{
        const activeElement = event.target
        const id = activeElement.value
        let newValue = ""
        if(id === "subtitle") newValue = {...active , "subtitle" : !(active["subtitle"])}
        if(id === "work") newValue = {...active , "work" : !(active["work"])}
        setActive(newValue)
    }

    let addingValue = {
        "title" : {
            "left" : `# ${title} ${titleValue}`,
            "center" : `# <p align ="center">${title} ${titleValue}</p>`
        },
        "subtitle" : {
            "left" : `### ${subtitle}`,
            "center" : `### <p align ="center">${subtitle}</p>`
        },
        "working" : {
            "left" : `##### *${work["working"]} ${workValue["working"]}*`.replace(/\s\**$/,'*'),
            "center" : `##### <p align ="center"><i>${work["working"]} ${workValue["working"]}</i></p>`
        }
    }

    let settings = {
        "title":  `${addingValue["title"][align["title"]]}`,
        "subtitle": `${addingValue["subtitle"][align["subtitle"]]}`,
        "working": `${addingValue["working"][align["work"]]}`,
    }

    const idToSetValue = (id , value) => {
        let newValue = ""
        if (id === "title") setTitle(value);
        if (id === "subtitle") setSubtitle(value)
        if(id === "working") newValue = {...work , "working" : value}

        if (["working"].includes(id)) setWork(newValue)
    }

    const idToSetUserValue = (id , value) => {
        let newValue = ""
        if(id === "title") setTitleValue(value)
        if(id === "working") newValue = {...workValue , "working" : value}

        if (["working"].includes(id)) setWorkValue(newValue)
    }

    const updateMarkdown = (event) => {
        const value = event.target.value;
        const id = event.target.id;
        idToSetUserValue(id , value)
    }

    const updateMarkdownFromLable = (event) =>{
        const value = event.target.value;
        const id = event.target.id.substring(6);
        idToSetValue(id , value);
    }

    useEffect(() => {
        let finalVal = ""
        Object.keys(settings).forEach(element => {
            let currentElemet = settings[element]
            const defaulElement = [`##### <p align ="center"><i> </i></p>` , `##### * *` , `##### **`]
            if (["working"].includes(element)) element = "work"

            if(active[element] && !defaulElement.includes(currentElemet)){
                finalVal += "\n" + currentElemet
            }
        });
        setMarkdown(finalVal)
        // console.log(work)
    })

    
    return (
        <React.Fragment>
            {/* Title - labal */}
            <div className='d-flex ps-1 py-3 d-flex align-items-center'>
                <input type={"checkbox"} id={"title-checkbox"} value="title" onChange={onChechboxClicked}
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
                <input type={"checkbox"} id={"subtitle-checkbox"} value="subtitle" onChange={onChechboxClicked}
                className="form-check-input m-0"/>
                <h3 className='ps-3 m-0 f-raleway fw-light'>Subtitle</h3>
            </div>
            {/* Subtitle input values */}
            <div class="m-1 ms-5 row">
                <input type="text" class="form-control my-1" placeholder="Your Subtitle" defaultValue={subtitle} 
                aria-label="subtitle" id = "lable-subtitle" onChange={updateMarkdownFromLable}/>
            </div>

            {/* Work - labal */}
            <div className='d-flex ps-1 py-3 d-flex align-items-center'>
                <input type={"checkbox"} id={"work-checkbox"} value="work" onChange={onChechboxClicked}
                className="form-check-input m-0"/>
                <h3 className='ps-3 m-0 f-raleway fw-light'>Work</h3>
            </div>
            {/* Working input values */}
            <div class="m-1 ms-5 row">
                <input type="text" class="form-control my-1" placeholder="Working" defaultValue={work["working"]} 
                aria-label="working" id = "lable-working" onChange={updateMarkdownFromLable}/>
                <input type="text" class="form-control my-1" placeholder="Project name or link" 
                aria-label="working" id='working' onChange = {updateMarkdown}/>
            </div>
             {/* Collaborate input values */}
             <div class="m-1 ms-5 row">
                <input type="text" class="form-control my-1" placeholder="collaborate" defaultValue={work["collaborate"]} 
                aria-label="collaborate" id = "lable-collaborate" onChange={updateMarkdownFromLable}/>
                <input type="text" class="form-control my-1" placeholder="Project name or link" 
                aria-label="collaborate" id='collaborate' onChange = {updateMarkdown}/>
            </div>
             {/* Help input values */}
             <div class="m-1 ms-5 row">
                <input type="text" class="form-control my-1" placeholder="help" defaultValue={work["help"]} 
                aria-label="help" id = "lable-help" onChange={updateMarkdownFromLable}/>
                <input type="text" class="form-control my-1" placeholder="Project name or link" 
                aria-label="help" id='help' onChange = {updateMarkdown}/>
            </div>
             {/* Learning input values */}
             <div class="m-1 ms-5 row">
                <input type="text" class="form-control my-1" placeholder="learning" defaultValue={work["learning"]} 
                aria-label="learning" id = "lable-learning" onChange={updateMarkdownFromLable}/>
                <input type="text" class="form-control my-1" placeholder="Frameworks , Courses" 
                aria-label="learning" id='learning' onChange = {updateMarkdown}/>
            </div>
             {/* About input values */}
             <div class="m-1 ms-5 row">
                <input type="text" class="form-control my-1" placeholder="about" defaultValue={work["about"]} 
                aria-label="about" id = "lable-about" onChange={updateMarkdownFromLable}/>
                <input type="text" class="form-control my-1" placeholder="Familiar technologies" 
                aria-label="about" id='about' onChange = {updateMarkdown}/>
            </div>
             {/* Reach input values */}
             <div class="m-1 ms-5 row">
                <input type="text" class="form-control my-1" placeholder="reach" defaultValue={work["reach"]} 
                aria-label="reach" id = "lable-reach" onChange={updateMarkdownFromLable}/>
                <input type="text" class="form-control my-1" placeholder="Email address" 
                aria-label="reach" id='reach' onChange = {updateMarkdown}/>
            </div>
             {/* Project input values */}
             <div class="m-1 ms-5 row">
                <input type="text" class="form-control my-1" placeholder="project" defaultValue={work["project"]} 
                aria-label="project" id = "lable-project" onChange={updateMarkdownFromLable}/>
                <input type="text" class="form-control my-1" placeholder="Portfolio link" 
                aria-label="project" id='project' onChange = {updateMarkdown}/>
            </div>
             {/* Article input values */}
             <div class="m-1 ms-5 row">
                <input type="text" class="form-control my-1" placeholder="article" defaultValue={work["article"]} 
                aria-label="article" id = "lable-article" onChange={updateMarkdownFromLable}/>
                <input type="text" class="form-control my-1" placeholder="Blog link" 
                aria-label="article" id='article' onChange = {updateMarkdown}/>
            </div>
             {/* Experience input values */}
             <div class="m-1 ms-5 row">
                <input type="text" class="form-control my-1" placeholder="experience" defaultValue={work["experience"]} 
                aria-label="experience" id = "lable-experience" onChange={updateMarkdownFromLable}/>
                <input type="text" class="form-control my-1" placeholder="Resume link" 
                aria-label="experience" id='experience' onChange = {updateMarkdown}/>
            </div>
             {/* Fun input values */}
             <div class="m-1 ms-5 row">
                <input type="text" class="form-control my-1" placeholder="fun" defaultValue={work["fun"]} 
                aria-label="fun" id = "lable-fun" onChange={updateMarkdownFromLable}/>
                <input type="text" class="form-control my-1" placeholder="Say something" 
                aria-label="fun" id='fun' onChange = {updateMarkdown}/>
            </div>
        </React.Fragment>
    );
}
 
export default BasicInfo;