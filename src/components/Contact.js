
import "./Contact.css"
import Container from 'react-bootstrap/Container';
import contactimg from "../imgs/contact-img.svg"
const Contact = ()=>{

    return(

        <section>
            <div className="contact_sec">
                <Container>

                    <div className='contact_box'>

                        <div className='contact_img'>
                            <img src={contactimg} alt='sora'/>
                        </div>
                        
                        <div className='contact_information'>
                            <h2 className='contact_header'>Get In Touch</h2>
                        
                            <form>
                                <input type="text" id="fname" name="fname" placeholder="First Name" />
                                <input type="text" id="lname" name="lname" placeholder="Last Name" />
                                <input type="email" id="email" name="email" placeholder="Email Address"/>
                                <input type="tel" id="phone" name="phone" placeholder="phone Number"/>
                                <textarea id="message" name="message" rows="6" cols="50" placeholder="message"/>
                            </form>
                            <button className='contact_btn'> Send </button>
                        </div>

                    </div>

                </Container>
            </div>
        </section>





    )


}

export default Contact