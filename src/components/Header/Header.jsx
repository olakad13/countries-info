import React, { useContext, useEffect } from 'react';
import Context from '../../utilities/Context';
import darkMode from '../../assets/dark.png'
import lightMode from '../../assets/light.svg'
import styles from './Header.module.css'

export default function Header() {
    const { isDark, updateIsDark } = useContext(Context);

    const toggleTheme = () => {
        updateIsDark(!isDark)
    }

    useEffect(() => {
        document.getElementById('header').style.backgroundColor = isDark ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)";
      },[isDark])
    return (
        
        <>

            <header id='header' className={`${styles.header} ${isDark ? 'dark-shadow' : 'light-shadow'}`}>
                <div className="wrapper">
                    <h1>Where in the world?</h1>
                    <div className={styles.toggle}>
                        <button onClick={toggleTheme}>
                            <img src={lightMode} alt="" />
                        </button>
                        <span>Dark Mode</span>
                    </div>
                </div>
            </header>
        </>
    )
}