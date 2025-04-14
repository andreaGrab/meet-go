import React from "react";

export default function UserDash() {
    return (
        <div className='w-[300px] m-auto'>
            <div className='grid grid-cols-3 items-center'>
                <h1 className='text-center text-3xl col-start-2'>Profile</h1>
                <a className='col-start-3 justify-self-end' href="#"><img className='w-5' src="/edit-icon.svg" alt="edit icon" /></a>
            </div>
            <div className='rounded-full w-[150px] h-[150px] bg-gray-300 m-auto mt-10'>
                <img src="/user-icon.svg" alt="profile image" />
            </div>
            <div className='flex flex-col mt-5 w-[300px] m-auto'>
                <p className='text-center font-bold mb-3'>First Name</p>
                <p className='text-center font-bold mb-3'>Last Name</p>
                <p className='text-center font-bold mb-3'>name@name.com</p>
                <a className='bg-blue-500 text-white rounded-md px-4 py-2 mt-5 cursor-pointer text-center' href="/pswd-reset-request">Change password</a>
                <button className='bg-blue-500 text-white rounded-md px-4 py-2 mt-5 cursor-pointer'>Log out</button>
                <button className='bg-red-500 text-white rounded-md px-4 py-2 mt-5 cursor-pointer'>DELETE ACCOUNT</button>
            </div>
        </div>
    );
}