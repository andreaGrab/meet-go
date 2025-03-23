"use client";
import Event from "./event";
export default function Section({events}:any){
    return (
        <section className="md:px-[5rem] py-[5rem]">
            <div className="flex">
                <div className="flex-1"></div>
                <div className="flex-1">
                    <h1 className="text-2xl font-bold text-center mb-[5rem]">NAME OF THE SECTION</h1>
                </div>
                <div className="text-right flex-1">
                    <a className="hover:underline" href="#">View all events</a>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-5">
                {
                    events.map((event:any, index:number)=>{
                        return <Event key={index} event={event} index={index}/>
                    })
                }
            </div>
        </section>
    );
}