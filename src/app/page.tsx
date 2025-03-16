//this file is the same as index.html, the ientry point
import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from "./components/header";

// main component to display
export default function Home() {
  return (
    <div>
      <Header/>
    </div>
  );
}
