import styles from './Button.module.css'
import { useState, useContext } from 'react'
import Context from '../../utilities/Context.jsx'
import DarkArrow from '../../assets/dark-arrow.svg'
import LightArrow from '../../assets/light-arrow.svg'
import {Link} from "react-router-dom"

export default function Button() {
    
    const {isDark} = useContext(Context);

    return (
        <div className='wrapper'>
            <Link to="/">
                <button 
                    className={`${styles.button} ${isDark ? "dark-shadow" : "light-shadow"}`}
                    style={{backgroundColor: isDark ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)", color: isDark ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"}}
                >
                    <img src={isDark? LightArrow : DarkArrow} alt="" />
                    Back
                </button>
            </Link>
        </div>
    )
}