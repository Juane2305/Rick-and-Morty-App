import styles from '../styles/styles.module.css'
import { useState } from 'react';

const SearchBar= ({onSearch})=> {
   const [id, setId] = useState('')

   const handleChange = (event) =>{
      setId(event.target.value)
   }


   return (
      <div className={styles.divBusqueda}>   
            <input className={styles.barraBusqueda} type='search' onChange={handleChange} value={id} placeholder="Ingresa un id..."/>
            <button className={styles.botonAgregar} onClick={()=>{onSearch(id)}}>Agregar</button>
      </div>
   );
}

export default SearchBar