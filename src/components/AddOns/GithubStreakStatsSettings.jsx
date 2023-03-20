import React from 'react'
import { useData } from '../Providers/DataProvider'

const GithubStreakStatsSettings = () => {
    const[data,setData] = useData()

    const getter = (key) => {
        return data["streak-stats"][key]
    }

    const setter = () => {
        const newValue = !data["streak-stats"]["hide-border"]
        setData({...data , "streak-stats" : {...data["streak-stats"] , "hide-border" : newValue}})
    }

    const themeActiveOrNot = (theme) => {
        return data["streak-stats"]["theme"] === theme ? " active" : "";
    }

    const changeTheme = (event) => {
        const newValue =  event.target.textContent      
        setData({...data , "streak-stats" : {...data["streak-stats"] , "theme" : newValue}})
    }

    const themes = ["Default" , "Transparent" , "Dark" , "Radical" , "Merko" , "Gruvbox" , "Nightowl" , "Tokyonight" , "Onedark" , "Cobalt" , "Synthwave" , "Highcontrast" ,
    "Dracula" , "Prussian" , "Monokai" , "Vue" , "Vue dark" , "Shades of purple" , "Buefy" , "Blue green" , "Algolia" , "Great gatsby" , "Darcula" , "Bear" , "Solarized dark" ,
   "Solarized light" , "Material palenight" , "Graywhite" , "Vision friendly dark" , "Ayu mirage" , "Midnight purple" , "Calm" , "Flag india" , "Omni" , "React" , "Jolly" , "Blueberry" ,
   "Outrun" , "Aura" , "Moltack"]

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

                <div className="dropdown col-12 col-sm-6 d-flex justify-content-center">
                    <div className="d-flex align-items-center py-1 ">
                        <input type={"checkbox"} className= {"form-check-input m-0" } style={{cursor:"pointer"}}
                        checked = {getter("hide-border")} onChange = {() => setter()}/>
                        <span className='m-0 addons-author'>&ensp; Hide border </span>
                    </div>
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default GithubStreakStatsSettings;