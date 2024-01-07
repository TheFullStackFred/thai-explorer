import DestinationsGrid from '../components/DestinationsGrid'

const HomePage = () => {
  return (
    <div className='grid grid-cols-5'>
      <div className='col-span-5'>
        <DestinationsGrid />
      </div>
    </div>
  )
}

export default HomePage
