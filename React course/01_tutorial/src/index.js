import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      <Book />
    </section>
  );
}

const Book = () => {
  const title = "Butter: The Cult new Japanese Bestselling Novel";
  const author = "Asako Yuzuki";
  return (
    <article className="book">
      <img
        src="https://m.media-amazon.com/images/I/71I3CatXc8L._AC._SR360,460.jpg"
        alt=""
      />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
