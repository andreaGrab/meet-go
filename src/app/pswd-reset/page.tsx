"use client";
import React from "react";
import {useState, useEffect} from "react";
const formFieldStyle = 'px-2 p-2 border-1 border-amber-500 rounded-md';

export default function ResetPassword() {

/* //code for api request
    const afterRequest = ()=>{
        const form:any = document.getElementById('form');
        const checkMailNote:any = document.getElementById('checkMailNote');
        if (email) {
            fetch('/api/pswd-reset-request', {
                method: 'POST',
                body: JSON.stringify({ email }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    checkMailNote.classList.remove('hidden');
                    form.reset();
                } else {
                    alert('Error sending email. Please try again.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
        }
    };*/
    return (
        <div className="py-5 h-[100vh]">
            <h1 className="text-center text-3xl my-[3rem]">RESET PASSWORD</h1>
            <form method="POST" id='form' className="flex flex-col m-auto w-[90%] md:w-[30%]">
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" placeholder="Password" className={`${formFieldStyle}`} />
                <br />
                <label htmlFor="confirm-password">Confirm password:</label>
                <input type="password" name="confirm-password" placeholder="Confirm password" className={`${formFieldStyle}`} />
                <br />
                <button type="submit" className="border-1 border-blue-400 drop-shadow-md active:shadow-[inset_0px_1px_1px_rgba(0,0,0,0.3)] bg-slate-50 p-2 rounded-sm cursor-pointer hover:bg-slate-100 hover:drop-shadow-sm transition-all ease-in duration-75 active:drop-shadow-none active:text-black active:translate-y-[1px] text-center">Reset password</button>
            </form>
        </div>
    );
}