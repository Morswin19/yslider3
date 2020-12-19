<template>
  <div v-bind:id="slideName">
    <div class="slide-image" v-bind:style="{ background: color }"></div>
    <div class="action-container">
      <span>thumb</span>
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
      color: String
    },
    data() {
      return {
        background: {
          slide1: 'red',
          slide2: 'black',
          slide3: 'green',
          slide4: 'red',
          slide5: 'black'
        }
      };
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
  #slide1, #slide4

  #slide2, #slide5

  #slide3

  .action-container
    margin: 20px
    span
      margin: 5px
</style>
