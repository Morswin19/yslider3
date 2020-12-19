<template>
  <div id="app">
    <div id="slider-container">
      <div
        id="slider"
        v-bind:style="{
          transform: `translateX(${-100 * activeSlide}vw)`,
          transition: transitionTime + 's'
        }"
        v-on:transitionend="handleTransition"
      >
        <Slide slideName="slide1" color1="#583d72" color2="#9f5f80" />
        <Slide slideName="slide2" color1="#9f5f80" color2="#583d72" />
        <Slide slideName="slide3" color1="#583d72" color2="#70af85" />
        <Slide slideName="slide4" color1="#70af85" color2="#9f5f80" />
        <Slide slideName="slide5" color1="#9f5f80" color2="#583d72" />
      </div>
    </div>
    <div id="arrows">
      <span class="arrow" v-on:click="changeSlide(-1)" id="arrow-left">+</span>
      <span class="arrow" v-on:click="changeSlide(+1)" id="arrow-right">></span>
    </div>
    <div class="indicator-container">
      <div
        v-on:click="goToSlide(1)"
        ref="slide1"
        v-bind:class="{ indicator: true, active: activeIndicator.slide1Active }"
      ></div>
      <div
        v-on:click="goToSlide(2)"
        ref="slide2"
        v-bind:class="{ indicator: true, active: activeIndicator.slide2Active }"
      ></div>
      <div
        v-on:click="goToSlide(3)"
        ref="slide3"
        v-bind:class="{ indicator: true, active: activeIndicator.slide3Active }"
      ></div>
    </div>
  </div>
</template>

<script>
  import Slide from './components/Slide.vue';
  export default {
    name: 'App',
    components: {
      Slide
    },
    data() {
      return {};
    },
    methods: {
      handleTransition() {
        this.$store.commit('handleTransition');
      },
      changeSlide(value) {
        this.$store.commit('changeSlide', value);
      },
      goToSlide(num) {
        this.$store.commit('goToSlide', num);
      }
    },
    computed: {
      activeSlide() {
        return this.$store.state.activeSlide;
      },
      transitionTime() {
        return this.$store.state.transitionTime;
      },
      activeIndicator() {
        return this.$store.state.activeIndicator;
      }
    }
  };
</script>

<style lang="sass">
  @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;600;700&display=swap')

  $sliderHeight: 70vh

  *
    margin: 0
    padding: 0
    box-sizing: border-box

  #app
    font-family: 'Josefin Sans', sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    width: 100%
    height: 100vh
    position: relative
  #slider-container
    overflow: hidden

  #arrows
      position: fixed
      width: 100vw
      font-size: 120px
      color: #ffffff
      display: flex
      justify-content: space-between
      top: 35vh
      transform: translateY(-50%)
      cursor: pointer
      .arrow
        margin: 0 100px

  .indicator-container
      display: flex
      position: absolute
      top: calc(70vh - 40px)
      left: 50%
      transform: translateX(-50%)
      align-items: center
      .indicator
        width: 10px
        height: 10px
        background: rgba(#ffffff, 0.7)
        margin: 0 10px
        border-radius: 50%
        cursor: pointer
        transition: 0.2s
        &:hover
          background: #ffffff
      .active
        width: 15px
        height: 15px
        background: rgba(#ffffff, 0)
        border: 2px solid crimson
        &:hover
          background: rgba(#ffffff, 0)
          cursor: default

  #slider
    display: flex
    width: 100vw
</style>
