<template>
  <div v-bind:id="slideName">
    <div
      class="slide-image"
      v-bind:style="{
        backgroundImage: `linear-gradient(90deg,${color1}, ${color2})`
      }"
    ></div>
    <div class="action-container">
      <span>{{ activeSlide }} / 3</span>
      <span>121</span>
      <span>heart</span>
      <span>121</span>
      <span>wow</span>
      <span>121</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Slide',
    props: {
      slideName: String,
      color1: String,
      color2: String
    },
    data() {
      return {
        
      };
    },
    methods: {
      changeSlide(value) {
        this.$store.commit('changeSlide', value);
      }
    },
    computed: {
      activeSlide() {
        return this.$store.state.activeSlide;
      }
    }
  };
</script>

<style lang="sass" scoped>
  .slide-image
    height: 70vh
    min-width: 100vw
    background-color: yellow
    background-size: cover
    background-position-y: center
    position: relative


  .action-container
    margin: 20px
    span
      margin: 5px
</style>
