import React, { useState , useEffect} from 'react';
import BasicInfo from './BasicInfo';
import Skills from './Skills';
import { useData } from './DataProvider';
import { useMarkdown } from './MarkDownProvider';

const Dashboard = () => {
    const[element , setElement] = useState(<Skills/>) // BasicInfo
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

    const field = Object.keys(data)
    const workField = Object.keys(data["work"]).slice(0,10)

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

            if(element === "work" && active){
                finalMd += startComment

                workField.forEach(el => {
                    const title = data[element][el]["title"]
                    const value = data[element][el]["value"]
                    finalMd += `##### <p align = ${align}><i>${title} ${value}</i></p>\n`
                });

                finalMd += endComment
            }else if(active){
                const title = data[element]["title"]
                const value = data[element]["value"]
                const hashes = element === "title" ? "#" : "####"
                finalMd += `${startComment}  ${hashes} <p align = ${align}>${title} ${value}</p>\n ${endComment}`
            }
        });

        setMarkdown(finalMd)
    }, [nextActive, field, setMarkdown, data, workField]);

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