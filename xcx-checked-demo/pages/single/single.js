// pages/single/single.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { id: 0, value: '曾小贤', checked: '' },
      { id: 1, value: '胡一菲', checked: '' },
      { id: 2, value: '吕子乔', checked: '' },
      { id: 3, value: '陈美嘉', checked: '' },
      { id: 4, value: '陆展博', checked: '' },
      { id: 5, value: '丽莎蓉', checked: '' },
      { id: 6, value: '关谷神奇', checked: '' },
      { id: 7, value: '唐悠悠', checked: '' },
    ],
    selVal: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //默认选中第一个
    this.data.items[0].checked = true;
    this.setData({
      items: this.data.items,
      selVal: this.data.items[0].value,
    })
  },

  // 单选操作
  selSingle: function (e) {
    var that = this,
        this_checked = e.currentTarget.dataset.id,
        items = this.data.items,
        selVal = this.data.selVal;
    for (var i = 0; i < items.length; i++) {
      //选中当前
      if (items[i].id == this_checked) {
        items[i].checked = true;
        var selVal = items[i].value
        that.setData({
          selVal: selVal
        })
      }
      else {
        //其他未选中
        items[i].checked = false;
      }
    }
    //
    that.setData({
      items: items,
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