// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    "hotList" : [],
    "spikeList": [],
    "bestSellerList": []
  },
  onLoad(){
      wx.request({
        url: 'https://api.mofun365.com:8888/api/goods/getHomeGoodsList',
        success:(res)=>{
            console.log(res.data.data)
            this.setData({
                "hotList":res.data.data.rmjs,
                "spikeList":res.data.data.mssk,
                "bestSellerList":res.data.data.cxsj
            })
        }
      })
  },
 toSearch(){
     wx.navigateTo({
       url: '/pages/search/search',
     })
 },
 toGoods(e){
    console.log(e.target.dataset.type)
    wx.navigateTo({
      url: '/pages/goods/goods?type= '+e.target.dataset.type,
    })
},
toDetails(e){
    var bookId=e.currentTarget.dataset.bookid
    console.log(bookId)
    var user =wx.getStorageSync('user')
    if(user){
        wx.request({
        url: 'https://api.mofun365.com:8888/api/goods/getGoodsDetail?goodsId='+bookId,
        success:res=>{
        console.log('details:',res)
        if(res.data.code =='0000'){
            wx.setStorageSync('goodsDetail', res.data.data)
            wx.navigateTo({
              url: '/pages/details/details',
            })
        }

    }
      })
    }else{
        wx.navigateTo({
            url: '/pages/login/login',
          })
    }
}
})
