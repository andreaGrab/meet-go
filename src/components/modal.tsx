import React from 'react';
export default function Modal({modalState, hideOnFill, resetTextFunction, bindTextValue}:any){
    const handleTextAreaValue = (data:any)=>{
        bindTextValue(data.target.value);
    }
    return (
        <div className={`${modalState.hidden ? 'opacity-0 z-[-1]' : 'opacity-100 z-[1]'} transition-all duration-100 ease-in-out absolute w-[100%] h-[100%] md:p-[2rem]`}>
            <div onClick={resetTextFunction} className="absolute top-0 left-0 w-[100%] h-[100%] bg-black opacity-50 z-[-5]"></div>
            <div className="bg-white p-[1rem] mt-[1rem] md:mt-0 md:p-[5rem] py-[5rem] md:rounded-md">
                <h1 className="text-center font-bold ">WRITE THE EVENT DESCRIPTION</h1>
                <p className="text-center text-red-500">{modalState.error.isError ? modalState.error.msg : ''}</p>
                <textarea required className={`${modalState.error.isError ? 'border-red-500' : 'border-black'} min-h-[10rem] w-[100%] h-[100%] border-1 rounded-md p-5 mt-5`} placeholder="Write your description here..." value={modalState.data} onChange={(data)=>{handleTextAreaValue(data)}}></textarea>
                <div className="mt-5 flex flex-col md:flex-row gap-5">
                    <button type="button" onClick={()=>{modalState.data != '' ?  hideOnFill():  modalState.error.isError = true}} className="cursor-pointer border-1 rounded-md px-3 py-1" title="Save your current paragraph and return to the form. Please note that this choice will override any previous written pragraphs in the current session!">CONFIRM</button>
                    <button type="button" onClick={resetTextFunction} className="cursor-pointer border-1 border-red-800 rounded-md px-3 py-1 bg-red-400 text-white" title="Delete all paragraphs and return to the form.">CANCEL</button>
                </div>
            </div>
        </div>
    );
}