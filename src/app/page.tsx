//this file is the same as index.html, the entry point
import React from "react";
import Header from "./components/header";
import Content from "./components/content";

// main component to display
export default function Home() {
  return (
    <div>
      <Header/>
      <Content/>
    </div>
  );
}
