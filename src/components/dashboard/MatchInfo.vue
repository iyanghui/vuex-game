<template>
  <div class="board">
    <span>Left To Match</span>
    <h2>{{leftMatched}}</h2>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['leftMatched'])
  }
}
</script>

<style lang="scss">
.board {
  width: 120px;
  height: 100%;
  background-color: #bbada0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: #eae0d1;
  border-radius: 6px;
    
  span {
    font-size: 19px;
    font-weight: bold;
    display: block;
    width: 100%;
    text-align: center;
  }
  h2 {
    color: #fff;
  }
}

@media screen and (max-width: 450px) {
  .board {
    span {
      font-size: 17px;
    }
  }
}

@media screen and (max-width: 360px) {
  .board {
    span {
      font-size: 15px;
    }
  }

}
</style>

