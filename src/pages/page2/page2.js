import CommonObj from '../../common/js/newcommon'

console.log('page2')
console.log(CommonObj.commonNum)

let newvuetest = new Vue({
  el: '#page2hello',
  created() {
    console.log('success!')
  }
})