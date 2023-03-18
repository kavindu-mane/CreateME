import React from 'react'
import { useData } from '../Providers/DataProvider'
import SocilaMediaInput from './SocilaMediaInput'
import SkillNSocialSetting from '../Common/SkillNSocialSetting.jsx'

const SocialMedia = () => {

    const[data , setData] = useData()

    return ( 
        <React.Fragment>
            {/*Social setting  */}
           <SkillNSocialSetting section={"social"} title = "Social Media" placeholder= "Connect with me" />

            <div className="container-fluid row p-0 m-0">
                <SocilaMediaInput icon="facebook" placeholder= "Facebook username" />
                <SocilaMediaInput icon="instagram" placeholder= "Instagram username" />
                <SocilaMediaInput icon="twitter" placeholder= "Twitter username" />
                <SocilaMediaInput icon="linkedin" placeholder= "Linkedin username" />
                <SocilaMediaInput icon="reddit" placeholder= "Reddit username" />
                <SocilaMediaInput icon="discord" placeholder= "Discode invite (code only)" />
                <SocilaMediaInput icon="github" placeholder= "Github username" />
                <SocilaMediaInput icon="youtube" placeholder= "Youtube channel" />
                <SocilaMediaInput icon="stackoverflow" placeholder= "Stackoverflow user ID" />
                <SocilaMediaInput icon="quora" placeholder= "Quora username" />
                <SocilaMediaInput icon="hackerrank" placeholder= "Hackerrank username" />
                <SocilaMediaInput icon="hackerearth" placeholder= "Hackerearth username" />
                <SocilaMediaInput icon="medium" placeholder= "Medium username" />
                <SocilaMediaInput icon="kaggle" placeholder= "Kaggle username" />
                <SocilaMediaInput icon="codepen" placeholder= "Codepen username" />
                <SocilaMediaInput icon="leetcode" placeholder= "Leetcode username" />
                <SocilaMediaInput icon="dribbble" placeholder= "Dribbble username" />
                <SocilaMediaInput icon="pinterest" placeholder= "Pinterest username" />
                <SocilaMediaInput icon="tiktok" placeholder= "Tiktok username" />
                <SocilaMediaInput icon="twitch" placeholder= "Twitch username" />
                <SocilaMediaInput icon="behance" placeholder= "Behance username" />
                <SocilaMediaInput icon="dev-dot-to" placeholder= "Dev.to username" />
            </div>
        </React.Fragment>
     );
}
 
export default SocialMedia;