import React from 'react'
import {useData} from "../Providers/DataProvider"

const ProfileViewCounterSetting = () => {

    const[data , setData] = useData();

    const themeActiveOrNot = (theme) => {
        return data["profile-views"]["logo-type"] === theme ? " active" : "";
    }

    const changeTheme = (event) => {
        const newValue =  event.target.textContent      
        setData({...data , "profile-views" : {...data["profile-views"] , "logo-type" : newValue}})
    }

    const themeGetter = () => {
        return data["profile-views"]["logo-type"]
    }

    const coloreActiveOrNot = (theme) => {
        return data["profile-views"]["color"] === theme ? " active" : "";
    }

    const changeColor = (event) => {
        const newValue =  event.target.textContent      
        setData({...data , "profile-views" : {...data["profile-views"] , "color" : newValue}})
    }

    const ColorGetter = () => {
        return data["profile-views"]["color"]
    }

    const colours = ["Blue" , "Brightgreen" , "Green" , "Yellow" , "Yellowgreen" , "Orange" , "Red" , "Grey" , "Lightgrey" , "Blueviolet"]

    return ( 
        <React.Fragment>
            <div className="d-flex justify-content-center border border-1 border-primary rounded py-2 my-3 mx-3 mx-md-5 mb-5 row">
                <div className="dropdown col-12 col-sm-6 text-center">
                    <button className="btn btn-transpaent border-0 dropdown-toggle" type="button" data-bs-toggle="dropdown" 
                    aria-expanded="false">
                        Theme :&ensp; {themeGetter()} &ensp; 
                    </button>
                
                    <ul className="dropdown-menu dropdown-menu-end">
                        <li className={"dropdown-item" + themeActiveOrNot("Flat")} onClick = {(event) => changeTheme(event)}>Flat</li>
                        <li className={"dropdown-item" + themeActiveOrNot("Flat Square")} onClick = {(event) => changeTheme(event)}>Flat Square</li>
                        <li className={"dropdown-item" + themeActiveOrNot("For the Badge")} onClick = {(event) => changeTheme(event)}>For the Badge</li>
                        <li className={"dropdown-item" + themeActiveOrNot("Plastic")} onClick = {(event) => changeTheme(event)}>Plastic</li>
                    </ul>
                </div>

                <div className="dropdown col-12 col-sm-6 text-center">
                    <button className="btn btn-transpaent border-0 dropdown-toggle" type="button" data-bs-toggle="dropdown" 
                    aria-expanded="false">
                        Color :&ensp; {ColorGetter()} &ensp; 
                    </button>
                
                    <ul className="dropdown-menu dropdown-menu-end">
                        {colours.map((element , i) => {
                           return (<li key={i} className={"dropdown-item" + coloreActiveOrNot(element)} onClick = {(event) => changeColor(event)}>{element}</li>)
                        })}

                    </ul>

                </div>
            </div>
        </React.Fragment>
     );
}
 
export default ProfileViewCounterSetting;