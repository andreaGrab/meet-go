// sidenotes:
// larger event container width after viewport:1754px

export default function EventCarousel(){
    return <div className="h-fit bg-[url(/gallery_testing/event1/conductor.jpg)] bg-center lg:bg-right overflow-hidden flex flex-col items-center">
        <div className="lg:backdrop-blur-3xl w-[100%]">
            <div className="flex md:w-[85%] 2xl:w-[60%] h-full m-auto bg-white/80 p-5 gap-5 rounded-b-sm">
                <div className="flex-1">
                    <h1 className="text-[2rem] md:text-[2.5rem] font-bold">Name event</h1>
                    <p className="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium distinctio soluta quo, aperiam ad fugiat sequi quae. Consequuntur, tempora labore, pariatur ex a nisi nesciunt sint unde dolore nostrum asperiores?</p>

                    <div className="grid grid-rows-2 grid-cols-2 gap-1 md:my-5">
                        <div className="flex items-center gap-2">
                            <img className="w-5" src="/calendar.svg" alt="calendar icon" />
                            <p>10/12/2025</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img className="w-5" src="/map-pin.svg" alt="location icon" />
                            <p>Location</p>
                        </div>
                
                        <div className="flex items-center gap-2">
                            <img className="w-5" src="/face-laugh.svg" alt="smile icon" />
                            <p>Organizer</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img className="w-5" src="/users.svg" alt="smile icon" />
                            <p>257</p>
                        </div>
                        
                    </div>
                    <div className="flex flex-col xl:flex-row gap-5 my-5">
                        <button className="border-1 border-blue-400 drop-shadow-md active:shadow-[inset_0px_1px_1px_rgba(0,0,0,0.3)] bg-slate-50 p-2 rounded-sm cursor-pointer hover:bg-slate-100 hover:drop-shadow-sm transition-all ease-in duration-75 active:drop-shadow-none active:text-black active:translate-y-[1px]">VIEW MORE</button>
                        <button className="border-1 border-blue-400 drop-shadow-md active:shadow-[inset_0px_1px_1px_rgba(0,0,0,0.3)] bg-slate-50 p-2 rounded-sm cursor-pointer hover:bg-slate-100 hover:drop-shadow-sm transition-all ease-in duration-75 active:drop-shadow-none active:text-black active:translate-y-[1px]">BOOK NOW FOR 12,99€</button>
                    </div>
                </div>
                <div className="flex-2 hidden lg:block">
                    <div className="overflow-hidden w-[100%] h-[100%] relative">
                        <img className="absolute w-[100%]" src="/gallery_testing/event1/conductor.jpg" alt="event image" />
                    </div>
                </div>
            </div>
            <div className="flex w-[100%] justify-center gap-3 items-center py-3">
                <a className="bg-white w-5 h-5 rounded-full" href="#"></a>
                <a className="bg-black w-5 h-5 rounded-full" href="#"></a>
                <a className="bg-black w-5 h-5 rounded-full" href="#"></a>
            </div>
        </div>
    </div>
}