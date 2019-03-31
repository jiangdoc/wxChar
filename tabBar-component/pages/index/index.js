let app = getApp()

Page({
  data: {
    currentTab: 0,
    //这里只做tab名和显示图标
    items: [
      {
        "text": "测试",
        "iconPath": "/assets/icons/home.png",
        "selectedIconPath": "/assets/icons/home_active.png"
      },
      {
        "text": "我的",
        "iconPath": "/assets/icons/mine.png",
        "selectedIconPath": "/assets/icons/mine_active.png"
      }
    ]
  },
  swichNav: function (e) {
    let that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  onLoad: function (option) {

  }
})
