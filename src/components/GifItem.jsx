import PropType from 'prop-types'

function GifItem ({ title, url, id }) {
  return (
   <div className='card'>
    <img src={ url } alt={ title } />
    <p>{ title }</p>
   </div>
  )
}

export { GifItem }

GifItem.propTypes = {
  title: PropType.string,
  url: PropType.string,
  id: PropType.string
}
