import { useQuery } from '@tanstack/react-query'
import APIClient from '../services/api-client'
import { Destination } from '../entities/Destination'
import { CACHE_KEY_DESTINATIONS } from '../constants'

const apiClient = new APIClient<Destination>('/destinations')

const useDestinations = () =>
  useQuery({
    queryKey: [CACHE_KEY_DESTINATIONS],
    queryFn: apiClient.getAll
  })

export default useDestinations
