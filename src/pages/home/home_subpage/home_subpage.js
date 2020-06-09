import './home_subpage.less'
import Obj from '../../../common/js/newcommon'
import $ from 'jquery'
import '../../../common/js/aliplayer/aliplayer-min.css'
require("exports-loader?window.Aliplayer!../../../common/js/aliplayer/aliplayer-min");


console.log('hello home_subpage')
console.log(++Obj.commonNum)
console.log($('#id'))

let newvuetest1 = new Vue({
  el: '#id',
  created() {
    console.log('success!1')
  },
  mounted() {
    this.initPlayer();
    console.log('hello')
  },
  methods: {
    initPlayer() {
      let p = new Aliplayer({
        id: 'player'
      })
      console.log(p)
    }
  }
})