'use client';

import React, { useState } from 'react';

function Add() {

    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState(0);

    const handleTitleChange = e => {
        setTitle(e.target.value)
    }

    const handleAmountChange = e => {
        setAmount(e.target.value)
    }

    const handleSubmit = () => {
        // apiCall
    }

    return (
        <div className='flex justify-center items-center h-screen w-screen bg-gray-100'>
            <div className='w-2/5 h-2/5 bg-gray-200 flex flex-col justify-center items-center rounded-lg shadow-2xl'>
                <div className='flex flex-col gap-5'>
                    <input className='text-black' type='text' placeholder='title' value={title} onChange={handleTitleChange}></input>
                    <input className='text-black' type='number' placeholder='amount' value={amount} onChange={handleAmountChange}></input>
                    <button className='text-black bg-stone-800'>Submit</button>
                </div>
            </div>
        </div>
    );
}

export default Add;
