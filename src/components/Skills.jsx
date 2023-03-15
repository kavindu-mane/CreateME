import React, { useEffect } from 'react'
import HeadingLabel from './HeadingLabel';
import "../resources/styles.css"
import AddSkillButton from './AddSkillButton';
import { useData } from './DataProvider';
import Input from './Input';

const Skills = () => {

    const[data , setData] = useData()

    // add or remove skill
    const buttonClick = (event) => {
        const index = event.target.id.slice(6)
        let temp1 = data["skill"]["value"]
        let temp2 = temp1[index]
        temp2[1] = !temp2[1]
        temp1[index] = temp2
        setData({...data , "skill" : {...data["skill"] , "value" : temp1}})
    }

    const setSkillHeading = (event) => {
        const title = event.target.value
        setData({...data , "skill" : {...data["skill"] , "title" : title}})
    }

    const onSwitchClicked = (event) => {
        const newValue = data["skill"]["align"] === "left" ? "center" : "left"
        setData({...data , "skill" : {...data["skill"] , "align" : newValue}})
    }

    const onChechboxClicked = (event) => {
        const newValue = !data["skill"]["active"]
        setData({...data , "skill" : {...data["skill"] , "active" : newValue}})
    }

    const alignGetter = () => {
        return data["skill"]["align"] === "left" ? false : true
    }

    useEffect(() => {
        console.log(data)
    })

    return ( 
        <React.Fragment>
            <HeadingLabel disableState ={false} onChechboxClicked = {onChechboxClicked} 
            onSwitchClicked ={onSwitchClicked} title = "Skills" checkedstate = {data["skill"]["active"]} checkAlign = {alignGetter()}/>

             <div className="mt-3 mb-5 ms-2">
                <Input updates = {setSkillHeading} placeholder = "Tech stack" id = "skill-title" defaultValue = {data["skill"]["title"]}/>
            </div>

            <h5 className='ps-1 fw-normal'>Languages</h5>
            <hr className='mt-0'/>
            <div className="mt-4">
                {data["skill"]["value"].slice(0,36).map((a ,i) => <AddSkillButton key = {i} icon = {a[0]} availability = {a[1]} link = {a[2]} 
                index = {i} buttonClick = {buttonClick}/>)}
            </div>

            <h5 className='pe-1 fw-normal mt-5 text-end'>Frontend Development</h5>
            <hr className='mt-0'/>
            <div className="mt-4 text-end">
                {data["skill"]["value"].slice(36, 57).map((a ,i) => <AddSkillButton key = {i} icon = {a[0]} availability = {a[1]} link = {a[2]} 
                index = {36 + i} buttonClick = {buttonClick} />)}
            </div>

            <h5 className='ps-1 fw-normal mt-5'>Backend Development</h5>
            <hr className='mt-0'/>
            <div className="mt-4">
                {data["skill"]["value"].slice(57 ,68).map((a ,i) => <AddSkillButton key = {i} icon = {a[0]} availability = {a[1]} link = {a[2]} 
                index = {57 + i} buttonClick = {buttonClick} />)}
            </div>

            <h5 className='pe-1 fw-normal mt-5 text-end'>Mobile App Development</h5>
            <hr className='mt-0'/>
            <div className="mt-4 text-end">
                {data["skill"]["value"].slice(68 ,75).map((a ,i) => <AddSkillButton key = {i} icon = {a[0]} availability = {a[1]} link = {a[2]} 
                index = {68 + i} buttonClick = {buttonClick} />)}
            </div>

            <h5 className='ps-1 fw-normal mt-5'>AI/ML</h5>
            <hr className='mt-0'/>
            <div className="mt-4">
                {data["skill"]["value"].slice(75 , 81).map((a ,i) => <AddSkillButton key = {i} icon = {a[0]} availability = {a[1]} link = {a[2]} 
                index = {75 + i}  buttonClick = {buttonClick} />)}
            </div>

            <h5 className='pe-1 fw-normal mt-5 text-end'>Database</h5>
            <hr className='mt-0'/>
            <div className="mt-4 text-end">
                {data["skill"]["value"].slice(81 , 95).map((a ,i) => <AddSkillButton key = {i} icon = {a[0]} availability = {a[1]} link = {a[2]} 
                index = {81 + i}  buttonClick = {buttonClick} />)}
            </div>

            <h5 className='ps-1 fw-normal mt-5'>Data Visualization</h5>
            <hr className='mt-0'/>
            <div className="mt-4">
                {data["skill"]["value"].slice(95 , 100).map((a ,i) => <AddSkillButton key = {i} icon = {a[0]} availability = {a[1]} link = {a[2]} 
                index = {95 + i}  buttonClick = {buttonClick} />)}
            </div>

            <h5 className='pe-1 fw-normal mt-5 text-end'>Devops</h5>
            <hr className='mt-0'/>
            <div className="mt-4 text-end">
                {data["skill"]["value"].slice(100 , 110).map((a ,i) => <AddSkillButton key = {i} icon = {a[0]} availability = {a[1]} link = {a[2]} 
                index = {100 + i}  buttonClick = {buttonClick} />)}
            </div>

            <h5 className='ps-1 fw-normal mt-5'>Frameworks</h5>
            <hr className='mt-0'/>
            <div className="mt-4">
                {data["skill"]["value"].slice(110 , 119).map((a ,i) => <AddSkillButton key = {i} icon = {a[0]} availability = {a[1]} link = {a[2]} 
                index = {110 + i}  buttonClick = {buttonClick} />)}
            </div>

            <h5 className='pe-1 fw-normal mt-5 text-end'>Backend as a Service (BaaS)</h5>
            <hr className='mt-0'/>
            <div className="mt-4 text-end">
                {data["skill"]["value"].slice(119 , 123).map((a ,i) => <AddSkillButton key = {i} icon = {a[0]} availability = {a[1]} link = {a[2]} 
                index = {119 + i}  buttonClick = {buttonClick} />)}
            </div>

            <h5 className='ps-1 fw-normal mt-5'>Testing</h5>
            <hr className='mt-0'/>
            <div className="mt-4">
                {data["skill"]["value"].slice(123 , 130).map((a ,i) => <AddSkillButton key = {i} icon = {a[0]} availability = {a[1]} link = {a[2]} 
                index = {123 + i}  buttonClick = {buttonClick} />)}
            </div>

            <h5 className='pe-1 fw-normal mt-5 text-end'>Static Site Generators</h5>
            <hr className='mt-0'/>
            <div className="mt-4 text-end">
                {data["skill"]["value"].slice(130 , 146).map((a ,i) => <AddSkillButton key = {i} icon = {a[0]} availability = {a[1]} link = {a[2]} 
                index = {130 + i}  buttonClick = {buttonClick} />)}
            </div>

            <h5 className='ps-1 fw-normal mt-5'>Others</h5>
            <hr className='mt-0'/>
            <div className="mt-4">
                {data["skill"]["value"].slice(146 , 164).map((a ,i) => <AddSkillButton key = {i} icon = {a[0]} availability = {a[1]} link = {a[2]} 
                index = {146 + i}  buttonClick = {buttonClick} />)}
            </div>

        </React.Fragment>
     );
}
 
export default Skills;