import styles from "./ErrorPage.module.css"
import Context from '../utilities/Context';
import {useContext} from 'react'
import {Link} from "react-router-dom"

const NotFoundPage = () => {
    const {isDark} = useContext(Context)
    return (
      <div className="wrapper">
        <div className={styles.errorPage}>
            <h1>Page Not Found</h1>
            <p>The page you are trying to access does not exist.</p>

            <Link to="/" className={isDark ? 'dark-shadow' : 'light-shadow'}>Go to the home page</Link>
        </div>
      </div>
    );
  };
  
  export default NotFoundPage;