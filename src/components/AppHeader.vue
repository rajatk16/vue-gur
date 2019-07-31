<template>
  <div class="ui secondary pointing menu">
    <a class="active item" href="/">
      Image Storage
    </a>
    <div class="right menu">
      <div v-if="isLoggedIn" class="horizontal">
        <router-link to="/" title="Gallery" class="item">Gallery</router-link>
        <router-link to="/upload" title="Upload" class="item">Upload</router-link>
        <button class="ui negative button" @click="logout">Logout</button>
      </div>
      <button class="ui positive button" v-else @click="login">
        Login
      </button>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  name: 'AppHeader',
  computed: {
    ...mapGetters(['isLoggedIn'])
  },
  methods: {
    ...mapActions(['login', 'logout'])
  }
}
</script>

<style scoped>
  .horizontal {
    display: flex;
    flex-direction: row;
  }
</style>