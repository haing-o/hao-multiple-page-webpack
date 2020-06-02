import './home_subpage.less'
import Obj from '../../../common/js/newcommon'
import $ from 'jquery'

console.log('hello home_subpage')
console.log(++Obj.commonNum)
console.log($('#id'))

let newvuetest1 = new Vue({
  el: '#id',
  created() {
    console.log('success!1')
  }
})