//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    user_info:[
      { pageName: "我的收藏", page: "1", icon:"../../images/icons/quanzi-on.png"},
      { pageName: "我的下单", page: "1", icon:"../../images/icons/quanzi-on.png"},
      { pageName: "我的订单", page: "1", icon:"../../images/icons/quanzi-on.png"},
      { pageName: "原创专栏", page: "1", icon:"../../images/icons/quanzi-on.png"},
      { pageName: "我发布的", page: "1", icon:"../../images/icons/quanzi-on.png"},
      { pageName: "我的圈子", page: "1", icon:"../../images/icons/quanzi-on.png"},
      { pageName: "上传壁纸", page: "1", icon:"../../images/icons/quanzi-on.png"},
      { pageName: "设置", page: "1", icon:"../../images/icons/quanzi-on.png"},
      { pageName: "关于我们", page: "1", icon:"../../images/icons/quanzi-on.png"},
      { pageName: "意见反馈", page: "1", icon:"../../images/icons/quanzi-on.png"},
    ]
  },
  //事件处理函数
  bindViewTap: function () {
  
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
})
