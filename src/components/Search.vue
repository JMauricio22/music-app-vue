<template>
  <main>
    <div class="section">
      <h2 class="title">Busque sus canciones favoritas</h2>
      <div class="columns is-gapless is-mobile is-centered">
        <div class="column is-7-desktop is-8-tablet is-three-quarter-mobile">
          <input
            v-model="searchQuery"
            type="text"
            @keyup.enter="search"
            class="input is-info is-normal"
          />
        </div>
        <div class="column is-1-desktop is-2-tablet is-one-quarter-mobile">
          <a class="button is-info is-normal is-fullwidth" @click="search"
            >Buscar</a
          >
        </div>
        <!-- <div class="column is-1">
          <a class="button is-danger is-medium is-fullwidth">&times;</a>
        </div> -->
      </div>
    </div>

    <transition name="fade">
      <div class="container">
        <Notification v-show="showNotification">
          <p class="is-size-5 is-size-7-mobile">
            No se encontraron resultados para la busqueda:
            <span class="has-text-weight-bold">"{{ searchQuery }}"</span>
            😥
          </p>
        </Notification>
      </div>
    </transition>

    <transition name="fade">
      <div class="container">
        <Notification v-if="noSearch">
          <p class="is-size-5 is-size-7-mobile">
            Todavia no ha realizado ninguna busqueda ingrese el nombre de su
            canción o artista favorito ☝.
          </p>
        </Notification>
      </div>
    </transition>

    <transition name="slide">
      <Loading v-show="isLoading"></Loading>
    </transition>

    <div class="container mb-5" v-show="!isLoading">
      <div class="columns is-multiline is-mobile">
        <div
          v-for="track in tracks"
          :key="track.name"
          class="column is-one-quarter-desktop is-one-third-tablet is-full-mobile"
        >
          <transition name="fade" appear="">
            <Track
              :track="track"
              @select="setSelectedTrack"
              :class="{ 'is-active': track.id === selectedTrack }"
            ></Track>
          </transition>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Track from './Track.vue'
import Loading from './shared/Loading.vue'
import Notification from './shared/Notification.vue'
import track from '../services/track'

export default {
  name: 'App',
  data() {
    return {
      msg: 'Este es un parrafo',
      searchQuery: '',
      tracks: [],
      selectedTrack: '',
      isLoading: false,
      showNotification: false,
      noSearch: true
    }
  },
  methods: {
    search() {
      if (!this.searchQuery) {
        return
      }
      this.isLoading = true
      this.noSearch = false
      track.search(this.searchQuery).then(data => {
        this.tracks = data.tracks.items
        this.isLoading = false
        this.showNotification = data.tracks.total === 0
      })
    },
    setSelectedTrack(id) {
      this.selectedTrack = id
    }
  },
  watch: {
    showNotification(newValue, oldValue) {
      if (newValue) {
        setTimeout(() => {
          this.showNotification = false
        }, 3000)
      }
    }
  },
  components: {
    Track,
    Loading,
    Notification
  }
}
</script>

<style lang="scss" scoped>
main {
  min-height: 80vh;
}
.is-active {
  border: 2px solid #48c88f;
}
.input,
.button {
  border-radius: 0 !important;
}
</style>
