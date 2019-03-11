var util = require('../../utils/util.js');
var mockData = require("../../mockData/choice_data.js");
const app = getApp();
const order = ['red', 'yellow', 'blue', 'green', 'red']

Page({
  data: {
    swipers: {
      imgUrls: [
        'http://old.bz55.com/uploads/allimg/160621/139-160621091520.jpg',
        '../../images/comic_1.jpg',
        '../../images/comic_2.jpg',
      ],
      indicatorDots: true,
      indicatorActiveColor: "#40e0d0",
      autoplay: true,
      circular: true,
      interval: 3000,
      duration: 1000
    },
    logos: mockData.logos,
    dynamic_item_data: mockData.dynamic_item_data,
    tab_data: mockData.tab_data,
  },
  // 滚动切换标签样式
  switchTab: function(e) {
    console.log(`当前是第${e.detail.current}个标签页`);
    console.log(this.data.tab_data.currentTab);
    this.setData({
      'tab_data.currentTab': e.detail.current
    });
    this.checkCor();
  },
  // 点击标题切换当前页时改变样式
  swichNav: function(e) {
    // console.log(e);
    console.log(`你点击了第${e.currentTarget.dataset.current}个标签`);
    var cur = e.target.dataset.current;
    if (this.data.tab_data.currentTaB == cur) {
      return false;
    } else {
      this.setData({
        'tab_data.currentTab': cur
      })
    }
  },
  //判断当前滚动超过一屏时，设置tab标题滚动条。
  checkCor: function() {
    if (this.data.currentTab > 4) {
      this.setData({
        scrollLeft: 300
      })
    } else {
      this.setData({
        scrollLeft: 0
      })
    }
  },


  onLoad: function(options) {
    // var doubanUrl = app.globalData.doubanBase + "/v2/movie/top250";
    // util.getHttp(doubanUrl, this.procssJingXuan);
    // console.log(this.data.dynamic_item_data);
    var dynamic_item_data = this.data.dynamic_item_data;
    var d_text = "";
    for (var i in dynamic_item_data) {
      // console.log(dynamic_item_data[i].text);
      d_text = dynamic_item_data[i].text;
      if (d_text.length > 18) {
        d_text = d_text.substring(0, 18) + "···";
        dynamic_item_data[i].text = d_text;
      }
    }
    this.setData({
      dynamic_item_data: dynamic_item_data
    })
  },

  // procssJingXuan: function(data) {
  //   console.log(data);
  // },

  onLogoTap: function(event) {
    var logoId = event.currentTarget.dataset.id;
    switch (logoId) {
      case 0:
        console.log(0);
        break;
      case 1:
        console.log(1);
        break;
      case 2:
        console.log(2);
        break;
      default:
        console.log(3);
    }
  },

  onMoreTap: function(event) {
    console.log("您点击了更多");
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          //动态根据手机分辨率来计算内容的高度（屏幕总高度-顶部筛选栏的高度）
          contentHeight: (res.windowHeight - 72 * res.screenWidth / 750)
        });
      }
    })
  },

  onPickHeaderClick: function() {
    this.setData({
      openPicker: !this.data.openPicker,
      needAnimation: true
    })
  },

  footerTap: app.footerTap,

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})