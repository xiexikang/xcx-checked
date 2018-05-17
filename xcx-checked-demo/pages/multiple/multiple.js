// pages/multiple/multiple.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { value: '曾小贤', checked: 'true'},
      { value: '胡一菲', checked: 'true' },
      { value: '吕子乔', checked: '' },
      { value: '陈美嘉', checked: '' },
      { value: '陆展博', checked: '' },
      { value: '丽莎蓉', checked: '' },
      { value: '关谷神奇', checked: '' },
    ],
    arr: [], //标签数组：用来存储选中的值
  },

  checkLabs: function (e) {
    var index = e.currentTarget.dataset.index,
      value = e.currentTarget.dataset.value,
      items = this.data.items,
      arr = this.data.arr,
      val = items[index].checked, //点击前的值
      limitNum = 5,
      curNum = 0; //已选择数量

    //选中累加
    for (var i in items) {
      if (items[i].checked) {
        curNum += 1;
      }
    }

    if (!val) {
      if (curNum == limitNum) {
        wx.showModal({
          content: '选择数量不能超过' + limitNum + '个',
          showCancel: false,
        })
        return;
      }
      arr.push(value);
    } else {
      for (var i in arr) {
        if (arr[i] == value) {
          arr.splice(i, 1);
        }
      }

    }
    items[index].checked = !val;

    this.setData({
      items: items,
      arr: arr
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //已选中的时候
    var that = this,
        arr = that.data.arr,
        items = that.data.items
    for (var i = 0; i < items.length; i++) {
      if(items[i].checked) {
        var value = items[i].value;
        arr.push(value);
        
        this.setData({
          items: items,
          arr: arr
        })  
      }
    }
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