type Props = {
  images: string[]
}

const Hero = ({ images }: Props) => {
  return (
    <div className='relative w-full h-64 carousel carousel-center rounded-box'>
      {images?.map((image) => (
        <div className='relative w-40 carousel-item' key={image}>
          <img src={image} alt={image} />
        </div>
      ))}
    </div>
  )
}

export default Hero
