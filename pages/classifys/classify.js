var app = getApp();
Page({
  data: {
    left_tags:[
      { tagName:"头像",tagList:[]},
      { tagName:"表情",tagList:[]},
      { tagName:"风景建筑",tagList:[]},
      { tagName:"明星写真",tagList:[]},
      { tagName:"卡通动漫",tagList:[]},
      { tagName:"清新可爱",tagList:[]},
      { tagName:"文字控",tagList:[]},
      { tagName:"影视精选",tagList:[]},
      { tagName:"浪漫爱情",tagList:[]},
      { tagName:"美女车模",tagList:[]},
      { tagName:"体育竞技",tagList:[]},
      { tagName:"炫酷游戏",tagList:[]},
      { tagName:"世界名车",tagList:[]},
      { tagName:"时尚品牌",tagList:[]},
      { tagName:"节日节气",tagList:[]},
      { tagName:"创意设计",tagList:[]},
      { tagName:"动物萌宠",tagList:[]},
      { tagName:"花草植物",tagList:[]},
      { tagName:"神秘星座",tagList:[]},
      { tagName:"军事",tagList:[]},
      { tagName:"美食诱惑",tagList:[]},
      { tagName:"帅哥型男",tagList:[]},
      { tagName:"其他",tagList:[]},
    ],
    img_list:[
      { imgURL:"/images/avatar/1.png",text:"非主流头像"},
      { imgURL:"/images/avatar/1.png",text:"非主流头像"},
      { imgURL:"/images/avatar/1.png",text:"非主流头像"},
      { imgURL:"/images/avatar/1.png",text:"非主流头像"},
      { imgURL:"/images/avatar/1.png",text:"非主流头像"},
      { imgURL:"/images/avatar/1.png",text:"非主流头像"},
      { imgURL:"/images/avatar/1.png",text:"非主流头像"},
      { imgURL:"/images/avatar/1.png",text:"非主流头像"},
      { imgURL:"/images/avatar/1.png",text:"非主流头像"},
      { imgURL:"/images/avatar/1.png",text:"非主流头像"},
      { imgURL:"/images/avatar/1.png",text:"非主流头像"},
    ],
    currentTab: 0, //预设当前项的值
   
  },

  // 点击标题切换当前页时改变样式
  swichNav: function (e) {
    var cur = e.target.dataset.current;
    if (this.data.currentTaB == cur) { return false; }
    else {
      this.setData({
        currentTab: cur
      })
    }
    console.log(this.data.currentTab);
  },

  onLoad: function () {
    // var that = this;
    // //  高度自适应
    // wx.getSystemInfo({
    //   success: function (res) {
    //     var clientHeight = res.windowHeight,
    //       clientWidth = res.windowWidth,
    //       rpxR = 750 / clientWidth;
    //     var calc = clientHeight * rpxR - 180;
    //     console.log(calc)
    //     that.setData({
    //       winHeight: calc
    //     });
    //   }
    // });
  },
  footerTap: app.footerTap
})