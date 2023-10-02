import styles from './Card.module.css'
import React, { useContext, useEffect } from 'react';
import Context from '../../utilities/Context';
import {Link} from "react-router-dom"

export default function Card(props) {
    
    const { isDark} = useContext(Context);
    const {
        image,
        name,
        population,
        region,
        capital,
        subregion,
        nativeName,
        topLevelDomain,
        currencies,
        languages,
        borders
      } = props;

    return (
        <>
            <Link
                to={`/countries/${name}`}
                style={{backgroundColor: isDark ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)"}}  
                className={`${styles.card} ${isDark ? 'dark-shadow' : 'light-shadow'}`}
                // state={{
                //     image: image,
                //     name: name,
                //     population: population,
                //     region: region,
                //     capital: capital,
                //     subregion: subregion,
                //     nativeName: nativeName,
                //     topLevelDomain: topLevelDomain,
                //     currencies: currencies,
                //     languages: languages,
                //     borders: borders
                // }}
                state={{id: name}}
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
            </Link>
        </>
    )
}