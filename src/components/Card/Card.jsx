import styles from './Card.module.css'
import React, { useContext, useEffect } from 'react';
import Context from '../../utilities/Context';

export default function Card({image, name, population, region, capital}) {
    
    const { isDark} = useContext(Context);

    return (
        <>
            <div 
                style={{backgroundColor: isDark ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)"}}  
                className={`${styles.card} ${isDark ? 'dark-shadow' : 'light-shadow'}`}
            >
                <img src={image} alt="" />
                <div className={styles.cardBody}>
                    <h3>{name}</h3>
                    <div>
                        <p>Population: <span>{population.toLocaleString()}</span></p>
                        <p>Region: <span>{region}</span></p>
                        <p>Capital: <span>{capital}</span></p>
                    </div>
                </div>
            </div>
        </>
    )
}