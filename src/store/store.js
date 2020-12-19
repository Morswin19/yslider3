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
    slideImages: images,
    activeSlide: 1,
    transitionTime: 1,
    activeIndicator: {
      slide1Active: true,
      slide2Active: false,
      slide3Active: false
    }
  },
  mutations: {
    changeSlide: (state, change) => {
      if (state.transitionTime === 'none') state.transitionTime = 1;
      if (
        (state.activeSlide >= 4 && change === 1) ||
        (state.activeSlide <= 0 && change === -1)
      )
        return;
      state.activeSlide += change;
      state.activeIndicator.slide1Active = false;
      state.activeIndicator.slide2Active = false;
      state.activeIndicator.slide3Active = false;
      if (state.activeSlide === 1 || state.activeSlide === 4)
        state.activeIndicator.slide1Active = true;
      if (state.activeSlide === 2) state.activeIndicator.slide2Active = true;
      if (state.activeSlide === 3 || state.activeSlide === 0)
        state.activeIndicator.slide3Active = true;
    },
    handleTransition: state => {
      if (state.activeSlide === 4) {
        state.transitionTime = 'none';
        state.activeSlide = 1;
      }
      if (state.activeSlide === 0) {
        state.transitionTime = 'none';
        state.activeSlide = 3;
      }
    }
  },
  actions: {}
});
