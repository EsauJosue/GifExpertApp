import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']); // se crea un arreglo de categorias
    //useState es un hook que se encarga de manejar el estado de un componente funcional
    //categories es el estado inicial que contiene un array de tres elementos
    //setCategories es una funcion que se encarga de modificar o actualizr el estado de categories
    
    
    const onAddCategory = ( newCategory) => { // se crea una funcion para agregar una categoria
        if (categories.includes(newCategory)) return; // si la categoria ya existe, no se agrega
        setCategories([newCategory,...categories]); //setCategories es una funcion que recibe un arreglo con la nueva categoria y las categorias existentes
        //setCategories crea un nuevo array
        //[newCategory, ...categories]: Agrega la nueva categoría al principio del array, mientras conserva las categorías existentes usando el operador spread (...).
        // onAddCategory: Es una función que agrega una nueva categoría al estado categories.
        // newCategory: Es el valor que será recibido desde el hijo (AddCategory).
    }
    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory 
                onNewCategory =
                { 
                    (value) => onAddCategory(value) 
                }
            />
            
                { 
                    categories.map( category =>  //.map recorre el arreglo
                            (
                                <GifGrid 
                                key={ category } 
                                category={ category } 
                                /> 
                                //el proptype category recibe el valor de la categoria. Su sintaxis es category={ category }. El key sirve para identificar de manera única a cada elemento del arreglo.
                            )
                        ) 
                }
        </>
    )
    }