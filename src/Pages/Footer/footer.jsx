import React from 'react'
import style from './footer.module.css'

const Footer = () => {
    return(
        <footer className={`${style.footer_class} ${style.fonts}`}>
            <span>Website by student</span>
            <span>Denys Shvets</span>
        </footer>
    )
}

export default Footer;