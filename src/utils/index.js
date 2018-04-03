function shuffle (arr) {
  var arrNew = arr.slice()
  for (let i = arrNew.length; i; i -= 1) {
    let j = Math.floor(Math.random() * i)
    let x = arrNew[i - 1]
    arrNew[i - 1] = arrNew[j]
    arrNew[j] = x
  }
  return arrNew
}

export default {
  shuffle: shuffle
}
