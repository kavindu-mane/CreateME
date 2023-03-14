import React, { useEffect } from 'react'
import HeadingLabel from './HeadingLabel';
import "../resources/styles.css"
import AddSkillButton from './AddSkillButton';
import { useData } from './DataProvider';

const Skills = () => {

    const[data , setData] = useData()

    useEffect(() => {
    })

    return ( 
        <React.Fragment>
            <HeadingLabel disableState ={false} onChechboxClicked = {null} 
            onSwitchClicked ={null} title = "Skills" checkedstate = {true} checkAlign = {false}/>
            
            <h5 className='ps-1 fw-normal'>Languages</h5>
            <hr className='mt-0'/>
            <div className="mt-4">
                {data["skill"]["value"].slice(0,36).map((a ,i) => <AddSkillButton key = {i} icon = {a[0]} sign = "add" link = {a[2]}/>)}
            </div>

            <h5 className='pe-1 fw-normal mt-5 text-end'>Frontend Development</h5>
            <hr className='mt-0'/>
            <div className="mt-4 text-end">
                {data["skill"]["value"].slice(36, 57).map((a ,i) => <AddSkillButton key = {i} icon = {a[0]} sign = "add" link = {a[2]}/>)}
            </div>

            <h5 className='ps-1 fw-normal mt-5'>Backend Development</h5>
            <hr className='mt-0'/>
            <div className="mt-4">
                {data["skill"]["value"].slice(57 ,68).map((a ,i) => <AddSkillButton key = {i} icon = {a[0]} sign = "add" link = {a[2]}/>)}
            </div>

            <h5 className='pe-1 fw-normal mt-5 text-end'>Mobile App Development</h5>
            <hr className='mt-0'/>
            <div className="mt-4 text-end">
                {data["skill"]["value"].slice(68 ,75).map((a ,i) => <AddSkillButton key = {i} icon = {a[0]} sign = "add" link = {a[2]}/>)}
            </div>

            <h5 className='ps-1 fw-normal mt-5'>AI/ML</h5>
            <hr className='mt-0'/>
            <div className="mt-4">
                {data["skill"]["value"].slice(75 , 81).map((a ,i) => <AddSkillButton key = {i} icon = {a[0]} sign = "add" link = {a[2]}/>)}
            </div>

            <h5 className='pe-1 fw-normal mt-5 text-end'>Database</h5>
            <hr className='mt-0'/>
            <div className="mt-4 text-end">
                {data["skill"]["value"].slice(81 , 95).map((a ,i) => <AddSkillButton key = {i} icon = {a[0]} sign = "add" link = {a[2]}/>)}
            </div>

            <h5 className='ps-1 fw-normal mt-5'>Data Visualization</h5>
            <hr className='mt-0'/>
            <div className="mt-4">
                {data["skill"]["value"].slice(95 , 100).map((a ,i) => <AddSkillButton key = {i} icon = {a[0]} sign = "add" link = {a[2]}/>)}
            </div>

            <h5 className='pe-1 fw-normal mt-5 text-end'>Devops</h5>
            <hr className='mt-0'/>
            <div className="mt-4 text-end">
                {data["skill"]["value"].slice(100 , 110).map((a ,i) => <AddSkillButton key = {i} icon = {a[0]} sign = "add" link = {a[2]}/>)}
            </div>

            <h5 className='ps-1 fw-normal mt-5'>Frameworks</h5>
            <hr className='mt-0'/>
            <div className="mt-4">
                {data["skill"]["value"].slice(110 , 119).map((a ,i) => <AddSkillButton key = {i} icon = {a[0]} sign = "add" link = {a[2]}/>)}
            </div>

            <h5 className='pe-1 fw-normal mt-5 text-end'>Backend as a Service (BaaS)</h5>
            <hr className='mt-0'/>
            <div className="mt-4 text-end">
                {data["skill"]["value"].slice(119 , 123).map((a ,i) => <AddSkillButton key = {i} icon = {a[0]} sign = "add" link = {a[2]}/>)}
            </div>

            <h5 className='ps-1 fw-normal mt-5'>Testing</h5>
            <hr className='mt-0'/>
            <div className="mt-4">
                {data["skill"]["value"].slice(123 , 130).map((a ,i) => <AddSkillButton key = {i} icon = {a[0]} sign = "add" link = {a[2]}/>)}
            </div>

            <h5 className='pe-1 fw-normal mt-5 text-end'>Static Site Generators</h5>
            <hr className='mt-0'/>
            <div className="mt-4 text-end">
                {data["skill"]["value"].slice(130 , 146).map((a ,i) => <AddSkillButton key = {i} icon = {a[0]} sign = "add" link = {a[2]}/>)}
            </div>

            <h5 className='ps-1 fw-normal mt-5'>Others</h5>
            <hr className='mt-0'/>
            <div className="mt-4">
                {data["skill"]["value"].slice(146 , 164).map((a ,i) => <AddSkillButton key = {i} icon = {a[0]} sign = "add" link = {a[2]}/>)}
            </div>

        </React.Fragment>
     );
}
 
export default Skills;