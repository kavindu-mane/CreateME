import React from 'react'
import { useData } from '../Providers/DataProvider'
import AddSkillButton from './AddSkillButton'

const SkillSection = ({start ,  end , align , title , buttonClick}) => {

    const[data ,] = useData()

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