import MusicService from './music-service'

const trackService = {}

trackService.search = query => {
  const type = 'track'
  return MusicService.get('/search', { params: { query, type } }).then(
    res => res.data
  )
}

trackService.getById = id => {
  return MusicService.get(`/tracks/${id}`).then(res => res.data)
}

export default trackService
