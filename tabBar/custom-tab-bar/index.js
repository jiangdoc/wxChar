const app =getApp();
Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#ff6700",
    list: []  //tabBar的数据
  },
  lifetimes: {
    //组件的生命周期函数
    attached() {
      this.setData({
        list: app.globalData.list
      })
    },
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})