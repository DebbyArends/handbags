import React from 'react';

function Product ({redLabel, image, description, price}) {
    return (
            <article>
                <span>{redLabel}</span>
                <img src={image} alt={description}/>
                <p>{description}</p>
                <h4>{price}</h4>
            </article>
    )
}

export default Product