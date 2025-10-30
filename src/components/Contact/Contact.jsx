import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { useEffect, useRef, useState } from "react";
import "./Contact.css";
import message_icon from "../../assets/help button3.png";
import Phone_icon from "../../assets/Mail_Icon-Black.png";
import mail_icon from "../../assets/call_Icon-Black.png";
import address_icon from "../../assets/location_Icon-Black.png";
import white_arrow from "../../assets/arrow_forward_Icon-White.png";

const Contact = () => {

  const [state, handleSubmit, reset]= useForm("xgvnnrpq");
  const formRef = useRef(null); 

  const [showMessage, setShowMessage] = useState(false);

  useEffect(()=> {
    if (state.succeeded && formRef.current) {
      formRef.current.reset();
      setShowMessage(true);

      // Hide success message after 5 seconds
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  let statusMessage = '';
  let statusClass = '';
   if (showMessage && state.succeeded){
    statusMessage= 'Your Message has been delivered Successfully!';
    statusClass='success';
  }
    else if(state.errors &&state.errors.length>0){
    statusMessage='Error submitting form. Please Try again.';
    statusClass='error';
  }
    else if (state.submitting){
    statusMessage = 'Sending Message... Please Wait.';
    statusClass= 'Sending';
  } 

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={message_icon} alt="" />
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit cum
          non, minima blanditiis nemo neque tenetur atque ab, quasi adipisci
          iusto? Dolores placeat at soluta corporis iusto autem assumenda totam!
        </p>
        <ul>
          <li>
            <img src={Phone_icon} alt="" />
            slogo@yahoo.com
          </li>
          <li>
            <img src={mail_icon} alt="" /> +419-653-98-012
          </li>
          <li>
            <img src={address_icon} alt="" /> 24, Adeola Odeku St, Victoria
            Island, Lagos
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form ref={formRef} onSubmit={handleSubmit} action="https://formspree.io/f/xgvnnrpq" method="POST">
            <label>Your Name</label>
            <input type="text" name="name" placeholder="Enter your Name" required/>

            <label>Phone Number</label>
            <input type="tel" name="Phone" placeholder="Enter your Mobile Number" required/>

            <label> Write Your Message Here</label>
            <textarea name="message"  rows="6" placeholder="Enter your message" required></textarea>

            <ValidationError prefix="Message" field="message" errors={state.errors}/>

            <button type="submit" className="btn dark-btn" disabled={state.submitting}> {state.submitting? 'Sending...' : 'Submit'} <img src={white_arrow} alt="" /></button>
            {
              statusMessage && (<p className={`status-message ${statusClass}`}>{statusMessage}</p>)
            }
        </form>
        {/* <span className="status-message">{status}</span> */}
      </div>
    </div>
  );
};

export default Contact;
