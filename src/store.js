import { createStore } from 'vuex'
import TrackService from './services/track'

const store = createStore({
  state: {
    track: {}
  },
  mutations: {
    setTrack(state, track) {
      state.track = track
    }
  },
  getters: {
    getTrackTitle(state) {
      if (!state.track || !state.track.id) {
        return ''
      }
      return `${state.track.artists[0].name} - ${state.track.name}`
    }
  },
  actions: {
    getTrackById(context, payload) {
      return TrackService.getById(payload.id).then(track => {
        context.commit('setTrack', track)
        return track
      })
    }
  }
})

export default store
