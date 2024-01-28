import { useState } from 'react'
import { AddCategory, GifGrid } from './components'

function GifExpertApp () {
  const [categories, setCategories] = useState(['One Punch'])

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return
    setCategories([newCategory, ...categories])

    // setCategories([...categories, 'Valorant'])
    // setCategories(cat => [...cat, 'Valorant'])
  }

  return (
   <>
    <h1>GifExpertApp</h1>

    <AddCategory
        // setCategories = { setCategories }
        onNewCategory = { onAddCategory}
        />

      <button onClick={onAddCategory}>Agregar</button>
        {categories.map((category) => (
        <GifGrid category={ category } key={ category }/>
        ))}
   </>
  )
}

export default GifExpertApp
