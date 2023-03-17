import React , {useEffect} from 'react';
import {useData} from '../Providers/DataProvider';
import Input from "../Common/Input"
import HeadingLabel from '../Common/HeadingLabel';

const BasicInfo = ()  => {

    const[data , setData] = useData();

    const valueGetter = (key) => {
        return data[key]["value"]
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

    // for values input
    const valueSetter = (event) => {
        const component = event.target
        const values = component.value
        const id = component.id
        const newValue = {...data , [id] : {...data[id] , "value" : values}}
        setData(newValue)
    }

    useEffect(() => {
        const textarea = document.getElementById("work");
        textarea.style.height = "auto";
        textarea.style.height = (textarea.scrollHeight + 50) + "px"
    })
    
    return (
        <React.Fragment>
            {/* Title - labal */}
            <HeadingLabel disableState = {true} onChechboxClicked = {onChechboxClicked} title = "Title" 
            onSwitchClicked = {onSwitchClicked} checkedstate = {true}  checkAlign = {alignGetter("title")}/>
            {/* title input values */}
            <div className="m-1 ms-3 ms-md-5">
                <Input updates = {valueSetter} placeholder = "Your intro" id = "title" defaultValue = {valueGetter("title")}/>
            </div>

            {/* Subtitle - labal */}
            <HeadingLabel disableState = {false} onChechboxClicked = {onChechboxClicked} title = "Subtitle" 
            onSwitchClicked = {onSwitchClicked} checkedstate = {data["subtitle"]["active"]} checkAlign = {alignGetter("subtitle")}/>
            {/* Subtitle input values */}
            <div className="m-1 ms-3 ms-md-5">
                <Input updates = {valueSetter} placeholder = "Your Subtitle" id="subtitle" defaultValue = {valueGetter("subtitle")}/>
            </div>

            {/* Work - labal */}
            <HeadingLabel disableState = {false} onChechboxClicked = {onChechboxClicked} title = "Work" 
            onSwitchClicked = {onSwitchClicked} checkedstate = {data["work"]["active"]} checkAlign = {alignGetter("work")}/>
            {/* Work textarea */}
            <div className="form-floating m-1 ms-3 ms-md-5">
                <textarea className="form-control my-1" placeholder="Say something about you" id="work" 
                style={{height: "100px", resize:"none"}} defaultValue =  {valueGetter("work")} onChange = {valueSetter}></textarea>
            </div>
        </React.Fragment>
    );
}
 
export default BasicInfo;