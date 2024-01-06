import DestinationCard from '../components/DestinationCard'
import useDestinations from '../hooks/useDestinations'

const HomePage = () => {
  const { data, error, isLoading } = useDestinations()
  console.log(data)
  return (
    <div className='grid grid-cols-1 gap-4 p-2 sm:grid-cols-2 lg:grid-cols-4'>
      {data?.map((destination) => (
        <DestinationCard destination={destination} />
      ))}
      {/* CARD GOES HERE */}
    </div>
  )
}

export default HomePage
