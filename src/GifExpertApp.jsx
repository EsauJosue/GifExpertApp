import { useState } from "react"
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch','Dragon Ball','Samurai X']); // se crea un arreglo de categorias
    
    const onAddCategory = () => { // se crea una funcion para agregar una categoria
        setCategories(['Valorant',...categories]); // ...categories es para que no se pierda la informacion que ya tenia. Valorant es la nueva categoria

    }
    return (
        <>
        {/* titulo */}
            <h1>GifExpertApp</h1>
        {/* input */}
        {/* listado de Gifs */}
        {/* Agregar categoria al dar clic al boton */}
            <AddCategory setCategories={ setCategories } />
     
        {/* Guardar lo que escriben en el input */}

        <ol>
           { categories.map( category => { //.map recorre el arreglo
                return <li key={category}>{category}</li>
           }) }
        </ol>
            {/* Gif Item */}
        
        </>
    )
    }