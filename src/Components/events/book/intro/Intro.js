import React from "react";  
import "./intro.css";
import bookCoverImg from "../../../../images/Books/book-cover.png"

const Intro = () => {
  return (
    <div className="book-intro">
      <div className="left">
        <p className="cover-text">எமது மொறட்டுவை பல்கலைக்கழக தமிழ் மாணவர்களின் எழுத்தாற்றல்களை வெளிக்கொணரும் ஓர் களம்.</p>
      </div>
      <div className="right"><img className="cover-img" src={bookCoverImg}/></div>
    </div>
  );
}

export default Intro;