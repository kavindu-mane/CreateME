import React , {Component} from "react";
import Editor from "./Editor";
import Preview from "./Preview";
import "../resources/styles.css"

class Demo extends Component {
    render() {
        return (
            <React.Fragment>
                <diw className="">
                    <div className="">
                        <Editor/>
                    </div>
                    <div className="" >
                        <Preview/>
                    </div>
                </diw>
            </React.Fragment>
        );
    }
}
 
export default Demo;