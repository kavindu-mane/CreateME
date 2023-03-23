import React from "react";
import Dashboard from "../components/Dashboard/Dashboard"
import MarkDownProvider from "../components/Providers/MarkDownProvider"
import Demo from "../components/Demo/Demo"
import  { useData } from "../components/Providers/DataProvider";
import "../resources/styles.css"
import GetUsername from "../components/GetUsername/GetUsername";

const Create = () => {

    const commonClass = "col-xl-6 pb-3 border border-secondary rounded-2 create"
    const[data,] = useData()
    const checkUsername = (useName) => {
        if(useName !== ""){
            return(
            <div className="container-fluid my-5 row mx-0 px-4">
                <div className={"mt-5 px-3  " + commonClass}>
                    <Dashboard/>
                </div>
                <div className={"p-0 mt-3 mt-lg-5 " + commonClass}>
                    <Demo/>
                </div>
            </div>
            )
        }else{
            return(
                <div className="container-fluid mx-0 px-4 mt-5 pt-5">
                    <GetUsername/>
                </div>
            )
        }
    }
    return (
        <React.Fragment>
            <MarkDownProvider>
                    {checkUsername(data["username"])}
            </MarkDownProvider>
        </React.Fragment>
    );
}
 
export default Create;