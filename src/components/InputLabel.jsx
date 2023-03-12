import React from 'react'
import "../resources/styles.css"

const InputLabel = ({updateMarkdownFromLable , placeholder , id , defaultValue}) => {
    return (
        <input type="text" className="form-control my-1" placeholder= {placeholder} defaultValue = {defaultValue}
        aria-label={id} id={"lable-"+id} onChange = {(event) => updateMarkdownFromLable(event)} />
    )
}
export default InputLabel;