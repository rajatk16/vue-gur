<template>
  <div>
    <div v-if="isLoggedIn" class="dropper">
      <input 
        type="file"
        multiple
        accept="image/*" 
        @change="uploadImages($event.target.files)" 
      />
      <span>Drag Files to Upload</span>
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
import {mapActions, mapGetters} from 'vuex'
export default {
  name: 'UploadForm',
  computed: {
    ...mapGetters(['isLoggedIn'])
  },
  methods: {
    ...mapActions(['uploadImages'])
  }
}
</script>

<style scoped>
  .dropper {
    height: 30vh;
    border: 2px dashed #eef;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .dropper:hover {
    background-color: #eee;
  }
  input {
    width: 100%;
    height: 30vh;
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
</style>

