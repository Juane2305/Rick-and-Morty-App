import Card from './Card';
import styles from '../styles/styles.module.css'

export default function Cards(props) {
   return (
      <div className={styles.cardsFlex}>
         {props.characters.map((pj) =>(
            <Card 
               key ={pj.id}
               id ={pj.id}
               name={pj.name}
               status={pj.status}
               species={pj.species}
               gender={pj.gender}
               image={pj.image}
               origin={pj.origin.name}
               onClose={props.onClose}
            />
         ))}
      </div>
   );
};




