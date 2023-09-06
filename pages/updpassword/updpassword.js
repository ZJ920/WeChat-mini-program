// pages/updpassword/updpassword.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        orpwdmessage:'请输入原密码',
        newpwdmessage:'请输入新密码',
        confirmmessage:'请输入确认密码',
        np:null,
        cp:null,
    },
    remove(){
        wx.removeStorage({
          key: 'user',
          success:res=>{
              wx.reLaunch({
                url:'/pages/index/index',
              })
          }
        })
    },
    submit(e){
        var user = e.detail.value
        var orpwd=user.orpwd
        var newpwd=user.newpwd
        var confirmpwd=user.confirmpwd
        if(orpwd ==''){
            this.setData({orpwdmessage:'原密码不能为空！'})
        }
        if(newpwd ==''){
            this.setData({newpwdmessage:'新密码不能为空!'})
        }
        if(confirmpwd != newpwd){
            console.log(confirmpwd)
            console.log(newpwd)
            this.setData({confirmmessage:'两次密码不一致!'})
            this.setData({np:''})
            this.setData({cp:''})
        }
        if(orpwd !=''&&newpwd !=''&&confirmpwd == newpwd&&confirmpwd !=''){
            var user=wx.getStorageSync('user')
            wx.request({
              url: 'https://api.mofun365.com:8888/api/user/updatePwd',
              data:{
                  userId:user.id,
                  oldPwd:orpwd,
                  newPwd:newpwd,
              },
              success:res=>{
                console.log(res.data.data)
                  if(res.data.code=='0000'){
                      wx.showToast({
                          title:'修改成功',
                          duration:2000,
                      })
                    setTimeout(()=>{
                        this.remove();
                        wx.switchTab({
                            url: '/pages/me/me',
                          })
                    },1000)
                  }
              },
              fail:res=>{
                console.log('修改失败')
            }
            })
        }
    }
   
})