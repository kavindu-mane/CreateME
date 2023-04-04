import React from 'react'
import Image from "../../resources/Telework-bro.svg"
import {useData} from "../Providers/DataProvider"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GetUsername = () => {
    const[data, setData] = useData();

    const verify = () => {
        const value = document.getElementById("username-input").value
        

        if(value.includes(" ")) notification("Username cannot include spaces.")
        else if(value === "") notification("Username is required.")

        if(!(value.includes(" ") || value === "")) {
            fetch("https://api.github.com/users/"+value)
            .then((result) => result.json())
            .then((d) => {
                const name = "Hi , I'm "+ (d["name"] === null ? value : d["name"])
                setData({...data , "title":{...data["title"] , "value" : name} , "username": value})
            })
        }
    }

    const notification = (text) => {
        toast.error(text, 
            {position: "top-center", autoClose: 3000, hideProgressBar: true, closeOnClick: true,
            pauseOnHover: true, draggable: true, progress: undefined, theme: "colored"});
    }

    return ( 
        <React.Fragment>
            <div className="container-fluid m-0 row mt-5 pt-5" onKeyDown={(event) =>  {if(event.key === "Enter") verify()}}>
                <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
                    <h2 className="f-raleway ms-2 username-heading rotate-me">Create
                    <span className="text-primary">ME</span></h2>
                    <h1 style={{fontFamily: "'Lato', sans-serif" , color: "var(--root-font)"}} className="fs-1 ms-2 username-heading">Best Profile README generator.</h1>
                    <div className='d-flex align-items-center ms-2 mt-5 justify-content-center justify-content-sm-start'>
                        <input type="text" name="username-input" id="username-input" placeholder={"Enter your GitHub username"} 
                        className= "p-1 username-input fs-4 fst-italic"/>
                        <button className='btn fs-1 mt-1 start-btn' id="arrow-btn" onClick={verify}>&rarr;</button>
                    </div>
                </div>

                <div className="col-12 col-md-6 mt-5 pt-2 mt-md-0">
                    <img src={Image} alt="get-username" style={{maxWidth:"800px"}}/>
                </div>

            </div>

        {/*Error notification  */}
        <ToastContainer position="top-center" autoClose={3000} hideProgressBar newestOnTop={false} closeOnClick
            rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored"/>

        </React.Fragment>
     );
}
 
export default GetUsername;