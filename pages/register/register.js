// pages/register/register.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        namemessage:'请输入用户名',
        telmessage:'请输入手机号',
        mimamessage:'请输入密码',
        confirmmessage:'请确认密码',
        nichengmessage:'请输入昵称',
        userConfirm:null,
        userPassword:null,
        userTel:null,
        userPassword:null,
        nicheng:null,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
    },
    submit(e){
        var reg=/^1[3-8]\d{9}$/gi
        var user = e.detail.value
        var userName=user.userName
        var userTel=user.userTel 
        var userPassword=user.userPassword
        var userConfirm = user.userConfirm
        var nicheng=user.nicheng
        if(userName ==''){
            this.setData({namemessage:'用户名不能为空！'})
        }
        if(userTel ==''){
            this.setData({telmessage:'手机号不能为空!'})
        }
        if(userPassword ==''){
            this.setData({mimamessage:'密码不能为空!'})
        }
    
        if(userPassword != userConfirm){
            this.setData({confirmmessage:'两次密码不一致!'})
            this.setData({userConfirm:''})
            this.setData({userPassword:''})
        }
        if(nicheng ==''){
            this.setData({nichengmessage:'昵称不能为空!'})
        }
        if(!reg.test(userTel)){
            this.setData({userTel:''})
            this.setData({telmessage:'手机号格式错误!'})
        }
        if(nicheng !=''&&userPassword !=''&&userPassword == userConfirm&&userPassword !=''&&userTel !=''&&userName !=''){
            var reg=/^1[3-8]\d{9}$/gi
            if(reg.test(userTel)){ 
                wx.request({
                  url:  'https://api.mofun365.com:8888/api/user/register',
                  data:{
                      loginName:userName,
                      mobile:userTel,
                      loginPassword:userPassword,
                      confirmPassword:userConfirm,
                      nickName:nicheng,
                  },
                  success:(res)=>{
                    console.log(res)
                    if(res.data.code=='0000'){
                        console.log('success！')
                        wx.navigateTo({
                            url: '/pages/login/login',
                        }) 
                    }
                  },
                  fail:(res)=>{
                    console.log('fail')
                  }
                })
            }
            else{
                this.setData({userTel:''})
                this.setData({telmessage:'手机号格式错误!'})
            }
        }
    }
   
})