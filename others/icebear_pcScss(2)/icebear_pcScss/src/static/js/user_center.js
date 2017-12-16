new Vue({
  el: '#userCenetr',
  data() {
    return {
      detailShow: true,
      setDetailShow: false,
      setDetailContent: '编辑个人资料',
      schoolList: [
        {
          value: '1',
          label: '北京师范大学珠海分校'
        }
      ],
      subjectList: [
        {
          value: '1',
          label: '艺术类'
        }
      ],
      gradeList: [
        {
          value: '1',
          label: ' 大三'
        }
      ],
      industryList: [
        {
          value: '1',
          label: '互联网'
        }
      ],
      companyList: [
        {
          value: '1',
          label: '腾讯、京东'
        }
      ],
      schoolModel: '1',
      subjectModel: '1',
      gradeModel: '1',
      industryModel: '1',
      companyModel: '1',
    }
  },
  methods: {
    _detailShow() {
      this.detailShow = !this.detailShow
      if (!this.detailShow) {
        this.$refs.container.style.height = '268px'
      } else {
        this.$refs.container.style.height = '180px'
      }
    },
    _setDetailShow() {
      this.setDetailShow = !this.setDetailShow

      if (this.setDetailShow) {
        this.setDetailContent = '保存'
        this.$refs.container.style.height = '248px'
      }
      else if (!this.detailShow && !this.setDetailShow) {
        this.setDetailContent = '编辑个人资料'
        this.$refs.container.style.height = '268px'
      }
      else {
        this.setDetailContent = '编辑个人资料'
        this.$refs.container.style.height = '180px'
      }
    }
  }
})