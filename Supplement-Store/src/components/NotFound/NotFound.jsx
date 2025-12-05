import React from 'react'
import { useState } from 'react';
import notFound from '../../assets/Images/4041.jpg';

export default function NotFound() {
    return (
        <div>
            <div className='w-100 m-auto d-flex justify-content-center'>
                <img src={notFound} className='w-100' alt="Image Not Found" />
            </div>
        </div>
    )
}
