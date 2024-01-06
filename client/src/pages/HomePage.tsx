import DestinationCard from '../components/DestinationCard'
import useDestinations from '../hooks/useDestinations'

const HomePage = () => {
  const { data } = useDestinations()

  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
      {data?.map((destination) => (
        <DestinationCard destination={destination} key={destination._id} />
      ))}
    </div>
  )
}

export default HomePage
