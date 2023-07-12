import React from "react";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Section from "./Components/Section";
import Footer from "./Components/Footer";


let sectionData =[
   {
     title:"Skills", des:"Programming Languages: Java Data Structures and Algorithms: Proficient in implementing basic data structures (arrays, linked lists, stacks, queues, trees) and algorithms (sorting, searching, recursion).Frontend Development: Experience in developing responsive web applications using React framework and Bootstrap. HTML5/CSS3: Proficient in HTML5 and CSS3 for building user interfaces and designing responsive layouts. JavaScript: Strong understanding of JavaScript and its fundamentals.React: Hands-on experience in developing web applications using React library, including state management, components, and routing.Bootstrap: Familiarity with Bootstrap framework for creating responsive and mobile-first designs.Version Control: Proficient in using Git and GitHub for version control and collaborative development."
    },
   {
    title:"Education",
           des:"Bachelor of Technology in Electronics and Communication Engineering (2015-2019)SR Engineering College, Hasanparthy, Telangana withCGPA of 8.2 and Schooling from Carmel Convent High School, Waranagal with 9.7 CGPA and Senior Secondary Education (2013-2015) Sri Chaitanya Junior College, Hanumakonda with 93% ."
   },
   {
    title:"Projects",
    des:"At my Graduation level did a project called Irrigation Schedular using IoT and sensors(water level ,temperature, Humidity). And developed a SNAKE GAME using Java AWT and swing which displays the score and restarts the Game by pressing R. And also made Swiggy and Netflix clone using HTML and Css and also mini youtube clone, shopping cart using javascript ."
   }
]

const App=()=>{

    return(
        <div>

           <Navbar/>        
           <About/>
           {
            sectionData.map((value,index)=>(
                <Section 
                title={value.title}
                des={value.des}
                />
            ))
           }
           <Footer/>
        </div>
    )
}

export default App;
