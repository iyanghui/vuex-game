<template>
  <div class="chessboard">
    <Card v-for="(card, index) in cards" :key="index" :option="card" v-on:flipped="onFlipped"></Card>     
  </div>
</template>

<script>
import Card from './Card'
import { mapActions, mapGetters } from 'vuex'
import { STATUS } from '../../store/statusEnum'

export default {
  data() {
    return {
      lastCard: null
    }
  },
  computed: {
    ...mapGetters(['leftMatched', 'cards', 'status'])
  },
  methods: {
    ...mapActions(['updateStatus', 'match', 'flipCards']),
    onFlipped(card) {
      if (this.status === STATUS.READY) {
        this.updateStatus(STATUS.PLAYING)
      }
      if (!this.lastCard) {
        return (this.lastCard = card)
      }
      if (this.lastCard !== card && this.lastCard.cardName === card.cardName) {
        debugger
        this.lastCard = null
        this.match()
        return this.leftMatched || this.updateStatus(STATUS.PASS)
      }
      const lastCard = this.lastCard
      this.lastCard = null
      setTimeout(() => {
        this.flipCards([lastCard, card])
      }, 1000);
    }
  },
  components: {
    Card
  }
}
</script>

<style lang="scss">
.chessboard {
  margin-top: 20px;
  width: 100%;
  background-color: #fff;
  height: 400px;
  border-radius: 4px;
  padding: 10px 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: space-around;
}
.container:nth-child(4n) {
  margin-right: 0px;
}
@media screen and (max-width: 450px) {
  .chessboard {
    height: 350px;
    padding: 10px 0px;
  }
}
@media screen and (max-width: 370px) {
  .chessboard {
    height: 320px;
  }
}
</style>
