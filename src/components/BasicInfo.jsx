import React from 'react';
import {useData} from './DataProvider';
import Input from "./Input"
import HeadingLabel from './HeadingLabel';
import "../resources/styles.css"

const BasicInfo = ()  => {

    const[data , setData] = useData();

    const titleGetter = (key) => {
        if(key === "title" || key === "subtitle") return data[key]["title"]
        else return data["work"][key]["title"]
    }

    const valueGetter = (key) => {
        if(key === "title" || key === "subtitle") return data[key]["value"]
        else return data["work"][key]["value"]
    }

    const alignGetter = (key) => {
        return data[key]["align"] === "left" ? false : true
    }

    // for checkboxes
    const onChechboxClicked = (event) =>{
       const component = event.target.id.substring(9)
       const newValue = !(data[component]["active"])
       setData({...data , [component] : {...data[component] , "active":newValue}})
    }

    // for slign switches
    const onSwitchClicked = (event) =>{
        const component = event.target.id.substring(7)
        const newValue = (data[component]["align"]) === "left" ? "center" : "left"
        setData({...data , [component] : {...data[component] , "align":newValue}})
    }

    const updateTitleHelper = (key , value) => {
        if(key === "title" || key === "subtitle") return {...data[key] , "title": value}
        else return {...data["work"] , [key] : {...data["work"][key] ,  "title": value}}
    }

    const updateValueHelper = (key , value) => {
        if(key === "title" || key === "subtitle") return {...data[key] , "value": value}
        else return {...data["work"] , [key] : {...data["work"][key] ,  "value": value}}
    }

    const setterHelper = (component) => {
        const value = component.value
        const key = component.id.substring(0 , 5) === "label" ? component.id.substring(6) : component.id
        const mainKey = (key === "title" || key === "subtitle") ? key : "work"
        return [value , key , mainKey]
    }

    // for values input
    const valueSetter = (event) => {
        const values = setterHelper(event.target)
        const newValue = {...data , [values[2]] : updateValueHelper(values[1] , values[0])}
        setData(newValue)
    }

    // for title input
    const titleSetter = (event) => {
        const values = setterHelper(event.target)
        const newValue = {...data , [values[2]] : updateTitleHelper(values[1] , values[0])}
        setData(newValue)
    }
    
    return (
        <React.Fragment>
            {/* Title - labal */}
            <HeadingLabel disableState = {true} onChechboxClicked = {onChechboxClicked} title = "Title" 
            onSwitchClicked = {onSwitchClicked} checkedstate = {true}  checkAlign = {alignGetter("title")}/>
            {/* title input values */}
            <div className="m-1 ms-5 row">
                <Input updates = {titleSetter} placeholder = "Your intro" id="label-title" defaultValue = {titleGetter("title")}/>
                <Input updates = {valueSetter} placeholder = "Name" id = "title" defaultValue = {valueGetter("title")}/>
            </div>

            {/* Subtitle - labal */}
            <HeadingLabel disableState = {false} onChechboxClicked = {onChechboxClicked} title = "Subtitle" 
            onSwitchClicked = {onSwitchClicked} checkedstate = {data["subtitle"]["active"]} checkAlign = {alignGetter("subtitle")}/>
            {/* Subtitle input values */}
            <div className="m-1 ms-5 row">
                <Input updates = {titleSetter} placeholder = "Your Subtitle" id="label-subtitle" defaultValue = {titleGetter("subtitle")}/>
            </div>

            {/* Work - labal */}
            <HeadingLabel disableState = {false} onChechboxClicked = {onChechboxClicked} title = "Work" 
            onSwitchClicked = {onSwitchClicked} checkedstate = {data["work"]["active"]} checkAlign = {alignGetter("work")}/>
            {/* Working input values */}
            <div className="m-1 ms-5 row">
                <Input updates = {titleSetter} placeholder = "working" id="label-working" defaultValue = {titleGetter("working")}/>
                <Input updates = {valueSetter} placeholder = "Project name or link" id = "working" defaultValue = {valueGetter("working")}/>
            </div>
            {/* Collaborate input values */}
             <div className="m-1 ms-5 row mt-3">
                <Input updates = {titleSetter} placeholder = "collaborate" id="label-collaborate" defaultValue = {titleGetter("collaborate")}/>
                <Input updates = {valueSetter} placeholder = "Project name or link" id = "collaborate" defaultValue = {valueGetter("collaborate")}/>
            </div>
            {/* Help input values */}
             <div className="m-1 ms-5 row mt-3">
                <Input updates = {titleSetter} placeholder = "help" id="label-help" defaultValue = {titleGetter("help")}/>
                <Input updates = {valueSetter} placeholder = "Project name or link" id = "help" defaultValue = {valueGetter("help")}/>
            </div>
            {/* Learning input values */}
             <div className="m-1 ms-5 row mt-3">
                <Input updates = {titleSetter} placeholder = "learning" id="label-learning" defaultValue = {titleGetter("learning")}/>
                <Input updates = {valueSetter} placeholder = "Frameworks , Courses" id = "learning" defaultValue = {valueGetter("learning")}/>
            </div>
            {/* About input values */}
             <div className="m-1 ms-5 row mt-3">
                <Input updates = {titleSetter} placeholder = "about" id="label-about" defaultValue = {titleGetter("about")}/>
                <Input updates = {valueSetter} placeholder = "Familiar technologies" id = "about" defaultValue = {valueGetter("about")}/>
            </div>
            {/* Reach input values */}
             <div className="m-1 ms-5 row mt-3">
                <Input updates = {titleSetter} placeholder = "reach" id="label-reach" defaultValue = {titleGetter("reach")}/>
                <Input updates = {valueSetter} placeholder = "Email address" id = "reach" defaultValue = {valueGetter("reach")}/>
            </div>
            {/* Project input values */}
             <div className="m-1 ms-5 row mt-3">
                <Input updates = {titleSetter} placeholder = "project" id="label-project" defaultValue = {titleGetter("project")}/>
                <Input updates = {valueSetter} placeholder = "Portfolio link" id = "project" defaultValue = {valueGetter("project")}/>
            </div>
            {/* Article input values */}
             <div className="m-1 ms-5 row mt-3">
                <Input updates = {titleSetter} placeholder = "article" id="label-article" defaultValue = {titleGetter("article")}/>
                <Input updates = {valueSetter} placeholder = "Blog link" id = "article" defaultValue = {valueGetter("article")}/>
            </div>
            {/* Experience input values */}
             <div className="m-1 ms-5 row mt-3">
                <Input updates = {titleSetter} placeholder = "experience" id="label-experience" defaultValue = {titleGetter("experience")}/>
                <Input updates = {valueSetter} placeholder = "Resume link" id = "experience" defaultValue = {valueGetter("experience")}/>
            </div>
            {/* Fun input values */}
             <div className="m-1 ms-5 row mt-3">
                <Input updates = {titleSetter} placeholder = "fun" id="label-fun" defaultValue = {titleGetter("fun")}/>
                <Input updates = {valueSetter} placeholder = "Say something" id = "fun" defaultValue = {valueGetter("fun")}/>
            </div>
        </React.Fragment>
    );
}
 
export default BasicInfo;