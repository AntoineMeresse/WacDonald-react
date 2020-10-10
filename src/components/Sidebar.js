import React from 'react';
import "./Sidebar.css";

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-top">
                <img src="usa.png" alt="usa" className="usaFlag"/>
            </div>
            <div className="sidebar-main">
                <p>I'm a sidebar</p>
            </div>
        </div>
    )
}

export default Sidebar;
