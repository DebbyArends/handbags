import React from "react";

// alternatieve tekst bij de eerste div en twee keer footer om blokken naast elkaar te krijgen?
function Tiles({title, children, image}) {
    return image !== undefined ?
        (
            <section>
                <img src={image} alt={title}/>
            </section>
        ):(
            <section>
                <h2>{title}</h2>
                {children}
            </section>
        )
}

export default Tiles