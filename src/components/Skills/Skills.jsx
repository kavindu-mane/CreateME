import React from 'react'
import SkillNSocialSetting from '../Common/SkillNSocialSetting.jsx';
import SkillSection from './SkillSection';

const Skills = () => {
    return ( 
        <React.Fragment>

            {/*Skill setting  */}
            <SkillNSocialSetting section={"skill"} title = "Skills" placeholder="Tech stack"/>

            {/* Skill Sections */}
            <SkillSection start={0} end = {36} align = "" title = "Languages"/>
            <SkillSection start={36} end = {57} align = "text-end" title = "Frontend Development"/>
            <SkillSection start={57} end = {68} align = "" title = "Backend Development"/>
            <SkillSection start={68} end = {75} align = "text-end" title = "Mobile App Development"/>
            <SkillSection start={75} end = {81} align = "" title = "AI/ML"/>
            <SkillSection start={81} end = {95} align = "text-end" title = "Database"/>
            <SkillSection start={95} end = {100} align = "" title = "Data Visualization"/>
            <SkillSection start={100} end = {110} align = "text-end" title = "Devops"/>
            <SkillSection start={110} end = {119} align = "" title = "Frameworks"/>
            <SkillSection start={119} end = {123} align = "text-end" title = "Backend as a Service (BaaS)"/>
            <SkillSection start={123} end = {130} align = "" title = "Testing"/>
            <SkillSection start={130} end = {146} align = "text-end" title = "Static Site Generators"/>
            <SkillSection start={146} end = {164} align = "" title = "Others"/>

        </React.Fragment>
     );
}
 
export default Skills;