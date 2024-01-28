import { useState } from 'react'
import PropType from 'prop-types'

function AddCategory ({ onNewCategory }) {
  const [inputValue, setInputValue] = useState('')

  const onInputChange = ({ target }) => {
    setInputValue(target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    if (inputValue.trim().length <= 1) return

    // setCategories(categories => [inputValue, .0..categories])
    onNewCategory(inputValue.trim().toLowerCase())
    setInputValue('')
  }
  return (
    <form onSubmit={ onSubmit }>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={ inputValue }
        onChange={onInputChange}
      />
    </form>
  )
}

AddCategory.propTypes = {
  onNewCategory: PropType.any
}

export { AddCategory }
