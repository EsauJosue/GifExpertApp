
import { useState } from 'react';

export const AddCategory = ({ onNewCategory })=>{ // se recibe el setCategories como argumento

    const [inputValue, setInputValue] = useState('') // se crea un estado para el input

    const onInputChange = ({ target }) => { // se recibe el target del evento, es decir; lo que se escribe en el input
        setInputValue( target.value )
    }
    
    const onSubmit = (event) => { // onSubmit es un evento que se ejecuta al dar clic en el boton
        event.preventDefault(); // previene que se recargue la pagina
        
        if(inputValue.trim().length <= 1) return;
        onNewCategory(inputValue.trim()); // se manda el valor del input        
        setInputValue(''); //limpia el input
    }
    
    return(
        <form onSubmit ={ (event) => onSubmit(event) }>
            <input 
                type="text"
                placeholder="Buscar Gifs"
                value = { inputValue }
                onChange={ onInputChange }
            />

        </form>
      
        
     
    )
}