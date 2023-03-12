import React , {useState , useEffect} from 'react';
import {useMarkdown} from "./MarkDownProvider";
import Input from "./Input"
import "../resources/styles.css"
import InputLabel from './InputLabel';
import HeadingLabel from './HeadingLabel';

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

    const [align , setAlign] = useState({"title": "left" , 
                                        "subtitle":"left" , 
                                        "work":"left"})

    // for checkboxes
    const onChechboxClicked = (event) =>{
        const activeElement = event.target
        const id = activeElement.value
        let newValue = {...active , [id]: !(active[id])}
        setActive(newValue)
    }

    // for slign switches
    const onSwitchClicked = (event) =>{
        const activeElement = event.target
        const id = activeElement.value
        const currentValue = align[id]
        const chnageValue = (currentValue === "left" ? "center" : "left")
        let newValue = {...align , [id]: chnageValue }
        setAlign(newValue)
    }
    


    // work field list
    const workField = Object.keys(work)

    // Markdown value designer
    let addingValue = {
        "title" : {
            "left" : `# ${title} ${titleValue}`,
            "center" : `# <p align ="center">${title} ${titleValue}</p>`
        },
        "subtitle" : {
            "left" : `### ${subtitle}`,
            "center" : `### <p align ="center">${subtitle}</p>`
        },
        ...Object.fromEntries(
            workField.map(key =>[key , 
                {
                    "left" : `##### *${work[key]} ${workValue[key]}*`.replace(/\s*\**$/,'*'),
                    "center" : `##### <p align ="center"><i>${work[key]} ${workValue[key]}</i></p>`
                }
            ])
        )
    }

    let settings = {
        "title":  `${addingValue["title"][align["title"]]}`,
        "subtitle": `${addingValue["subtitle"][align["subtitle"]]}`,
        ...Object.fromEntries(
            workField.map(key =>[key , `${addingValue[key][align["work"]]}`])
        )
    }

    const idToValueHelper = (id , value , type) => {
        let newValue = ""
        workField.forEach(key =>{
            if (id === key) {
                if(type === 1){
                    newValue = {...work , [key] : value}
                    setWork(newValue)
                } else{
                    newValue = {...workValue , [key] : value}
                    setWorkValue(newValue)
                }
            }
        })
    }

    const idToSetValue = (id , value) => {
        if (id === "title") setTitle(value);
        if (id === "subtitle") setSubtitle(value)
        idToValueHelper(id , value , 1)
    }

    const idToSetUserValue = (id , value) => {
        if(id === "title") setTitleValue(value)
        idToValueHelper(id , value , 0)
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
            const prevElement = element
            if (workField.includes(element)) element = "work"

            if(active[element] && !defaulElement.includes(currentElemet)){
                if(element === "title" || element === "subtitle"){
                    finalVal += `<!--START_SECTION:${element.toUpperCase()}-->\n${currentElemet}\n<!--END_SECTION:${element.toUpperCase()}-->\n\n`
                }else if (element === "work" && prevElement === "working"){
                    finalVal += `<!--START_SECTION:${element.toUpperCase()}-->\n${currentElemet}`
                }else if(element === "work" && prevElement === "fun"){
                    finalVal += `\n${currentElemet}\n<!--END_SECTION:${element.toUpperCase()}-->\n\n`
                }else{
                    finalVal += `\n${currentElemet}`
                }
                
            }
        });
        setMarkdown(finalVal)
    })

    
    return (
        <React.Fragment>
            {/* Title - labal */}
            <HeadingLabel additionalClass = "opacity-0" onChechboxClicked = {onChechboxClicked} title = "Title" onSwitchClicked = {onSwitchClicked}/>
            {/* title input values */}
            <div className="m-1 ms-5 row">
                <InputLabel updateMarkdownFromLable = {updateMarkdownFromLable} placeholder = "Your intro" id="title" defaultValue = {title}/>
                <Input updateMarkdown = {updateMarkdown} placeholder = "Name" id = "title"/>
            </div>

            {/* Subtitle - labal */}
            <HeadingLabel additionalClass = "" onChechboxClicked = {onChechboxClicked} title = "Subtitle" onSwitchClicked = {onSwitchClicked}/>
            {/* Subtitle input values */}
            <div className="m-1 ms-5 row">
                <InputLabel updateMarkdownFromLable = {updateMarkdownFromLable} placeholder = "Your Subtitle" id="subtitle" defaultValue = {subtitle}/>
            </div>

            {/* Work - labal */}
            <HeadingLabel additionalClass = "" onChechboxClicked = {onChechboxClicked} title = "Work" onSwitchClicked = {onSwitchClicked}/>
            {/* Working input values */}
            <div className="m-1 ms-5 row">
                <InputLabel updateMarkdownFromLable = {updateMarkdownFromLable} placeholder = "working" id="working" defaultValue = {work["working"]}/>
                <Input updateMarkdown = {updateMarkdown} placeholder = "Project name or link" id = "working"/>
            </div>
            {/* Collaborate input values */}
             <div className="m-1 ms-5 row mt-3">
                <InputLabel updateMarkdownFromLable = {updateMarkdownFromLable} placeholder = "collaborate" id="collaborate" defaultValue = {work["collaborate"]}/>
                <Input updateMarkdown = {updateMarkdown} placeholder = "Project name or link" id = "collaborate"/>
            </div>
            {/* Help input values */}
             <div className="m-1 ms-5 row mt-3">
                <InputLabel updateMarkdownFromLable = {updateMarkdownFromLable} placeholder = "help" id="help" defaultValue = {work["help"]}/>
                <Input updateMarkdown = {updateMarkdown} placeholder = "Project name or link" id = "help"/>
            </div>
            {/* Learning input values */}
             <div className="m-1 ms-5 row mt-3">
                <InputLabel updateMarkdownFromLable = {updateMarkdownFromLable} placeholder = "learning" id="learning" defaultValue = {work["learning"]}/>
                <Input updateMarkdown = {updateMarkdown} placeholder = "Frameworks , Courses" id = "learning"/>
            </div>
            {/* About input values */}
             <div className="m-1 ms-5 row mt-3">
                <InputLabel updateMarkdownFromLable = {updateMarkdownFromLable} placeholder = "about" id="about" defaultValue = {work["about"]}/>
                <Input updateMarkdown = {updateMarkdown} placeholder = "Familiar technologies" id = "about"/>
            </div>
            {/* Reach input values */}
             <div className="m-1 ms-5 row mt-3">
                <InputLabel updateMarkdownFromLable = {updateMarkdownFromLable} placeholder = "reach" id="reach" defaultValue = {work["reach"]}/>
                <Input updateMarkdown = {updateMarkdown} placeholder = "Email address" id = "reach"/>
            </div>
            {/* Project input values */}
             <div className="m-1 ms-5 row mt-3">
                <InputLabel updateMarkdownFromLable = {updateMarkdownFromLable} placeholder = "project" id="project" defaultValue = {work["project"]}/>
                <Input updateMarkdown = {updateMarkdown} placeholder = "Portfolio link" id = "project"/>
            </div>
            {/* Article input values */}
             <div className="m-1 ms-5 row mt-3">
                <InputLabel updateMarkdownFromLable = {updateMarkdownFromLable} placeholder = "article" id="article" defaultValue = {work["article"]}/>
                <Input updateMarkdown = {updateMarkdown} placeholder = "Blog link" id = "article"/>
            </div>
            {/* Experience input values */}
             <div className="m-1 ms-5 row mt-3">
                <InputLabel updateMarkdownFromLable = {updateMarkdownFromLable} placeholder = "experience" id="experience" defaultValue = {work["experience"]}/>
                <Input updateMarkdown = {updateMarkdown} placeholder = "Resume link" id = "experience"/>
            </div>
            {/* Fun input values */}
             <div className="m-1 ms-5 row mt-3">
                <InputLabel updateMarkdownFromLable = {updateMarkdownFromLable} placeholder = "fun" id="fun" defaultValue = {work["fun"]}/>
                <Input updateMarkdown = {updateMarkdown} placeholder = "Say something" id = "fun"/>
            </div>
        </React.Fragment>
    );
}
 
export default BasicInfo;