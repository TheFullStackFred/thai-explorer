import { Link } from 'react-router-dom'
import { Destination } from '../entities/Destination'
import { selectRandomImageUrl } from '../utils/helpers'

import Badge from './Badge'

type Props = {
  destination: Destination
}

const DestinationCard = ({ destination }: Props) => {
  return (
    <div className='overflow-hidden shadow-lg bg-base-200 card'>
      <img
        src={selectRandomImageUrl(destination.imageUrl)}
        alt={destination.name}
        className='object-cover h-60'
      />
      <div className='card-body'>
        <div className='card-title'>{destination.name}</div>
        <div className='card-actions'>
          {destination.tags.map((tag) => (
            <Badge className='badge badge-accent' value={tag} key={tag} />
          ))}
        </div>
        <Link to={'/'}>Read More</Link>
      </div>
    </div>
  )
}
export default DestinationCard
