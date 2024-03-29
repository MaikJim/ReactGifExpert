import PropType from 'prop-types'
import { GifItem } from './GifItem'
import { useFetchGifs } from '../hooks/useFetchGifs'

function GifGrid ({ category }) {
  const { images, isLoding } = useFetchGifs(category)

  return (
    <>
      <h3>{category}</h3>
      {
        isLoding && (<h2>Cargando...</h2>)
      }
      <h2>Cargando...</h2>
      <div className='card-grid'>
        {images.map((image) => (
          <GifItem
              key={image.id}
              { ...image }
          />
        ))}
      </div>
    </>
  )
}

export { GifGrid }

GifGrid.propTypes = {
  category: PropType.any
}
