// pages/details/details.js
Page({
    data: {
        count:1,
        curentIndex:0,
        goodsDetail:{},
        hotList: [
            { "id": 1, "listPic": "https://api.mofun365.com:8888/images/goods/1555850845474.jpg", "goodsName": "微信小程序开发图解案例教程", "goodsPrice": 62.8 },
            { "id": 2, "listPic": "https://api.mofun365.com:8888/images/goods/1555851154057.jpg", "goodsName": "微信小程序开发全案精讲", "goodsPrice": 41.88 },
            { "id": 3, "listPic": "https://api.mofun365.com:8888/images/goods/1555851345937.jpg", "goodsName": "第一行代码 Java", "goodsPrice": 57.7 }
          ],
          spikeList: [
            { "id": 4, "listPic": "https://api.mofun365.com:8888/images/goods/1555851497575.jpg", "goodsName": "Android原理解析与开发指南", "goodsPrice": 35.99 },
            { "id": 5, "listPic": "https://api.mofun365.com:8888/images/goods/1555851661073.png", "goodsName": "响应式Web开发项目教程", "goodsPrice": 36.4 },
            { "id": 6, "listPic": "https://api.mofun365.com:8888/images/goods/1555851817322.jpg", "goodsName": "第一行代码 C语言", "goodsPrice": 41.99 }
          ]
          ,
          bestSellerList: [
            { "id": 7, "listPic": "https://api.mofun365.com:8888/images/goods/1555851965264.jpg", "goodsName": "前端HTML+CSS修炼之道", "goodsPrice": 57.7 },
            { "id": 8, "listPic": "https://api.mofun365.com:8888/images/goods/1555850845474.jpg", "goodsName": "微信小程序开发图解案例教程", "goodsPrice": 62.8 },
            { "id": 9, "listPic": "https://api.mofun365.com:8888/images/goods/1555851154057.jpg", "goodsName": "微信小程序开发全案精讲", "goodsPrice": 41.8 }
          ],

    },
    reduce(){
        var num=this.data.count
            num--
            this.setData({count:num})
            if(num<0){
                this.setData({count:0})
            }
    },
    increase(){
        var num=this.data.count
            num++
            this.setData({count:num})
    },
    setCurrent(e) {
        this.setData({
            currentIndex:e.target.dataset.type})
    },
    onLoad(option){
        var goodsDetail=wx.getStorageSync('goodsDetail')
        this.setData({goodsDetail:goodsDetail})
        console.log(this.data.goodsDetail)
    },
    buy(){
        wx.navigateTo({
          url: '/pages/order/order',
        })
    }
})