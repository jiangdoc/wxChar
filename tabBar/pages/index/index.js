//index.js
//获取应用实例
const app = getApp()

Page({
  data: {

  },

  onLoad: function() {

  },
  tab1: function() {
    app.globalData.list = [{
        "pagePath": "/pages/index1/index1",
        "iconPath": "/image/home.png",
        "selectedIconPath": "/image/home1.png",
        "text": "首页1"
      },
      {
        "pagePath": "/pages/mine1/mine1",
        "iconPath": "/image/user.png",
        "selectedIconPath": "/image/user1.png",
        "text": "我的1"
      }
    ]
    wx.switchTab({
      url: '../index1/index1',
    })
  },
  tab2: function() {
    app.globalData.list = [{
        "pagePath": "/pages/index2/index2",
        "iconPath": "/image/home.png",
        "selectedIconPath": "/image/home1.png",
        "text": "首页2"
      },
      {
        "pagePath": "/pages/mine2/mine2",
        "iconPath": "/image/user.png",
        "selectedIconPath": "/image/user1.png",
        "text": "我的2"
      }
    ]
    wx.switchTab({
      url: '../index2/index2',
    })
  }
})