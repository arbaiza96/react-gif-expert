import {useState} from 'react'
import {AddCategory, GifGrid} from './components/'

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState(['One Piece']);

    const onAddCategory = (newCategory) => {
        if( categories.includes(newCategory) ) return;
        setCategories( [ newCategory, ...categories ] );
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory onNewCategory={ event => onAddCategory(event) }/>
            {
                categories.map(x =>  (
                    <GifGrid key={x} category={x} />
                ))
            }       
        </>
    )
}

//key >> qiDepPQ1GmNHI9fJ4Q6tdFTWzB7hk7bJ