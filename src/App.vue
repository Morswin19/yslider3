<template>
  <div id="app">
    <div
      id="slider"
      v-bind:style="{
        transform: 'translateX(-100vw)'
      }"
    >
      <Slide slideName="slide1" color="crimson" />
      <Slide slideName="slide2" color="black" />
      <Slide slideName="slide3" color="green" />
      <Slide slideName="slide4" color="crimson" />
      <Slide slideName="slide5" color="black" />
    </div>
    <div id="arrows">
      <span class="arrow" id="arrow-left">+</span>
      <span class="arrow" id="arrow-right">></span>
    </div>
  </div>
</template>

<script>
  import Slide from './components/Slide.vue';
  export default {
    name: 'App',
    components: {
      Slide
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

  #slider
    display: flex

  #arrows
    position: fixed
    width: 100vw
    font-size: 120px
    color: white
    display: flex
    justify-content: space-between
    top: 35vh
    transform: translateY(-50%)
    .arrow
      margin: 0 100px
</style>
