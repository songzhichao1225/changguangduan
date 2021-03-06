import React from 'react';
import './loginPh.css';
import 'antd/dist/antd.css';
import {CloseOutlined} from '@ant-design/icons';
class loginPh extends React.Component {

  state = {

  };

  componentDidMount() {
    localStorage.setItem('now',false)
    let query = window.location.href
    let arr = query.split('&')
    if (arr[1] !== undefined) {
      if (localStorage.getItem('phone') === arr[1].slice(6, 17) || localStorage.getItem('legalphone') === arr[1].slice(6, 17)) {

      } else {
        localStorage.clear()
        this.props.history.push('/login')
      }
    } else if(localStorage.getItem('now')==='false') {
      this.props.history.push('/')
    }
    
    if (localStorage.getItem('venue_token')) {
      this.props.history.push('/homePh/homePh')
    }
  }

  login = () => {
    localStorage.setItem('now',true)
    this.props.history.push('/login')
  }

  close = () => {
    var sUserAgent = navigator.userAgent;
    var mobileAgents = ['Android', 'iPhone'];
    for (let index = 0; index < mobileAgents.length; index++) {
      if (sUserAgent.indexOf('Android') > -1) {
        window.JsAndroid.goBack();
      } else if (sUserAgent.indexOf('iPhone') > -1) {
        try {
          window.webkit.messageHandlers.getCall.postMessage('1');
        } catch (error) {
          console.log(error)
        }
      }
    }
  }


  render() {
    return (
      <div className="loginPh">
        <CloseOutlined  onClick={this.close} style={{ position: 'absolute', left: '5%', top: '1.5%', zIndex: '99',color:'#fff' }}/>
        <div className="banner">
          <div className="title">成为合作场馆</div>
          <div className="titleBottom">免费引流到店，大幅提高场馆收入</div>
          <div className="loginBtn" onClick={this.login}>登录</div>
        </div>
        <div className="center">
          <img src={require("../../assets/phoneOne (1).png")} alt="" />
        </div>
        <div className="footerBtn" onClick={this.login}>登录/注册成为合作场馆</div>

      </div>
    );
  }
}

export default loginPh;