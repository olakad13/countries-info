import styles from './Search.module.css'
import React, { useState,useContext, useEffect } from 'react';
import Context from '../../utilities/Context';
import DarkSearchIcon from '../../assets/dark-search.svg'
import LightSearchIcon from '../../assets/light-search.svg'


export default function Search() {
    const [data, setData] = useState([])
    const { isDark, updateCountries } = useContext(Context);
    

    useEffect(() => {
        document.getElementById('search').style.backgroundColor = isDark ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)";
      },[isDark])
    
    useEffect(() => {
    // Fetch data from data.json using fetch API
        fetch('src/pages/Data/data.json')
            .then(response => response.json()) 
            .then(jsonData => {
                setData(jsonData); 
            })
            .catch(error => {
            console.error('Error fetching data:', error);
            });
    }, []); 
    
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