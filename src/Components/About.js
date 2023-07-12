import React from "react";
// import harika from "./images/harika.jpg";
const About = ()=>{

    return(
        <div className="about">
            <h1>About</h1>
            <img src={require("./images/harika.jpg")} alt="Harika"/>
            <p>"Hello, everyone! My name is Harika Kasharaju, and I'm delighted to introduce myself as a highly motivated professional in the field of Electronics and Communication Engineering (ECE). With a passion for technology and a drive for continuous learning, I graduated in ECE in 2019.<br/>

After completing my degree, I dedicated two years to rigorous preparation for the Graduate Aptitude Test in Engineering (GATE). This experience not only enhanced my technical skills but also instilled in me a strong work ethic, discipline, and problem-solving abilities.<br/>

Currently, I am embarking on an exciting new journey in frontend development. I am actively engaged in a bootcamp program that provides comprehensive hands-on training in this domain. Through this immersive learning experience, I am acquiring in-depth knowledge of modern web development technologies, including HTML, CSS, JavaScript, and various frontend frameworks.</p>
</div>
    )
}

export default About;