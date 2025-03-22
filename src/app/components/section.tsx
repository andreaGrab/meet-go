"use client";
import Event from "./event";
export default function Section({events}:any){
    return (
        <section className="md:px-[5rem] py-[5rem]">
            <h1 className="text-2xl font-bold text-center mb-[5rem]">NAME OF THE SECTION</h1>
            <div className="lg:columns-2 xl:columns-3 gap-5">
                {
                    events.map((event:any, index:number)=>{
                        return <Event key={index} event={event} index={index}/>
                    })
                }
            </div>
        </section>
    );
}