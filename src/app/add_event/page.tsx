"use client";
import React, { use } from "react";
import { useEffect, useState } from "react";
import Modal from "@/components/modal";

type schedule = {
    id: number;
    description: string;
    date: string;
    startHour: string;
    endHour: string;
};

export default function AddEvent(){
    const formFieldStyle = 'px-2 p-2 border-1 border-amber-500 rounded-md';
    // modal state
    const [modal, setModal] = useState({
        hidden: true,
        data: '',
        error: {
            msg: '',
            isError: false
        }
    });

    // schedule state
    const [schedule, setSchedule] = useState<schedule[]>([]);

    // function for adding schedule
    const addSchedule = ()=>{
        // selecting the input schedule fields
        const scheduleFields = document.querySelectorAll('#schedule-description, #schedule-day, #start-hour, #end-hour');
        const addScheduleStatus:any = document.querySelector('#add-schedule')?.getAttribute('data-isvalid');
        let fieldValueCollection:any = [];
        scheduleFields.forEach((field:any)=>{
            if(field.value == '' || addScheduleStatus === false){
                // checking if the field is empty
                field.classList.add('border-3', 'border-red-500');
                field.placeholder = 'Please fill this field';
            }else{
                fieldValueCollection.push(field.value);
                field.classList.remove('border-red-500');
                field.classList.add('border-1');
                field.placeholder = 'Max 25 characters';
            }
            if(fieldValueCollection[0] && fieldValueCollection[1] && fieldValueCollection[2] && fieldValueCollection[3] !== ''){
                const newSchedule = {
                    id: schedule.length + 1,
                    description: fieldValueCollection[0],
                    date: fieldValueCollection[1],
                    startHour: fieldValueCollection[2],
                    endHour: fieldValueCollection[3]
                };
                setSchedule([...schedule, newSchedule]);
            }
            field.value = '';
        })
        fieldValueCollection = [];
    }
    // function for editing schedule
    const editAction = (e:any)=>{
        // selecting the schedule id from the data attribute
        const scheduleId = e.target.closest('div[data-schedule-id]').dataset.scheduleId;

        // selecting the selected row
        const selectedRow:any = document.getElementById(`schedule-${scheduleId}`);
        const confirmButton = selectedRow.querySelector('#confirm-button');

        // showing the edit fields and hiding the fixed fields
        selectedRow.querySelector('#schedule-edit').classList.remove('hidden');
        selectedRow.querySelector('#schedule-fixed').classList.add('hidden');

        // selecting the fields from the selected row
        const scheduleDescription = selectedRow.querySelector('#schedule_description');
        const scheduleDay = selectedRow.querySelector('#schedule-day');
        const scheduleStartHour = selectedRow.querySelector('#schedule_start-hour');
        const scheduleEndHour = selectedRow.querySelector('#schedule_end-hour');

        // setting the values of the fields to the selected row
        schedule.forEach(item=>item.id == scheduleId ? (
            scheduleDescription.value = item.description,
            scheduleDay.value = item.date,
            scheduleStartHour.value = item.startHour,
            scheduleEndHour.value = item.endHour
        ) : null);

        confirmButton.addEventListener('click', ()=>{
            // checking if the fields are empty
            if(scheduleDescription.value == '' || scheduleDay.value == '' || scheduleStartHour.value == '' || scheduleEndHour.value == ''){
                alert('Please fill all the fields!');
            }else{
                // if the fields are not empty, update the schedule
                const updatedSchedule = {
                    id: scheduleId,
                    description: scheduleDescription.value,
                    date: scheduleDay.value,
                    startHour: scheduleStartHour.value,
                    endHour: scheduleEndHour.value
                }
                setSchedule(schedule.map((item)=> item.id == updatedSchedule.id ? updatedSchedule : item));
                selectedRow.querySelector('#schedule-edit').classList.add('hidden');
                selectedRow.querySelector('#schedule-fixed').classList.remove('hidden');
            }
        })
    }
    // function for deleting schedule
    const deleteSchedule = (e:any)=>{
        const scheduleId = e.target.closest('div[data-schedule-id]').dataset.scheduleId;
        const selectedRow:any = document.getElementById(`schedule-${scheduleId}`);
        selectedRow.classList.add('hidden');
        setSchedule(schedule.filter((item)=> item.id != scheduleId));
    }

    useEffect(()=>{
        const params = new URLSearchParams(window.location.search);
        params.append('schedule', JSON.stringify(schedule));
        console.log(params.toString());
    }, [schedule])

    // scroll lock when modal is open
    useEffect(()=>{
        document.body.style.overflow = modal.hidden ? 'auto' : 'hidden';
    }, [modal.hidden]);
    // error dedection if the textarea is empty
    useEffect(()=>{
        if(modal.data != ''){
            setModal({...modal, error: {msg: '', isError: false}});
        }else{
            setModal({...modal, error: {msg: 'Please write a description before confirming!', isError: true}});
        }
    }, [modal.data]);

    // function for reseting modal data 
    const resetText = ()=>{
        setModal({...modal, hidden: true, data: ''});
    }
    // function for binding the textarea value
    const bindTextAreaValue = (data:any)=>{
        setModal({...modal, data: data});
    }
    const hideOnFill = ()=>{
        setModal({...modal, hidden: true})
    }

    // function for online event checkbox
    const checkboxChecked = (e:any)=>{
        const isChecked = e.target.checked;
        // selectiong all the fields that need to be disabled
        const fieldSet = document.querySelectorAll('#event_address, #city, #additional_info');
        // online event label
        const isOnlineLabel:any = document.getElementById('isOnlineLabel');
        
        // if the checkbox is checked, disable the fields and change the label color
        fieldSet.forEach((field:any)=>{
            if(isChecked){
                isOnlineLabel.classList.add('bg-blue-500', 'text-white');
                field.disabled = isChecked;
                field.readOnly = isChecked;
                field.required = false;
                field.classList.add('opacity-50', 'cursor-not-allowed');
                field.parentNode.classList.add('opacity-50');
            }else{
                isOnlineLabel.classList.remove('bg-blue-500', 'text-white');
                field.disabled = isChecked;
                field.readOnly = isChecked;
                field.required = true;
                field.classList.remove('opacity-50', 'cursor-not-allowed');
                field.parentNode.classList.remove('opacity-50');
            }
        });
    }
    // function for ticket price
    const ticketPrice = (e:any)=>{
        const ticketPriceField:any = document.getElementById('price');
        
        if(e.target.value == 'Free'){
            ticketPriceField.value = null;
            ticketPriceField.disabled = true;
            ticketPriceField.classList.add('cursor-not-allowed');
            ticketPriceField.placeholder = 'Free';
        }else{
            ticketPriceField.disabled = false;
            ticketPriceField.classList.remove('cursor-not-allowed');
            ticketPriceField.placeholder = 'Price value';
        }
    }
    return (
        <>
        <Modal modalState={modal} hideOnFill={hideOnFill} resetTextFunction={resetText} bindTextValue={bindTextAreaValue} />
        <section className="my-[5rem] mx-[1.5rem] xl:mx-[5rem]">
            <h1 className="text-center text-3xl mb-5">CREATE EVENT</h1>
            <form className="flex flex-col gap-10">
                <div className="flex gap-5">
                    <fieldset className="flex-1 border-1 border-black p-5 rounded-md">
                        <legend className="font-bold">EVENT VITALS</legend>
                        <div className="flex flex-col md:grid grid-cols-3 lg:grid-cols-4 md:place-items-start gap-5">
                            <label className="flex flex-col" htmlFor="title">
                                Title
                                <input required id='title' type="text" name='title' placeholder="Title event" className={formFieldStyle}  />
                            </label>
                            <label className="flex flex-col" htmlFor="category">
                                Category
                                <select  required id='category' name='category' className={formFieldStyle}>
                                    <option>Cat1</option>
                                    <option>Cat2</option>
                                    <option>Cat3</option>
                                </select>
                            </label>
                            <label className="flex flex-col" htmlFor="event-start">
                                Event beginning
                                <input required className={formFieldStyle + ' w-[100%]'} type="datetime-local" name="event-start" id="event-start" />
                            </label>
                            <label className="flex flex-col" htmlFor="event-end">
                                Event ending
                                <input required className={formFieldStyle + ' w-[100%]'} type="datetime-local" name="event-end" id="event-end" />
                            </label>
                            <div className="flex flex-col">
                                <label>Digital event</label>
                                <label id='isOnlineLabel' className="flex gap-5 border-1 border-blue-500 py-2 px-2 rounded-md" htmlFor="online-event">
                                    It's an online event
                                    <input type="checkbox" onChange={checkboxChecked} name="online-event" id="online-event" />
                                </label>
                            </div>
                            <label className="flex flex-col" htmlFor="event_address">
                                Event address
                                <input id='event_address' type="text" name='event_address' required placeholder="Max 35 characters" maxLength={35} className={formFieldStyle}  />
                            </label>
                            <label className="flex flex-col" htmlFor="city">
                                City
                                <input id='city' type="text" name='city' required placeholder="Max 15 characters" maxLength={15} className={formFieldStyle}  />
                            </label>
                            <label className="flex flex-col" htmlFor="additional_info">
                                Additional info
                                <input id='additional_info' type="text" name='additional_info' placeholder="Info/notes" className={formFieldStyle}  />
                            </label>
                            <label className="flex flex-col" htmlFor="event-description">
                                Event description
                                <textarea required name="event-description" id="event-description" placeholder="Write description" className="border-1 border-amber-500 rounded-md p-1 h-11" onClick={()=>setModal({...modal, hidden: false})} defaultValue={modal.data}></textarea>
                            </label>
                            <label className="flex flex-col" htmlFor="total-tickets">
                                Total tickets
                                <input required type="number" name="total-tickets" id="total-tickets" min='5' className={formFieldStyle} />
                            </label>
                            <div>
                                <p className="flex flex-col">Ticket Price</p>
                                <div className={"flex items-center " + formFieldStyle}>
                                    <input required className="border-b-1 border-amber-500 disabled:border-gray-200 w-[100%]" id="price" name="price" type="text" placeholder={'Price value'} pattern="^(\d{1,3})[,|.](\d{2,2})" />
                                    <p>|</p>
                                    <select id='currency' onChange={ticketPrice} name='currency'>
                                        <option value="Euro">EUR</option>
                                        <option value="US Dollar">USD</option>
                                        <option value="GBP British Pound">GBP</option>
                                        <option value="JPY Japanese Yen">JPY</option>
                                        <option value="CNY Chinese Yuan">CNY</option>
                                        <option value="CHF Swiss Franc">CHF</option>
                                        <option value="AUD Australian Dollar">AUD</option>
                                        <option value="CAD Canadian Dollar">CAD</option>
                                        <option value="Free">Free</option>
                                    </select>
                                </div>
                            </div>
                            <label className="flex flex-col" htmlFor="tags">
                                Tags
                                <input type="text" name="tags" id="tags" placeholder="Tags separeted by comma" className={formFieldStyle}></input>
                            </label>
                        </div>
                    </fieldset>
                </div>
                <fieldset className="flex flex-col gap-5 border-1 border-black p-5 rounded-md">
                        <legend className="font-bold">EVENT STRUCTURE</legend>
                        <h1>SET SCHEDULE</h1>
                        <section id='add-schedule' className="flex flex-col md:flex-row gap-5 lg:border-1 xl:justify-between border-black lg:p-5 rounded-md" data-isvalid={false}>
                            <label className="flex flex-2 lg:flex-2 xl:flex-1 flex-col" htmlFor="schedule-description">
                                Short description
                                <input id='schedule-description' type="text" name='schedule-description' placeholder="Max 25 characters" maxLength={25} className={formFieldStyle}  />
                            </label>
                            <label className="flex flex-col" htmlFor="schedule-day">
                                Select day
                                <input type="date" name="schedule-day" id="schedule-day" className={formFieldStyle + ' w-[100%]'} />
                            </label>
                            <div className="flex flex-col md:flex-row gap-5">
                                <label className="flex flex-col" htmlFor="start-hour">
                                    Starts at
                                    <input type="time" name="start-hour" id="start-hour" className={formFieldStyle + ' w-[100%]'} />
                                </label>
                                <label className="flex flex-col" htmlFor="end-hour">
                                    Ends at
                                    <input type="time" name="end-hour" id="end-hour" className={formFieldStyle + ' w-[100%]'} />
                                </label>
                            </div>
                            <button type='button' className="flex-1 md:self-end xl:flex-1 border-1 border-blue-400 drop-shadow-md active:shadow-[inset_0px_1px_1px_rgba(0,0,0,0.3)] bg-slate-50 p-2 rounded-sm cursor-pointer hover:bg-slate-100 hover:drop-shadow-sm transition-all ease-in duration-75 active:drop-shadow-none active:text-black active:translate-y-[1px] text-center" onClick={addSchedule}>Add</button>
                        </section>
                        <h1>REVIEW SCHEDULE</h1>
                        <section>
                            <div className="bg-gray-400 py-5 rounded-md overflow-hidden border-1 border-gray-500 inset-shadow-sm inset-shadow-gray-500">
                                {
                                    schedule.length ? (
                                        schedule.map(scheduleItem=>(
                                    <div key={scheduleItem.id} id={`schedule-${scheduleItem.id}`} className="w-[full] bg-gray-200 p-5 drop-shadow-md mb-5">
                                        <div id='schedule-edit' className="flex flex-col md:flex-row gap-5 justify-between md:items-center hidden">
                                            <input type='text' maxLength={25} placeholder="Description" id='schedule_description' className="border-1 border-black p-2 rounded-md bg-amber-100"></input>
                                            <input type="date" name="schedule-day" id="schedule-day" className={formFieldStyle + ' bg-amber-100 border-1 border-black'} />
                                            <input type="time" id="schedule_start-hour" className={formFieldStyle + ' bg-amber-100 border-1 border-black'} />
                                            <input type="time" id="schedule_end-hour" className={formFieldStyle + ' bg-amber-100 border-1 border-black'} />
                                            <button type='button' id='confirm-button' className="cursor-pointer"><img className="w-5" src="/confirm-icon.svg" alt="confirm icon" /></button>
                                        </div>
                                        <div id='schedule-fixed' className="flex flex-col md:flex-row gap-5 justify-between md:items-center">
                                            <div className="flex-1">
                                                <h1 className="font-bold">Description</h1>
                                                <p>{scheduleItem.description}</p>
                                            </div>
                                            <div className="flex-1">
                                                <h1 className="font-bold">Schedule time span</h1>
                                                <p>{scheduleItem.date} | from {scheduleItem.startHour} to {scheduleItem.endHour}</p>
                                            </div>
                                            <div className="flex gap-5" data-schedule-id={scheduleItem.id}>
                                                <button type="button" className="cursor-pointer" onClick={deleteSchedule}><img className="w-5" src="/trash-icon.svg" alt="trash icon" /></button>
                                                <button type='button' className="cursor-pointer" onClick={editAction}><img className="w-5" src="/edit-icon.svg" alt="edit icon" /></button>
                                            </div>
                                        </div>
                                    </div>))) : <h1 className="text-center text-gray-800 text-xl">No schedule added!</h1>
                                }
                            </div>
                        </section>
                        <h1>INVOLVED PEOPLE</h1>
                        <section className="flex flex-col md:flex-row gap-5">
                            <div className="grid grid-cols-1 grid-rows-2 gap-2">
                                <label className="self-end" htmlFor="main-host">Host name</label>
                                <input required type="text" name="main-host" id="main-host" placeholder="Host name"className={formFieldStyle} />
                            </div>
                            <div className="flex flex-col md:grid md:grid-cols-3 md:grid-rows-2 gap-2">
                                <label className="md:self-end" htmlFor="co-host">Co-hosts</label>
                                <input type="text" name="co-host-1" id="co-host-1" placeholder="Co-host 1 name" className={formFieldStyle + ' row-start-2'} />
                                <input type="text" name="co-host-2" id="co-host-2" placeholder="Co-host 2 name" className={formFieldStyle + ' row-start-2'} />
                                <input type="text" name="co-host-3" id="co-host-3" placeholder="Co-host 3 name" className={formFieldStyle + ' row-start-2'} />
                            </div>
                        </section>
                    </fieldset>

                

                <div className="flex flex-col md:flex-row gap-5 justify-left mt-[2rem] md:mt-0">
                    <button className="border-1 border-blue-400 drop-shadow-md active:shadow-[inset_0px_1px_1px_rgba(0,0,0,0.3)] bg-slate-50 p-2 rounded-sm cursor-pointer hover:bg-slate-100 hover:drop-shadow-sm transition-all ease-in duration-75 active:drop-shadow-none active:text-black active:translate-y-[1px] text-center" type="submit">PUBLISH</button>
                    <button className="border-1 border-blue-400 drop-shadow-md active:shadow-[inset_0px_1px_1px_rgba(0,0,0,0.3)] bg-slate-50 p-2 rounded-sm cursor-pointer hover:bg-slate-100 hover:drop-shadow-sm transition-all ease-in duration-75 active:drop-shadow-none active:text-black active:translate-y-[1px] text-center" type="button">SAVE AS A DRAFT</button>
                    <button className="border-1 border-blue-400 drop-shadow-md active:shadow-[inset_0px_1px_1px_rgba(0,0,0,0.3)] bg-slate-50 p-2 rounded-sm cursor-pointer hover:bg-slate-100 hover:drop-shadow-sm transition-all ease-in duration-75 active:drop-shadow-none active:text-black active:translate-y-[1px] text-center" type="button">CANCEL</button>
                </div>
            </form>
        </section>
        </>
    );
}