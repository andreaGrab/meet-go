import React from "react";

export default function Event({event, index}:any){
    return (
        <div className={"bg-amber-500 md:rounded-sm drop-shadow-sm overflow-hidden" /*+ (index===0 ? '' : ' mt-[5rem] md:mt-5')*/}>
            <div className="overflow-hidden relative h-70">
                <img className="absolute w-[100%]" src={event.gallery[0]} alt="image alt" />
            </div>
            <div className="p-5">
                <h1 className="text-[2rem]/12 font-bold mb-3">{event.title}</h1>
                <p>{event.description}</p>
                <div className="grid grid-rows-2 grid-cols-2 gap-1 md:my-5">
                    <div className="flex items-center gap-2">
                        <img className="w-5" src="/calendar.svg" alt="calendar icon" />
                        <p>{event.date}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <img className="w-5" src="/map-pin.svg" alt="location icon" />
                        <p>{event.location}</p>
                    </div>
            
                    <div className="flex items-center gap-2">
                        <img className="w-5" src="/face-laugh.svg" alt="smile icon" />
                        <p>{event.organizer}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <img className="w-5" src="/users.svg" alt="smile icon" />
                        <p>{event.soldTickets}</p>
                    </div>
                </div>
                <div className="flex flex-col gap-5 my-5">
                    <button className="border-1 border-blue-400 drop-shadow-md active:shadow-[inset_0px_1px_1px_rgba(0,0,0,0.3)] bg-slate-50 p-2 rounded-sm cursor-pointer hover:bg-slate-100 hover:drop-shadow-sm transition-all ease-in duration-75 active:drop-shadow-none active:text-black active:translate-y-[1px]">VIEW MORE</button>
                    <button className="border-1 border-blue-400 drop-shadow-md active:shadow-[inset_0px_1px_1px_rgba(0,0,0,0.3)] bg-slate-50 p-2 rounded-sm cursor-pointer hover:bg-slate-100 hover:drop-shadow-sm transition-all ease-in duration-75 active:drop-shadow-none active:text-black active:translate-y-[1px]">BOOK NOW FOR {event.price}</button>
                </div>
            </div>
        </div>
    );
}