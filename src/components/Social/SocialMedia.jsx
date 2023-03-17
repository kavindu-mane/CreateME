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
                <SocilaMediaInput icon="discord" placeholder= "Instagram username" />
                <SocilaMediaInput icon="github" placeholder= "Facebook username" />
                <SocilaMediaInput icon="youtube" placeholder= "Instagram username" />
                <SocilaMediaInput icon="stackoverflow" placeholder= "Facebook username" />
                <SocilaMediaInput icon="quora" placeholder= "Instagram username" />
                <SocilaMediaInput icon="hackerrank" placeholder= "Facebook username" />
                <SocilaMediaInput icon="hackerearth" placeholder= "Instagram username" />
                <SocilaMediaInput icon="medium" placeholder= "Facebook username" />
                <SocilaMediaInput icon="kaggle" placeholder= "Instagram username" />
                <SocilaMediaInput icon="codepen" placeholder= "Facebook username" />
                <SocilaMediaInput icon="leetcode" placeholder= "Instagram username" />
                <SocilaMediaInput icon="dribbble" placeholder= "Facebook username" />
                <SocilaMediaInput icon="pinterest" placeholder= "Instagram username" />
                <SocilaMediaInput icon="tiktok" placeholder= "Facebook username" />
                <SocilaMediaInput icon="twitch" placeholder= "Instagram username" />
                <SocilaMediaInput icon="behance" placeholder= "Facebook username" />
                <SocilaMediaInput icon="dev" placeholder= "Instagram username" />
            </div>
        </React.Fragment>
     );
}
 
export default SocialMedia;