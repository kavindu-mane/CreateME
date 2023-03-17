import React , {Component} from "react";
import MatrixRow from "./MatrixRow";

class SkillMatrix extends Component {
    render() { 
        const icons = [["cplusplus" , "python" , "java" , "javascript"] , 
                            ["php" , "c" , "react" , "html5"] ,
                            ["swift" , "kotlin" , "mongodb" , "r"] ,
                            ["css3" , "figma" , "arduino" , "ruby"]]

        return (
            <React.Fragment>
                <div className="row pt-3 pt-md-0">
                    <MatrixRow icon_1 = {icons[0][0]} icon_2 = {icons[0][1]} icon_3 = {icons[0][2]} icon_4 = {icons[0][3]} section ={1}/>
                    <MatrixRow icon_1 = {icons[1][0]} icon_2 = {icons[1][1]} icon_3 = {icons[1][2]} icon_4 = {icons[1][3]} section ={1}/>
                    <MatrixRow icon_1 = {icons[2][0]} icon_2 = {icons[2][1]} icon_3 = {icons[2][2]} icon_4 = {icons[2][3]} section ={1}/>
                    <MatrixRow icon_1 = {icons[3][0]} icon_2 = {icons[3][1]} icon_3 = {icons[3][2]} icon_4 = {icons[3][3]} section ={1}/>
                </div>
            </React.Fragment>
        );
    }
}
 
export default SkillMatrix;