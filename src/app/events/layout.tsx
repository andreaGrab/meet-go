export default function EventsLayout({
    children,
}: {
    children: React.ReactNode
}){
    return  <section className="md:px-[5rem] pb-[5rem] pt-5">
                <div className="flex flex-col">
                    <div className="flex-1 flex justify-around">
                        <h1 className="text-2xl font-bold text-center md:mb-[5rem]">ALL EVENTS <span>filterd by: -sasasssas-</span></h1>
                        <a className="md:hidden" href="#"><img className="w-8" src="/reset-icon.svg" alt="reset icon" /></a>
                    </div>
                    <div className="flex py-5 items-center justify-around gap-5 md:flex-1">
                        <img className="hidden md:block w-5" src="/filter.svg" alt="filter icon" />
                        <select className="border-1 border-black rounded-sm p-1" name="category">
                            <option>Category</option>
                        </select>
                        <select className="border-1 border-black rounded-sm p-1" name="place">
                            <option>Place</option>
                        </select>
                        <input className="border-1 border-black rounded-sm p-1" type="date" name="date"/>
                        <a className="hidden md:block" href="#"><img className="w-10" src="/reset-icon.svg" alt="reset icon" /></a>
                    </div>
                    <div className="text-right md:flex-1">
            
                    </div>
                </div>
                <div className="lg:grid grid-cols-2 xl:grid-cols-3 gap-5">
                    {children}
                </div>
            </section>
}