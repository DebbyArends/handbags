import React from "react";


function Tiles({title, children, image}) {
    return (
        <>
            <div>
                <h2>{title}</h2>
                <p>{children}</p>
            </div>
            <div>
                <img src={image} alt={title}/>
            </div>
        </>
    )
}

export default Tiles