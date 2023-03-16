import React from 'react'
import { useData } from './DataProvider'
import HeadingLabel from './HeadingLabel'
import Input from './Input'

const SocialMedia = () => {

    const[data , setData] = useData()

    const setSocialHeading = (event) => {
        const title = event.target.value
        setData({...data , "social" : {...data["social"] , "title" : title}})
    }

    const onSwitchClicked = (event) => {
        const newValue = data["social"]["align"] === "left" ? "center" : "left"
        setData({...data , "social" : {...data["social"] , "align" : newValue}})
    }

    const onChechboxClicked = (event) => {
        const newValue = !data["social"]["active"]
        setData({...data , "social" : {...data["social"] , "active" : newValue}})
    }

    const alignGetter = () => {
        return data["social"]["align"] === "left" ? false : true
    }

    const themeGetter = () => {
        return data["social"]["logo-type"]
    }

    const themeActiveOrNot = (theme) => {
        return data["social"]["logo-type"] === theme ? " active" : "";
    }

    const changeTheme = (event) => {
        const newValue =  event.target.textContent      
        setData({...data , "social" : {...data["social"] , "logo-type" : newValue}})
    }

    return ( 
        <React.Fragment>
            <HeadingLabel disableState ={false} onChechboxClicked = {onChechboxClicked} 
            onSwitchClicked ={onSwitchClicked} title = "Social Media" checkedstate = {data["social"]["active"]} checkAlign = {alignGetter()}/>

             <div className="mt-3 mb-2 ms-2">
                <Input updates = {setSocialHeading} placeholder = "Social links" id = "social-title" defaultValue = {data["social"]["title"]}/>
            </div>

            {/*Skill theme  */}
            <div className="d-flex justify-content-center border border-1 border-primary rounded py-2 m-2 mb-5">
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
 
export default SocialMedia;