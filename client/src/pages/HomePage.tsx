import DestinationsGrid from '../components/DestinationsGrid'
import Hero from '../components/Hero'
import useDestinations from '../hooks/useDestinations'
import { useImagesUrls } from '../hooks/useImagesUrls'

const HomePage = () => {
  const { data } = useDestinations()
  const imagesUrls = useImagesUrls(data ?? [])

  return (
    <div className='grid grid-cols-5'>
      <Hero images={imagesUrls} />
      <div className='col-span-5'>
        <DestinationsGrid destinations={data ?? []} />
      </div>
    </div>
  )
}

export default HomePage
