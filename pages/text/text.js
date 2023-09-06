// pages/text/text.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
    "dataAll":[]
    },
    to1(e){
        wx.request({
          url: 'https://api.mofun365.com:8888/api/goods/getGoodsDetail',
          data:{
              goodsId:0,
          },
          success:res=>{
            console.log(res.data.data)
            var res= res.data.data
                this.setData({
                "dataAll":res
            })
            console.log(this.data.dataAll)
          }
        })
    }
})