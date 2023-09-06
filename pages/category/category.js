// pages/category/category.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        category:[],
        children:[],
        curNav: 0,
        curIndex: 0,
    },
    onLoad(options) {
        wx.request({
          url: 'https://api.mofun365.com:8888/api/category/getCategoryList',
          success:(res)=>{
              console.log(res.data.data)
              this.setData({category:res.data.data})
          }
        })
    },
    click(e){
        var index =parseInt( e.target.dataset.index);
        console.log(index)
        this.setData({curIndex:index})
    }
})