import React from "react";
import blogData from "../data/blog";
import Header from "./Header.js";
import About from "./About.js";
import ArticleList from "./ArticleList.js";

// console.log(blogData.posts);

function App() {
  return (
    <div>
      <Header blogName={blogData.name} />
      <About text={blogData.about} image={blogData.image} />
      <ArticleList posts={blogData.posts} />
    </div>
  );
}
export default App;
