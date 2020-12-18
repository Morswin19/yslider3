<template>
  <div id="app">
    <div id="slider">
      <div class="slide"></div>
      <div class="slide"></div>
      <div class="slide"></div>
      <div class="slide"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    components: {}
  };
</script>

<style lang="sass">
  @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;600;700&display=swap')

  *
    margin: 0
    padding: 0
    box-sizing: border-box

  #app
    font-family: 'Josefin Sans', sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    color: #2c3e50
    margin-top: 60px

  #slider
    display: flex
    .slide
      height: 60vh
      min-width: 100vw
      background-color: yellow
      border: 5px solid red
</style>
