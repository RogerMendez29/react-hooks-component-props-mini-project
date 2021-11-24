import React from "react";

function About({ text, image = "https://via.placeholder.com/215" }) {
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{text}</p>
    </aside>
  );
}

export default About;
