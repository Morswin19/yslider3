<template>
  <div id="app">
    <div id="slider-container">
      <div
        id="slider"
        v-bind:style="{
          //starting from the second slide
          transform: `translateX(${-100 * (activeSlide - 1)}vw)`,
          transition: transitionTime + 's'
        }"
      >
        <Slide
          slideName="slide1"
          color1="#eff8ff"
          color2="#ffe5b9"
          v-bind:reaction="reactionData[0]"
          title="Living Colours"
          text="There is unrest in the forest There is trouble with the trees For the maples want more sunlight And the oaks ignore their pleas"
        />
        <Slide
          slideName="slide2"
          color1="#ffe5b9"
          color2="#c9cbff"
          v-bind:reaction="reactionData[1]"
          title="Bike"
          text="I've got a bike. You can ride it if you like It's got a basket, a bell that rings and Things to make it look good"
        />
        <Slide
          slideName="slide3"
          color1="#c9cbff"
          color2="#eff8ff"
          v-bind:reaction="reactionData[2]"
          title="The Graph"
          text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem"
        />
      </div>
    </div>
    <div id="arrows">
      <span class="arrow" v-on:click="changeSlide(-1)" id="arrow-left"
        ><i v-show="activeSlide > 1" class="fas fa-angle-left"></i
      ></span>
      <span class="arrow" v-on:click="changeSlide(+1)" id="arrow-right"
        ><i v-show="activeSlide < 3" class="fas fa-angle-right"></i
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

  export default {
    name: 'App',
    components: {
      Slide,
      Footer
    },
    data() {
      return {};
    },
    //description of the methods in the store.js
    methods: {
      changeSlide(value) {
        this.$store.commit('changeSlide', value);
      },
      goToSlide(num) {
        this.$store.commit('goToSlide', num);
      }
    },
    computed: {
      //description of computed in the store.js
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
      },
      arrowColor() {
        return this.$store.state.arrowColor;
      }
    }
  };
</script>

<style lang="sass">
  @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;600;700&display=swap')

  *
    margin: 0
    padding: 0
    box-sizing: border-box

  #app
    position: relative
    width: 100%
    height: 100vh
    font-family: 'Josefin Sans', sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
  #slider-container
    overflow: hidden
  #arrows
    position: fixed
    top: 35vh
    display: flex
    justify-content: space-between
    width: 100vw
    font-size: 120px
    color: #6c63ff
    transform: translateY(-50%)
    .arrow
      margin: 0 100px
      cursor: pointer

  .indicator-container
      position: absolute
      top: calc(70vh - 40px)
      left: 50%
      display: flex
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
  @media(max-width: 1025px)
    #arrows
      .arrow
        margin: 0 50px
  @media(max-width: 600px)
    #arrows
      font-size: 60px
      .arrow
        margin: 0 20px
    #slide-number
      right: 20px
      top: calc(70vh - 35px)
      font-size: 32px
      span
        font-size: 24px
    .indicator-container
      top: calc(70vh - 30px)
</style>
