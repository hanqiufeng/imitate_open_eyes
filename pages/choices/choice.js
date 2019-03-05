var util = require('../../utils/util.js');
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
      // 'http://old.bz55.com/uploads/allimg/160621/139-160621091520.jpg',
      indicatorDots: true,
      indicatorActiveColor: "#40e0d0",
      autoplay: true,
      circular: true,
      interval: 3000,
      duration: 1000
    },
    logos: [{
      img: "../../images/icons/liaotian.png",
      title: "聊天背景",
      id: 0,
    }, {
      img: "../../images/icons/qiatongtouxiang.png",
      title: "头像",
      id: 1,
    }, {
      img: "../../images/icons/biaoqing.png",
      title: "表情",
      id: 2,
    }, {
      img: "../../images/icons/xingzuo.png",
      title: "星座",
      id: 3,
    }],
    toView: 'red',
    scrollTop: 100,

  },

  onLoad: function(options) {
    var doubanUrl = app.globalData.doubanBase + "/v2/movie/top250";
    // util.getHttp(doubanUrl, this.procssJingXuan);
  },

  procssJingXuan: function(data) {
    console.log(data);
  },

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

  upper(e) {
    console.log(e)
  },

  lower(e) {
    console.log(e)
  },
  scroll(e) {
    console.log(e)
  },
  tap(e) {
    for (let i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },
  tapMove(e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

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