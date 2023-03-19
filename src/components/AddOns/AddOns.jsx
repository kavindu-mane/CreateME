import React from 'react'
import { useData } from '../Providers/DataProvider';
import AddOnsTitle from './AddOnsTitle';
import ProfileViewCounterSetting from './ProfileViewCountSetting';

const AddOns = () => {
    const[data , setData] = useData()
    const useName = data["username"]

    const getColor = () => {
        return data["profile-views"]["color"].toLowerCase()
    }

    const getStyle = () => {
        return data["profile-views"]["logo-type"].toLowerCase().replaceAll(" " ,"-")
    }

    const getActiveStatus = () => {
        return data["profile-views"]["active"]
    }

    const setActionStatus = () => {
        const newValue =  !data["profile-views"]["active"]
        setData({...data , "profile-views" : {...data["profile-views"] , "active" : newValue}})
    }

    return ( 
        <React.Fragment>
             <h3 className='ps-3 m-0 mb-3 f-raleway fw-light'>Add-ons</h3>

            {/* visitors counter */}
            <AddOnsTitle title = "GitHub Profile Views Counter" repo = "https://github.com/antonkomarev/github-profile-views-counter"
            dev = "Anton Komarev" acc = "https://github.com/antonkomarev"/>

            <ProfileViewCounterSetting/>
            <div className="d-flex justify-content-center">
                <img src={`https://komarev.com/ghpvc/?username=${useName}&color=${getColor()}&style=${getStyle()}`} alt={useName} />
            </div>

            <div className="d-flex align-items-center justify-content-center mt-3">
                <input type={"checkbox"} className= {"form-check-input m-0" } style={{cursor:"pointer"}}
                checked = {getActiveStatus()} onChange = {() => setActionStatus()}/>
                <span className='m-0 addons-author'>&ensp; Add visitors Count </span>
            </div>
            <hr/>

            {/* github readme stats */}
            <AddOnsTitle title = "GitHub README Stats" repo = "https://github.com/anuraghazra/github-readme-stats"
            dev = "Anurag Hazra" acc = "https://github.com/anuraghazra"/>
            
            <ProfileViewCounterSetting/>
        </React.Fragment>
     );
}
 
export default AddOns;