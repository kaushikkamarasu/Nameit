import React from 'react';
import './Header.css';

const Header = ({ headerTitle, headerExpanded }) => {
    return <div className="Header-Container">
        <img src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png"
            className={`Header-Image ${headerExpanded ? `Header-Image-expanded` : `Header-Image-contracted`}`} alt="HeaderImage"></img>
        <h1 className={`Header-Text ${headerExpanded ? `Header-Text-expanded` : `Header-Text-contracted`}`}>{headerTitle}</h1>
    </div>
}

export default Header;