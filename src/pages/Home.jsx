import Header from '../components/Header/Header.jsx'
import Card from '../components/Card/Card.jsx'
import Search from '../components/Search/Search.jsx'
import Filter from '../components/Filter/Filter.jsx'
import styles from './Home.module.css'
import { useState, useContext } from 'react'

import { v4 as uuidv4 } from 'uuid';
import Context from '../utilities/Context.jsx';

// import styles from './Home.module.css'


export default function Home() {
    
    const { isDark, countries } = useContext(Context);

    const countriesArray = countries.map((item) => {

        return (
            <Card 
                key={uuidv4()}
                image={item.flags.png}
                name={item.name} 
                population={item.population}   
                region={item.region} 
                capital={item.capital} 
            />
        )

    })
    
    return (
        <>
            <div className={styles.home}>
                <Header />
                <div className='wrapper'>
                    <div className={styles.formWrapper}>
                        <Search />
                        <Filter />
                    </div>
                    <div className={styles.cardsCon}>
                        {countriesArray}
                    </div>
                </div>
            </div>
        </>
    )
}