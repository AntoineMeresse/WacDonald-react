import React from 'react'
import './Item.css';

function Item({name , image,  promo, selected, index, onClick}) {
    return (
        <div className={`Item${index === selected ? ' select' : ''}`} onClick={() => onClick(index)}>
            <img src={`/icons/${image}`} alt="itemImage"></img>
            <p className="itemName">{name}</p>
            {promo && <p className="promo">{promo}</p>}
        </div>
    )
}

export default Item;
