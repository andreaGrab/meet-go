import EventsFilterBar from "@/components/events-filter-bar";

export default function EventsLayout({
    children,
}: {
    children: React.ReactNode
}){
    return  <section className="md:px-[5rem] pb-[5rem] pt-5">
                <EventsFilterBar/>
                <div className="lg:grid grid-cols-2 xl:grid-cols-3 gap-5">
                    {children}
                </div>
            </section>
}