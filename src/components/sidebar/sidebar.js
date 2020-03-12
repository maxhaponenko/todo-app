import React from 'react';
import Navigation from './components/navigation';
import Folders from './components/folders';
import './sidebar.scss';

const Sidebar = (props) => {
    return (
        <nav>
            <Navigation />
            <Folders />
            <div className="add-new-item">+</div>
        </nav>
    )
}

export default Sidebar