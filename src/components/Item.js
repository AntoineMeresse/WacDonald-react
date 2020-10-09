import React from 'react'
import './Item.css';

function Item({name , image,  promo, selected, index}) {
    return (
        <div className={`Item${selected ? ' select' : ''}`}>
            <img src={`/icons/${image}`} alt="itemImage"></img>
            <p className="itemName">{name}</p>
            {promo && <p className="promo">{promo}</p>}
        </div>
    )
}

export default Item;
