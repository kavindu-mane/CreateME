import React from 'react'

const Input = ({updates , placeholder , id , defaultValue}) => {
    return (
        <input type="text" className="form-control my-1" placeholder= {placeholder} defaultValue = {defaultValue}
        aria-label={id} id={id} onChange = {(event) => updates(event)}/>
    )
}
export default Input;