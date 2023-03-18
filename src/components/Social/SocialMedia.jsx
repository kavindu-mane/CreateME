import React from 'react'
import { useData } from '../Providers/DataProvider'
import SocilaMediaInput from './SocilaMediaInput'
import SkillNSocialSetting from '../Common/SkillNSocialSetting.jsx'

const SocialMedia = () => {

    const[data , ] = useData()

    const returnIconName = (key) => {
            if(key === "dev.to") return "dev-dot-to"
            else return key
    }

    const returnPlaceHolder = (key) => {
        if(key === "discord") return "Discode invite (code only)"
        else if(key === "stackoverflow") return "Stackoverflow user ID"
        else return (key.charAt(0).toUpperCase() + key.slice(1) + " username")
    }


    return ( 
        <React.Fragment>
            {/*Social setting  */}
           <SkillNSocialSetting section={"social"} title = "Social Media" placeholder= "Connect with me" />

            <div className="container-fluid row p-0 m-0">
                {Object.keys(data["social"]["value"]).map((a , i) => 
                <SocilaMediaInput icon={returnIconName(a)} placeholder= {returnPlaceHolder(a)} key = {i}/>)}
            </div>
        </React.Fragment>
     );
}
 
export default SocialMedia;