import api from '../../api/imgur';
import {router} from '../../main';

const state = {
  images: []
}

const getters = {
  allImages: state => state.images
}

const mutations = {
  setImages: (state, images) => {
    state.images = images;
  }
}

const actions = {
  fetchImages: async ({rootState, commit}) => {
    const {token} = rootState.auth;
    const response = await api.fetchImages(token);
    const {data} = response.data
    commit('setImages', data)
  },
  uploadImages: async ({rootState}, images) => {
    // Get the Access Token
    const {token} = rootState.auth;

    // Call our API module to do the upload
    await api.upload(images, token);
    // const {data} = response.data;
    // commit('setImages', data);

    // Redirect our user to ImageList component
    router.push('/');
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}