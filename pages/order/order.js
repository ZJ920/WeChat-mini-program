// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address:'请选择收货地址',
    goodsDetai:{},
    count:'1',
    addresses:[],
    type:'-1',
    index:0,
  },
  selectAddress(){
    wx.navigateTo({
      url: '/pages/address/address',
    })
  },
  onLoad(option){
     console.log(option.type)
     var index =parseInt(option.type);
     this.setData({type:option.type});
     this.setData({index:index})
    var goodsDetail=wx.getStorageSync('goodsDetail')
    this.setData({goodsDetail:goodsDetail})
    console.log(this.data.goodsDetail)
    var address=wx.getStorageSync('address')
    console.log()
    this.setData({addresses:address[index]})
    console.log(this.data.addresses)
  },
})