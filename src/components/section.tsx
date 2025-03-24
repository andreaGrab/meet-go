import Event from "./event";
export default function Section({events}:any){
    return (
        <section className="md:px-[5rem] py-[5rem]">
            <div className="flex">
                <div className="md:flex-1"></div>
                <div className="flex-1">
                    <h1 className="text-2xl font-bold text-center mb-[5rem]">NAME OF THE SECTION</h1>
                </div>
                <div className="text-right md:flex-1">
                    <a className="hidden md:block hover:underline" href="/events">View all events</a>
                </div>
            </div>
            <div className="lg:grid grid-cols-2 xl:grid-cols-3 gap-5">
                {
                    events.map((event:any, index:number)=>{
                        return <Event key={index} event={event} index={index}/>
                    })
                }
            </div>
            <div className="mt-5 md:hidden">
                <a className="p-5 block m-auto w-[90%] text-center bg-amber-100 border-1 border-amber-600 rounded-sm drop-shadow-sm" href="/events">VIEW ALL EVENTS</a>
            </div>
        </section>
    );
}