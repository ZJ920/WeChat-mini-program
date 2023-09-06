// pages/address/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addresses:[],
  },
  onLoad(options) {
    this.loadAddress()
  },
  //加载当前用户的所有的地址
  loadAddress(){
    var user = wx.getStorageSync('user')
    wx.request({
      url: 'https://api.mofun365.com:8888/api/address/selectAddressByUserId',
      data:{
        userId:user.id
      },
      success:res => {
          console.log(res)
        if(res.data.code == '0000'){
            wx.setStorageSync('address', res.data.data)
            this.setData({addresses:res.data.data})
            console.log(this.data.addresses)
        }
      }
    })
  },
  addAddress(){
      wx.navigateTo({
        url: '/pages/addressManage/addressManage',
      })
  },
  selectaddress(e){
      console.log('index',e.currentTarget.dataset.type)
        wx.navigateTo({
              url: '/pages/order/order?type='+e.currentTarget.dataset.type,
        })
  },
  updaddress(e){
    console.log('index',e.currentTarget.dataset.type)
    wx.navigateTo({
        
        url: '/pages/updaddress/updaddress?type='+e.currentTarget.dataset.type,
      })
  }
})