<template>
  <div class="dashboard">
    <Logo></Logo>
    <Match-info></Match-info>
    <Score></Score>
  </div>
</template>

<script>
import Logo from './Logo'
import MatchInfo from './MatchInfo'
import Score from './Score'

export default {
  components: {
    Logo,
    MatchInfo,
    Score
  }
}
</script>


<style lang="scss">
  .dashboard {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center
  }
</style>
