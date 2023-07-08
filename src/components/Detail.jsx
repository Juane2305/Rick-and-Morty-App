import axios from "axios"
import {useParams} from 'react-router-dom'
import { useState, useEffect } from "react"



const Detail = () =>{
    const {id} = useParams();
    const [pjDetails, setPjDetails] = useState([]);
    
    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setPjDetails(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setPjDetails({});
     }, [id]);


    return(
        <div>
            <h3>{pjDetails.name && pjDetails.name}</h3>
            <h5>{pjDetails.status}</h5>
            <img src={pjDetails.image} alt={pjDetails.name} />
            <section>
                <span>{pjDetails.species}</span>
                <span>{pjDetails.gender}</span>
                <span>{pjDetails.origin && pjDetails.origin.name}</span>
            </section>
        </div>
    )
}

export default Detail