import React from 'react';
import './layout.css';
import TopBar from './TopBar/TopBar';

const Layout = ({ children }) => {
    return <div className="layout_container">
        <TopBar />
        <div className="body_container">
            {children} 
        </div>
    </div>
}

export default Layout;
