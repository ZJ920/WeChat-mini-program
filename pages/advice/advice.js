// pages/advice/advice.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    submit(e){
        if(e.detail.value.txtAdvice ==''){
            wx.showModal({
                title:'提示',
                content: '请填写您的意见或建议',
              success:res=>{
                  console.log(res)
              }
            })
        }else{
            var user=wx.getStorageSync('user')
            wx.request({
              url: 'https://api.mofun365.com:8888/api/user/saveOpinion',
              data:{
                  userId:user.id,
                  content:'e.detail.value.txtAdvice'
              },
              success:res=>{
                  if(res.data.code=='0000'){
                      wx.showToast({
                          title:'保存成功',
                          duration:3000,
                      })
                    setTimeout(()=>{
                        wx.switchTab({
                            url: '/pages/me/me',
                          })
                    },2000)
                  }
              }
            })
        }
    }
})