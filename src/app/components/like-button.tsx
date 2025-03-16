"use client";
import { useState } from "react";

export default function LikeButton(){
    const [likes, setLikes] = useState(0);
    function clickHandler(){
        setLikes(likes+1);
    }
    return <button className="bg-teal-300 text-teal-950 p-2 rounded-xs border-1 border-teal-950 cursor-pointer hover:bg-teal-900 hover:text-white" 
    onClick={clickHandler}>Click me...({likes})</button>;
}