export default function EventCarousel(){
    return <div className="h-fit bg-lime-300 overflow-hidden flex items-center pl-5 pr-5">
        <a href="#"><img className="w-20 md:w-30" src="/arrow-left.svg" alt="arrow left" /></a>
        <div className="flex w-[80%] h-full m-auto bg-amber-400 p-5">
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
                <div className="flex flex-col gap-5 my-5">
                    <button className="border-1 border-blue-400 drop-shadow-md active:shadow-[inset_0px_1px_1px_rgba(0,0,0,0.3)] bg-slate-50 p-2 rounded-sm cursor-pointer hover:bg-slate-100 hover:drop-shadow-sm transition-all ease-in duration-75 active:drop-shadow-none active:text-black active:translate-y-[1px]">VIEW MORE</button>
                    <button className="border-1 border-blue-400 drop-shadow-md active:shadow-[inset_0px_1px_1px_rgba(0,0,0,0.3)] bg-slate-50 p-2 rounded-sm cursor-pointer hover:bg-slate-100 hover:drop-shadow-sm transition-all ease-in duration-75 active:drop-shadow-none active:text-black active:translate-y-[1px]">BOOK NOW FOR 12,99€</button>
                </div>
            </div>

            <div className="flex-1 hidden md:block">
                <img src="" alt="event image" />
            </div>
        </div>
        <a href="#"><img className="w-20 md:w-30" src="/arrow-right.svg" alt="arrow right" /></a> 
    </div>
}