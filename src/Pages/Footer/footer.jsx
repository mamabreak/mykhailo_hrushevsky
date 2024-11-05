import React from 'react'
import style from './footer.module.css'

const Footer = () => {
    return(
        <footer className={`${style.footer_class} ${style.fonts}`}>
            <span>Website created by</span>
            <span>student Denys Shvets</span>
        </footer>
    )
}

export default Footer;