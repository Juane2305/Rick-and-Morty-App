
const validation = (userData) => {

    const errors = {};

    // email validations

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userData.email)) {
        errors.email = 'El email ingresado no es válido'
    }
    if(!userData.email) errors.email = 'Email vacío'
    
    if(userData.email.length > 35) errors.email = 'El email debe tener menos de 35 caracteres'


    // password validations
    if(userData.password.length < 6 || userData.password.length > 10){
        errors.password = 'La contraseña debe tener entre 6 y 10 caracteres'
    }

    if(!/.*\d+.*/.test(userData.password)){
        errors.password = 'La contraseña debe contener al menos un número'
    }

        


    return errors;
}

export default validation;