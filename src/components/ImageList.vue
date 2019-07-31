<template>
  <div>
    <div v-if="isLoggedIn" class="ui large images">
      <img v-for="image in allImages" :src="image.link" :key="image.link" />
    </div>
    <div v-else class="ui floating compact info message">
      <div class="header">
        You are not Logged In!
      </div>
      <p>Please Log In with Imgur to use this app and upload your amazing pics!</p>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
export default {
  name: 'ImageList',
  computed: {
    ...mapGetters(['allImages', 'isLoggedIn'])  
  },
  methods: {
    ...mapActions(['fetchImages'])
  },
  created() {
    this.fetchImages();
  }
}
</script>

<style scoped>
  img {
    border: 1px solid black;

  }
  .message {
    display: flex;
    justify-content: center;
    align-content: center;
  }
</style>