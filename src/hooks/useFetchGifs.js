import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'

const useFetchGifs = (category) => {
  const [images, setImages] = useState([])
  const [isLoding, setIsLoding] = useState(true)

  const getImages = async () => {
    const newImage = await getGifs(category)
    setImages(newImage)
    setIsLoding(false)
  }
  useEffect(() => {
    // getGifs(category)
    //   .then(newImage => setImages(newImage))
    // modo con funciones async
    getImages()
  }, [])

  return {
    images,
    isLoding
  }
}

export { useFetchGifs }
