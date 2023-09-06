// pages/me/me.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        money:'0.00元',
        userName:'',
        flag:false,

    },
    onShow(options) {
        var user =wx.getStorageSync('user')
        if(user){
            this.setData({userName:user.loginName,flag:true})
        }else{
            this.setData({userName:'',flag:false})
        }
    },
    toLogin(){
        wx.navigateTo({
            url: '/pages/login/login',
        }) 
    },
    remove(){
        wx.removeStorage({
          key: 'user',
          success:res=>{
              wx.reLaunch({
                url:'/pages/me/me',
              })
          }
        })
    },
    advice(){
        var user =wx.getStorageSync('user')
        if(user){
        wx.navigateTo({
          url: '/pages/advice/advice',
        })
        }else{
            wx.navigateTo({
              url: '/pages/login/login',
            })
        }
    },
    updPassword(){
        var user =wx.getStorageSync('user')
        if(user){
        wx.navigateTo({
          url: '/pages/updpassword/updpassword',
        })
        }else{
            wx.navigateTo({
              url: '/pages/login/login',
            })
        }
    }
})