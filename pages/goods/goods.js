// pages/goods/goods.js
Page({
    data: {
        currentIndex:0,
        "dataAll":[]
    },

    onLoad(options) {
        console.log(options)
        var type =options.type
        this.setData({currentIndex:type})
        this.getDate(type)
    },
    getDate(type){
        console.log(type)
        wx.request({
            url: 'https://api.mofun365.com:8888/api/goods/getGoodsListByType?type='+type,
            success:(res)=>{
                var res= res.data.data
                this.setData({
                "dataAll":res
                })
            }
          })
    },
    setCurrent(e) {
        this.setData({
            currentIndex:e.target.dataset.type})
        this.getDate(this.data.currentIndex)
    },
    toSearch(){
        wx.navigateTo({
          url: '/pages/search/search',
        })
    },
 onChange(e){
    this.setData({
        currentIndex: e.detail.current
    })
    this.getDate(this.data.currentIndex)
 }
})