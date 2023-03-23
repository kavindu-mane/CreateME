import React from 'react'
import Image from "../../resources/Telework-bro.svg"
import {useData} from "../Providers/DataProvider"

const GetUsername = () => {
    const[data, setData] = useData();

    const verify = () => {
        const value = document.getElementById("username-input").value
        const notification = document.getElementById("notification")

        if(value.includes(" ")) notification.textContent = "Username cannot include spaces."
        else if(value === "") notification.textContent = "Username is required."

        if(value.includes(" ") || value === "") {
            notification.classList += " keyframe"
            setTimeout(() => notification.classList.remove("keyframe"), 5000)
        }else{
            setData({...data , "username":value})
        }
    }

    // for enter key
    document.addEventListener("keypress" , (event) => {
        if(event.key === "Enter"){
            verify()
        }
    })

    return ( 
        <React.Fragment>
            <div className="container-fluid m-0 row mb-5">
                <div className="col-12 col-md-6 ">
                    <img src={Image} alt="get-username" style={{maxWidth:"800px"}}/>
                </div>
                <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                    <input type="text" name="username-input" id="username-input" placeholder={"Enter your GitHub username"} 
                    className= "p-1 username-input fs-4 fst-italic mt-5 mt-md-0"/>
                    <button className='btn fs-1 mt-1 start-btn mt-5 mt-md-0' onClick={verify}>&rarr;</button>
                </div>
            </div>

            {/*Error notification  */}
            <div className='notification p-2' id='notification'></div>

        </React.Fragment>
     );
}
 
export default GetUsername;