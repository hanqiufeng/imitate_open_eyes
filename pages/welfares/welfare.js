var mockData = require("../../mockData/choice_data.js");
var app = getApp();

Page({
  data: {
    tab_data: mockData.tab_data,
  },
  
  // 滚动切换标签样式
  switchTab: function (e) {
    console.log(`当前是第${e.detail.current}个标签页`);
    console.log(this.data.tab_data.currentTab);
    this.setData({
      'tab_data.currentTab': e.detail.current
    });
    this.checkCor();
  },
  // 点击标题切换当前页时改变样式
  swichNav: function (e) {
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
  checkCor: function () {
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

  
  onLoad: function () {
 
  },

  footerTap: app.footerTap
})