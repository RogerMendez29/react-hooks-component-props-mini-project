import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  console.log(minutes);

  function renderCoffee(minutes) {
    let array = [];

    if (minutes < 30) {
      let coffees = Math.ceil(minutes / 5);
      for (let counter = 0; counter < coffees; counter++) {
        array.push("☕️");
      }
      return array;
    } else {
      let books = Math.ceil(minutes / 10);
      for (let counter = 0; counter < books; counter++) {
        array.push("🍱");
      }
      return array;
    }
  }
  return (
    <article>
      <h3>{title}</h3>
      <small>
        {date} {renderCoffee(minutes)}
        {minutes} min read
      </small>

      <p>{preview}</p>
    </article>
  );
}

export default Article;
