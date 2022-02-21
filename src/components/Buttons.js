import React from 'react';

function Buttons ({button, navName, buttonLog ,disabled}) {
    return (
        <button type={button} onClick={() => console.log({buttonLog})} disabled={disabled}> {navName} </button>
    )
}

export default Buttons