import React from "react";
const formFieldStyle = 'px-2 p-2 border-1 border-amber-500 rounded-md';

export default function LogIn() {
    return (
        <div className="py-5">
            <h1 className="text-center text-3xl">LOG IN</h1>
            <form method="POST" className="flex flex-col m-auto w-[90%] md:w-[30%] h-[100vh]">
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" placeholder="Username" className={`${formFieldStyle}`} />
                <br />
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" placeholder="Password" className={`${formFieldStyle}`}/>
                <br />
                <button type="submit" className="border-1 border-blue-400 drop-shadow-md active:shadow-[inset_0px_1px_1px_rgba(0,0,0,0.3)] bg-slate-50 p-2 rounded-sm cursor-pointer hover:bg-slate-100 hover:drop-shadow-sm transition-all ease-in duration-75 active:drop-shadow-none active:text-black active:translate-y-[1px] text-center">Sign in</button>
                <div className="flex justify-between mt-[1rem]">
                    <a className="underline" href="/registration">I don't have an account!</a>
                    <a className="underline" href="/pswd-reset-request">Forgot password?</a>
                </div>
            </form>
        </div>
    );
}