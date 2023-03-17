import React from 'react'
import { useData } from '../Providers/DataProvider'
import AddSkillButton from './AddSkillButton'

const SkillSection = ({start ,  end , align , title}) => {

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

    return ( 
        <React.Fragment>
            <h5 className={'ps-1 fw-normal mt-5 ' + align}>{title}</h5>
            <hr className='mt-0'/>
            <div className={"mt-4 " + align}>
                {data["skill"]["value"].slice(start,end).map((a ,i) => <AddSkillButton key = {i} icon = {a[0]} availability = {a[1]} link = {a[2]} 
                index = {start + i} buttonClick = {buttonClick}/>)}
            </div>
        </React.Fragment>
     );
}
 
export default SkillSection;