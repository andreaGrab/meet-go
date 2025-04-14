"use client";
import React from 'react';
import { useState } from 'react';
import Sidebar from "@/components/sidebar";
import UserDash from '@/components/user-profile';
import UserEvents from "@/components/user-events-dash";
import UserScheduled from "@/components/user-scheduled";

export default function UserProfile() {
    const [selection, setSelection] = useState('');
    const showSelected = ()=>{
        switch (selection) {
            case 'Profile':
                return <UserDash />;
            case 'My events':
                return <UserEvents />;
            case 'Scheduled events':
                return <UserScheduled />;
            default:
                return <UserDash />;
        }
    };
    return (
        <section className='flex flex-col lg:flex-row items-start'>
            <Sidebar onChange={setSelection}/>
            <main className='min-h-[100vh] w-full pt-10 lg:pt-[3rem]'>
                {
                    showSelected()
                }
            </main>
        </section>
    )
}