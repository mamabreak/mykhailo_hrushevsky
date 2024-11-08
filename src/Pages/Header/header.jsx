import React from 'react'
// import { Link } from 'react-router-dom'

const Header = () => {
    return(
            <header className="w-full flex justify-left p-8 bg-[#2C2C2C] items-center ">
            <span className="text-4xl text-white select-none items-center">Михайло Грушевський</span>
                <nav className="py-2 px-10 w-[18rem] h-auto flex justify-between items-center rounded-[3rem] text-white select-none font-medium">
                    <span className="cursor-pointer hover:text-gray-500 duration-500">Життєвий шлях</span>
                    <span className="cursor-pointer hover:text-gray-500 duration-500">Пам'ятки</span>
                </nav>
            </header>
    )
}

export default Header;