import React from 'react'
import {AiOutlineReload} from "react-icons/ai";
import {BsFillReplyAllFill} from "react-icons/bs";
import {AiOutlineClose} from "react-icons/ai";
import {AiOutlineStar} from "react-icons/ai";
import {MdFlashOn} from "react-icons/md";
import {GrFavorite} from "react-icons/gr";
import "./SwipeButton.css"


const SwipreButtons = () => {
    return (
        <>
        <div className="swipe_button">
        <AiOutlineReload className="swipe_button_items swipe_button_repeat"/>
        <AiOutlineClose className="swipe_button_items swipe_button_left"/>
        <BsFillReplyAllFill className="swipe_button_items swipe_button_star"/>
        <AiOutlineStar className="swipe_button_items swipe_button_lig"/>
        <MdFlashOn className="swipe_button_items swipe_button_lig"/>
        <GrFavorite className="swipe_button_items swipe_button_lig"/>
        </div>
        </>
    )
}

export default SwipreButtons
