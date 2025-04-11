"use client";

import Image from "next/image";
import Dropdown from "./drop-down-nav";
import { useState } from 'react';

export default function Header(){
    const [toggle, setToggle] = useState(0);
    const [query, setQuery] = useState<any>(null);

    function toggleMenu(){
        if(toggle===0){
            setToggle(1)
        }else{
            setToggle(0)
        }
    }

    return <header className="text-black bg-amber-100 sticky top-0 z-10">
        <nav className="flex justify-between p-5 gap-5 items-center">
            <div className="flex gap-5 items-center">
                <a href="/">
                    <Image
                    src='/app-icon.png'
                    alt="Brand Image"
                    width={60}
                    height={60}
                    />
                </a>
                <form action={(data)=>{setQuery(data.get('query'))}} className="flex">
                    <input name='query' type="serarch" placeholder="Search here" className="w-[100%] border-1 border-neutral-500 mr-[.5px] rounded-l-full p-[.5rem] bg-orange-100"></input>
                    <button type="submit" className="w-[100%] flex-2 border-1 border-neutral-500 rounded-r-full p-[.5rem] bg-orange-300 text-orange-100">Search</button>
                </form>
            </div>
            <div className="flex items-center gap-7">
                <button className="md:hidden" onClick={toggleMenu}>
                    <img className="w-10" src="/menu-icon.svg" alt="Menu icon" />
                </button>
                <ul className="gap-5 hidden md:flex">
                    <li><a href="/">Home</a></li>
                    <li><a href="/events">Events</a></li>
                    <li><a href="/create-event">Create event</a></li>
                </ul>
                <p className="hidden md:block">|</p>
                {
                // set conditional routing if user is logged in or not 
                }
                <a href="/log-in">
                    <img className="w-10" src="/user-icon.svg" alt="user icon" />
                </a>
            </div>
        </nav>
        <Dropdown toggleVal={toggle}/>
    </header>
}