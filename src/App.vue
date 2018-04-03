<template>
  <div class="game-panel">
    <Dashboard></Dashboard>
    <Chessboard></Chessboard>
    <Footer></Footer>
  </div>
</template>

<script>
import Chessboard from './components/card/Chessboard'
import Dashboard from './components/dashboard/Dashboard'
import Footer from './components/footer/PlayStatus'

import { mapActions } from 'vuex'
import { STATUS } from './store/statusEnum'

export default {
  computed: {
    // 使用对象展开运算符将 getter 混入 computed 对象中
    // ...mapGetters(['leftMatched', 'cards', 'status'])
  }, 
  methods: {
    // 将 `this.updateStatus()` 映射为 `this.$store.dispatch('updateStatus')`
    // ...mapActions({
    //   update: 'updateStatus' // 将 `this.update()` 映射为 `this.$store.dispatch('updateStatus')`
    // })

    ...mapActions(['updateStatus', 'reset'])
  },
  created() {
    this.updateStatus(STATUS.READY)
    this.reset()
  },
  components: {
    Chessboard,
    Dashboard,
    Footer
  }
}
</script>

<style lang="scss">
  .game-panel {
    width: 450px;
    height: 580px;
    margin: 0 auto;
    border: 4px solid #bdbdbd;
    border-radius: 2px;
    background-color: #faf8ef;
    padding: 10px;
    display: flex;
    flex-direction: column;
  }
  @media screen and (max-width: 450px) {
    .game-panel {
      width: 100%;
      height: 100%;
      justify-content: space-around;
    }
  }
</style>

