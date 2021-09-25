<template>
  <div
    class="card"
    @click="$emit('select', this.track.id)"
    v-blur="track.preview_url"
  >
    <div class="card-image">
      <img :src="track.album.images[0].url" />
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-64x64">
            <img :src="track.album.images[0].url" />
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p class="has-text-dark">
              {{ track.name }}
            </p>
            <p class="has-text-dark">
              {{ track.artists[0].name }}
            </p>
          </div>
        </div>
      </div>
      <div class="content has-background-dark mb-1">
        <p class="has-text-centered  has-text-light">
          ({{ $filters.convertMsToMm(track.duration_ms) }})
          <button class="button is-success is-small" @click="setSelectedTrack">
            ▶
          </button>
        </p>
      </div>
      <div class="columns">
        <div class="column is-12">
          <button
            class="button is-dark is-fullwidth"
            @click="goToTrackDetails(track.id)"
          >
            Ver detalles
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TrackMixin from '../mixins/track'

export default {
  name: 'Track',
  props: {
    track: {
      type: Object,
      required: true
    }
  },
  methods: {
    goToTrackDetails(id) {
      this.$router.push({ name: 'track', params: { id } })
    }
  },
  mixins: [TrackMixin]
}
</script>

<style lang="scss" scoped>
.play-icon {
  cursor: pointer;
}
.card .card-content .content {
  padding: 10px;
  border-radius: 4px;
}
.media-content {
  max-height: 80px;
  overflow: auto;
}
.media-content::-webkit-scrollbar-thumb {
  background-color: #797979;
  border-radius: 20px;
  border: 2px solid #f1f2f3;
}
.media-content::-webkit-scrollbar-track {
  border-radius: 10px;
}
</style>
