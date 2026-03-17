import React from "react";

function Slider() {

  const text = "Make Your Stay Memorable";

  return (
    <div style={{textAlign:"left", color:"white"}}>

      <style>
        {`
        .hover-title span{
          display:inline-block;
          transform: translateY(40px);
          opacity:0;
          transition: all 0.4s ease;
        }

        .hover-title:hover span{
          transform: translateY(0);
          opacity:1;
        }
        `}
      </style>

      <h1
        className="hover-title"
        style={{
          fontSize: "60px",
          fontWeight: "bold",
          cursor: "pointer"
        }}
      >
        {text.split("").map((char, index) => (
          <span
            key={index}
            style={{ transitionDelay: `${index * 0.05}s` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>

    </div>
  );
}

export default Slider;
