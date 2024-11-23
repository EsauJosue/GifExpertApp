import { useState } from "react"

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
        <input type="text"/>
        <button onClick={onAddCategory}>Agregar</button>

        <ol>
           { categories.map( category => {
                return <li key={category}>{category}</li>
           }) }
        </ol>
            {/* Gif Item */}
        
        </>
    )
    }