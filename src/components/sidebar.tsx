'use client';
import React from "react";
import { useState } from 'react';

export default function Sidebar({onChange}:any) {
    const [selection, setSelection] = useState('Profile');
    return(
        <aside className="lg:text-lg lg:p-10 flex lg:flex-col gap-5 w-full lg:w-[initial] justify-center lg:justify-start py-5 lg:h-[100vh] lg:border-r-1 border-b-1 border-gray-300 bg-zinc-100">
            <button className={"cursor-pointer" + (selection==='Profile' ? ' font-bold' : '')} onClick={()=>{onChange('Profile'); setSelection('Profile')}}>Profile</button>
            <button className={"cursor-pointer" + (selection==='My events' ? ' font-bold' : '')} onClick={()=>{onChange('My events'); setSelection('My events')}}>My events</button>
            <button className={"cursor-pointer" + (selection==='Scheduled events' ? ' font-bold' : '')} onClick={()=>{onChange('Scheduled events'); setSelection('Scheduled events')}}>My scheduled events</button>
        </aside>
    )
}