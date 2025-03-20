"use client";
// sidenotes:
// larger event container width after viewport:1754px
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
        '/gallery_testing/event2/table.jpg'
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

import { useState, useEffect } from "react";

export default function EventCarousel(){
    const [index, setIndex] = useState(0);
    const eventLenGallery = events[0].gallery.length;
    function nextSlide(){
        const nextSlide = (index+1)%eventLenGallery;
        setIndex(nextSlide);
    }
    useEffect(()=>{
        const timer = setInterval(()=>{
            nextSlide();
        }, 3000);
        return ()=>clearInterval(timer);
    }, [index]);

    return <div style={{'--dynamic-image': `url(${events[0].gallery[index]})`}} className="h-fit bg-[image:var(--dynamic-image)] bg-center lg:bg-right overflow-hidden flex flex-col items-center">
        <div className="lg:backdrop-blur-3xl w-[100%]">
            <div className="flex md:drop-shadow-sm md:w-[85%] 2xl:w-[60%] h-full m-auto bg-white/80 p-5 gap-5 rounded-b-sm">
                <div className="flex-1">
                    <div className="lg:max-w-96 overflow-hidden">
                        <h1 className="text-[2rem]/12 md:text-[2.5rem] font-bold">{events[0].title}</h1>
                    </div>
                    <p className="my-3 max-h-[145px] overflow-hidden">{events[0].description}</p>

                    <div className="grid grid-rows-2 grid-cols-2 gap-1 md:my-5">
                        <div className="flex items-center gap-2">
                            <img className="w-5" src="/calendar.svg" alt="calendar icon" />
                            <p>{events[0].date}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img className="w-5" src="/map-pin.svg" alt="location icon" />
                            <p>{events[0].location}</p>
                        </div>
                
                        <div className="flex items-center gap-2">
                            <img className="w-5" src="/face-laugh.svg" alt="smile icon" />
                            <p>{events[0].organizer}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img className="w-5" src="/users.svg" alt="smile icon" />
                            <p>{events[0].soldTickets}</p>
                        </div>
                        
                    </div>
                    <div className="flex flex-col xl:flex-row gap-5 my-5">
                        <button className="border-1 border-blue-400 drop-shadow-md active:shadow-[inset_0px_1px_1px_rgba(0,0,0,0.3)] bg-slate-50 p-2 rounded-sm cursor-pointer hover:bg-slate-100 hover:drop-shadow-sm transition-all ease-in duration-75 active:drop-shadow-none active:text-black active:translate-y-[1px]">VIEW MORE</button>
                        <button className="border-1 border-blue-400 drop-shadow-md active:shadow-[inset_0px_1px_1px_rgba(0,0,0,0.3)] bg-slate-50 p-2 rounded-sm cursor-pointer hover:bg-slate-100 hover:drop-shadow-sm transition-all ease-in duration-75 active:drop-shadow-none active:text-black active:translate-y-[1px]">BOOK NOW FOR {events[0].price}</button>
                    </div>
                </div>
                <div className="flex-2 hidden lg:block">
                    <div className="overflow-hidden w-[100%] h-[100%] relative">
                        <img className="absolute w-[100%]" src={(events[0].gallery[index])} alt="event image" />
                    </div>
                </div>
            </div>
            <div className="flex w-[100%] justify-center gap-3 items-center py-3">
                <a className="bg-white w-5 h-5 rounded-full border-3 border-black border-double hover:border-white hover:bg-black trasition-all ease-in-out duration-300" href="#"></a>
                <a className="bg-black w-5 h-5 rounded-full" href="#"></a>
                <a className="bg-black w-5 h-5 rounded-full" href="#"></a>
            </div>
        </div>
    </div>
}