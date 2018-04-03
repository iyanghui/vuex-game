<template>
  <div class="container" v-on:click="flip">
    <div class="card" :class="{flipped: option.flipped}">
        <img class="front" v-if="option.cardName === '8-ball'" src="../../assets/img/8-ball.png"/>
        <img class="front" v-if="option.cardName === 'baked-potato'" src="../../assets/img/baked-potato.png"/>
        <img class="front" v-if="option.cardName === 'dinosaur'" src="../../assets/img/dinosaur.png"/>
        <img class="front" v-if="option.cardName === 'kronos'" src="../../assets/img/kronos.png"/>
        <img class="front" v-if="option.cardName === 'rocket'" src="../../assets/img/rocket.png"/>
        <img class="front" v-if="option.cardName === 'skinny-unicorn'" src="../../assets/img/skinny-unicorn.png"/>
        <img class="front" v-if="option.cardName === 'that-guy'" src="../../assets/img/that-guy.png"/>
        <img class="front" v-if="option.cardName === 'zeppelin'" src="../../assets/img/zeppelin.png"/>
        <!-- default img -->
        <img class="back" src="../../assets/img/back.png"/>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  props: {
      option: {
          type: Object,
          default () {
              return {
                  flipped: false,
                  cardName: ''
              }
          }
      }
  },
  methods: {
      ...mapActions(['flipCard']),
      flip () {
          if (this.option.flipped) {
              return
          }
          this.flipCard(this.option)
          this.$emit('flipped', this.option)
      }
  },
  components: {}
}
</script>

<style lang="scss">
    .container {
        width: 100px;
        height: 100px;
        margin-right: 3px;
        cursor: pointer;
        position: relative;
        perspective: 800px;

        .card {
            width: 100%;
            height: 100%;
            transition: transform 1s;
            transform-style: preserve-3d;

            &.flipped {
                transform: rotateY(180deg);
            }

            img {
                display: block;
                height: 100%;
                width: 100%;
                position: absolute;
                backface-visibility: hidden;
            }

            .front {
                background: blue;
                transform: rotateY(180deg);
            }
        }
    }

    @media screen and (max-width: 450px) {
        .container {
            width: 92px;
            height: 90px;
            margin-right: 1px;
        }
    }
    @media screen and (max-width: 380px) {
        .container {
            width: 85px;
            height: 90px;
            margin-right: 1px;
        }
    }
    @media screen and (max-width: 360px) {
        .container {
            width: 70px;
            height: 50px;
            margin-right: 1px;
        }
    }
</style>

