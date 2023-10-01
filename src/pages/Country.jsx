import { useState, useContext,  useRef} from 'react'
import Context from '../utilities/Context';
import Button from '../components/Button/Button.jsx';
import { useLocation } from 'react-router-dom';
import styles from './Country.module.css'

// import styles from './Home.module.css'


export default function Home() {

    const { state } = useLocation();
    
    const { isDark, countries } = useContext(Context);
    
    
    const currencies = state.currencies.reduce((accumulator, currentValue, currentIndex) => {
        if (currentIndex === 0) {
          // If it's the first element, don't add a comma before it
          return currentValue.name;
        } else {
          // For subsequent elements, add a comma before them
          return accumulator + ", " + currentValue.name;
        }
      }, '');

    const languages = state.languages.reduce((accumulator, currentValue, currentIndex) => {
        if (currentIndex === 0) {
            // If it's the first element, don't add a comma before it
            return currentValue.name;
        } else {
            // For subsequent elements, add a comma before them
            return accumulator + ", " + currentValue.name;
        }
    }, '');
    
    return (
        <>
            <div className="wrapper">
                <Button />
                <div className={styles.mainContent}>
                    <div className={styles.imgContainer}>
                        <img src={state.image} alt="" />
                    </div>

                    <div className={styles.infoContainer}>
                        <h2>{state.name}</h2>
                        <div className={styles.subInfoCon}>
                            <div>
                                <p><span>Native Name:</span> {state.nativeName}</p>
                                <p><span>Population:</span> {state.population.toLocaleString()}</p>
                                <p><span>Region:</span> {state.region}</p>
                                <p><span>Sub Region:</span> {state.subregion}</p>
                                <p><span>Capital: </span> {state.capital}</p>
                            </div>

                            <div>
                                <p><span>Top Level Domain:</span> {state.topLevelDomain}</p>
                                <p><span>Currencies:</span> {currencies}</p>
                                <p><span>Languages:</span> {languages}</p>
                            </div>
                        </div>

                        <div>
                            <span>Border Countries:</span>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}