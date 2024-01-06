import { Link } from 'react-router-dom'
import { Destination } from '../entities/Destination'

type Props = {
  destination: Destination
}

const DestinationCard = ({ destination }: Props) => {
  console.log(destination.imageUrl)
  return (
    <div className='overflow-hidden shadow-xl card '>
      <img src={destination.imageUrl} alt={destination.name} />
      <div className='card-body'>
        <div className='card-title'>{destination.name}</div>
        <div className='card-actions'>
          {destination.tags.map((tag) => (
            <div className='badge badge-outline' key={tag}>
              {tag}
            </div>
          ))}
        </div>
        <Link to={'/'}>Read More</Link>
      </div>
    </div>
  )
}
export default DestinationCard
