// pages/denglu/denglu.js
var timer
Page({
    data: {
        currentIndex:0,
        idmessage:'请输入用户名',
        pwdmessage:'请输入密码',
        telmessage:'仅支持中国大陆手机号',
        yzmessage:'请输入验证码',
        second:60,
        flag:false,
        yzma:null,
        tel:null,
        type:0,
    },

    onLoad(options) {

    },
    setCurrent(e) {
        this.setData({currentIndex:e.target.dataset.type})
        this.setData({type:e.currentTarget.dataset.type})
    },
    onChange(e){
        this.setData({
            currentIndex: e.detail.current
        })
    },
    getValid(){
        this.setData({flag:true})
        clearInterval(timer)
        timer=setInterval(() => {
            var num=this.data.second
            num--
            this.setData({second:num})
            if (num <= 0) {
                this.setData({
                  second: 60,
                  flag: false,
                  yzma:null,
                })
            }
        }, 1000);
        var tel=this.data.tel
        console.log(tel)
        wx.request({
            url:  'https://api.mofun365.com:8888/api/user/getVerifyCode',
            data:{
                mobile:tel,
            },
            success:(res)=>{
              console.log(res)
              this.setData({yzma:res.data.data})
            },
            fail:(res)=>{
              console.log('fail')
            }
        })
    },
    input1(e){
        var tel=e.detail.value
        this.setData({tel:tel})
    },
    submit(e){
        console
        var type=this.data.currentIndex
        var user = e.detail.value
        var name=user.name
        var pwd=user.pwd
        var tel=user.tel
        var yanzheng = this.data.yzma
        if(name ==''){
            this.setData({idmessage:'用户名不能为空！'})
        }
        if(tel ==''){
            this.setData({telmessage:'手机号不能为空!'})
        }
        if(pwd ==''){
            this.setData({pwdmessage:'密码不能为空!'})
        }
        if((name!=''&&pwd!='')||(yanzheng!=''&&tel!='')){
        wx.login({
            success:(res)=>{
            console.log(res)
            if(res.code){
                wx.request({
                    url:  'https://api.mofun365.com:8888/api/user/login',
                    data:{
                        loginName:name,
                        mobile:tel,
                        loginPassword:pwd,
                        verifyCode:yanzheng,
                        loginType:type,
                        code:res.code,
                    },
                    success:(res)=>{
                        console.log(res.data.data)
                        if(res.data.code=='0000'){
                            /*保存登录成功用户信息 */
                        wx.setStorageSync('user', res.data.data.user)
                        wx.switchTab({
                            url: '/pages/index/index',
                        }) 
                        }else{
                            console.log('登陆失败')
                        }
                    },
                    fail:res=>{
                        console.log('登陆失败')
                    }
                })
            }
            },
            fail:(res)=>{
              console.log('fail')
            },
        });
        }
    },
    toRegister(){
        wx.navigateTo({
            url: '/pages/register/register',
        }) 
    }
})