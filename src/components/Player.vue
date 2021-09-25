<template>
  <div class="container" v-if="track && track.album">
    <div class="columns is-centered is-mobile">
      <div
        class="column is-5-desktop is-7-tablet is-10-mobile has-background-dark"
      >
        <div class="content mt-4">
          <div class="media">
            <figure class="media-left">
              <p class="image is-96x96">
                <img :src="track.album.images[0].url" />
              </p>
            </figure>
            <div class="media-content">
              <p class="is-size-4-desktop is-size-7-mobile">{{ track.name }}</p>
              <p class="is-size-5-desktop is-size-7-mobile">
                {{ track.artists[0].name }}
              </p>
              <p>({{ $filters.convertMsToMm(track.duration_ms) }})</p>
            </div>
          </div>
        </div>
        <div class="content">
          <audio :src="track.preview_url" controls></audio>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Player',
  computed: mapState(['track'])
}
</script>

<style scoped>
audio {
  width: 100%;
}
</style>
