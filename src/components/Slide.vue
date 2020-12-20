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
          <h1>{{ title }}</h1>
          <h2>
            {{ text }}
          </h2>
        </div>
      </div>
      <div class="img-container">
        <img v-bind:src="img" alt="" />
      </div>
    </div>
    <div class="action-container">
      <i
        v-on:click="reactionFunc('like', slideName)"
        class="fas fa-thumbs-up"
      ></i>
      <span>{{ reaction.likes }}</span>
      <i
        v-on:click="reactionFunc('dislike', slideName)"
        class="fas fa-thumbs-down"
      ></i>
      <i v-on:click="reactionFunc('heart', slideName)" class="fas fa-heart"></i>
      <span>{{ reaction.hearts }}</span>
      <i
        v-on:click="reactionFunc('laugh', slideName)"
        class="fas fa-grin-squint-tears"
      ></i>
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
      reaction: Object,
      title: String,
      text: String,
    },
    data() {
      return {};
    },
    methods: {
      changeSlide(value) {
        this.$store.commit('changeSlide', value);
      },
      reactionFunc(action, slide) {
        this.$store.commit('reactionFunc', { action, slide });
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
    span:nth-child(2)
      margin-right: 5px
    i:nth-child(3)
      color: #666666
      margin-left: 5px
      margin-right: 20px
    i:nth-child(4)
      color: crimson
    i:nth-child(6)
      color: #fdb827
    span
      margin-left: 5px
      margin-right: 20px

  @media(max-width: 1025px)
    .slide-image
      flex-direction: column
      justify-content: center
      .text-container
        justify-content: space-around
        width: 100%
        .text
          width: 50vw
          margin: 100px 50px 50px 50px
          text-align: center
          h1
      .img-container
        img
          margin: 0 auto 100px
  @media(max-width: 600px)
    .slide-image
      flex-direction: column
      justify-content: center
      .text-container
        justify-content: space-around
        width: 100%
        .text
          width: 60vw
          margin: 100px 50px 20px 50px
          text-align: center
          h1
            font-size: 32px
          h2
            font-size: 16px
      .img-container
        img
          max-width: 70vw
          margin: 0 auto 100px
</style>
