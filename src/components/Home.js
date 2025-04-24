import './Home.css'
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from 'react-bootstrap/Container';
import dog from '../imgs/header-img.svg'
import { useEffect } from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';


const Home = ()=>{

    const [text] = useTypewriter({
        words: ['CS student at Ain Shams University','Frontend Developer'],
        loop: true, // Try looping just once
        typeSpeed: 200,
        deleteSpeed: 80,
      });
    
      useEffect(() => {
        console.log(text); // Check if text is updating in the console
      },);

    return(

        <>
            <div className='home_page' id='home'>

                <Container>

                    <div className='home_container'>

                        <div className='home_content'>
                            <h4 className='home_welcome_box'> welcome to my projects</h4>
                            <h1 className='home_main_text'>Hi I'am Mohamed Ahmed Fathy,<br/> <span>{text}<Cursor cursorStyle='|' cursorColor='grey'/> </span> </h1>
                            <p className='home_paragraph'>Hellow Everyone , my name is Mohamed Ahmed</p>
                            
                            <button className='home_btn'> 

                                <span className='btn_text'>lets connect </span>
                                <span className='btn_logo'> <FontAwesomeIcon icon={faCircleArrowRight} /> </span> 
                            
                            </button>
                            
                        </div>
                        
                        <div className='home_img'>
                            <img width={100} src={dog} alt='sora tayra'/>
                        </div>

                    </div>

                </Container>


            </div>

        </>

    )

}
export default Home



