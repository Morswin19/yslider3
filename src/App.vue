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
        <Slide slideName="slide1" color="crimson" />
        <Slide slideName="slide2" color="black" />
        <Slide slideName="slide3" color="green" />
        <Slide slideName="slide4" color="crimson" />
        <Slide slideName="slide5" color="black" />
      </div>
      <div id="arrows">
        <span class="arrow" v-on:click="changeSlide(-1)" id="arrow-left"
          >+</span
        >
        <span class="arrow" v-on:click="changeSlide(+1)" id="arrow-right"
          >></span
        >
      </div>
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
      return {
        activeSlide: 1,
        transitionTime: 1
      };
    },
    methods: {
      changeSlide(change) {
        if (this.transitionTime === 'none') this.transitionTime = 1;
        if (
          (this.activeSlide >= 4 && change === 1) ||
          (this.activeSlide <= 0 && change === -1)
        )
          return;
        this.activeSlide += change;
      },
      handleTransition() {
        if (this.activeSlide === 4) {
          this.transitionTime = 'none';
          this.activeSlide = 1;
        }
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

  #slider
    display: flex
    width: 100vw

  #arrows
    position: fixed
    width: 100vw
    font-size: 120px
    color: yellow
    display: flex
    justify-content: space-between
    top: 35vh
    transform: translateY(-50%)
    .arrow
      margin: 0 100px
</style>
