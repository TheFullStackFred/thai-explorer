import useDestinations from '../hooks/useDestinations'
import DestinationCard from './DestinationCard'

const DestinationsGrid = () => {
  const { data } = useDestinations()
  return (
    <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
      {data?.map((destination) => (
        <DestinationCard destination={destination} key={destination._id} />
      ))}
    </div>
  )
}
export default DestinationsGrid
