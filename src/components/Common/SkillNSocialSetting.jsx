import React from 'react'
import { useData } from '../Providers/DataProvider'
import HeadingLabel from './HeadingLabel'
import Input from './Input'

const SkillNSocialSetting = ({section , placeholder , title}) => {

    const[data , setData] = useData()

    const themeGetter = () => {
        return data[section]["logo-type"]
    }

    const themeActiveOrNot = (theme) => {
        return data[section]["logo-type"] === theme ? " active" : "";
    }

    const changeTheme = (event) => {
        const newValue =  event.target.textContent      
        setData({...data , [section] : {...data[section] , "logo-type" : newValue}})
    }

    const setHeading = (event) => {
        const title = event.target.value
        setData({...data , [section] : {...data[section] , "title" : title}})
    }

    const onSwitchClicked = (event) => {
        const newValue = data[section]["align"] === "left" ? "center" : "left"
        setData({...data , [section] : {...data[section] , "align" : newValue}})
    }

    const onChechboxClicked = (event) => {
        const newValue = !data[section]["active"]
        setData({...data , [section] : {...data[section] , "active" : newValue}})
    }

    const alignGetter = () => {
        return data[section]["align"] === "left" ? false : true
    }

    return ( 
        <React.Fragment>
             <HeadingLabel disableState ={false} onChechboxClicked = {onChechboxClicked} 
            onSwitchClicked ={onSwitchClicked} title = {title} checkedstate = {data[section]["active"]} checkAlign = {alignGetter()}/>

             <div className="mt-3 mb-2 ms-2">
                <Input updates = {setHeading} placeholder = {placeholder} id = {section + "-title"} defaultValue = {data[section]["title"]}/>
            </div>

             <div className="d-flex justify-content-center border border-1 border-primary rounded py-2 m-2 me-0 mb-5">
                <div className="dropdown">
                    <button className="btn btn-transpaent border-0 dropdown-toggle" type="button" data-bs-toggle="dropdown" 
                    aria-expanded="false">
                        Theme : &ensp; {themeGetter()} &ensp; 
                    </button> &ensp;
                    <img src={`https://img.shields.io/badge/Facebook-%234285F4.svg?style=${themeGetter().replaceAll(" " , "-").toLowerCase()}&logo=Facebook&logoColor=white`} alt="Facebook" /> 
                
                    <ul className="dropdown-menu dropdown-menu-end">
                        <li className={"dropdown-item" + themeActiveOrNot("Flat")} onClick = {(event) => changeTheme(event)}>Flat</li>
                        <li className={"dropdown-item" + themeActiveOrNot("Flat Square")} onClick = {(event) => changeTheme(event)}>Flat Square</li>
                        <li className={"dropdown-item" + themeActiveOrNot("For the Badge")} onClick = {(event) => changeTheme(event)}>For the Badge</li>
                        <li className={"dropdown-item" + themeActiveOrNot("Plastic")} onClick = {(event) => changeTheme(event)}>Plastic</li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default SkillNSocialSetting;