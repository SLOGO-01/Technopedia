import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/arrow_forward_Icon-White.png";
import Back_icon from "../../assets/arrow_back_Icon-White.png";
import user_1 from "../../assets/Profile_Icon-Black.png";
import user_2 from "../../assets/Profile_Icon-Black.png";
import user_3 from "../../assets/Profile_Icon-Black.png";
import user_4 from "../../assets/Profile_Icon-Black.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translatex(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translatex(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={Back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />

      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Angela Dukor</h3>
                  <span>Lagos, NG</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                praesentium inventore, odio fugit sed error esse harum sit cum
                delectus nemo, aliquid commodi perferendis velit. Nisi excepturi
                obcaecati perferendis explicabo.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Ojong Flourish </h3>
                  <span>Lagos, NG</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                praesentium inventore, odio fugit sed error esse harum sit cum
                delectus nemo, aliquid commodi perferendis velit. Nisi excepturi
                obcaecati perferendis explicabo.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Eyitayo Olushoga</h3>
                  <span>Lagos, NG</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                praesentium inventore, odio fugit sed error esse harum sit cum
                delectus nemo, aliquid commodi perferendis velit. Nisi excepturi
                obcaecati perferendis explicabo.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Oguntayo Semilogo</h3>
                  <span>Lagos, NG</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                praesentium inventore, odio fugit sed error esse harum sit cum
                delectus nemo, aliquid commodi perferendis velit. Nisi excepturi
                obcaecati perferendis explicabo.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
