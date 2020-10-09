import React from 'react'
import "./MenuWac.css";

import Item from "./Item.js";
import datas from "./../datas/menu.json"

function MenuWac() {
    return (
        <div className="menuWac">
            <h1>Hey,</h1>
            <h2>What's up?</h2>
            <div className="itemList">
                {datas.map(
                    (elem , index) => (
                    <Item name={elem.name} image={elem.icon} promo={elem.promo} key={index}/>
                    )
                )}
            </div>
        </div>
    )
}

export default MenuWac;
