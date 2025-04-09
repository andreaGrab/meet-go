"use client";
import {events} from '@/app/page';
import { useSearchParams,  redirect} from 'next/navigation';
import Event from '@/components/event';

export default function EventPage(){
    const eventIdParam = useSearchParams();
    const eventId:any = eventIdParam.get('eventId');
    
    return !events[eventId] ? redirect('/events') : (
        <>
        <section>
            <div className="w-[100%] bg-slate-200 max-h-[650px] overflow-hidden">
                <img className="w-[100%]" src={events[eventId].gallery[0]} alt="conductor" />
            </div>
            <div className='px-3 md:px-[5rem] py-5 md:py-[5rem]'>
                <div className='flex flex-col md:flex-row justify-between gap-5 mb-[1.5rem] md:items-center'>
                    <h1 className='text-3xl font-bold'>{events[eventId].title}</h1>
                    <div className='flex gap-5'>
                        {/* make  functional buttons */}
                        <a className='hover:drop-shadow-md' href="#"><img className="w-5" src="/heart.svg" alt="heart icon" /></a>
                        <a className='hover:drop-shadow-md' href="#"><img className="w-5" src="/share.svg" alt="share icon" /></a>
                        <a className='hover:drop-shadow-[0_3px_3px_rgba(100,0,0,0.25)]' href="#"><img className="w-5" src="/flag.svg" alt="flag icon" /></a>
                    </div>
                </div>
                
                <div className="grid grid-rows-2 grid-cols-2 gap-1 md:my-5">
                    <div className="flex items-center gap-2">
                        <img className="w-5" src="/calendar.svg" alt="calendar icon" />
                        <p>{events[eventId].date}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <img className="w-5" src="/map-pin.svg" alt="location icon" />
                        <p>{events[eventId].location}</p>
                    </div>
            
                    <div className="flex items-center gap-2">
                        <img className="w-5" src="/face-laugh.svg" alt="smile icon" />
                        <p>{events[eventId].organizer}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <img className="w-5" src="/users.svg" alt="smile icon" />
                        <p>{events[eventId].soldTickets}</p>
                    </div>
                </div>

                <div className='my-[3rem] leading-8'>
                    <p>{events[eventId].longDescription}</p>
                </div>

                <a className="border-1 border-blue-400 drop-shadow-md active:shadow-[inset_0px_1px_1px_rgba(0,0,0,0.3)] bg-slate-50 p-2 rounded-sm cursor-pointer hover:bg-slate-100 hover:drop-shadow-sm transition-all ease-in duration-75 active:drop-shadow-none active:text-black active:translate-y-[1px] text-center block m-auto md:w-[30%]" href='#'>BOOK NOW FOR {events[eventId].price}</a>
            </div>
            <hr className='w-[30%] m-auto border-amber-400'></hr>
            <div className='py-[5rem] px-5'>
                <div className='md:grid md:grid-cols-3 items-center text-center mb-[3rem]'>
                    <div></div>
                    <h1 className='text-3xl font-bold text-center'>SIMILAR EVENTS</h1>
                </div>
                
                <div className='flex flex-col xl:flex-row gap-5 my-[3rem]'>
                    {/* render the first three related by category events */}
                    <Event event={events[eventId]} index={eventId}/>
                    <Event event={events[eventId]} index={eventId}/>
                    <Event event={events[eventId]} index={eventId}/>
                </div>
                <a className="border-1 border-blue-400 drop-shadow-md active:shadow-[inset_0px_1px_1px_rgba(0,0,0,0.3)] bg-slate-50 p-2 rounded-sm cursor-pointer hover:bg-slate-100 hover:drop-shadow-sm transition-all ease-in duration-75 active:drop-shadow-none active:text-black active:translate-y-[1px] text-center block m-auto md:w-[30%]" href="/filtered-page">VIEW MORE</a>
            </div>
        </section>
        </>
    )
}