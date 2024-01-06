import noImage from '../assets/no-image-placeholder.webp'

export const selectRandomImageUrl = (urlArray: string[]) =>
  urlArray.length > 0
    ? urlArray[Math.floor(Math.random() * urlArray.length)]
    : noImage
