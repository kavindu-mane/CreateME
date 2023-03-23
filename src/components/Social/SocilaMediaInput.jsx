import React from 'react'
import { useData } from '../Providers/DataProvider';

const SocilaMediaInput = ({icon , placeholder}) => {

    const[data,setData] = useData()

    const addUserValue = (event) => {
        const newValue = event.target.value
        let key = icon
        if(icon === "dev-dot-to") key = "dev.to"
        let arr = data["social"]["value"][key]
        arr[1] = newValue
        setData({...data , "social":{...data["social"] , "value":{...data["social"]["value"] , [key]: arr}}})
    }

    const getDefaultValue = () => {
        let key = icon
        if(icon === "dev-dot-to") key = "dev.to"
        return (data["social"]["value"][key][1])
    }

    return (
        <React.Fragment>
            <div className="col-12 col-md-6 ps-2 pe-0 mb-3">
                <div className="input-group">
                    <span className="input-group-text bg-primary">
                    <img src={`https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/${icon}.svg`} 
                                style={{width:"25px" , filter:"invert()"}} alt={icon}/>
                    </span>
                    <input type="text" className="form-control" aria-label="user names"
                     placeholder={placeholder} onChange = {(event) => addUserValue(event)} 
                     defaultValue = {getDefaultValue()}/>
                </div>
            </div>
        </React.Fragment>
      
     );
}
 
export default SocilaMediaInput;