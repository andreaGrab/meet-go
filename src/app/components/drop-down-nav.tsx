export default function Dropdown({toggleVal}:any){
    return (
        <div className={"bg-amber-200 text-center overflow-hidden transition-[height] ease-in-out duration-300 " + (toggleVal ? "h-[152px]" : "h-[0px]")}>
            <ul className="flex flex-col gap-5 my-5">
                <li><a href="#">Home</a></li>
                <li><a href="#">Events</a></li>
                <li><a href="#">Create event</a></li>
            </ul>
        </div>
    )
}