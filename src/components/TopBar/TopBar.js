import React from "react";
import SearchBar from "./SearchBar";
import './TopBar.css';
import ecom_logo from '../../assests/ecom_logo.jpg';

const TopBar = () => {
    return <div className="top_bar">
        <img src={ecom_logo} alt="Logo" height="70px" width="70px" />
        <SearchBar />
        <img src={""} alt="Profile" height="30px" width="30px" />
    </div>
}

export default TopBar;