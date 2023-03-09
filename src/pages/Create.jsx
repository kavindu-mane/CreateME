import React , {Component} from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import "../resources/styles.css"
import MarkDown from "./Markdown.md"

class Create extends Component {
    render() {

        return (
            <React.Fragment>
                <diw className="container-fluid mt-5 row mx-0 px-4">
                    <div className="col-lg-6 px-3 mt-5 bg-secondary rounded">aaaaaaa</div>
                    <div className="col-lg-6 px-3 mt-5 bg-primary rounded" >
                        <ReactMarkdown children={MarkDown} rehypePlugins={[rehypeRaw]}
                        remarkPlugins= {[remarkGfm]}  /></div>
                </diw>
            </React.Fragment>
        );
    }
}
 
export default Create;