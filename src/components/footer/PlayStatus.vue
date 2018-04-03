<template>
  <div class="status-footer">
    <span v-if="status === READY">READY</span>
    <span v-if="status === PLAYING">PLAYING</span>
    <a href v-if="status === PASS" v-on:click.prevent.stop="reset">Play Again</a>
    <span class="elapsed">{{timeCost}}</span>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { STATUS } from '../../store/statusEnum'

export default {
  data() {
    return STATUS
  },
  computed: {
    ...mapGetters(['status', 'timeCost'])
  },
  methods: {
    ...mapActions(['reset'])
  }
}
</script>

<style lang="scss">
  .status-footer {
    position: relative;
    margin-top: 10px;
    width: 100%;
    height: 20px;
    line-height: 20px;
    text-align: center;
    font-size: 18px;
    font-weight: bold;

    a {
      text-decoration: none;
    }
    .elapsed {
      position: absolute;
      right: 10px;
      font-size: 15px;
      font-weight: normal;
    }
  }
</style>

