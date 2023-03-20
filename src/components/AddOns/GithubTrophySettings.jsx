import React from 'react'
import { useData } from '../Providers/DataProvider'

const GithubTrophySettings = () => {
    const[data,setData] = useData()

    const getter = (key) => {
        return data["profile-trophy"][key]
    }

    const setter = (key) => {
        const newValue = !data["profile-trophy"][key]
        setData({...data , "profile-trophy" : {...data["profile-trophy"] , [key] : newValue}})
    }

    const themeActiveOrNot = (theme) => {
        return data["profile-trophy"]["theme"] === theme ? " active" : "";
    }

    const changeTheme = (event) => {
        const newValue =  event.target.textContent      
        setData({...data , "profile-trophy" : {...data["profile-trophy"] , "theme" : newValue}})
    }

    const checkBoxes = (key ,  title) => {
        return (
            <div className="d-flex align-items-center py-1 ">
                <input type={"checkbox"} className= {"form-check-input m-0" } style={{cursor:"pointer"}}
                checked = {getter(key)} onChange = {() => setter(key)}/>
                <span className='m-0 addons-author'>&ensp; {title} </span>
            </div>
        )
    }

    const themes = ["Flat" , "Onedark" , "Gruvbox" , "Dracula" , "Monokai" , "Chalk" , "Nord" , "Alduin" , "Darkhub" , "Juicyfresh" , "Buddhism" , "Oldie" ,
    "Radical" , "Onestar" , "Discord" , "Algolia" , "Gitdimmed" , "Tokyonight" , "Matrix" , "Apprentice" , "Dark_dimmed" , "Dark_lover" ]

    return ( 
        <React.Fragment>
             <div className="border border-1 border-primary rounded py-2 my-3 mx-3 mx-md-5 mb-5 row ">

                <div className="dropdown col-12 col-sm-6 text-center d-flex align-items-center justify-content-center">
                    <button className="btn btn-transpaent border-0 dropdown-toggle" type="button" data-bs-toggle="dropdown" 
                    aria-expanded="false">
                        Theme :&ensp; {getter("theme")} &ensp; 
                    </button>

                    <ul className="dropdown-menu dropdown-menu-end">
                        {themes.map((element , i) => {
                        return (<li key={i} className={"dropdown-item" + themeActiveOrNot(element)} onClick = {(event) => changeTheme(event)}>{element}</li>)
                        })}

                    </ul> 
                </div>

                <div className="dropdown col-12 col-sm-6 text-center">
                    {/* hide border */}
                    {checkBoxes("hide-border" , "Hide border")}
                    
                    {/* transparent background */}
                    {checkBoxes("no-bg" , "Transparent background")}
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default GithubTrophySettings;