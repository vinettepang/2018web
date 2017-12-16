new Vue({
  el: '#box',
  data() {
    return {
      notLoginAlertShow: false
    }
  },
  created() {
    this._notLoginAlertHide()
  },
  methods: {
    _notLoginAlertShow(e) {
      let offsetLeft = e.target.offsetLeft
      let clientWidth = e.target.clientWidth
      this.$refs.notLoginAlert.style.left = offsetLeft + clientWidth - 430 + 'px'

      this.notLoginAlertShow = true
    },
    _notLoginAlertHide() {
      let _this = this
      document.onclick = function () {
        _this.notLoginAlertShow = false
      }
    }
  }
})