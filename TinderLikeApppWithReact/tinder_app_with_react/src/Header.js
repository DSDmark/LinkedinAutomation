import React from 'react';
import { BsPersonFill } from "react-icons/bs";
import { BsChatSquareDotsFill } from "react-icons/bs";
import { SiTinder } from "react-icons/si";
import './header.css';



const Header = () => {
    return (
        <>
            <div className="header">
            <BsPersonFill/>
            <SiTinder style={{color:"red"}}/>
            <BsChatSquareDotsFill/>
            </div>
        </>
    )
}

export default Header;
