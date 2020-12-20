import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const localReactionData = JSON.parse(localStorage.getItem('reactionData'));
// const data = { ...localReactionData };

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
      console.log(state.activeSlide);
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
      if (payload.action === 'like' && payload.slide === 'slide1')
        state.reactionData.slide1.likes++;
      if (payload.action === 'like' && payload.slide === 'slide2')
        state.reactionData.slide2.likes++;
      if (payload.action === 'like' && payload.slide === 'slide3')
        state.reactionData.slide3.likes++;
      if (payload.action === 'dislike' && payload.slide === 'slide1')
        state.reactionData.slide1.likes--;
      if (payload.action === 'dislike' && payload.slide === 'slide2')
        state.reactionData.slide2.likes--;
      if (payload.action === 'dislike' && payload.slide === 'slide3')
        state.reactionData.slide3.likes--;
      if (payload.action === 'heart' && payload.slide === 'slide1')
        state.reactionData.slide1.hearts++;
      if (payload.action === 'heart' && payload.slide === 'slide2')
        state.reactionData.slide2.hearts++;
      if (payload.action === 'heart' && payload.slide === 'slide3')
        state.reactionData.slide3.hearts++;
      if (payload.action === 'laugh' && payload.slide === 'slide1')
        state.reactionData.slide1.laugh++;
      if (payload.action === 'laugh' && payload.slide === 'slide2')
        state.reactionData.slide2.laugh++;
      if (payload.action === 'laugh' && payload.slide === 'slide3')
        state.reactionData.slide3.laugh++;
      localStorage.setItem('reactionData', JSON.stringify(state.reactionData));
    }
  },
  actions: {}
});
