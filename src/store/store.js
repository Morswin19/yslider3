import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

//loading data from local storage
const images = {
  slide1:
    'https://images.pexels.com/photos/1619569/pexels-photo-1619569.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  slide2:
    'https://images.pexels.com/photos/1292843/pexels-photo-1292843.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
  slide3:
    'https://images.pexels.com/photos/8047/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  slide4:
    'https://images.pexels.com/photos/1619569/pexels-photo-1619569.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  slide5:
    'https://images.pexels.com/photos/1292843/pexels-photo-1292843.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
};
//starting data if local storage is empty

export const store = new Vuex.Store({
  state: {
    slideImages: images
  },
  mutations: {},
  actions: {}
});
