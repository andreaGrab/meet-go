import React from "react";
import Section from "./section";
import EventCarousel from "./event-carousel";

export default function Content({events}:any){
    return (
        <>
            <EventCarousel events={events}/>
            <Section events={events}/>
        </>
    );
}