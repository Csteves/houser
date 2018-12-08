import React from 'react';
import "./Header.css"
import Logo from "../../houseLogo.png"

const Header = () => {
    return (
        <div className="main">
            <div className="head_container">
                <div className="head_img" >
                    <img src={Logo} alt=""/>
                </div>
            <h2 id="header">Houser</h2>

            </div>

        </div>
    );
};

export default Header;