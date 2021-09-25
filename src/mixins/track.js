const trackMixin = {
  methods: {
    setSelectedTrack() {
      this.$store.commit('setTrack', this.track)
    }
  }
}

export default trackMixin
