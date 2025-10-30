import React, { useState } from "react";
import { Element } from "react-scroll";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import VideoPlayer from "./components/Video Player/VideoPlayer";
const App = () => {

  const [playState, setPlayState] = useState(false);

  return (
    <div>
     
        <Navbar />

      <Element name="home">
        <Hero />
      </Element>

      <div className="container">
        <Title subTitle="Our Programs" title="What we Offer" />
        <Element name="program">
          <Programs />
        </Element>

        <Element name="about">
          <About setPlayState={setPlayState}/>
        </Element>

        <Title subTitle="Gallery" title="Campus Photos" />
        <Element name="gallery">
          <Campus />
        </Element>


        <Title subTitle="Testimonials" title="What Students Say" />
        <Element name="testimonials">
          <Testimonials />
        </Element>

        <Title subTitle="Contact us" title="Get in touch" />

        <Element name="contact">
          <Contact />
        </Element>



        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  );
};

export default App;
