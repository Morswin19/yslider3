<template>
  <div v-bind:id="slideName">
    <div
      class="slide-image"
      v-bind:style="{
        backgroundImage: `linear-gradient(90deg,${color1}, ${color2})`
      }"
    >
      <div class="text-container">
        <div class="text" v-bind:style="{ color: textColor }">
          <h1>{{ title }}</h1>
          <h2>
            {{ text }}
          </h2>
        </div>
      </div>
      <div class="img-container">
        <Callendar v-if="slideName === 'slide2'" />
        <Grow v-if="slideName === 'slide1'" />
        <Listen v-if="slideName === 'slide3'" />
      </div>
    </div>
    <div class="action-container">
      <i
        v-on:click="reactionFunc('like', slideName)"
        class="fas fa-thumbs-up"
      ></i>
      <span>{{ likesToShow }}</span>
      <i
        v-on:click="reactionFunc('dislike', slideName)"
        class="fas fa-thumbs-down"
      ></i>
      <i v-on:click="reactionFunc('heart', slideName)" class="fas fa-heart"></i>
      <span>{{ reaction.heart }}</span>
      <i
        v-on:click="reactionFunc('laugh', slideName)"
        class="fas fa-grin-squint-tears"
      ></i>
      <span>{{ reaction.laugh }}</span>
    </div>
  </div>
</template>

<script>
  // import GraphImage from './GraphImage.vue';
  import Callendar from './Callendar.vue';
  // import Trees from './Trees.vue';
  // import Like from './Like.vue';
  // import Bike from './Bike.vue';
  import Grow from './Grow.vue';
  // import LikeSign from './LikeSign.vue';
  import Listen from './Listen.vue';

  export default {
    name: 'Slide',
    components: {
      // GraphImage,
      Callendar,
      // Trees,
      // Bike
      Grow,
      // LikeSign,
      Listen
    },
    data() {
      return {};
    },
    props: {
      slideName: String,
      color1: String,
      color2: String,
      img: String,
      reaction: Object,
      title: String,
      text: String
    },
    //description of the methods in the store.js
    methods: {
      changeSlide(value) {
        this.$store.commit('changeSlide', value);
      },
      reactionFunc(action, slide) {
        this.$store.commit('reactionFunc', { action, slide });
      }
    },
    //description of computed in the store.js
    computed: {
      activeSlide() {
        return this.$store.state.activeSlide;
      },
      reactionData() {
        return this.$store.state.reactionData;
      },
      //likes to show below slide
      likesToShow() {
        return this.reaction.like - this.reaction.dislike;
      },
      textColor() {
        return this.$store.state.textColor;
      }
    }
  };
</script>

<style lang="sass" scoped>
  .slide-image
    position: relative
    display: flex
    height: 70vh
    min-width: 100vw
    background-size: cover
    background-position-y: center
    .text-container
      display: flex
      justify-content: flex-end
      max-height: 100%
      width: 50%
      color: #333333
      .text
        width: 30vw
        margin: auto 50px
        text-align: right
        transition: 0.3s
        h1
          font-size: 60px
          margin-bottom: 20px
    .img-container
      display: flex

  .action-container
    display: flex
    align-items: center
    margin: 20px
    font-size: 20px
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
          margin: 100px 50px -50px
          text-align: center
          h1
      .img-container

  @media(max-width: 600px)
    .slide-image
      flex-direction: column
      justify-content: center
      .text-container
        justify-content: space-around
        width: 100%
        .text
          width: 60vw
          margin: 100px 50px -50px 50px
          text-align: center
          h1
            font-size: 32px
          h2
            font-size: 16px
      .img-container
</style>
