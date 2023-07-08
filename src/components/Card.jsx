import styles from '../styles/styles.module.css'
import {Link} from 'react-router-dom'
import {addFav, removeFav} from '../redux/actions'
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';


function Card({id, name, species, gender, image, onClose, addFav, removeFav, myFavorites}) {


   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         removeFav(id)
      }else{
         setIsFav(true);
         addFav({id, name, species, gender, image, onClose})
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={styles.cardStyles}>
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
         <button className={styles.equis} onClick={()=>{onClose(id)}}>X</button>
         <img className={styles.imagen} src={image} alt= {name} />
         <Link to={`/detail/${id}`}>
            <h2 className={styles.name}>{name}</h2>
         </Link>
         {/* <h2>{status}</h2> */}
         {/* <h2>{species}</h2> */}
         <h2>{gender}</h2>
         {/* <h2>{origin}</h2> */}
         
      </div>
   );
}


const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) =>{dispatch(addFav(character))},
      removeFav: (id) => {dispatch(removeFav(id))}
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card)