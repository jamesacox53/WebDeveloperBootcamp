import './Box.css';
import { useState } from 'react';

export default function Box({ isActive, clickBoxFunc }) {
    const styleObj = {
        backgroundColor: isActive ? 'red' : 'black'
    };
    
    return <div className='Box' onClick={clickBoxFunc} style={styleObj}></div>;
}