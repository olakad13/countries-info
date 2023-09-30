import styles from './Filter.module.css'
import React, { useState, useContext, useEffect } from 'react';
import Context from '../../utilities/Context';
import data from '../../pages/Data/data.json'

export default function Filter() {
    
    const { isDark, updateCountries} = useContext(Context);
    const [showFirstOption, setShowFirstOption] = useState(true);

    const handleChange = (event) => {
        
        const filterValue = event.target.value.toLowerCase()
        const filteredCountries = data.filter((item) => {
            return item.region.toLowerCase() === filterValue
        })
        updateCountries(filteredCountries)
    }

    const handleClick = () => {
        setShowFirstOption(false);
    }

    useEffect(() => {
        document.getElementById('filter').style.backgroundColor = isDark ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)";
    
    },[isDark])


    return (
        <>
            <div  className={`${styles.filter} ${isDark ? 'dark-shadow' : 'light-shadow'}`}>

                <select name="filter" id="filter" onChange={handleChange} onClick={handleClick}>
                    
                    {showFirstOption && <option value="default" defaultValue>Filter by Region</option>}
                    <option value="africa">Africa</option>
                    <option value="americas">America</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europe</option>
                    <option value="oceania">Oceania</option>
                    
                </select>
            </div>
        </>
    )
}