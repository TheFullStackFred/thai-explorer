import noImage from '../assets/no-image-placeholder.webp'

export const selectRandomImageUrl = (url: string[]) =>
  url.length > 1
    ? url[Math.floor(Math.random() * url.length)]
    : url.length === 1
    ? url[0]
    : noImage
