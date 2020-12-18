import React from "react";
import "./Resume.css";
import {Document} from 'react-pdf';




const Resume = () => {



  return <div id={"resumeDiv"} className={"resume-container"}>
<Document file="https://moodle.selu.edu/moodle/pluginfile.php/3505778/mod_resource/content/5/Syllabus_cmps339_F20.pdf"/>
 </div>;
};
export default Resume;
