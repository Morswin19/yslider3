import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

//loading data from local storage
const localReactionData = JSON.parse(localStorage.getItem('reactionData'));

//starting reaction template, when local storage is empty
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

const startingReactionData = localReactionData
  ? localReactionData
  : reactionData;

export const store = new Vuex.Store({
  state: {
    //reactions data
    reactionData: startingReactionData,
    //starting slide
    activeSlide: 2,
    //slide transition time
    transitionTime: 1,
    //slide indicators
    activeIndicator: {
      slide1Active: false,
      slide2Active: true,
      slide3Active: false
    },
    //starting text and arrow color, it will change when someone react on this slide
    textColor: '#333333',
    animated: true,
    dayColor: '#000069',
    graphState: 'normal',
    graphColor: '#000069'
  },
  mutations: {
    //change slide when click on the arrow
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
      //change slide when click on the indicators
      state.activeSlide = num;
      state.activeIndicator.slide1Active = false;
      state.activeIndicator.slide2Active = false;
      state.activeIndicator.slide3Active = false;
      if (state.activeSlide === 1) state.activeIndicator.slide1Active = true;
      if (state.activeSlide === 2) state.activeIndicator.slide2Active = true;
      if (state.activeSlide === 3) state.activeIndicator.slide3Active = true;
    },
    reactionFunc: (state, payload) => {
      //change reaction data on click
      const { action, slide } = payload;
      state.animated = false;
      const slideNum = parseInt(slide.slice(-1)) - 1;
      if (
        state.reactionData[slideNum].like -
          state.reactionData[slideNum].dislike ===
          0 &&
        action === 'dislike'
      )
        return;
      if (action !== 'dislike') {
        state.textColor = '#17B800';
        state.dayColor = 'lawngreen';
        state.graphState = 'up';
        state.graphColor = '#17B800';
      } else {
        state.textColor = 'red';
        state.dayColor = 'red';
        state.graphColor = 'red';
        state.graphState = 'down';
      }
      setTimeout(() => {
        state.textColor = '#333333';
        state.animated = true;
        state.graphState = 'normal';
      }, 2000);
      state.reactionData[slideNum][action]++;

      localStorage.setItem('reactionData', JSON.stringify(state.reactionData));
    }
  }
});
