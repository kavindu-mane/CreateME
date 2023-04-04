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

    const checkUsername = (userName) => {
        if(userName !== ""){
            return(
            <div className="container-fluid pt-5 mb-5 row mx-0 px-4">
                <div className={"px-3 mt-5 " + commonClass} id = "left-column">
                    <Dashboard/>
                </div>
                <div className={"p-0 mt-3 mt-lg-5 " + commonClass} id = "right-column">
                    <Demo/>
                </div>
            </div>
            )
        }else{
            return(
                <div className="container-fluid mx-0 px-0 px-sm-4 pt-5" id = {"get-username"}>
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