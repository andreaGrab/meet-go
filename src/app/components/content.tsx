import React from "react";
import Section from "./section";
import EventCarousel from "./event-carousel";

// dummy data
const testoMatto:string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium distinctio soluta quo, aperiam ad fugiat sequi quae. Consequuntur, tempora labore, pariatur ex a nisi nesciunt sint unde dolore nostrum asperiores?';

const events:Array<any> = [{
    title: 'Concert and Elegance Festival.',
    description: testoMatto,
    date: '10/12/2025',
    location: 'Grand Auditorium, Paris, France',
    organizer: 'Limbo Life ltd',
    soldTickets: 739,
    price: '12,99€',
    gallery: [
        '/gallery_testing/event1/conductor.jpg',
        '/gallery_testing/event1/champagne.jpg',
        '/gallery_testing/event1/violin.jpg'
    ]
}, {
    title: 'Wedding on the beach!',
    description: testoMatto,
    date: '15/08/2025',
    location: 'Jesolo, Venice, Italy',
    organizer: 'Rossana DKW snc',
    soldTickets: 320,
    price: 'FREE',
    gallery: [
        '/gallery_testing/event2/beach.jpg',
        '/gallery_testing/event2/fireworks.jpg',
        '/gallery_testing/event2/table-setting.jpg'
    ]
}, {
    title: 'Music party event',
    description: testoMatto,
    date: '07/06/2025',
    location: 'Alpha Club, Berlin, Germany',
    organizer: 'Alpha Club',
    soldTickets: 739,
    price: '35,00€',
    gallery: [
        '/gallery_testing/event3/hand.jpg',
        '/gallery_testing/event3/audience.jpg',
        '/gallery_testing/event3/music.jpg'
    ]
},{
    title: 'Concert and Elegance Festival.',
    description: testoMatto,
    date: '10/12/2025',
    location: 'Grand Auditorium, Paris, France',
    organizer: 'Limbo Life ltd',
    soldTickets: 739,
    price: '12,99€',
    gallery: [
        '/gallery_testing/event1/conductor.jpg',
        '/gallery_testing/event1/champagne.jpg',
        '/gallery_testing/event1/violin.jpg'
    ]
}, {
    title: 'Wedding on the beach!',
    description: testoMatto,
    date: '15/08/2025',
    location: 'Jesolo, Venice, Italy',
    organizer: 'Rossana DKW snc',
    soldTickets: 320,
    price: 'FREE',
    gallery: [
        '/gallery_testing/event2/beach.jpg',
        '/gallery_testing/event2/fireworks.jpg',
        '/gallery_testing/event2/table-setting.jpg'
    ]
}, {
    title: 'Music party event',
    description: testoMatto,
    date: '07/06/2025',
    location: 'Alpha Club, Berlin, Germany',
    organizer: 'Alpha Club',
    soldTickets: 739,
    price: '35,00€',
    gallery: [
        '/gallery_testing/event3/hand.jpg',
        '/gallery_testing/event3/audience.jpg',
        '/gallery_testing/event3/music.jpg'
    ]
}];
// ------"

export default function Content(){
    return (
        <>
            <EventCarousel events={events}/>
            <Section events={events}/>
        </>
    );
}