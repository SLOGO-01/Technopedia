import React from 'react'
import "./Programs.css"
import program_1 from "../../assets/campus img 6.jfif"
import program_2 from "../../assets/campus img 4.jfif"
import program_3 from "../../assets/campus img 7.jfif"
import program_icon_1 from "../../assets/book icon.png"
import program_icon_2 from "../../assets/local_library.png"
import program_icon_3 from "../../assets/Graduation_icon.png"

const Programs = () => {
  return (
    <div className='programs'>
      <div className="program">
        <img className='program-img' src={program_1} alt="" />
        <div className="caption">
            <img src={program_icon_1} alt="" />
            <p>Bachelor Degrees</p>
        </div>
      </div>
      <div className="program">
        <img className='program-img' src={program_2} alt="" />
        <div className="caption">
            <img src={program_icon_2} alt="" />
            <p>Masters Degrees</p>
        </div>
      </div>
      <div className="program">
        <img className='program-img' src={program_3} alt="" />
        <div className="caption">
            <img src={program_icon_3} alt="" />
            <p>Doctorate Degrees</p>
        </div>
      </div>
    </div>
  )
}

export default Programs
