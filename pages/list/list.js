// pages/list/list.js
import { fetchData, starToArray } from "../../utils/utils.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    num:1,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    fetchData(url).then(res=>{
      //console.log(res.data.newChannelProducts.fineDiscount.activitySkus);
       this.processData(res.data.newChannelProducts.fineDiscount.activitySkus)
    })
  },
  scrollBottom(){
    if(this.data.num>3){
      return ;

    }
    let num = this.data.num +1;
    this.setData({
      num:num
    })
    wx.showLoading();
    fetchData(url).then(res=>{
      //console.log(res.data.newChannelProducts.fineDiscount.activitySkus);
      this.processData(res.data.newChannelProducts.fineDiscount.activitySkus)
    })
    wx.hideLoading();
  },
  processData(data){
    var arr = data;
    if(this.data.list.length>0){
      arr = this.data.list.concat(data)
    }
    this.setData({
      list:arr
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})