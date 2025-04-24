import "./MyProject.css"
import Container from 'react-bootstrap/Container';
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import projImg1 from "../imgs/project-img1.png"
import projImg2 from "../imgs/project-img2.png"
import projImg3 from "../imgs/project-img3.png"


const MyPrpject = ()=>{

    const [visiblecompnent , setvisiblecompnent ] = useState('projects')

    const setvisible = (comp)=>{
        
        setvisiblecompnent(comp)

    }

    const projectsData = [
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg1,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg2,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg3,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg1,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg2,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg3,
        },
      ];



    return(

        <>
          <div className="my_progect_sec">

            <Container >


              <div className="my_progect_header">
                  <h2>My Project</h2>
                  <p>My name is Mohamed, w mayten omak ya islam el kalb</p>
              </div>
              
              <div className="btns_box">
                  <button onClick={() => {setvisible("projects")}} className="btn_div"> 1st section </button>
                  <button onClick={() => {setvisible(null)}} className="btn_div"> 2nd section </button>
                  <button onClick={() => {setvisible("paragraph")}} className="btn_div btn_left_div"> 3rd section </button>
              </div>

              <div className="changed_sec" >

                {visiblecompnent === 'projects' ?
                
                <div className="projects_sec">
                    
                    {projectsData.map((project, index) => (
                        
                        <ProjectCard key={index} {...project} />
                    
                    ))}
                </div> : 
                
                visiblecompnent === 'paragraph' ?
                  
                <p className="thrd_sec_parag">This is the paragraph for the third section.</p>
                    
                :null}

              </div>

             </Container>



          </div>
        
        </>
    )

}

export default MyPrpject