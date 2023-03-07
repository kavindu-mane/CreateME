import React , {Component} from "react";
import Section from "./Section";

class Sections extends Component {
    render() { 
        return (
            <React.Fragment>
                <div className="mt-5 pt-5">
                    <Section style_class={"col-md-6"} caption_1 = {"Show Your"} caption_2 = {"SKILLS"}
                    caption_3 = {"Add 100+ programming languages , technologies and tools."} />
                    <Section style_class={"col-md-6"} caption_1 = {"Show Your"} caption_2 = {"SOCIAL"}
                    caption_3 = {"Add your all favorite social media profiles.support 20+ platforms."}/>
                    <Section style_class={"col-md-6"} caption_1 = {"Show Your"} caption_2 = {"STATS"}
                    caption_3 = {"Add your GitHub statistic for give an idea to profile viewers."}/>
                    <Section style_class={"col-12 d-md-flex"} caption_1 = {"Copy Your"} caption_2 = {"MARKDOWN"}
                    caption_3 = {"Copy your generated markdown script and add it to GitHub profile Repo README.md file"}/>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Sections;