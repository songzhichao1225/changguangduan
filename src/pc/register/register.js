import React from 'react';
import './register.css';
import 'antd/dist/antd.css';
import {_register, _code} from '../../api';
import {
message,
Input,
Button,
Radio,
Modal,
Popover
} from 'antd';



class register extends React.Component {

state = {
equipment:1,//登录设备 0pc 1移动设备
Id:'',//推广员Id
name:'',//用户名
phone:'',//手机号
code:'',//验证码
password:'',//密码
passwordT:'',//确认密码
changeRadio:'false',//是否选中协议
visible:false,
textT:'获取验证码',
visibleName:false,
visiblePhone:false,
};

  changID=(e)=>{
    this.setState({Id:e.target.value})
  }
  changeName=(e)=>{
    
    if(/[\u4E00-\u9FA5]/g.test(e.target.value)){
      this.setState({visibleName:true})
    }else if(e.target.value===''){
      this.setState({visibleName:true})
    }else {
    this.setState({name:e.target.value,visibleName:false})
    }
  }
  changePhone=(e)=>{
    if(e.target.value===''){
      this.setState({visiblePhone:true})
    }else if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(e.target.value))){
      this.setState({visiblePhone:true})
    }else {
      console.log(666)
      this.setState({phone:e.target.value,visiblePhone:false})
    }
  }
  changeCode=(e)=>{
    this.setState({code:e.target.value})
  }
  changePassword=(e)=>{
    this.setState({password:e.target.value})
  }
  changePasswordT=(e)=>{
    this.setState({passwordT:e.target.value})
  }
  changeRadio=e=>{
    this.setState({changeRadio:e.target.checked})
  }

  async Ko(data){
    const res= await _register(data)
    console.log(res)
    if(res.data.code===2000){
      setTimeout( ()=> {
        this.setState({
          visible: true,
        });
      },1000)
      sessionStorage.setItem('uuid', res.data.data.venueloginuuid);
      sessionStorage.setItem('venue_token', res.data.data.token);
      sessionStorage.setItem('name', res.data.data.name);
    }else{
      message.error(res.data.msg)
    }
    
    
  }

  async nacode(data){
    const res= await _code(data)
    console.log(res)
  }

  naCode=()=>{
    if(this.state.visiblePhone===true){
      message.error('请输入正确的手机号')
    }else{
      let num=60
      const timer=setInterval( ()=> {
        this.setState({textT:num--})
        if(num===-1){
          clearInterval(timer)
           this.setState({textT:'获取验证码'})
        }
      },1000)
      this.nacode({"mobile":this.state.phone,"type":'venueregister'})
    }
  }
  
  showModal=e=>{
   if(this.state.code===''){
      message.error('请输入验证码')
    }else if(this.state.password===''){
      message.error('请输入密码')
    }else if(this.state.passwordT===''){
      message.error('请再次输入密码')
    }else if(this.state.password!==this.state.passwordT){
      message.error('两次密码输入不一致')
    }else if(this.state.changeRadio!==true){
      message.error('请勾选阅读协议')
    }else{
      const {Id,name,phone,code,password}=this.state
      const data={name:name,phone:phone,pass:password,promoteid:Id,code:code,Logintype:'pc'}
      this.Ko(data)
    }
  
  }



  render() {
  return (
  <div className="register">
    <div className="header">
      <div className="heCenter">
        <img className="logo" src={require("../../assets/tiaozhanicon.png")} alt="6666" />
        <span className="title">北京甲乙电子商务有限公司</span>
      </div>
      <div className="content">
        <div className="nav">
          <div>1.填写注册信息</div>
          <div>2.完善场馆信息</div>
          <div>3.等待审核</div>
          <div>4.审核成功</div>
        </div>

        <div className="authentication">
          <span className="title">用户注册</span>
              <div className="son">
                <span>推广员ID:</span>
                <Input  maxLength={6} onChange={this.changID} className="phone" />
              </div>
       
               <div className="son">
                <span className="xing">*</span> <span>用户名:</span>
                <Popover
                    content='用户名不能输入汉字或为空'
                    visible={this.state.visibleName}
                  >
                   <Input type="text" maxLength={8} onBlur={this.changeName} className="phone" />
                  </Popover>
              </div>
        
              <div className="son">
                <span className="xing">*</span> <span>操作员手机号:</span>
                <Popover
                    content='请输入正确的手机号'
                    visible={this.state.visiblePhone}
                  >
                   <Input maxLength={11} onBlur={this.changePhone} className="phone" />
                  </Popover>
              </div>
           
              <div className="son">
                <span className="xing">*</span> <span>验证码:</span>
                <Button className="huoBtn" onClick={this.naCode}>{this.state.textT}</Button>
                <Input  maxLength={6} onChange={this.changeCode} className="phone code" />
              </div>
           
                <div className="son">
                  <span className="xing">*</span> <span>密码:</span>
                  <Input.Password maxLength={8} onChange={this.changePassword}  className="phone" />
                </div>
            
                  <div className="son">
                    <span className="xing">*</span> <span>确认密码:</span>
                    <Input.Password maxLength={8}  onChange={this.changePasswordT}   className="phone" />
                  </div>

                  <div className="agreement"><Radio onChange={this.changeRadio}><span>我已阅读并同意</span><span className="color">《用户协议》</span></Radio></div>
             
                <Button type="submit" className="submint" onClick={this.showModal}>注册</Button>
          
                <div className="Existing">  已有账号 <a href='#/'><span>请登录</span></a></div>
                <Modal
          title="注册结果"
          cancelText=''
          closable={false}
          footer={null}
          visible={this.state.visible}
          onOk={this.handleOk}
          width={800}
          
        >
          <img className="logoRegister" src={require("../../assets/icon_pc.png")} alt="ico"/>
           <span className="modelTitle">恭喜您，注册成功</span>
           <span className="modelPhone">用户名:{this.state.name}</span>
            <Button className="modelBtn"><a href="#/perfect">下一步</a></Button>

         
        </Modal>
        </div>
      </div>


    </div>

  </div>
  );
  }
  }

  export default register;