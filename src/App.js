import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import styles from './styles/styles.module.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Route, Routes, useLocation, useNavigate} from 'react-router-dom'
import Detail from './components/Detail';
import About from './components/About';
import Form from './components/Form';
import Favorites from './components/Favorites';

// import SearchBar from './components/SearchBar';


const email = 'juane.elizondo@mail.com'
const password = 'Juane23'


function App() {

   const [access, setAccess] = useState(false)
   const location = useLocation();
   const navigate = useNavigate();
   const [characters, setCharacters] = useState([])



   const login = (userData) =>{
      if(userData.email === email && userData.password === password){
         setAccess(true)
         navigate('/home')
      }
   }


   useEffect(() =>{
      !access && navigate('/');
   }, [access])




   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then((respuesta) => {
         if (respuesta.data.name) {
            setCharacters((oldChars) => [...oldChars, respuesta.data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   };


   function onClose(id){
      setCharacters(
         characters.filter((element)=>{
            return element.id !== Number(id)
         })
      )
   };

   return (
      <div className='App'>
         <div className={styles.background}>
            {/* {
               location.pathname !== '/' ? <Nav onSearch = {onSearch}/> : null
            } */}
            {
               location.pathname !== '/' && <Nav onSearch = {onSearch}/>
            }
         
            <Routes>
               <Route path='/' element={<Form login ={login}/>}/>
               <Route path='/home' element= {<Cards characters={characters} onClose={onClose} />}/>
               <Route path='/about' element={<About />}/>
               <Route path='/detail/:id' element={<Detail />}/>
               <Route path='/favorites' element={<Favorites/>}/>
            </Routes>
        </div>
      </div>
   );
}

export default App;
