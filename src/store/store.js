import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

//loading data from local storage
const reactionData = {
  slide1: {
    likes: 0,
    hearts: 0,
    laugh: 0
  },
  slide2: {
    likes: 0,
    hearts: 0,
    laugh: 0
  },
  slide3: {
    likes: 0,
    hearts: 0,
    laugh: 0
  }
};
//starting data if local storage is empty

export const store = new Vuex.Store({
  state: {
    reactionData,
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
      if (state.activeSlide) state.activeSlide += change;
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
    },
    goToSlide: (state, num) => {
      state.activeSlide = num;
      state.activeIndicator.slide1Active = false;
      state.activeIndicator.slide2Active = false;
      state.activeIndicator.slide3Active = false;
      if (state.activeSlide === 1 || state.activeSlide === 4)
        state.activeIndicator.slide1Active = true;
      if (state.activeSlide === 2) state.activeIndicator.slide2Active = true;
      if (state.activeSlide === 3 || state.activeSlide === 0)
        state.activeIndicator.slide3Active = true;
    },
    reactionFunc: (state, payload) => {
      if (payload.action === 'like' && payload.slide === 'slide2')
        reactionData.slide1.likes++;
      if (payload.action === 'like' && payload.slide === 'slide3')
        reactionData.slide2.likes++;
      if (payload.action === 'like' && payload.slide === 'slide4')
        reactionData.slide3.likes++;
      if (payload.action === 'heart' && payload.slide === 'slide2')
        reactionData.slide1.hearts++;
      if (payload.action === 'heart' && payload.slide === 'slide3')
        reactionData.slide2.hearts++;
      if (payload.action === 'heart' && payload.slide === 'slide4')
        reactionData.slide3.hearts++;
      if (payload.action === 'laugh' && payload.slide === 'slide2')
        reactionData.slide1.laugh++;
      if (payload.action === 'laugh' && payload.slide === 'slide3')
        reactionData.slide2.laugh++;
      if (payload.action === 'laugh' && payload.slide === 'slide4')
        reactionData.slide3.laugh++;
    }
  },
  actions: {}
});
