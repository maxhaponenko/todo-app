import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = (props) => {
    
    const [menuModel, setMenuModel] = useState([
        {name: 'Inbox', path: '/', icon: 'fas fa-envelope-open-text'},
        {name: 'Today', path: '/', icon: 'fas fa-star'},
        {name: 'Upcoming', path: '/', icon: 'fas fa-calendar-alt'},
        {name: 'Completed', path: '/', icon: 'fas fa-check-double'},
        {name: 'Trash', path: '/', icon: 'fas fa-trash-alt'},
    ])
    
    return (
        <ul className="nav-menu">
            {menuModel.map((item, index) => {
                return (
                    <li>
                        <NavLink key={index} to={item.path}>
                            <div><i className={`${item.icon}`}></i></div>
                            {item.name}
                            </NavLink>
                    </li>
                )
            })}
        </ul>
    )
}

export default Navigation