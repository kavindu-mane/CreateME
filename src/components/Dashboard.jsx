import React, { useState , useEffect} from 'react';
import BasicInfo from './BasicInfo';
import Skills from './Skills';
import { useData } from './DataProvider';
import { useMarkdown } from './MarkDownProvider';
import SocialMedia from './SocialMedia';

const Dashboard = () => {
    const[element , setElement] = useState(<SocialMedia/>) // BasicInfo
    const[nextActive , setNextActive] = useState(1)
    const[backBtnState , setBackBtnState] = useState(true)
    const[backBtnOpacity , setBackBtnOpacity] = useState("")
    const[data , ] = useData()
    const[, setMarkdown] = useMarkdown()

    const elemetMoveNext = (event , next) => {
        if(next === 1) setElement(<Skills/>)

        setNextActive(nextActive + 1)
    }

    const elemetMoveBack = (event , next) => {
        if(next === 2) setElement(<BasicInfo/>)

        setNextActive(nextActive - 1)
    }

    // get only title , subtitle and work
    const field = Object.keys(data).slice(0,3)

    useEffect(() => {
        setBackBtnState(nextActive === 1 ? true : false)
        setBackBtnOpacity(nextActive === 1 ? " opacity-0" : "")

        // markdown text creation
        let finalMd = ""
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
                                        "subtitle" : `#### <p align = ${align}>${line}</p>\n`,
                                        "work":`##### <p align = ${align}><i>${line}</i></p>\n`
                                        }
                    finalMd += mdFormats[element]
                });
                finalMd += endComment
            }
        });

        if(data["skill"]["active"]){
            const align = data["skill"]["align"]
            const logoType = data["skill"]["logo-type"].replaceAll(" " , "-").toLowerCase()
            finalMd += `<!--START_SECTION:SKILL-->\n`
            finalMd += `### <p align = ${align}> ${data["skill"]["title"]} </p>\n`
            finalMd += `<div align = ${align}>\n`

            data["skill"]["value"].forEach(e => {
                if(e[1]) finalMd += `<img src="https://img.shields.io/badge/${e[0]}-%23${e[3]}.svg?style=${logoType}&logo=${e[0]}&logoColor=white" alt=${e[0]} /> 
                &ensp;\n`.replace("#" , "%23").replace("#" , "-sharp").replaceAll("+" , "plus")
            })
            finalMd += `</div>\n<!--END_SECTION:SKILL-->\n\n`
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