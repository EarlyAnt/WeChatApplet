// pages/pictureDetail/pictureDetail.js
var pageData = require("../data/pictureData.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    useData: "",
    articleid: "",
    storaged: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //console.log(options.id);
    this.setData({
      useData: pageData.datas[options.id]
    });

    //wx.clearStorageSync();

    this.setData({//设置当前文章ID
      articleid: options.id
    });

    var articlesStorage = wx.getStorageSync("articlesStorage");
    if (!articlesStorage) {//如果之前没有存储过数据，先初始化数据(数组的第一个元素为false)
      var articlesStorage = {};
      articlesStorage[this.data.articleid] = false;
      wx.setStorageSync("articlesStorage", articlesStorage);
    }

    this.setData({//设置是否以收藏
      storaged: articlesStorage[this.data.articleid]
    });

    console.log("articlesStorage_" + this.data.articleid + ", " + this.data.storaged);
  },

  storageTap: function(event) {//详情页点击收藏按钮时，未收藏则收藏，已收藏则取消
    var articlesStorage = wx.getStorageSync("articlesStorage");
    articlesStorage[this.data.articleid] = !articlesStorage[this.data.articleid];
    wx.setStorageSync("articlesStorage", articlesStorage);

    this.setData({//设置数据，驱动页面更新
      storaged: articlesStorage[this.data.articleid]
    });
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