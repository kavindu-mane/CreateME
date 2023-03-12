import React from 'react'

const Input = ({updateMarkdown , placeholder , id}) => {
    return (
        <input type="text" className="form-control my-1" placeholder= {placeholder}
        aria-label={id} id={id} onChange = {(event) => updateMarkdown(event)}/>
    )
}
export default Input;