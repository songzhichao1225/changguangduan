import React from 'react';
import './corporatePh.css';
import 'antd/dist/antd.css';
import { Toast, InputItem, NavBar, Popover } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import { _login, _code } from '../../api';
import {EllipsisOutlined} from '@ant-design/icons';
const Item = Popover.Item;
class corporatePh extends React.Component {

  state = {
    phone: '',//用户登录手机号
    code: '',//验证码
    pass: '',//密码
    textT: '获取验证码',
    flag: 'hidden',
    navNum: true,
    visiblePhone: false,
    selectVeun: [],
    value: '',
    eyes: false,
  };


  componentDidMount() {
   

  }



  phone = (e) => {
    this.setState({ phone: e.replace(/\s*/g, "") })
    if (!(/^1[3|4|5|8|7][0-9]\d{4,8}$/.test(e))) {
      this.setState({ visiblePhone: true })
    } else if (e === '') {
      this.setState({ visiblePhone: true })
    } else {
      this.setState({ phone: e.replace(/\s*/g, ""), visiblePhone: false })
    }
  }
  code = e => {
    this.setState({ code: e })
  }
  onPassword = e => {
    this.setState({ pass: e })
  }

  async nacode(data) {
    const res = await _code(data)
    if (res.data.code === 2000) {
      let num = 60
      const timer = setInterval(() => {
        this.setState({ textT: num-- })
        if (num === -1) {
          clearInterval(timer)
          this.setState({ textT: '获取验证码' })
        }
      }, 1000)
      
    } else {
      Toast.fail(res.data.msg, 1)
    }
  }


  async login(data) {
    const res = await _login(data)
    if (res.data.code !== 2000) {
      Toast.fail(res.data.msg, 1)
    } else {
      localStorage.clear()
      localStorage.setItem('uuid', res.data.data.uuid);
      localStorage.setItem('name', res.data.data.name);
      localStorage.setItem('islegal', res.data.data.islegal);
      localStorage.setItem('venue_token', res.data.data.venue_token);
      localStorage.setItem('issite', res.data.data.issite);
      localStorage.setItem('isqult', res.data.data.isqult);
      localStorage.setItem('ismethod', res.data.data.ismethod);
      setTimeout(() => {
        if (res.data.data.venue_token) {
          if (res.data.data.issite === 0) {
            this.props.history.push('/stadiumInformationPh')
          } else if (res.data.data.isqult === 0) {
            this.props.history.push('/qualification')
          } else if (res.data.data.islegal === 0 || res.data.data.islegal === 2) {
            this.props.history.push('/resultsAuditsPh')
          } else {
            this.props.history.push('/homePh/homePh')
          }
        }
      }, 1000)
    }
  }
  code = e => {
    this.setState({ code: e })
  }
  password = e => {
    this.setState({ pass: e })
  }
  
  
  loginPhTeo = () => {
    this.props.history.goBack();
  }
  registerPh = () => {
    this.props.history.push('/registerPh')
  }
  forgetPassword = () => {
    this.props.history.push('/forgetPasswordPh')
  }


  naCode = () => {
    if (this.state.phone !== '' && (/^1[3|4|5|8|7][0-9]\d{4,8}$/.test(this.state.phone))) {
      this.nacode({ "mobile": this.state.phone, "type": 'venuelogin' })
    } else {
      Toast.fail('请输入手机号', 1);
    }
  }

  onChange = e => {
    this.setState({ value: e.target.value })
  }
  ploo=()=>{
    let data = {
      username: this.state.phone, usercode: this.state.code, userpass:'', type: 2, Logintype: 'mobile', venueloginuuid: this.state.value
    }
    this.login(data)
  }

  onSubmit = () => {
    this.ploo()
  }

  close = () => {
    var sUserAgent = navigator.userAgent;
    var mobileAgents = ['Android', 'iPhone']; 
    for (let index = 0; index < mobileAgents.length; index++) {
      if (sUserAgent.indexOf('Android') > -1) {
        window.JsAndroid.goBack();
      } else if (sUserAgent.indexOf('iPhone') > -1) {
        window.iosDelegate.getCall();
      }
    }
  }

  closeWeb = () => {
    if (window.location.href.indexOf('flag=1') === -1) {
      this.props.history.push('/phone')
      this.setState({ visible: false })
    } else {
      this.close()
    }
  }

  eyes = () => {
    this.setState({
      eyes: !this.state.eyes
    })
  }
  render() {
    return (
      <div className="corporatePh">
        <NavBar
          mode="dark"
          icon={<img style={{ width: '2rem', height: '2rem', display: 'block' }} src={require('../../assets/logoHead.png')} alt="logo" />}
          rightContent={<Popover mask
            overlayClassName="fortest"
            overlayStyle={{ color: 'currentColor' }}
            visible={this.state.visible}
            onSelect={this.closeWeb}
            overlay={[
              (<Item key="1" value="scan" style={{ fontSize: '0.7rem' }} data-seed="logId">{window.location.href.indexOf('flag=1') === -1 ? '返回官网' : '关闭'}</Item>),
            ]}
            align={{
              overflow: { adjustY: 0, adjustX: 0 },
              offset: [-10, 0],
            }}
            onVisibleChange={this.handleVisibleChange}
          >
            <div style={{
              height: '100%',
              padding: '0 15px',
              marginRight: '-15px',
              fontSize: '2rem',
              display: 'flex',
              alignItems: 'center',
            }}
            >
               <EllipsisOutlined />
            </div>
          </Popover>}
        ><span style={{ fontSize: '1rem' }}>负责人登录</span></NavBar>
        <div className="loginInput">
          <div className="name">
            <InputItem
              type='phone'
              placeholder="负责人手机号"
              clear={true}
              style={{fontSize: '0.8rem' }}
              onChange={this.phone}
              autoFocus
              className="phone"
            >
            </InputItem>

          </div>
          <div className="name">
            <InputItem
              type='number'
              placeholder="手机验证码"
              clear={true}
              style={{ fontSize: '0.8rem' }}
              onChange={this.code}
              className="phone"
              maxLength={6}
            >
            </InputItem>
            <div className={this.state.textT === '获取验证码' ? 'obtain' : 'koohidden'} onTouchStart={this.naCode} >
              {this.state.textT}
            </div>
            <div className={this.state.textT === '获取验证码' ? 'koohidden' : 'obtain'} >
              {this.state.textT}
            </div>
          </div>

          <div className="loginBtn" onTouchStart={this.onSubmit}>登录</div>
          <div className="footer" style={{ marginTop: '1rem' }}>
            <span onClick={this.loginPhTeo}>操作员登录</span>
            <span onClick={this.registerPh}>新用户注册</span>
          </div>
        </div>
      </div>
    );
  }
}

export default corporatePh;