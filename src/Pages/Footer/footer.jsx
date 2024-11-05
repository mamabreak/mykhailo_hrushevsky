import React from 'react'
import style from './footer.module.css'
import Arrow from '../../Pictures/arrow_nav.svg'

const Footer = () => {
    return(
        <footer className={`${style.footer_class} ${style.fonts}`}>
            <div className={style.separator}>
                <div className={style.text_spans}>
                    <span>Перейти до</span>
                    <span>Наступного</span>
                </div>
                <img src={Arrow} alt="Right Arrow" className={style.arrow_styles}/>
            </div>
            
        </footer>
    )
}

export default Footer;