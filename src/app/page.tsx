//this file is the same as index.html, the ientry point
import React from "react";
import Header from "./components/header";
import EventCarousel from "./components/event-carousel";

// main component to display
export default function Home() {
  return (
    <div>
      <Header/>
      <EventCarousel/>
    </div>
  );
}
