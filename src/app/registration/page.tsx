import React from "react";
const formFieldStyle = 'px-2 p-2 border-1 border-amber-500 rounded-md';


export default function Registration() {
    return(
        <div className="py-5">
            <h1 className="text-center text-3xl">REGISTRATION</h1>
            <form method="POST" className="flex flex-col m-auto w-[90%] md:w-[30%] h-[100vh]">
                <label htmlFor="first name">First name:</label>
                <input type="text" name="first-name" placeholder="First name" className={`${formFieldStyle}`} />
                <br />
                <label htmlFor="last name">Last name:</label>
                <input type="text" name="last-name" placeholder="Last name" className={`${formFieldStyle}`} />
                <br />
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" placeholder="Email" className={`${formFieldStyle}`} />
                <br />
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" placeholder="Username" className={`${formFieldStyle}`} />
                <br />
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" placeholder="Password" className={`${formFieldStyle}`}/>
                <br />
                <label htmlFor="pswd-confirm">Confirm password:</label>
                <input type="password" name="pswd-confirm" placeholder="Rewrite password" className={`${formFieldStyle}`}/>
                <br />
                <button type="submit" className="border-1 border-blue-400 drop-shadow-md active:shadow-[inset_0px_1px_1px_rgba(0,0,0,0.3)] bg-slate-50 p-2 rounded-sm cursor-pointer hover:bg-slate-100 hover:drop-shadow-sm transition-all ease-in duration-75 active:drop-shadow-none active:text-black active:translate-y-[1px] text-center">Confirm registration</button>
            </form>
        </div>
    );
}