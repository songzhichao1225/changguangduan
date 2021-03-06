import React from 'react';
import './register.css';
import 'antd/dist/antd.css';
import { _register, _code, getPromoteName, getIsUserName } from '../../api';

import { CloseCircleOutlined } from '@ant-design/icons';
import {
  message,
  Input,
  Button,
  Checkbox,
  Modal,
} from 'antd';



class register extends React.Component {

  state = {

    Id: '',//推广员Id
    name: '',//用户名
    phone: '',//手机号
    code: '',//验证码
    password: '',//密码
    passwordT: '',//确认密码
    changeRadio: false,//是否选中协议
    visible: false,
    textT: '获取验证码',
    visibleName: false,
    visiblePhone: false,
    idName: '',
    qipao: true,
    promotid: '',
    text: '请输入字母+数字',
    textTwo: '请输入正确的手机号',
    kod: '',
    kodTwo: '',
    kodThree: '',
    cahngkoopd: '',
    chaphong: '',
    ko:false,
    koTwo:false,
  };

  changID = (e) => {
    this.setState({ Id: e.target.value })
  }




  async getIsUserName(data) {
    const res = await getIsUserName(data)
    if (res.data.code !== 2000) {
      this.setState({ kodTwo: res.data.msg })
      this.setState({ name: '' })
    } else {
      this.setState({ name: data.name })
    }
  }


  changeName = e => {
   if(e.target.value.length<4){
    this.setState({ kodTwo: '用户名至少输入4位', })
   }else if (/[\u4E00-\u9FA5]/g.test(e.target.value)) {
      this.setState({ kodTwo: '用户名只能包含数字、字母、数字+字母' })
    }else if( /[^a-zA-Z0-9]/g.test(e.target.value)){
      this.setState({ kodTwo: '用户名只能包含数字、字母、数字+字母' })
    } else if (this.state.name !== '') {
      this.getIsUserName({ name: e.target.value })
      this.setState({ name: e.target.value, kodTwo: '' })
    }
  }
  changePhone = (e) => {
    if (e.target.value.length === 11) {
      this.setState({ visiblePhone: false, phone: e.target.value, kodThree: '' })
    } else if (this.state.phone !== '') {
      this.setState({ kodThree: '请输入正确手机号' })
      this.setState({ visiblePhone: true })
    }else if(this.state.phone===''){
      this.setState({ kodThree: '请输入手机号' })
      this.setState({ visiblePhone: true })
    }
  }
  changeCode = (e) => {
    this.setState({ code: e.target.value })
  }
  changePassword = (e) => {
    
    this.setState({ password: e.target.value })
  }
  changePasswordT = (e) => {
    this.setState({ passwordT: e.target.value })
  }
  changeRadio = e => {
    this.setState({ changeRadio: !this.state.changeRadio })
  }

  async Ko(data) {
    const res = await _register(data)
    if (res.data.code === 2000) {
      setTimeout(() => {
        this.setState({
          visible: true,
        });
      }, 1000)
      sessionStorage.setItem('uuid', res.data.data.venueloginuuid);
      sessionStorage.setItem('venue_token', res.data.data.token);
      sessionStorage.setItem('name', res.data.data.name);
      sessionStorage.removeItem('register')
    } else {
      message.error(res.data.msg)
    }


  }

  async nacode(data) {
    const res = await _code(data)
    if (res.data.code === 4007) {
      this.setState({ visiblePhone: true, textTwo: res.data.msg })
    } else if (res.data.code === 2000) {
      let num = 60
      const timer = setInterval(() => {
        this.setState({ textT: num-- })
        if (num === -1) {
          clearInterval(timer)
          this.setState({ textT: '获取验证码' })
        }
      }, 1000)
    } else {
      message.error(res.data.msg)
    }
  }

  naCode = () => {
    if (this.state.visiblePhone === true) {
      message.error('请输入正确的手机号')
    } else {
      this.nacode({ "mobile": this.state.phone, "type": 'venueregister' })
    }
  }

  showModal = e => {
    if (this.state.name === '') {
      message.error('请输入用户名')
    }else if (/[\u4E00-\u9FA5]/g.test(this.state.name)) {
      message.error('用户名只能包含数字、字母、数字+字母')
    }else if( /[^a-zA-Z0-9]/g.test(this.state.name)){
      message.error('用户名只能包含数字、字母、数字+字母')
    } else if (this.state.code === '') {
      message.error('请输入验证码')
    } else if (this.state.password === '') {
      message.error('请输入密码')
    } else if( /^[^\s]*$/.test(this.state.password)===false){
        message.error('密码输入有误')
    }else if (this.state.passwordT === '') {
      message.error('请再次输入密码')
    }else if( /^[^\s]*$/.test(this.state.passwordT)===false){
      message.error('密码输入有误')
  } else if (this.state.password !== this.state.passwordT) {
      message.error('两次密码输入不一致')
    } else if (this.state.changeRadio !== true) {
      message.error('请勾选阅读协议')
    } else {
      let { Id, name, phone, code, password } = this.state
      if (this.state.kod !== '') {
        let data = { name: name, phone: phone, pass: password, promoteid: '', code: code, Logintype: 'pc' }
        this.Ko(data)
      } else {
        let data = { name: name, phone: phone, pass: password, promoteid: Id, code: code, Logintype: 'pc' }
        this.Ko(data)
      }
    }
  }
  blurId = e => {
    if(e.target.value!==''){
      this.getPromoteName({ promotid: e.target.value })
    }
  }
  async getPromoteName(data) {
    const res = await getPromoteName(data)
    if (res.data.code === 2000) {
      this.setState({ idName: res.data.data.promotname, kod: '' })
    } else if (res.data.code !== 4001) {

      this.setState({ kod: res.data.msg,Id:'' })
    } else {
      this.setState({ idName: '没有推广员？', kod: '' })
    }
  }
  onCancel = e => {
    this.setState({ Id: '', idName: '' })
  }
  visibleName = e => {
    if (e !== '') {
      this.setState({ visibleName: false })
    }
  }
  visiblePhone = e => {
    if(e.target.value===''){
      this.setState({ phone:'',visiblePhone:false })

    }
    this.setState({ phone: e.target.value })
 
  }
  cahngkoopd = e => {
    if (e.target.value.indexOf('①') !== -1) {
      this.setState({ name: e.target.value.slice(0, e.target.value.length - 1) })
    } else if (e.target.value.indexOf('②') !== -1) {
      this.setState({ name: e.target.value.slice(0, e.target.value.length - 1) })
    } else if (e.target.value.indexOf('③') !== -1) {
      this.setState({ name: e.target.value.slice(0, e.target.value.length - 1) })
    } else if (e.target.value.indexOf('④') !== -1) {
      this.setState({ name: e.target.value.slice(0, e.target.value.length - 1) })
    } else if (e.target.value.indexOf('⑤') !== -1) {
      this.setState({ name: e.target.value.slice(0, e.target.value.length - 1) })
    } else if (e.target.value.indexOf('⑥') !== -1) {
      this.setState({ name: e.target.value.slice(0, e.target.value.length - 1) })
    } else if (e.target.value.indexOf('⑦') !== -1) {
      this.setState({ name: e.target.value.slice(0, e.target.value.length - 1) })
    } else if (e.target.value.indexOf('⑧') !== -1) {
      this.setState({ name: e.target.value.slice(0, e.target.value.length - 1) })
    } else if (e.target.value.indexOf('⑨') !== -1) {
      this.setState({ name: e.target.value.slice(0, e.target.value.length - 1) })
    }else if (e.target.value.indexOf(' ') !== -1) {
      this.setState({ name: e.target.value.slice(0, e.target.value.length - 1) })
    } else {
      this.setState({ name: e.target.value })
      if (e.target.value === '') {
        this.setState({ kodTwo: '' })
      }
    }
  }
  
  onfoucs=()=>{
    this.setState({ko:true})
  }
  onfoucsTwo=()=>{
    this.setState({koTwo:true})
  }
  componentDidMount(){
    if(sessionStorage.getItem('register')!==null){
      let h=JSON.parse(sessionStorage.getItem('register'))
      this.setState({
        Id:h.Id,
        name:h.name,
        phone:h.phone,
        code:h.code,
        password:h.password,
        passwordT:h.passwordT,
        changeRadio:h.changeRadio,
        idName:h.idName
      })
    }
    
    
    
    this.setState({BlurOne:'text',BlurOneTwo:'text'})
  }
  
  BlurOne=()=>{
    this.setState({BlurOne:'password'})
  }
  BlurOneTwo=()=>{
    this.setState({BlurOneTwo:'password'})
  }
  textOne=()=>{
    this.setState({BlurOne:'text'})
  }
  textOneTwo=()=>{
    this.setState({BlurOne:'password'})
  }
  textTwo=()=>{
    this.setState({BlurOneTwo:'text'})
  }
  textTwoTwo=()=>{
    this.setState({BlurOneTwo:'password'})
  }
  FOne=()=>{
      if(this.state.code===''){
        this.setState({code:''})
      }else{
        this.setState({code:this.state.code})
      }
  }
  FTwo=()=>{
    if(this.state.password===''){
         this.setState({password:''})
    }else{
      this.setState({password:this.state.password})
    }
  }
  FTree=()=>{
    if(this.state.passwordT===''){
         this.setState({passwordT:''})
    }else{
      this.setState({passwordT:this.state.passwordT})
    }
  }
 
  paste=()=>{
    return false
  }
  Agreement=()=>{
    this.getPromoteName({ promotid: this.state.Id })
    setTimeout(()=>{
      let {Id,name,phone,code,password,passwordT,changeRadio,idName}=this.state
      let data={
        Id:Id,
        name:name,
        phone:phone,
        code:code,
        password:password,
        passwordT:passwordT,
        changeRadio:changeRadio,
        idName:idName
      }
      let h=JSON.stringify(data)
      sessionStorage.setItem('register',h)
      this.props.history.push('/Agreement')
    },1000)
    
  }

  render() {
    return (
      <div className="register">
        <div className="header">
          <div className="heCenter">
            <img className="logo" src={require("../../assets/tiaozhanicon.png")} style={{ width: 53, height: 53, marginLeft: 45, marginTop: 13.5 }} alt="6666" />
            <span className="title">北京甲乙电子商务有限公司</span>
          </div>
          <div className="content">
            <div className="nav">
              <div><span>1.填写注册信息</span><img src={require("../../assets/oneline.png")} alt='5' /></div>
              <div><span>2.完善场馆信息</span><img src={require("../../assets/twoline.png")} alt='5' /></div>
              <div><span>3.等待审核</span><img src={require("../../assets/twoline.png")} alt='5' /></div>
              <div><span>4.审核成功</span><img src={require("../../assets/twoline.png")} alt='5' /></div>
            </div>
           <form>
            <div className="authentication">
              <span className="title">用户注册</span>
              <div className="son">
                <span>推</span><span style={{paddingLeft:'3px'}}>广</span><span style={{paddingLeft:'3px'}}>员</span><span style={{paddingLeft:'3px'}}>ID:</span>
                <Input maxLength={6} onChange={this.changID} value={this.state.Id} placeholder="选填" onBlur={this.blurId} className="phone" />
                <span className="rightWaning" style={this.state.kod !== '' ? {} : { display: 'none' }}><CloseCircleOutlined />{this.state.kod}，没有可不填</span>
              </div>

              <div className="son">
                <span className="xing">*</span> <span>用</span><span style={{paddingLeft:'6px'}}>户</span><span style={{paddingLeft:'6px'}}>名:</span>
                <Input type="text" onBlur={this.changeName} onChange={this.cahngkoopd} maxLength={15} value={this.state.name} placeholder="用户名只能包含数字、字母、数字+字母" className="phone" />
                <span className="rightWaning" style={this.state.kodTwo !== '' ? {} : { display: 'none' }}><CloseCircleOutlined />{this.state.kodTwo}</span>
              </div>

              <div className="son">
                <span className="xing">*</span> <span>手</span><span style={{paddingLeft:'6px'}}>机</span><span style={{paddingLeft:'6px'}}>号:</span>
                <Input maxLength={11} onBlur={this.changePhone} onChange={this.visiblePhone} value={this.state.phone} placeholder="操作员手机号" className="phone" />
                <span className="rightWaning" style={this.state.kodThree !== '' ? {} : { display: 'none' }}><CloseCircleOutlined />{this.state.kodThree}</span>
              </div>

              <div className="son">
                <span className="xing">*</span> <span>验</span><span style={{paddingLeft:'6px'}}>证</span><span style={{paddingLeft:'6px'}}>码:</span>
                <Button className="huoBtn" onClick={this.state.textT==='获取验证码'?this.naCode:''}>{this.state.textT}</Button>
                <Input maxLength={6} type="text"  placeholder="请输入验证码" onFocus={this.FOne} defaultValue={this.state.code}  value={this.state.code} onChange={this.changeCode} className="phone code" />
              </div>

              <div className="son" style={{opacity:0,position:'absolute'}}>
                <Input maxLength={6} type="text"  className="phone code" />
              </div>

              <div className="son" style={{opacity:0,position:'absolute'}}>
            
                <Input maxLength={6} type="password"  className="phone code" />
              </div>
             

              
              <div className="son">
                <span className="xing" style={{marginLeft:"2px"}}>*</span> <span>密</span><span style={{paddingLeft:'25px'}}>码:</span>
                <Input.Password  maxLength={15} onChange={this.changePassword} value={this.state.password} placeholder="请输入密码"  className="phone" />
              </div>

              <div className="son" >
                <span className="xing">*</span> <span>确认密码:</span>
                <Input.Password maxLength={15} style={{height:'41px'}} placeholder="请确认密码" value={this.state.passwordT} onChange={this.changePasswordT}   className="phone" />
              </div>

              <div className="agreement"><Checkbox onChange={this.changeRadio} checked={this.state.changeRadio}></Checkbox><span>我已阅读并同意</span><span className="color" onClick={this.Agreement}>《场馆入驻协议》</span></div>

            
                <div className="submint" onClick={this.showModal}>注册</div>
            

              <div className="Existing"> 已有账号 <a href='#/'><span>请登录</span></a></div>
              <Modal
                title="注册结果"
                cancelText=''
                closable={false}
                footer={null}
                style={{ width: '200px', height: '50px' }}
                visible={this.state.visible}
                onOk={this.handleOk}
                width={800}
              >
                <img className="logoRegister" src={require("../../assets/icon_pc.png")} alt="ico" />
                <span className="modelTitle">恭喜您! 注册成功</span>
                <span className="modelPhone">用户名:{this.state.name}</span>
                <Button className="remodelBtn"><a href="#/perfect">下一步</a></Button>
              </Modal>
            </div>
            </form>
          </div>
        
        </div>
      </div>
    )
  }
}

export default register;