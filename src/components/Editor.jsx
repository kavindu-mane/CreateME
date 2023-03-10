import React from 'react';
import {useMarkdown} from "./MarkDownProvider";

const Editor = () => {
    const [markdown , setMarkdown] = useMarkdown();

    const updateMarkdown = (event) => {
        const value = event.target.value;

        setMarkdown(value)
    }

    return (  
        <textarea value={markdown} onChange = {updateMarkdown}
        className="w-100 p-1 bg-transparent border-primary"></textarea>
    );
}
 
export default Editor;