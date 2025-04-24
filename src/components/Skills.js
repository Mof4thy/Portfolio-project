import "./Skills.css"
import Container from 'react-bootstrap/Container';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import circle1 from "../imgs/meter1.svg"
import circle2 from "../imgs/meter2.svg"
import circle3 from "../imgs/meter3.svg"

const skills = ()=>{

    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };



    return(
        <>
        

            <div className="skills_section">

                <Container>

                    <div className="skills_content">
                        
                        <h4 className="skills_title"> Skills </h4>
                        <p className="skills_desc">you can see my from here my bro</p>

                        <div className="skills_box">

                            <Carousel responsive={responsive} infinite={true}  className="skill_slider">

                                <div className="skills_item">
                                    <img src={circle1} alt="img"/>
                                    <h5> HTML </h5>
                                </div>

                                <div className="skills_item">
                                    <img src={circle2} alt="img"/>
                                    <h5> CSS </h5>
                                </div>

                                <div className="skills_item">
                                    <img src={circle3} alt="img"/>
                                    <h5> JAVA SCRIPT </h5>
                                </div>

                                <div className="skills_item">
                                    <img src={circle1} alt="img"/>
                                    <h5> REACT </h5>
                                </div>

                                <div className="skills_item">
                                    <img src={circle3} alt="img"/>
                                    <h5> MongoDB </h5>
                                </div>

                                <div className="skills_item">
                                    <img src={circle2} alt="img"/>
                                    <h5> Express </h5>
                                </div>


                            </Carousel>

                            
                        </div>



                    </div>

                </Container>

            </div>
        </>
    )
}

export default skills;

