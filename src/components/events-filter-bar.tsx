"use client";
import {useState} from "react";

export default function EventsFilterBar(){
    //styles
    const filterTag = "border-1 border-rose-500 p-1 bg-rose-50 rounded-sm";

    const dateLocale = new Date();
    const [date, setDate]:any = useState(dateLocale);
    const [category, setCategory]:any = useState('');
    const [place, setPlace]:any = useState('');
    const [isClear, setState]:any = useState(true);

    function formatDate(date:any){
        const dateLocaleSplited = date.toString().split(' ');
        const day = dateLocaleSplited[2];
        const monthBaseOne = date.getMonth() + 1;
        const month = monthBaseOne.toString().split('').length > 1 ? monthBaseOne : '0' + monthBaseOne;
        const year = dateLocaleSplited[3];
        return `${year}-${month}-${day}`;
    }
 
    function onSetDate(dataObj:any){
        setState(false);
        const dataValue = dataObj.target.value;
        setDate(new Date(dataValue));
        console.log(isClear);
    }
 
    function onSetCategory(dataObj:any){
        const dataValue =  dataObj.target.value;
        setCategory(dataValue);
    }
    function onSetPlace(dataObj:any){
        const dataValue =  dataObj.target.value;
        setPlace(dataValue);
    }

    console.log(isClear)

    return (
        <div className="flex flex-col">
            <div className="flex-1 flex justify-around">
                <h1 className="text-2xl font-bold text-center md:mb-[5rem]">ALL EVENTS by:<br></br><span> <strong className={category!=''?filterTag:''}>{category}</strong> <strong className={place!=''?filterTag:''}>{place}</strong> <strong className={!isClear?filterTag:''}>{isClear?'':formatDate(date)}</strong></span></h1>
            </div>
            <div className="flex py-5 items-center justify-around gap-5 md:flex-1">
                <img className="hidden md:block w-5" src="/filter.svg" alt="filter icon" />
                <form action={()=>{
                    setCategory("");
                    setPlace("");
                    setDate(dateLocale);
                    setState(true);
                }} className="flex-1 flex gap-5 flex-col md:flex-row justify-between items-center">
                    <select className="border-1 border-black md:rounded-sm p-3 text-center md:p-1" name="category" value={category} onChange={onSetCategory}>
                        <option>Filter by category:</option>
                        <option>Science</option>
                        <option>Sport</option>
                        <option>Music</option>
                        <option>Gaming</option>
                        <option>Comics</option>
                        <option>Automotive/Motors</option>
                        <option>Technology</option>
                        <option>Cultural/Etnographic</option>
                        <option>Arts and Crafts</option>
                        <option>Entertainment</option>
                        <option>Other</option>
                    </select>
                    <select className="border-1 border-black md:rounded-sm p-3 text-center" name="place" value={place} onChange={onSetPlace}>
                        <option>Filter by place:</option>
                        <option>Online</option>
                        <option>Cina</option>
                        <option>Japan</option>
                        <option>Greece</option>
                        <option>Turkey</option>
                        <option>Italy</option>
                        <option>Morocco</option>
                        <option>Germany</option>
                        <option>USA</option>
                        <option>Canada</option>
                        <option>...</option>
                    </select>
                    <input className="w-[100%] md:w-[initial] border-1 border-black md:rounded-sm p-3 text-center" type="date" name="date" value={formatDate(date)} onChange={onSetDate}/>
                    <button type='submit' className="cursor-pointer"><img className="w-10" src="/reset-icon.svg" alt="reset icon" /></button>
                </form>
                
            </div>
        </div>
    )
}