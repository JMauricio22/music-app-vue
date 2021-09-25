<template>
  <div class="hero is-medium is-success">
    <div class="hero-head">
      <div class="navbar is-medium is-success">
        <div class="container">
          <div class="navbar-brand">
            <a
              role="button"
              class="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div class="navbar-menu">
            <div class="navbar-start">
              <router-link to="/" class="navbar-item title"
                >Music App</router-link
              >
            </div>
            <div class="navbar-end">
              <router-link to="/" class="navbar-item"> Home </router-link>
              <router-link to="/about" class="navbar-item"> About </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hero-body">
      <p class="title">
        Canciones Vue.nisimas!!!
      </p>
      <player></player>
    </div>
  </div>
</template>

<script>
import Player from '../Player.vue'

export default {
  components: { Player }
}
</script>
