import React, { useState } from 'react'
import SkillNSocialSetting from '../Common/SkillNSocialSetting.jsx';
import { useData } from '../Providers/DataProvider.jsx';
import SkillSection from './SkillSection';
import AddSkillButton from './AddSkillButton'

const Skills = () => {
    const[data, setData] = useData()
    const[searchTerm , setSearchTerm] = useState("")
    const skillList = data["skill"]["value"]

    // add or remove skill
    const buttonClick = (event) => {
        const index = event.target.id.slice(6)
        let temp1 = data["skill"]["value"]
        let temp2 = temp1[index]
        temp2[1] = !temp2[1]
        temp1[index] = temp2
        setData({...data , "skill" : {...data["skill"] , "value" : temp1}})
    }

    const setReasult = () => {
        if(searchTerm !== ""){
            const items = skillList.filter(item => item[0].indexOf(searchTerm.toLocaleLowerCase()) !== -1)
            if(items.length === 0){
                return(
                    <div className='mt-5 text-center'>
                        <p>"{searchTerm}" is not available.</p>
                    </div>
                )
            }else{
                return(
                    <div className='mt-5'>
                        {items.map((a ,i) => <AddSkillButton key = {i} icon = {a[0]} availability = {a[1]} link = {a[2]} 
                        index = {skillList.indexOf(a)} buttonClick = {buttonClick}/>)}
                    </div>
                )
            }
        }else{
            return(
                <>
                    {/* Skill Sections */}
                    <SkillSection start={0} end = {36} align = "" title = "Languages" buttonClick = {buttonClick}/>
                    <SkillSection start={36} end = {57} align = "text-end" title = "Frontend Development" buttonClick = {buttonClick}/>
                    <SkillSection start={57} end = {68} align = "" title = "Backend Development" buttonClick = {buttonClick}/>
                    <SkillSection start={68} end = {75} align = "text-end" title = "Mobile App Development" buttonClick = {buttonClick}/>
                    <SkillSection start={75} end = {81} align = "" title = "AI/ML" buttonClick = {buttonClick}/>
                    <SkillSection start={81} end = {95} align = "text-end" title = "Database" buttonClick = {buttonClick}/>
                    <SkillSection start={95} end = {100} align = "" title = "Data Visualization" buttonClick = {buttonClick}/>
                    <SkillSection start={100} end = {110} align = "text-end" title = "Devops" buttonClick = {buttonClick}/>
                    <SkillSection start={110} end = {119} align = "" title = "Frameworks" buttonClick = {buttonClick}/>
                    <SkillSection start={119} end = {123} align = "text-end" title = "Backend as a Service (BaaS)" buttonClick = {buttonClick}/>
                    <SkillSection start={123} end = {130} align = "" title = "Testing" buttonClick = {buttonClick}/>
                    <SkillSection start={130} end = {146} align = "text-end" title = "Static Site Generators" buttonClick = {buttonClick}/>
                    <SkillSection start={146} end = {165} align = "" title = "Others" buttonClick = {buttonClick}/>
                </>
            )
        }
    }
    return ( 
        <React.Fragment>

            {/*Skill setting  */}
            <SkillNSocialSetting section={"skill"} title = "Skills" placeholder="Tech stack"/>

            <div className="d-flex justify-content-center mx-2 row" style={{marginTop:"-2rem"}}>
                <div className="col-12 col-sm-8 col-md-6">
                    <input type="text" className="form-control" placeholder= {"Search"} 
                    onChange = {(event) => setSearchTerm(event.target.value)} />
                </div>
            </div>
            
            {setReasult()}

        </React.Fragment>
     );
}
 
export default Skills;