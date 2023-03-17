import React  from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import {useMarkdown} from "../Providers/MarkDownProvider";

export default function Preview() {
    const [markdown] = useMarkdown();
    return (
        <ReactMarkdown children={markdown} rehypePlugins={[rehypeRaw]}
        className="w-100 p-1 bg-transparent" remarkPlugins= {[remarkGfm]}  />
    )
}
