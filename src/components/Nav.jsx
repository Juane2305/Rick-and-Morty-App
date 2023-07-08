import SearchBar from "./SearchBar";
import styles from '../styles/styles.module.css'
import {Link} from 'react-router-dom'

export default function Nav ({onSearch}){
    return(
        <div className={styles.header}>
            <img className={styles.logo} src="https://1000marcas.net/wp-content/uploads/2022/04/Rick-and-Morty.png" alt="logo" />
            <SearchBar onSearch={onSearch}/>
            <Link to={'/about'}><button>About</button></Link>
            <Link to={'/home'}><button>Home</button></Link>
            <Link to='/favorites'>Favorites</Link>
        </div>
    );
}
// onSearch={(characterID) => window.alert(characterID)} 