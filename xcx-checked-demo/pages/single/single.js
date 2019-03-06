// pages/single/single.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { value: '曾小贤', checked: '' },
      { value: '胡一菲', checked: '' },
      { value: '吕子乔', checked: '' },
      { value: '陈美嘉', checked: '' },
      { value: '陆展博', checked: '' },
      { value: '丽莎蓉', checked: '' },
      { value: '关谷神奇', checked: '' },
      { value: '唐悠悠', checked: '' },
    ],
    selVal: '' //选中的值
  },


  // 单选操作
  selSingle: function (e) {
    var that = this,
        index = e.currentTarget.dataset.index,
        items = that.data.items,
        selVal = that.data.selVal;
    items.forEach(function (v, i) {
      if (index == i) {
        items[index].checked = true;
        var selVal = items[index].value
        that.setData({
          selVal: selVal
        })
      }
      else {
        items[i].checked = false;
      }
    })
    that.setData({
      items: items,
    })
  },

  //默认选中第一个
  defaultSelected() {
    var that = this;
    that.data.items[0].checked = true;
    that.setData({
      items: that.data.items,
      selVal: that.data.items[0].value,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.defaultSelected();

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