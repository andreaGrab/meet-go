import Event from "@/components/event";
import {events} from "@/app/page";
export default function Events(){
    return <>
        {
            events.map((event:any, index:number)=>{
                return <Event key={index} event={event} index={index}/>
            })
        }
    </>
}