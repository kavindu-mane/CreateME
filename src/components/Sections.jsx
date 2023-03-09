import React , {Component} from "react";
import ImageArea from "./ImageArea";
import Section from "./Section";
import SkillMatrix from "./SkillMatrix";
import SocialMatrix from "./SocialMatrix";
import SectionSwaped from "./SectionSwaped"

class Sections extends Component {
    render() { 
        return (
            <React.Fragment>
                <div className="mt-5 pt-5">
                    <Section style_class={"col-md-6"} caption_1 = {"Show Your"} caption_2 = {"SKILLS"}
                    caption_3 = {"Add 100+ programming languages , technologies and tools."} ><SkillMatrix/></Section>
                    <SectionSwaped style_class={"col-md-6"} caption_1 = {"Show Your"} caption_2 = {"SOCIAL"}
                    caption_3 = {"Add your all favorite social media profiles.support 20+ platforms."}><SocialMatrix/></SectionSwaped>
                    <Section style_class={"col-md-6"} caption_1 = {"Show Your"} caption_2 = {"STATS"}
                    caption_3 = {"Add your GitHub statistic for give an idea to profile viewers."}><ImageArea image = {"stats"}/></Section>
                    <Section style_class={"col-12 d-md-flex"} caption_1 = {"Copy Your"} caption_2 = {"MARKDOWN"}
                    caption_3 = {"Copy your generated markdown script and add it to GitHub profile Repo README.md file"}><ImageArea/></Section>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Sections;