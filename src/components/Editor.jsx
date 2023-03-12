import React , {useEffect} from 'react';
import {useMarkdown} from "./MarkDownProvider";

const Editor = () => {
    const [markdown , setMarkdown] = useMarkdown();

    const updateMarkdown = (event) => {
        const value = event.target.value;

        setMarkdown(value)
    }

    useEffect(() => {
        const textarea = document.getElementById("editor");
        textarea.style.height = "auto";
        textarea.style.height = (textarea.scrollHeight + 10) + "px"
    })

    return (  
        <textarea value={markdown} onChange = {updateMarkdown}
        className="w-100 p-1 bg-transparent border-0" id='editor' style={{resize:"none"}} disabled></textarea>
    );
}
 
export default Editor;