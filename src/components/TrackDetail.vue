<template>
  <div class="columns is-centered" v-if="track && track.album">
    <div class="column is-6-desktop is-8-tablet is-12-mobile">
      <div class="content my-5">
        <div class="media">
          <div class="media-left">
            <figure class="image is-128x128">
              <img class="" :src="track.album.images[0].url" />
            </figure>
            <button class="button is-success" @click="setSelectedTrack">
              play ▶
            </button>
          </div>
          <div class="media-content">
            <div class="table-container">
              <table class="table">
                <caption>
                  <p class="title">
                    {{ getTrackTitle }}
                  </p>
                </caption>
                <tbody>
                  <tr v-for="(v, k) in track" :key="v.id">
                    <td>
                      <p class="has-text-justified">
                        {{ k }}
                      </p>
                    </td>
                    <td>
                      <p class="has-text-justified">
                        {{ v }}
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TrackMixin from '../mixins/track'
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'TrackDetail',
  created() {
    const id = this.$route.params.id
    if (!this.track || !this.track.id || this.track.id !== id) {
      this.$store
        .dispatch('getTrackById', { id })
        .then(track => console.log(`GET TRACK: ${track}`))
    }
  },
  computed: { ...mapState(['track']), ...mapGetters(['getTrackTitle']) },
  mixins: [TrackMixin]
}
</script>
