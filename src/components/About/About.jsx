import React from "react";
import "./About.css";
import about_img from "../../assets/pin campus img2.jpg";
import play_icon from "../../assets/motion_play_icon.png";

const About = ({setPlayState}) => {
  return (
    <div className="about">
      <div className="about_left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" onClick={()=>{setPlayState(true)}} />
      </div>
      <div className="about_right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tommorow's Leaders Today</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dolor
          architecto nulla libero omnis? Officia vitae molestias sunt optio
          placeat itaque commodi maxime, enim quo voluptatibus assumenda nemo,
          culpa velit!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dolor
          architecto nulla libero omnis? Officia vitae molestias sunt optio
          placeat itaque commodi maxime, enim quo voluptatibus assumenda nemo,
          culpa velit!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dolor
          architecto nulla libero omnis? Officia vitae molestias sunt optio
          placeat itaque commodi maxime, enim quo voluptatibus assumenda nemo,
          culpa velit!
        </p>
      </div>
    </div>
  );
};

export default About;
