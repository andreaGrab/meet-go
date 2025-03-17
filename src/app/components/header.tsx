"use client";
import Image from "next/image";
import Dropdown from "./drop-down-nav";
import { useState } from 'react';

export default function Header(){
    const [toggle, setToggle] = useState(0);
    function toggleMenu(){
        if(toggle===0){
            setToggle(1)
        }else{
            setToggle(0)
        }
    }
    return <header className="text-black bg-amber-100 relative">
        <nav className="flex justify-between p-5 gap-5 items-center">
            <div className="flex gap-5 items-center">
                <a href="#">
                    <Image
                    src='/app-icon.png'
                    alt="Brand Image"
                    width={60}
                    height={60}
                    />
                </a>
                <form className="flex">
                    <input type="serarch" placeholder="Search here" className="w-[100%] border-1 border-neutral-500 mr-[.5px] rounded-l-full p-[.5rem] bg-orange-100"></input>
                    <button className="w-[100%] flex-2 border-1 border-neutral-500 rounded-r-full p-[.5rem] bg-orange-300 text-orange-100">Search</button>
                </form>
            </div>
            <div className="flex items-center gap-7">
                <a className="md:hidden" onClick={toggleMenu} href="#">
                    <img className="w-10" src="/menu-icon.svg" alt="Menu icon" />
                </a>
                <ul className="gap-5 hidden md:flex">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Create event</a></li>
                </ul>
                <p className="hidden md:block">|</p>
                <a href="#">
                    <img className="w-10" src="/user-icon.svg" alt="user icon" />
                </a>
            </div>
        </nav>
        <Dropdown toggleVal={toggle}/>
    </header>
}