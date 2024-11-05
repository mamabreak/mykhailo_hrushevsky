import React from 'react'
import style from './header.module.css'
// import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <>
            
            <header className={`${style.header_class}`}>
            <span className={`${style.fonts} ${style.logo_font}`}>Михайло Грушевський</span>
                <nav className={`${style.fonts} ${style.nav_spans}`}>
                    <span className={`${style.nav_spans_text}`}>Home</span>
                    <span className={`${style.nav_spans_text}`}>Category 1</span>
                    <span className={`${style.nav_spans_text}`}>Category 2</span>
                    <span className={`${style.nav_spans_text}`}>Category 3</span>
                </nav>
            </header>
        </>
    )
}

export default Header;