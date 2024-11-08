import React from 'react'
import Arrow from '../../Pictures/arrow_nav.svg'

const Footer = () => {
    return(
        <footer className="flex justify-center items-center flex-col bg-[#2C2C2C] py-[1rem]">
            <div className="h-auto w-[10.5rem] flex justify-between items-center">
                <div className="flex flex-col select-none text-white text-xl">
                    <span>Перейти до</span>
                    <span>Наступного</span>
                </div>
                <img src={Arrow} alt="Right Arrow" className="w-[35px] h-[35px] cursor-pointer rounded-full transform hover:scale-110 transition-all duration-500"/>
            </div>
            
        </footer>
    )
}

export default Footer;