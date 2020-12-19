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
        <Slide
          slideName="slide1"
          color1="#c9cbff"
          color2="#eff8ff"
          v-bind:img="image1"
          v-bind:reaction="reactionData.slide3"
        />
        <Slide
          slideName="slide2"
          color1="#eff8ff"
          color2="#ffe5b9"
          v-bind:img="image2"
          v-bind:reaction="reactionData.slide1"
        />
        <Slide
          slideName="slide3"
          color1="#ffe5b9"
          color2="#c9cbff"
          v-bind:img="image3"
          v-bind:reaction="reactionData.slide2"
        />
        <Slide
          slideName="slide4"
          color1="#c9cbff"
          color2="#eff8ff"
          v-bind:img="image1"
          v-bind:reaction="reactionData.slide3"
        />
        <Slide
          slideName="slide5"
          color1="#eff8ff"
          color2="#ffe5b9"
          v-bind:img="image2"
          v-bind:reaction="reactionData.slide1"
        />
      </div>
    </div>
    <div id="arrows">
      <span class="arrow" v-on:click="changeSlide(-1)" id="arrow-left"
        ><i class="fas fa-angle-left"></i
      ></span>
      <span class="arrow" v-on:click="changeSlide(+1)" id="arrow-right"
        ><i class="fas fa-angle-right"></i
      ></span>
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
    <div id="slide-number">
      {{ activeSlide > 3 ? '1' : activeSlide === 0 ? '3' : activeSlide
      }}<span>/3</span>
    </div>
  <Footer />
  </div>
</template>

<script>
  import Slide from './components/Slide.vue';
  import Footer from './components/Footer.vue';
  import image1 from './assets/first.svg';
  import image2 from './assets/second.svg';
  import image3 from './assets/third.svg';

  export default {
    name: 'App',
    components: {
      Slide,
      Footer
    },
    data() {
      return {
        image1,
        image2,
        image3
      };
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
      },
      reactionData() {
        return this.$store.state.reactionData;
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
      color: #6c63ff
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
        background: rgba(#333333, 0.7)
        margin: 0 10px
        border-radius: 50%
        cursor: pointer
        transition: 0.2s
        &:hover
          background: #333333
      .active
        width: 15px
        height: 15px
        background: rgba(#ffffff, 0)
        border: 2px solid crimson
        &:hover
          background: rgba(#ffffff, 0)
          cursor: default
  #slide-number
    position: absolute
    right: 100px
    top: calc(70vh - 50px)
    font-size: 40px
    color: crimson
    span
      color: #333333
      font-size: 30px
  #slider
    display: flex
    width: 100vw
</style>
