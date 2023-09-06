Page({

    /**
     * 页面的初始数据
     */
    data: {
      region:['江苏省','徐州市','云龙区'],
      address:'',
      namemessage:'收货人姓名',
      telmessage:'联系您的电话',
      selectAddress:"选择收货地址",
      housemessage:'请输入楼号门牌号详细信息',
      gender:0,
      index:0,
      addresses:[],
    },
    bandleChange(e){
      this.setData({
          gender: e.detail.value
      });
    },
    setRegion(e){
      console.log(e)
      this.setData({region:e.detail.value})
    },
    chooseAddress(){
      wx.chooseLocation({
        success: (result) => {
          console.log(result)
          this.setData({address:result.address})
        }
      })
    },
    onLoad(option){
        var index =parseInt(option.type);
        this.setData({index:index})
        console.log(index)
        var address=wx.getStorageSync('address')
        this.setData({addresses:address[index]})
    },
    submit(e){
      var user = wx.getStorageSync('user')
      var personName=e.detail.value.personName
      var contactNumber=e.detail.value.contactNumber
      var city=e.detail.value.pckRegion
      var address=e.detail.value.txtAddress
      var houseNumber=e.detail.value.houseNumber
      if(personName ==''){
          this.setData({namemessage:'收货人姓名不能为空！'})
      }
      if(contactNumber ==''){
          this.setData({telmessage:'电话不能为空!'})
      }
      if(address ==''){
          this.setData({selectAddress:"收货地址不能为空！"})
      }
      if(houseNumber ==''){
          this.setData({housemessage:'门牌号不能为空！'})
      }
      if(personName !=''&&contactNumber !=''&&address!=''&&houseNumber !=''){
              wx.request({
                url:  'https://api.mofun365.com:8888/api/address/updateAddress',
                data:{
                  userId:user.id,
                  personName:personName,
                  gender: this.data.gender,
                  contactNumber:contactNumber,
                  address:address,
                  houseNumber:houseNumber,
                  city:city,         
                  addressId:this.data.addresses.id,
                },
                success:(res)=>{
                  console.log(res)
                  if(res.data.code=='0000'){
                      console.log('success！')
                      wx.navigateTo({
                          url: '/pages/address/address',
                      }) 
                  }
                },
                fail:(res)=>{
                  console.log('fail')
                }
              })
          }
      }
  })