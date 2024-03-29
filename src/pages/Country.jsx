import { useState, useContext,  useRef} from 'react'
import Context from '../utilities/Context';
import Button from '../components/Button/Button.jsx';
import { useLocation, useParams } from 'react-router-dom';
import styles from './Country.module.css'
import { v4 as uuidv4 } from 'uuid';
import {Link} from "react-router-dom"


export default function Home() {

    const { name } = useParams();
    const { isDark, countries, unchangedData } = useContext(Context);
    
    let render = false
  

    let data = unchangedData.current.filter((country) => {
        return name === country.name
    })

    let currencies;
    let languages;
    let bordersJsx;

   
    
    data = data[0];
 
    
    if (data) {
        render = true
        const borders = (data.borders ? 
            data.borders.map((border) => {
                const country = unchangedData.current.filter((country) => {
                    return border.toLowerCase() === country.alpha3Code.toLowerCase()
                })
                return country[0].name
            })
            : 
            []
        );
    
        bordersJsx = borders.map(name => {
            
            return (
                <Link 
                    style={{backgroundColor: isDark ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)"}}
                    to={`/countries/${name}`} 
                    key={uuidv4()} 
                    className={`${styles.links} ${isDark ? 'dark-shadow' : 'light-shadow'}`}
                >
                    {name}
                </Link>
            )
        })
        
        
        currencies = data.currencies.reduce((accumulator, currentValue, currentIndex) => {
            if (currentIndex === 0) {
              // If it's the first element, don't add a comma before it
              return currentValue.name;
            } else {
              // For subsequent elements, add a comma before them
              return accumulator + ", " + currentValue.name;
            }
          }, '');
    
        languages = data.languages.reduce((accumulator, currentValue, currentIndex) => {
            if (currentIndex === 0) {
                // If it's the first element, don't add a comma before it
                return currentValue.name;
            } else {
                // For subsequent elements, add a comma before them
                return accumulator + ", " + currentValue.name;
            }
        }, '');

    } else {
        render = false
    }
    

    
    return (
        <>
            {
                render ?

                <div className="wrapper">
                <Button />
                <div className={styles.mainContent}>
                    <div className={styles.imgContainer}>
                        <img src={data.flags.png} alt="" />
                    </div>

                    <div className={styles.infoContainer}>
                        <h2>{data.name}</h2>
                        <div className={styles.subInfoCon}>
                            <div>
                                <p><span>Native Name:</span> {data.nativeName}</p>
                                <p><span>Population:</span> {data.population.toLocaleString()}</p>
                                <p><span>Region:</span> {data.region}</p>
                                <p><span>Sub Region:</span> {data.subregion}</p>
                                <p><span>Capital: </span> {data.capital}</p>
                            </div>

                            <div>
                                <p><span>Top Level Domain:</span> {data.topLevelDomain}</p>
                                <p><span>Currencies:</span> {currencies}</p>
                                <p><span>Languages:</span> {languages}</p>
                            </div>
                        </div>

                        <div className={styles.borderCon}>
                            <span>Border Countries:</span>
                            {bordersJsx}
                        </div>
                    </div>
                </div>
            </div> :

            <div className={styles.countryError}>
                <h1>Country Not Found</h1>
                <p>Sorry, the country you requested could not be found.</p>
                <Link 
                    to="/" 
                    className={` ${isDark ? "dark-shadow" : "light-shadow"}`}
                    style={{backgroundColor: isDark ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)", color: isDark ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"}}
                >
                    Return to Countries
                </Link>
            </div>

            }
        </>
    )
}