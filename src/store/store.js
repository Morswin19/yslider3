import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const localReactionData = JSON.parse(localStorage.getItem('reactionData'));

//loading data from local storage
const reactionData = [
  {
    like: 0,
    dislike: 0,
    heart: 0,
    laugh: 0
  },
  {
    like: 0,
    dislike: 0,
    heart: 0,
    laugh: 0
  },
  {
    like: 0,
    dislike: 0,
    heart: 0,
    laugh: 0
  }
];

//starting data if local storage is empty
const startingReactionData = localReactionData
  ? localReactionData
  : reactionData;

export const store = new Vuex.Store({
  state: {
    reactionData: startingReactionData,
    activeSlide: 2,
    transitionTime: 1,
    activeIndicator: {
      slide1Active: false,
      slide2Active: true,
      slide3Active: false
    }
  },
  mutations: {
    changeSlide: (state, change) => {
      if (state.activeSlide) state.activeSlide += change;
      state.activeIndicator.slide1Active = false;
      state.activeIndicator.slide2Active = false;
      state.activeIndicator.slide3Active = false;
      if (state.activeSlide === 1) state.activeIndicator.slide1Active = true;
      if (state.activeSlide === 2) state.activeIndicator.slide2Active = true;
      if (state.activeSlide === 3) state.activeIndicator.slide3Active = true;
    },
    goToSlide: (state, num) => {
      state.activeSlide = num;
      state.activeIndicator.slide1Active = false;
      state.activeIndicator.slide2Active = false;
      state.activeIndicator.slide3Active = false;
      if (state.activeSlide === 1) state.activeIndicator.slide1Active = true;
      if (state.activeSlide === 2) state.activeIndicator.slide2Active = true;
      if (state.activeSlide === 3) state.activeIndicator.slide3Active = true;
    },
    reactionFunc: (state, payload) => {
      const { action, slide } = payload;
      const slideNum = parseInt(slide.slice(-1)) - 1;
      if (
        state.reactionData[slideNum].like -
          state.reactionData[slideNum].dislike ===
          0 &&
        action === 'dislike'
      )
        return;
      state.reactionData[slideNum][action]++;

      localStorage.setItem('reactionData', JSON.stringify(state.reactionData));
    }
  },
  actions: {}
});
