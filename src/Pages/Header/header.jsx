import React from 'react'
import style from './header.module.css'
// import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <>
            <div className={`${style.header_span}`}>
                <span className={`${style.fonts} ${style.header_font}`}>Михайло Грушевський</span>
            </div>
            <header className={`${style.header_class}`}>
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