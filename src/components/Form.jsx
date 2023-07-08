import {useState} from 'react';
import styles from '../styles/login.module.css'
import validation from './validation';

// const validate = (form, setErrors, errors) => {
//     if(!form.email) setErrors({...errors, email:'Email vacío'});
//     else if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email)) setErrors({...errors, email:''}) 
//     else setErrors({...errors, email:'Email inválido'});

    
// }
const Form = ({login}) => {

    const [userData, setUserData] = useState({
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) =>{
        const property = event.target.name;
        const value = event.target.value;

        setUserData({...userData, [property]: value});
        setErrors(validation({...userData,[property]:value}))
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        login(userData)
    }


    return(
        <form onSubmit={handleSubmit} className={styles.cardLogin}>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" value = {userData.email} placeholder='john@example.com' onChange={handleChange}/>
                {errors.email && <p style={{color: "red"}}>{errors.email}</p>}
            </div>

            <div>
                <label htmlFor="password">Password:</label>
                <input type="text" name="password" value={userData.password} placeholder='password' onChange={handleChange} />
                {errors.password && <p style={{color: 'red'}}>{errors.password}</p>}
            </div>

            <button type='submit'>Submit</button>

        </form>
    )
}

export default Form;