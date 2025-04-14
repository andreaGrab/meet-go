import React from "react";

export default function EventUser({event, index, isDraft}:any) {
    return (
        <div className={"relative md:rounded-sm drop-shadow-sm overflow-hidden lg:mt-0" + (index===0 ? '' : ' mt-[5rem]') + (isDraft ? ' bg-yellow-100' : ' bg-amber-500')}>
            <p className={"absolute z-[5] rotate-45 pt-9 px-15 pb-3 top-[-0.8rem] right-[-4rem] bg-yellow-500 font-bold drop-shadow-lg border-b-1 border-yellow-600" + (isDraft ? ' block' : ' hidden')}>DRAFT</p>
            <div className="overflow-hidden relative h-70">
                <img className={"absolute w-[100%]" + (isDraft ? ' opacity-60' : '')} src={event.gallery[0]} alt="image alt" />
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
                <div className="flex justify-between gap-5 my-5">
                    <a title='Delete event' className="border-1 border-blue-400 drop-shadow-md active:shadow-[inset_0px_1px_1px_rgba(0,0,0,0.3)] bg-slate-50 p-2 rounded-sm cursor-pointer hover:bg-slate-100 hover:drop-shadow-sm transition-all ease-in duration-75 active:drop-shadow-none active:text-black active:translate-y-[1px] text-center" href={`#`}><img className='w-5' src="/trash-icon.svg" alt='trash icon'/></a>
                    <a title='Edit event' className="border-1 border-blue-400 drop-shadow-md active:shadow-[inset_0px_1px_1px_rgba(0,0,0,0.3)] bg-slate-50 p-2 rounded-sm cursor-pointer hover:bg-slate-100 hover:drop-shadow-sm transition-all ease-in duration-75 active:drop-shadow-none active:text-black active:translate-y-[1px] text-center" href='#'><img className='w-5' src="/edit-icon.svg" alt='edit icon'/></a>
                    <a title='Preview/view event' className="border-1 border-blue-400 drop-shadow-md active:shadow-[inset_0px_1px_1px_rgba(0,0,0,0.3)] bg-slate-50 p-2 rounded-sm cursor-pointer hover:bg-slate-100 hover:drop-shadow-sm transition-all ease-in duration-75 active:drop-shadow-none active:text-black active:translate-y-[1px] text-center" href={`/event?eventId=${index}`}><img className='w-5' src="/eye-icon.svg" alt='eye icon'/></a>
                    <a title='Publish event' className={"gap-1 border-1 border-blue-400 drop-shadow-md active:shadow-[inset_0px_1px_1px_rgba(0,0,0,0.3)] bg-slate-50 p-2 rounded-sm cursor-pointer hover:bg-slate-100 hover:drop-shadow-sm transition-all ease-in duration-75 active:drop-shadow-none active:text-black active:translate-y-[1px] text-center" + (isDraft ? ' block' : ' hidden')} href='#'><img className='w-5' src="/globe.svg" alt='globe icon'/></a>
                </div>
            </div>
        </div>
    );
}