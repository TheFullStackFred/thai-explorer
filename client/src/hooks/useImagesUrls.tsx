import { useMemo } from 'react'
import { Destination } from '../entities/Destination'

export const useImagesUrls = (data: Destination[]) =>
  useMemo(() => data?.flatMap((destination) => destination.imageUrl), [data])
