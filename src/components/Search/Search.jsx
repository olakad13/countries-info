import styles from './Search.module.css'
import React, { useState,useContext, useEffect } from 'react';
import Context from '../../utilities/Context';
import DarkSearchIcon from '../../assets/dark-search.svg'
import LightSearchIcon from '../../assets/light-search.svg'
import data from '../../pages/Data/data.json'


export default function Search() {
    
    const { isDark, updateCountries } = useContext(Context);
    

    useEffect(() => {
        document.getElementById('search').style.backgroundColor = isDark ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)";
      },[isDark])
    
    
    
    const handleChange = (event) => {
        const searchString = event.target.value.toLowerCase()
        
        const searchMatch = data.filter((item) => {
            return item.name.toLowerCase().includes(searchString)
        })

        updateCountries(searchMatch)
    }

    return (
        <>
            
            <div id='search' className={`${styles.search} ${isDark ? 'dark-shadow' : 'light-shadow'}`}>


                <label htmlFor="search-box">
                    <img src={isDark ? DarkSearchIcon: LightSearchIcon} alt="" />
                </label>
                <input 
                    type="search" 
                    name="searchText" 
                    id="search-box" 
                    placeholder='Search for a country'
                    onChange={handleChange}
                />

            </div>
        </>
    )
}