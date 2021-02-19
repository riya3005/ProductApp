import React from 'react';
import './taskbar.css';
import { NavLink } from 'react-router-dom';

const Taskbar = () => {
    return (
        <div className="taskbar">
            <NavLink to="/addnewprod">
                <button type="button" className="taskbar_button">
                    + Add New Product
                </button>
            </NavLink>
        </div>
    );
};

export default Taskbar;
