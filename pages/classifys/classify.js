Page({
  data: {
    state: false,
    first_click: false,
    tags: [{
        tagName: "精选",
        id: 0
      }, {
        tagName: "最新",
        id: 1
      }, {
        tagName: "主题套图",
        id: 2
      }, {
        tagName: "天生一对",
        id: 3
      }, {
        tagName: "最佳锁屏",
        id: 4
      }, {
        tagName: "一天最热",
        id: 5
      }, {
        tagName: "一周排行",
        id: 6
      }, {
        tagName: "人气月榜",
        id: 7
      }, 

    ],
    routers: [
      {
        name: '精选',
        url: '/pages/Course/course',
        icon: '../../../../images/avatar/1.png',
        code: '1'
      },
      {
        name: '最新',
        url: '/pages/Course/course',
        icon: '../../../../images/avatar/2.png',
        code: '2'
      },
      {
        name: '主题套图',
        url: '/pages/Course/course',
        icon: '../../../../images/avatar/3.png',
        code: '3'
      },
      {
        name: '天生一对',
        icon: '../../../../images/avatar/4.png',
        code: '4'
      },
      {
        name: '最佳锁屏',
        url: '/pages/Course/course',
        icon: '../../../../images/avatar/5.png',
        code: '5'
      },
      {
        name: '一天最热',
        icon: '../../../../images/avatar/1.png',
        code: '6'
      },
      {
        name: '一周排行',
        url: '/pages/Course/course',
        icon: '../../../../images/avatar/1.png',
        code: '7'
      },
      {
        name: '人气月榜',
        icon: '../../../../images/avatar/1.png',
        code: '8'
      },
    ],
  },

  toggle: function() {
    var list_state = this.data.state,
      first_state = this.data.first_click;
    if (!first_state) {
      this.setData({
        first_click: true
      });
    }
    if (list_state) {
      this.setData({
        state: false
      });
    } else {
      this.setData({
        state: true
      });
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

})