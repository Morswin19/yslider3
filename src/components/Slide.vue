<template>
  <div v-bind:id="slideName">
    <div
      class="slide-image"
      v-bind:style="{
        backgroundImage: `linear-gradient(90deg,${color1}, ${color2})`
      }"
    >
      <div class="text-container">
        <div class="text">
          <h1>The title</h1>
          <h2>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
            dolor ab numquam dolore! Libero, quos.
          </h2>
        </div>
      </div>
      <div class="img-container">
        <img v-bind:src="img" alt="" />
      </div>
    </div>
    <div class="action-container">
      <i class="fas fa-thumbs-up"></i>
      <span>{{ reaction.likes }}</span>
      <i class="fas fa-heart"></i>
      <span>{{ reaction.hearts }}</span>
      <i class="fas fa-grin-squint-tears"></i>
      <span>{{ reaction.laugh }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Slide',
    props: {
      slideName: String,
      color1: String,
      color2: String,
      img: String,
      reaction: Object
    },
    data() {
      return {};
    },
    methods: {
      changeSlide(value) {
        this.$store.commit('changeSlide', value);
      }
    },
    computed: {
      activeSlide() {
        return this.$store.state.activeSlide;
      },
      reactionData() {
        return this.$store.state.reactionData;
      }
    }
  };
</script>

<style lang="sass" scoped>
  .slide-image
    display: flex
    height: 70vh
    min-width: 100vw
    background-color: yellow
    background-size: cover
    background-position-y: center
    position: relative
    .text-container
      display: flex
      justify-content: flex-end
      max-height: 100%
      width: 50%
      // background: rgba(0,0,0,0.3)
      color: #333333
      .text
        width: 30vw
        margin: auto 50px
        text-align: right
        h1
          font-size: 60px
          margin-bottom: 20px
    .img-container
      display: flex
      img
        max-height: 50vh
        max-width: 50vw
        margin: auto 20px

  .action-container
    margin: 20px
    font-size: 20px
    display: flex
    align-items: center
    i
      margin-left: 20px
      margin-right: 5px
      transition: 0.1s
      cursor: pointer
      &:hover
        transform: scale(1.2)
    i:nth-child(1)
      color: #6c63ff
    i:nth-child(3)
      color: crimson
    i:nth-child(5)
      color: #fdb827
    span
      margin-left: 5px
      margin-right: 20px
</style>
