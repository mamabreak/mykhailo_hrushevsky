import React from 'react'
import Arrow from '../../Pictures/arrow_nav.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
    return(
        <footer className="flex justify-center items-center flex-col bg-[#2C2C2C] py-[1rem]">
            <div className="h-auto w-[9rem] flex justify-between items-center">
                <div className="flex flex-col select-none text-white text-xl">
                    <span>Перейти</span>
                    <span className="flex justify-center">Назад</span>
                </div>
                <Link to='/home'>
                    <img src={Arrow} alt="Right Arrow" className="w-[35px] h-[35px] cursor-pointer rounded-full transform hover:scale-110 transition-all duration-500 rotate-180"/>
                </Link>
            </div>
            
        </footer>
    )
}

export default Footer;