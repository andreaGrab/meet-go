import React from "react";
import EventsFilterBar from "./events-filter-bar";
import Event from "./event";
//import {events} from "@/app/page";// events booked from the user
let events:any = []

export default function UserScheduled() {
    return (
        <div>
            <h1 className='text-center text-3xl mb-[2rem]'>MY SCHEDULED EVENTS</h1>
            {
            events.length !==0 ? (<div><div className="border-b-1 border-gray-300 md:px-[5rem]">
                <EventsFilterBar hasTitle={false}/>
            </div>
            <div className="mt-5 grid grid-cols-1 xl:grid-cols-2 gap-5">
                { 
                    events.map((event: any, index: number) => {
                        return (
                            <div key={index} className={"flex flex-col lg:flex-row lg:gap-5 md:px-[1rem]" + (index==events.length-1 ? " mb-[5rem] md:mb-0": "")}>
                                <Event event={event} index={index}/>
                            </div>
                        );
                    })
                }   
            </div></div>) : <div className="text-center pt-5"><h1 className='text-2xl mb-[2rem] text-zinc-500'>No booked events!</h1> <a title='View all events' className="border-1 border-blue-400 drop-shadow-md active:shadow-[inset_0px_1px_1px_rgba(0,0,0,0.3)] bg-slate-50 p-2 rounded-sm cursor-pointer hover:bg-slate-100 hover:drop-shadow-sm transition-all ease-in duration-75 active:drop-shadow-none active:text-black active:translate-y-[1px] text-center" href="/events">SEE ALL EVENTS</a></div>
            }
        </div>
    );
}