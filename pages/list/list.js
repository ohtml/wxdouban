// pages/list/list.js
import { fetchData, starToArray } from "../../utils/utils.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    fetchData(url).then(res=>{
      //console.log(res.data.newChannelProducts.fineDiscount.activitySkus);
      this.setData({
        list:res.data.newChannelProducts.fineDiscount.activitySkus
      })
    })
  },
  scrollBottom(){
    console.log(this.data.list)
    console.log("333")
    
    fetchData(url).then(res=>{
      //console.log(res.data.newChannelProducts.fineDiscount.activitySkus);
      let arr = res.data.newChannelProducts.fineDiscount.activitySkus;
      if(this.data.list!=""){
           this.data.list.concat(arr)
      }
      this.setData({
        list:arr
      })
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
