import React, { useState , useEffect} from 'react';
import BasicInfo from '../BasicInfo/BasicInfo';
import Skills from '../Skills/Skills';
import { useData } from '../Providers/DataProvider';
import { useMarkdown } from '../Providers/MarkDownProvider';
import SocialMedia from '../Social/SocialMedia';

const Dashboard = () => {
    const[element , setElement] = useState(<SocialMedia/>) // BasicInfo
    const[nextActive , setNextActive] = useState(1)
    const[backBtnState , setBackBtnState] = useState(true)
    const[backBtnOpacity , setBackBtnOpacity] = useState("")
    const[data , ] = useData()
    const[, setMarkdown] = useMarkdown()

    const elemetMoveNext = (event , next) => {
        if(next === 1) setElement(<Skills/>)
        else if(next === 2) setElement(<SocialMedia/>)

        setNextActive(nextActive + 1)
    }

    const elemetMoveBack = (event , next) => {
        if(next === 3) setElement(<Skills/>)
        else if(next === 2) setElement(<BasicInfo/>)

        setNextActive(nextActive - 1)
    }

    const addSocialNSkill = ( section) => {
        const align = data[section]["align"]
        const logoType = data[section]["logo-type"].replaceAll(" " , "-").toLowerCase()
        let mdText = `<!--START_SECTION:${section.toUpperCase()}-->\n`
        mdText += `## <p align = ${align}> ${data[section]["title"]} </p>\n`
        mdText += `<div align = ${align}>\n`

        if(section === "skill"){
            data[section]["value"].forEach(e => {
                if(e[1]) mdText += `<img src="https://img.shields.io/badge/${e[0]}-%23${e[3]}.svg?style=${logoType}&logo=${e[0]}&logoColor=white" alt=${e[0]} /> 
                &ensp;\n`.replace("#" , "%23").replace("#" , "-sharp").replace("++&" , "plusplus&")
            })
        }else{
            const element = data[section]["value"]
            Object.keys(data[section]["value"]).forEach(e => {
                if(element[e][1] !== "") mdText += `<a href=${element[e][0]+element[e][1]} ><img src="https://img.shields.io/badge/${e}-${element[e][1].replaceAll("-","--")}-%23${element[e][2]}.svg?style=${logoType}&logo=${e}&logoColor=white" 
                alt=${e} /></a> &ensp;\n`.replaceAll("_","__")
            })
        }
        mdText += `</div>\n<!--END_SECTION:${section.toUpperCase()}--><br/>\n\n`

        return mdText
    }

    // get only title , subtitle and work
    const field = Object.keys(data).slice(0,3)

    useEffect(() => {
        setBackBtnState(nextActive === 1 ? true : false)
        setBackBtnOpacity(nextActive === 1 ? " opacity-0" : "")

        // markdown text creation
        let finalMd = ""
        // basic info data add to preview
        field.forEach(element => {
            const startComment = `<!--START_SECTION:${element.toUpperCase()}-->\n`
            const endComment = `<!--END_SECTION:${element.toUpperCase()}-->\n\n`
            const active = data[element]["active"]
            const align = data[element]["align"]
            const value = data[element]["value"]

            if(active){
                finalMd += startComment
                value.split("\n").forEach(line => {
                    const mdFormats = {
                                        "title" :`# <p align = ${align}>${line}</p>\n`,
                                        "subtitle" : `### <p align = ${align}>${line}</p>\n`,
                                        "work":`***<p align = ${align}>${line}</p>***\n`
                                        }
                    finalMd += mdFormats[element]
                });
                finalMd += endComment
            }
        });

        // skill data add to preview
        if(data["skill"]["active"]){
            finalMd += addSocialNSkill("skill")
        }

         // social data add to preview
        if(data["social"]["active"]){
            finalMd += addSocialNSkill("social")
        }

        setMarkdown(finalMd)
    }, [nextActive, field, setMarkdown, data]);

    const backBtnClasses = 'btn fw-bold text-secondary mt-3 bg-transparent border-0 d-flex justify-content-center'

    return (
        <React.Fragment>
            <div className="pb-1">
                <button className={ backBtnClasses+ backBtnOpacity}
                onClick={(event) => elemetMoveBack(event , nextActive)} disabled = {backBtnState}>
                    <span className="material-symbols-outlined">arrow_back</span>
                &ensp;Back</button>
            </div>
            
            {element}

            <div className="px-2 d-flex justify-content-end">
                <button className='btn btn-primary mt-3 px-4'
                onClick={(event) => elemetMoveNext(event , nextActive)}>Next</button>
            </div>
        </React.Fragment>
    );
}
 
export default Dashboard;