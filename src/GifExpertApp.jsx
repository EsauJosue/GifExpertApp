import { useState } from "react"
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch','Dragon Ball','Samurai X']);
    
    const onAddCategory = () => {
        setCategories([...categories, 'Valorant']);

    }
    return (
        <>
        {/* titulo */}
            <h1>GifExpertApp</h1>
        {/* input */}
        {/* listado de Gifs */}
        {/* Agregar categoria al dar clic al boton */}
            <AddCategory/>
     
        {/* Guardar lo que escriben en el input */}
        <button onClick={onAddCategory}>Agregar</button>

        <ol>
           { categories.map( category => { //.map recorre el arreglo
                return <li key={category}>{category}</li>
           }) }
        </ol>
            {/* Gif Item */}
        
        </>
    )
    }