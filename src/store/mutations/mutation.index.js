// mutation 必须是同步函数,异步操作放在action中完成

/* 多人协同中，建议使用常量替代 Mutation 事件类型
 file: mutation-types.js
 export const SOME_MUTATION = 'SOME_MUTATION'
 file: mutation.index.js
 可以使用 ES2015 风格的计算属性命名功能来使用一个常量作为函数名
 [SOME_MUTATION] (state) {
      // mutate state
    } */

export default {
  reset (state, newState) {
    state.leftMatched = newState.leftMatched
    state.highestSpeed = newState.highestSpeed
    state.status = newState.status
    state.cards = newState.cards
    state.timeCost = newState.timeCost
  },

  updateStatus (state, newStatus) {
    state.status = newStatus
  },

  decreaseMatch (state) {
    state.leftMatched--
  },

  flip (state, card) {
    let c = state.cards.find(cc => cc === card)
    c.flipped = !c.flipped
  },

  flips (state, cards) {
    state.cards.filter(cc => cards.indexOf(cc) >= 0).forEach(cc => {
      cc.flipped = !cc.flipped
    })
  },

  counting (state) {
    state.timeCost++
  },

  updateHighestSpeed (state) {
    if (!localStorage.getItem('highestSpeed') || localStorage.getItem('highestSpeed') > state.timeCost) {
      return localStorage.setItem('highestSpeed', state.timeCost)
    }
  }
}
