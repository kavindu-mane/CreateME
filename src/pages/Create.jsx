import React , {Component} from "react";
import Dashboard from "../components/Dashboard";
import MarkDownProvider from "../components/MarkDownProvider";
import Demo from "../components/Demo";
import "../resources/styles.css"

class Create extends Component {
    render() {
        return (
            <React.Fragment>
                <MarkDownProvider>
                    <div className="container-fluid mt-5 row mx-0 px-4">
                        <diw className="col-lg-6 px-3 mt-5 bg-primary rounded">
                            <Dashboard/>
                        </diw>
                        <diw className="col-lg-6 px-3 mt-5 bg-secondary rounded">
                            <Demo/>
                        </diw>
                    </div>
                </MarkDownProvider>
            </React.Fragment>
        );
    }
}
 
export default Create;