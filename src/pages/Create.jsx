import React , {Component} from "react";
import Dashboard from "../components/Dashboard";
import MarkDownProvider from "../components/MarkDownProvider";
import Demo from "../components/Demo";
import "../resources/styles.css"

class Create extends Component {
    render() {
        const commonClass = "col-lg-6 pb-3 border border-2 border-2 border-secondary rounded create"
        return (
            <React.Fragment>
                <MarkDownProvider>
                    <div className="container-fluid my-5 row mx-0 px-4">
                        <div className={"mt-5 px-3  " + commonClass}>
                            <Dashboard/>
                        </div>
                        <div className={"p-0 mt-3 mt-lg-5 " + commonClass}>
                            <Demo/>
                        </div>
                    </div>
                </MarkDownProvider>
            </React.Fragment>
        );
    }
}
 
export default Create;