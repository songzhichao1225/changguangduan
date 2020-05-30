import React from 'react';
import { Route, Link } from 'react-router-dom';
import './home.css';
import 'antd/dist/antd.css';
import { getVenueIndex, gerVenueName } from '../../api';
import { Layout, Menu, message, notification } from 'antd';
import {HomeOutlined,SettingOutlined} from '@ant-design/icons';
import homePage from '../homePage/homePage';
import information from '../information/information';
import siteSettings from '../siteSettings/siteSettings';
import preferentialTwo from '../preferentialTwo/preferentialTwo';
import stadiums from '../stadiums/stadiums';
import systemSettings from '../systemSettings/systemSettings';
import myWallet from '../myWallet/myWallet';
import comment from '../comment/comment';
import news from '../news/news';
import closeYu from '../closeYu/closeYu';
import appointmentList from '../appointmentList/appointmentList';
import special from '../special/special';


const { Header, Sider, Content, Footer } = Layout;

function jo(){
  var ws = new WebSocket("wss://www.venue.zhaoduishou.com/socket");
  ws.onopen = function () {
    ws.send(sessionStorage.getItem('siteuid'))
  }
  ws.onmessage = function (e) {
    let message_info = JSON.parse(e.data)
    let msg = new SpeechSynthesisUtterance(message_info.percent)
    window.speechSynthesis.speak(msg)
    notification.open({ description: message_info.percent,duration:5 })
    sessionStorage.setItem('kood',2)
   
  }
  ws.onclose=function(){
    jo()
   }
}

class home extends React.Component {


  state = {
    collapsed: false,
    year: '',
    mount: '',
    date: '',
    getDay: '',
    hours: '',
    minutes: '',
    minheight: '',
    keyIng: '1',
    getVenue: '',
    gerVenueName: '',
    nookod: '',
  };



  componentDidMount() {
    sessionStorage.setItem('kood',1)
    sessionStorage.setItem('loodSo','0')
    this.setState({ minheight: document.body.scrollHeight, path: this.props.history.location.pathname })
    this.getVenueIndex()
    this.gerVenueName()
    setInterval(() => {
      this.timer()
    }, 1000)

    if (this.props.history.location.pathname === '/home') {
      sessionStorage.setItem('path', '1');
    } else if (this.props.history.location.pathname === '/home/news') {
      sessionStorage.setItem('path', '1');
    } else if (this.props.history.location.pathname === '/home/appointmentList') {
      sessionStorage.setItem('path', '2');
    } else if (this.props.history.location.pathname === '/home/siteSettings') {
      sessionStorage.setItem('path', '3');
    } else if (this.props.history.location.pathname === '/home/preferential') {
      sessionStorage.setItem('path', '4');
    } else if (this.props.history.location.pathname === '/home/stadiums') {
      sessionStorage.setItem('path', '5');
    } else if (this.props.history.location.pathname === '/home/systemSettings') {
      sessionStorage.setItem('path', '6');
    } else if (this.props.history.location.pathname === '/home/myWallet') {
      sessionStorage.setItem('path', '7');
    } else if (this.props.history.location.pathname === '/home/closeYu') {
      sessionStorage.setItem('path', '6');
    } else if (this.props.history.location.pathname === '/home/special') {
      sessionStorage.setItem('path', '8');
    }
    jo()
   
    
    
   
   
  }



  componentWillReceiveProps() {
    this.setState({ path: this.props.history.location.pathname })
    this.getVenueIndex()
    this.gerVenueName()
    if (this.props.history.location.pathname === '/home') {
      sessionStorage.setItem('path', '1');
    } else if (this.props.history.location.pathname === '/homenews') {
      sessionStorage.setItem('path', '1');
    } else if (this.props.history.location.pathname === '/home/appointmentList') {
      sessionStorage.setItem('path', '2');
    } else if (this.props.history.location.pathname === '/home/siteSettings') {
      sessionStorage.setItem('path', '3');
    } else if (this.props.history.location.pathname === '/home/preferential') {
      sessionStorage.setItem('path', '4');
    } else if (this.props.history.location.pathname === '/home/stadiums') {
      sessionStorage.setItem('path', '5');
    } else if (this.props.history.location.pathname === '/home/systemSettings') {
      sessionStorage.setItem('path', '6');
    } else if (this.props.history.location.pathname === '/home/myWallet') {
      sessionStorage.setItem('path', '7');
    } else if (this.props.history.location.pathname === '/home/closeYu') {
      sessionStorage.setItem('path', '6');
    } else if (this.props.history.location.pathname === '/home/special') {
      sessionStorage.setItem('path', '8');
    }

    if (sessionStorage.getItem('islegal') === 0) {
      this.props.history.push('/')
      message.error('未通过审核!')
    }
  }

  lppd = () => {
    this.props.history.push('home/comment')
    this.setState({ path: this.props.history.location.pathname })
  }

  timer = () => {
    let myDate = new Date();
    let day = ''
    switch (myDate.getDay()) {
      case 0:
        day = "星期天";
        break;
      case 1:
        day = "星期一";
        break;
      case 2:
        day = "星期二";
        break;
      case 3:
        day = "星期三";
        break;
      case 4:
        day = "星期四";
        break;
      case 5:
        day = "星期五";
        break;
      case 6:
        day = "星期六";
        break;
      default:
        day = "";
    }
    let month = ""
    if (myDate.getMonth() + 1 < 10) {
      month = '0' + (myDate.getMonth() + 1)
    } else {
      month = myDate.getMonth() + 1
    }
    let Tdate = ""
    if (myDate.getDate() < 10) {
      Tdate = '0' + myDate.getDate()
    } else {
      Tdate = myDate.getDate()
    }
    let Thours = ""
    if (myDate.getHours() < 10) {
      Thours = "0" + myDate.getHours()
    } else {
      Thours = myDate.getHours()
    }
    let Tminutes = ""
    if (myDate.getMinutes() < 10) {
      Tminutes = '0' + myDate.getMinutes()
    } else {
      Tminutes = myDate.getMinutes()
    }
    this.setState({
      year: myDate.getFullYear() + '    /', mount: month + '    /', date: Tdate, getDay: day, hours: Thours + ':', minutes: Tminutes
    })
    if (Thours < 12) {
      this.setState({ nookod: '上午好' })
    } else if (Thours > 12) {
      this.setState({ nookod: '下午好' })
    }
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  kood = (e) => {
    this.setState({ keyIng: e.key })
    sessionStorage.setItem('path', e.key);
    this.setState({ path: this.props.history.location.pathname })
  }

  async getVenueIndex(data) {
    const res = await getVenueIndex(data, sessionStorage.getItem('venue_token'))
    this.setState({ getVenue: res.data.data }) 
  }

  async gerVenueName(data) {
    const res = await gerVenueName(data, sessionStorage.getItem('venue_token'))
    if (res.data.code === 4001) {
      this.props.history.push('/')
      message.error('登陆超时请重新登陆！')
    } else {
      this.setState({ gerVenueName: res.data.data })
      sessionStorage.setItem('mess',res.data.data.mess)
    }
  }


  income = () => {
    this.props.history.push({ pathname: '/home/myWallet', query: { time: 1 } })
  }
  daysIncome = () => {
    this.props.history.push({ pathname: '/home/myWallet', query: { time: 2 } })
  }
  mounthOrder = () => {
    this.props.history.push({ pathname: '/home/information', query: { time: 1 } })
  }
  mounthOrderTwo = () => {
    this.props.history.push({ pathname: '/home/information', query: { time: 2 } })
  }
  news = () => {
    this.gerVenueName()
    this.props.history.push("/home/news")
  }
  render() {
    return (
      <Layout style={{ height: '100%' }}>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed} width={150} className="sider">
          <div className="logo">
            <img style={{ height: 40, margin: '0 auto', marginTop: 10,display:'block' }}
              src={require("../../assets/tiaozhanicon.png")} alt="logo" />
          </div>
          <Menu theme="dark"  selectedKeys={[sessionStorage.getItem('path')]} onSelect={this.kood}>
            <Menu.Item key="1">
              <Link to="/home">
                <HomeOutlined />
                <span>首</span>
                <span style={{paddingLeft:35}}>页</span>
              </Link>
            </Menu.Item>

              <Menu.Item key="4">
              <Link to="/home/preferential">
              <i className="anticon anticon-gift">
                  <svg t="1571136349374" className="icon" viewBox="64 64 896 896" version="1.1" fill="currentColor" p-i='true' d="1831" width="1em" height="1em"><path d="M424.9 142.4c0.1 0.1 0.3 0.2 0.3 0.3V878c-0.1 0.1-0.2 0.3-0.3 0.3H145.6c-0.1-0.1-0.3-0.2-0.3-0.3V142.7c0.1-0.1 0.2-0.3 0.3-0.3h279.3m0-80H145.5c-44.2 0-80.3 36.1-80.3 80.3v735.4c0 44.2 36.1 80.3 80.3 80.3h279.4c44.2 0 80.3-36.1 80.3-80.3V142.7c0-44.1-36.1-80.3-80.3-80.3z" p-id="2437"></path><path d="M879.8 142.9c0.1 0.1 0.3 0.2 0.3 0.3v341c-0.1 0.1-0.2 0.3-0.3 0.3H631.4c-0.1-0.1-0.3-0.2-0.3-0.3v-341c0.1-0.1 0.2-0.3 0.3-0.3h248.4m0-80H631.3c-44.2 0-80.3 36.1-80.3 80.3v341c0 44.2 36.1 80.3 80.3 80.3h248.5c44.2 0 80.3-36.1 80.3-80.3v-341c0-44.1-36.1-80.3-80.3-80.3z" p-id="2438"></path><path d="M880.2 688.1c0.1 0.1 0.3 0.2 0.3 0.3v189.7c-0.1 0.1-0.2 0.3-0.3 0.3H631.8c-0.1-0.1-0.3-0.2-0.3-0.3V688.4c0.1-0.1 0.2-0.3 0.3-0.3h248.4m0-80H631.7c-44.2 0-80.3 36.1-80.3 80.3v189.8c0 44.2 36.1 80.3 80.3 80.3h248.5c44.2 0 80.3-36.1 80.3-80.3V688.4c0-44.2-36.1-80.3-80.3-80.3z" p-id="2439"></path></svg>
                </i>
                <span>场地占用</span>
              </Link>
            </Menu.Item>

            <Menu.Item key="2">
              <Link to="/home/appointmentList">
                <i className="anticon anticon-gift">
                  <svg t="1571136412563" className="icon" viewBox="64 64 896 896" version="1.1" fill="currentColor" p-id="1831" width="1em" height="1em"><path d="M827 869.6H196.7c-44-0.1-79.6-35.7-79.6-79.6V438.6h789.5V790c0 43.9-35.7 79.6-79.6 79.6zM196.7 223.4h87.7v53.5c0 11 8.9 19.9 19.9 19.9 11 0 19.9-8.9 19.9-19.9v-53.5h367.5v53.5c0 11 8.9 19.9 19.9 19.9 11 0 19.9-8.9 19.9-19.9v-53.5H827c44 0.1 79.6 35.7 79.6 79.6v95.8H117.1V303c0-44 35.6-79.6 79.6-79.6zM827 170.3h-95.5v-50.6c0-11-8.9-19.9-19.9-19.9-11 0-19.9 8.9-19.9 19.9v50.6H324.2v-50.6c0-11-8.9-19.9-19.9-19.9-11 0-19.9 8.9-19.9 19.9v50.6h-87.7C123.4 170.4 64.1 229.7 64 303v487c0.1 73.3 59.4 132.6 132.7 132.7H827c73.3-0.1 132.6-59.4 132.7-132.7V303c-0.1-73.3-59.5-132.6-132.7-132.7z" p-id="2590"></path><path d="M657.6 529.4l-183.1 183-99.1-99.1c-9.2-9.2-24.2-9.2-33.4 0s-9.2 24.2 0 33.4l115.9 115.9c9.2 9.2 24.2 9.2 33.4 0L691 562.9c9.2-9.2 9.2-24.2 0-33.4-9.2-9.3-24.2-9.3-33.4-0.1z" p-id="2591"></path></svg>
                </i>
                <span>活动列表</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/home/siteSettings">
                <i className="anticon anticon-gift">
                <svg  viewBox="0 0 22 21"  fill="currentColor" width="1em" height="1em" version="1.1" xmlns="http://www.w3.org/2000/svg" >
 
                <path d="M13.235761,18.3071554 C12.7321306,18.5032287 12.2115159,18.6525123 11.68051,18.7531155 L11.5809402,18.772749 C11.2486959,18.8310054 10.9134779,18.8708008 10.5768287,18.8919522 L10.5768287,14.0466932 C10.9524793,13.998349 11.3196421,13.8982995 11.6678884,13.7493865 L11.7155697,13.7283506 C11.8046714,13.6878801 11.8925909,13.6448556 11.9792191,13.5993307 L12.0998247,13.5362231 L12.1545179,13.5067729 L12.1545179,13.5025657 L12.2106135,13.4703108 C12.2414661,13.4506773 12.2709163,13.4338486 12.2989641,13.4128127 C12.4768906,13.2926132 12.5560349,13.0707146 12.4943348,12.8650478 C12.4326348,12.6593809 12.2444141,12.5176918 12.0297052,12.5152829 C11.9953273,12.5161633 11.9610833,12.5199161 11.9273307,12.526502 C11.8919303,12.5356444 11.8572456,12.5473622 11.8235538,12.5615618 L11.8137371,12.5671713 L11.7828845,12.5741833 L11.7450199,12.6078406 L11.7366056,12.6120478 C11.5955467,12.7037214 11.4473517,12.7839156 11.2934502,12.8518566 L11.2401594,12.87149 C11.0281923,12.9580197 10.8070593,13.0201251 10.5810359,13.0566056 L10.5810359,7.06278884 C10.7930737,7.09659212 11.0005654,7.15446396 11.19949,7.23528287 L11.2191235,7.24229482 C11.9308778,7.53329654 12.5084598,8.0793741 12.8388845,8.77370518 C12.8491713,8.79132041 12.8571822,8.81016939 12.8627251,8.8298008 L12.8683347,8.83961753 C12.9468685,9.01912351 13.0113785,9.20984861 13.0520478,9.40057371 L13.0548526,9.41740239 C13.1129117,9.68034081 13.3719669,9.84741267 13.6354422,9.79184064 C13.8990475,9.73379835 14.0663229,9.47380107 14.0098805,9.20984861 C14.0013882,9.17698876 13.9943693,9.14376569 13.9888446,9.11027888 L13.9720159,9.04857371 L13.9776255,9.04576892 L13.9145179,8.85364143 C13.8711362,8.71443405 13.8201051,8.57772685 13.7616574,8.44414343 L13.7560478,8.43011952 L13.728,8.36981673 C13.5826771,8.05351355 13.3954104,7.75822654 13.171251,7.49192032 L13.1474104,7.46387251 L13.1249721,7.43862948 C12.6847043,6.92816518 12.1220759,6.53779953 11.4897849,6.30409562 L11.4701514,6.29708367 L11.4210677,6.27885259 C11.1501674,6.18245712 10.8693528,6.11660444 10.5838406,6.08251793 L10.5838406,1.2316494 C12.0513299,1.32091015 13.473544,1.77393665 14.7222948,2.54989641 C14.7391235,2.55971315 14.751745,2.56952988 14.7685737,2.57654183 L14.8723506,2.64245418 L14.9705179,2.70556175 C14.9873466,2.71818327 14.9999681,2.728 15.0196016,2.73921912 C16.199112,3.54279434 17.1674803,4.61891949 17.8426135,5.87636653 L15.3631873,5.87636653 L15.3631873,9.29539442 C15.377815,9.58175894 15.6142661,9.80644017 15.901004,9.80644017 C16.1877419,9.80644017 16.424193,9.58175894 16.4388207,9.29539442 L16.4388207,6.94919522 L18.3348526,6.94919522 C18.4985251,7.37924619 18.6265737,7.82202231 18.7177052,8.27305179 L18.7177052,8.27725896 C18.8341036,8.85364143 18.8972112,9.4454502 18.8972112,10.0596972 C18.8972112,10.3920637 19.1650677,10.6585179 19.4974343,10.6585179 C19.8298008,10.6585179 20.0976574,10.3920637 20.0976574,10.0596972 C20.0976574,9.75117131 20.0808287,9.44404781 20.0555857,9.13832669 L20.056988,9.1369243 C20.023375,8.77007983 19.9695348,8.40537082 19.8957131,8.04446215 C19.8929084,8.03464542 19.8901036,8.02763347 19.8901036,8.02062151 L19.852239,7.8467251 C19.6619139,6.99753576 19.3606158,6.17709966 18.9561116,5.40656574 C18.9392829,5.37711554 18.9280637,5.34906773 18.9126375,5.32101992 L18.8719681,5.24809562 C18.0660661,3.76647868 16.8986248,2.51268532 15.4781833,1.60328287 C15.4613546,1.59346614 15.4487331,1.58224701 15.4319044,1.57523506 L15.3225179,1.50651793 C14.2592925,0.852990118 13.0836959,0.403105652 11.8558088,0.179856574 L11.8193466,0.172844622 C10.6460366,-0.0386752075 9.4442729,-0.0377251967 8.2712988,0.175649402 C8.20959363,0.186868526 8.14788845,0.196685259 8.08618327,0.210709163 C6.99090113,0.429343731 5.93968364,0.828882209 4.97568127,1.3929243 L4.88031873,1.44901992 C3.69520964,2.15728073 2.66995469,3.10374338 1.86938645,4.22855777 L1.82170518,4.29587251 L1.77542629,4.36458964 C0.938814006,5.5736233 0.380377678,6.95295146 0.140239044,8.4034741 L0.133227092,8.45115538 L0.112191235,8.57176096 C-0.0385303837,9.57459043 -0.0366391215,10.5944536 0.117800797,11.5967171 C0.12761753,11.6598247 0.140239044,11.7173227 0.147250996,11.7804303 C0.357609562,13.0019124 0.789545817,14.1490677 1.39818327,15.1798247 C1.40098805,15.1854343 1.40239044,15.1896414 1.408,15.1938486 L1.47952191,15.3144542 C1.5103745,15.367745 1.54262948,15.4168287 1.57628685,15.4687171 L1.58610359,15.4841434 C2.27872881,16.5653432 3.17229942,17.5036637 4.21839044,18.248255 C4.23521912,18.2608765 4.24643825,18.2706932 4.26326693,18.2791076 L4.36984861,18.3548367 C5.48895618,19.1205418 6.76793625,19.6688765 8.14648606,19.9325259 L8.19416733,19.943745 L8.300749,19.9647809 C9.49278088,20.1751394 10.7338964,20.1723347 11.9651952,19.9339283 L11.9708048,19.9339283 L12.0914104,19.9100876 C12.3312191,19.861004 12.5654183,19.8049084 12.8010199,19.7347888 L12.8010199,19.7333865 C13.0941195,19.649243 13.3858167,19.5496733 13.6747092,19.4388845 C13.8768731,19.3604739 14.0218488,19.1801664 14.0550252,18.965882 C14.0882017,18.7515977 14.0045386,18.5358913 13.8355511,18.4000175 C13.6665636,18.2641437 13.4379249,18.2287448 13.235761,18.3071554 L13.235761,18.3071554 Z M9.50259761,13.0411793 C9.30519086,13.0012391 9.11180629,12.9435054 8.92481275,12.8686853 L8.86591235,12.8434422 C8.86591235,12.8434422 8.83926693,12.8322231 8.83225498,12.8266135 C8.83225498,12.8266135 8.78737849,12.8041753 8.77756175,12.8027729 L8.76914741,12.7999681 L8.75231873,12.7915538 C8.43049651,12.6358302 8.13930594,12.4234939 7.89265339,12.1646853 L7.88283665,12.1548685 C7.63383369,11.8931655 7.43258901,11.5898746 7.28822311,11.258741 L7.28541833,11.2545339 L7.26438247,11.1998406 C7.24871395,11.1594359 7.23375283,11.1187603 7.21950598,11.0778327 C7.12559209,10.815084 7.06986358,10.5402196 7.0540239,10.2616414 C7.02341772,9.79562194 7.10018268,9.32879507 7.27840637,8.89711554 L7.28261355,8.8872988 L7.3036494,8.83821514 L7.31627092,8.81156972 L7.33029482,8.78071713 L7.35133068,8.73724303 L7.35553785,8.7260239 C7.5924436,8.23534187 7.95846679,7.81841479 8.41434263,7.51996813 C8.56299602,7.42039841 8.72146614,7.33485259 8.88554582,7.26333068 L8.89396016,7.25912351 L8.94444622,7.23808765 C8.95847012,7.23388048 8.96828685,7.22686853 8.98231076,7.22125896 L9.00334661,7.21144223 C9.14639044,7.156749 9.29223904,7.11187251 9.43949004,7.08101992 L9.50820717,7.06699602 L9.50259761,13.0411793 L9.50259761,13.0411793 Z M3.63920319,13.1687968 L1.76280478,13.1687968 C1.58874988,12.7089164 1.45410312,12.2350724 1.36031873,11.7523825 L1.35470916,11.7299442 L1.32385657,11.5644622 L1.3056255,11.4606853 L1.29160159,11.3779442 C1.07079674,9.88629823 1.2319547,8.36301777 1.76,6.95059761 L3.63920319,6.95059761 L3.63920319,13.1687968 L3.63920319,13.1687968 Z M5.01354582,17.3381036 L4.96586454,17.3058486 C4.9322514,17.2826028 4.8990562,17.2587583 4.86629482,17.2343267 L4.76952988,17.1656096 C4.7527012,17.152988 4.73867729,17.1403665 4.71904382,17.1305498 L4.57740239,17.0239681 L4.57459761,17.0239681 C3.7942441,16.4112808 3.12248099,15.671725 2.58741036,14.836239 C2.55936255,14.7913625 2.52850996,14.7450837 2.50186454,14.6988048 L2.48082869,14.6679522 C2.39645482,14.5298134 2.31647845,14.3890363 2.24101992,14.2458327 L4.70501992,14.2458327 L4.70501992,5.87636653 L3.63219124,5.87636653 L3.63219124,5.87776892 L2.24662948,5.87776892 C2.4050996,5.58186454 2.58039841,5.29297211 2.7725259,5.01810359 L2.7865498,4.99706773 C2.81459761,4.95499602 2.84825498,4.91152191 2.87630279,4.87225498 C2.89453386,4.84981673 2.90855777,4.82457371 2.92819124,4.80353785 C2.94642231,4.77969721 2.96605578,4.75305179 2.98568924,4.73061355 L3.07544223,4.61421514 L3.09647809,4.58756972 C4.07557924,3.34332438 5.37199422,2.38603141 6.8492749,1.81644622 C7.33475816,1.62773496 7.83595512,1.48225644 8.34702789,1.38170518 C8.35684462,1.38030279 8.36525896,1.37749801 8.3750757,1.37749801 C8.42696414,1.36908367 8.48025498,1.35646215 8.53214343,1.3494502 L8.64994422,1.32841434 L8.71866135,1.31719522 C8.9767012,1.27933068 9.23754582,1.25128287 9.50259761,1.23445418 L9.50259761,6.08952988 C9.17461088,6.13481279 8.85399322,6.22298264 8.54897211,6.35177689 L8.54055777,6.35458167 C8.085805,6.54463947 7.66950342,6.81599587 7.31206375,7.15534661 C6.91765339,7.52899254 6.60406876,7.97956163 6.39069323,8.47920319 L6.36685259,8.54090837 C6.14246461,9.08316927 6.04139327,9.66852082 6.07094821,10.2546295 L6.07515538,10.324749 C6.1018008,10.7286375 6.18594422,11.1241116 6.33319522,11.4985498 L6.33459761,11.5055618 L6.36124303,11.5728765 C6.54635857,12.0244462 6.80720319,12.436749 7.14097211,12.7943586 L7.14938645,12.8041753 L7.18444622,12.8392351 C7.20267729,12.8574661 7.2167012,12.8742948 7.23633466,12.8911235 L7.24054183,12.8953307 C7.61966846,13.277374 8.07244441,13.5784295 8.57141036,13.780239 C8.87146657,13.9022062 9.1850188,13.9878917 9.50540239,14.0354741 L9.50540239,18.8919522 C7.89550679,18.7879661 6.34357896,18.2511144 5.01354582,17.3381036 L5.01354582,17.3381036 Z" id="Shape"></path>
                <path d="M20.8787888,15.0395857 L21.9852749,14.3411952 L21.5673625,13.3314741 L20.2967968,13.6245737 C20.1113785,13.3684863 19.8881987,13.1419967 19.6348685,12.9528287 L19.9265657,11.6808606 L18.9266614,11.265753 L18.23949,12.372239 C17.9309052,12.3276584 17.6177588,12.3243572 17.3083028,12.3624223 L16.6281434,11.2559363 L15.6170199,11.6640319 L15.8904861,12.936 C15.6367118,13.1235939 15.4105821,13.3459468 15.218741,13.5965259 L13.9607968,13.295012 L13.5428845,14.2963187 L14.6297371,14.9947092 C14.5820598,15.3065654 14.5820598,15.6238569 14.6297371,15.9357131 L13.523251,16.6144701 L13.9299442,17.6255936 L15.2033147,17.3437131 C15.3870279,17.5961434 15.610008,17.8205259 15.8638406,18.004239 L15.5623267,19.2776096 L16.5622311,19.6941195 L17.2718406,18.5974502 C17.5817689,18.6451315 17.9015139,18.6451315 18.2030279,18.5974502 L18.9014183,19.7025339 L19.9111394,19.2860239 L19.6194422,18.0140558 C19.8746773,17.8289402 20.0864382,17.6157769 20.2813705,17.3521275 L21.5631554,17.6452271 L21.9810677,16.6453227 L20.8633625,15.9455299 C20.9264701,15.6636494 20.9264701,15.3495139 20.8787888,15.0395857 L20.8787888,15.0395857 Z M19.323548,15.4981673 C19.323548,16.3634422 18.6251474,17.0590304 17.7626773,17.0590304 C17.348483,17.0597742 16.9510382,16.8955665 16.6581582,16.6026864 C16.3652781,16.3098064 16.2010704,15.9123616 16.2018142,15.4981673 C16.2018142,14.6328924 16.9002072,13.9372966 17.7626773,13.9372966 C18.1771005,13.9358093 18.5749822,14.0997757 18.8680255,14.3928191 C19.1610689,14.6858625 19.3250353,15.0837441 19.323548,15.4981673 Z" id="Shape"></path>
</svg>
                  {/* <svg t="1571136349374" className="icon" viewBox="64 64 896 896" version="1.1" fill="currentColor" p-i='true' d="1831" width="1em" height="1em"><path d="M424.9 142.4c0.1 0.1 0.3 0.2 0.3 0.3V878c-0.1 0.1-0.2 0.3-0.3 0.3H145.6c-0.1-0.1-0.3-0.2-0.3-0.3V142.7c0.1-0.1 0.2-0.3 0.3-0.3h279.3m0-80H145.5c-44.2 0-80.3 36.1-80.3 80.3v735.4c0 44.2 36.1 80.3 80.3 80.3h279.4c44.2 0 80.3-36.1 80.3-80.3V142.7c0-44.1-36.1-80.3-80.3-80.3z" p-id="2437"></path><path d="M879.8 142.9c0.1 0.1 0.3 0.2 0.3 0.3v341c-0.1 0.1-0.2 0.3-0.3 0.3H631.4c-0.1-0.1-0.3-0.2-0.3-0.3v-341c0.1-0.1 0.2-0.3 0.3-0.3h248.4m0-80H631.3c-44.2 0-80.3 36.1-80.3 80.3v341c0 44.2 36.1 80.3 80.3 80.3h248.5c44.2 0 80.3-36.1 80.3-80.3v-341c0-44.1-36.1-80.3-80.3-80.3z" p-id="2438"></path><path d="M880.2 688.1c0.1 0.1 0.3 0.2 0.3 0.3v189.7c-0.1 0.1-0.2 0.3-0.3 0.3H631.8c-0.1-0.1-0.3-0.2-0.3-0.3V688.4c0.1-0.1 0.2-0.3 0.3-0.3h248.4m0-80H631.7c-44.2 0-80.3 36.1-80.3 80.3v189.8c0 44.2 36.1 80.3 80.3 80.3h248.5c44.2 0 80.3-36.1 80.3-80.3V688.4c0-44.2-36.1-80.3-80.3-80.3z" p-id="2439"></path></svg> */}
                </i>
                <span>场地设置</span>
              </Link>
            </Menu.Item>
            {/* <Menu.Item key="8">
              <Link to="/home/special">
                <i className="anticon anticon-gift">
                  <svg t="1575597370225" className="icon" viewBox="64 64 896 896" version="1.1" fill="currentColor" width="1rem" height="1rem"><path d="M351.962 128.277l128.1-0.154 0.077 64-128.1 0.154zM255.804 64.339l64-0.077 0.192 159.9-64 0.077zM512.004 64.038l64-0.076 0.192 159.9-64 0.076z" p-id="1703"></path><path d="M160.9 896c-17.7 0-32-14.3-32-31.9l-0.8-639.6c0-17.7 14.3-32 32-32l64.1-0.1-0.1-64-64.1 0.1c-53.1 0.1-96 43.1-96 96.1l0.8 639.6c0.1 53 43.1 95.9 96.2 95.8l511.7-0.6-0.1-64-511.7 0.6z" p-id="1704"></path><path d="M513.1 702.7l-287.8 0.3c-17.7 0-32 14.3-32 32s14.3 32 32 31.9l287.8-0.3c17.7 0 32-14.3 32-32 0-17.6-14.3-31.9-32-31.9zM225.1 511.2c-17.7 0-32 14.3-32 32s14.3 32 32 31.9l383.8-0.5c17.7 0 32-14.3 32-32s-14.3-32-32-31.9l-383.8 0.5zM224.9 319.3c-17.7 0-32 14.3-32 32s14.3 32 32 31.9l383.8-0.5c17.7 0 32-14.3 32-32s-14.3-32-32-31.9l-383.8 0.5zM768.1 223.7c-0.1-53-43.1-95.9-96.1-95.8l-64 0.1 0.1 64 64-0.1c17.7 0 32 14.3 32 31.9l0.4 352.2h64l-0.4-352.3zM950.6 790.6L816.1 925c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.7 0-45.2l79.8-79.7L608 800c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9L700 630.7c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-60 60H928c12.9 0 24.6 7.8 29.6 19.8 4.9 11.9 2.2 25.7-7 34.8z" p-id="1705"></path></svg>
                </i>
                <span>特殊场地</span>
              </Link>
            </Menu.Item> */}
          
          
            <Menu.Item key="5">
              <Link to={{ pathname: '/home/stadiums', query: { name: 'sunny' } }}>
                <i className="anticon anticon-gift" >
                  <svg t="1571135424567" className="icon" viewBox="64 64 896 896" version="1.1" fill="currentColor" p-id="1831" width="1em" height="1em"><path d="M25.6 414.72C223.744 249.9584 412.928 176.6912 593.0496 195.072v823.9616H25.6V414.72z m216.1664 24.7296v192.256h135.168V439.4496h-135.168z m0 274.6368v192.256h135.168v-192.256h-135.168zM998.4 222.464C944.3328 57.7024 827.2384-15.5648 647.1168 2.7648v1016.2176H998.4V222.464z" p-id="1832"></path></svg>
                </i>
                <span>场馆信息</span>
              </Link>
            </Menu.Item>


            <Menu.Item key="6">
              <Link to="/home/systemSettings">
              <SettingOutlined />
                <span>系统设置</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="7">
              <Link to="/home/myWallet">
                <i className="anticon anticon-gift" >
                  <svg t="1571136536735" className="icon" viewBox="64 64 896 896" version="1.1" fill="currentColor" p-id="1831" width="1em" height="1em"><path d="M840.343655 349.106026l-27.863604 0 0-100.252285c0-30.971385-25.197892-56.169277-56.171324-56.169277L605.645308 192.684464l-19.203364-30.931476c-9.496282-15.275915-27.768437-20.521383-41.597397-11.938913l-69.061912 42.871413-262.416642 0c-1.456165 0-2.867304 0.182149-4.227278 0.497327-21.928429 0.335644-42.249243 10.832719-57.32152 29.659507-14.343683 17.916045-22.242584 41.49302-22.242584 66.389036 0 12.885472 2.131547 25.408693 6.161327 36.985356-0.394996 1.514493-0.627287 3.095501-0.627287 4.733814l0 511.199775c0 30.972409 25.197892 56.170301 56.169277 56.170301l649.066749 0c30.972409 0 56.169277-25.197892 56.169277-56.170301L896.513956 405.276327C896.512932 374.303918 871.316064 349.106026 840.343655 349.106026zM859.066065 649.071865l-74.087369 0c-21.157879 0-38.370913-17.207917-38.370913-38.359656 0-21.148669 17.213034-38.353516 38.370913-38.353516l74.087369 0L859.066065 649.071865zM756.308727 230.131331c10.32516 0 18.724457 8.399297 18.724457 18.72241l0 100.252285-72.281233 0-73.861218-118.974695L756.308727 230.131331zM557.456796 186.05958l101.219309 163.046447-344.526731 0c-2.077312-0.795109-4.324492-1.249457-6.681166-1.249457l-10.658757 0L557.456796 186.05958zM181.048961 246.24431c8.070816-10.080589 18.430768-15.632025 29.17139-15.632025l97.248881 0c1.433652 0 2.824325-0.176009 4.16588-0.480954l103.823624 0L227.114113 347.046111c-0.407276 0.252757-0.788969 0.532119-1.169639 0.810459l-15.725146 0c-10.741645 0-21.100574-5.551436-29.170366-15.632025-9.046027-11.30037-14.028505-26.569122-14.028505-42.993187C167.020456 272.810363 172.001911 257.543657 181.048961 246.24431zM840.343655 860.872712 191.276906 860.872712c-10.323113 0-18.72241-8.399297-18.72241-18.723434L172.554496 385.993145c1.459235 0.36532 2.986007 0.558725 4.558829 0.558725l663.23033 0c10.324136 0 18.72241 8.399297 18.72241 18.723434l0 129.635499-74.087369 0c-41.806151 0-75.81778 34.003442-75.81778 75.800383 0 41.800012 34.011628 75.806523 75.81778 75.806523l74.087369 0 0 155.630546C859.066065 852.473415 850.667791 860.872712 840.343655 860.872712z" p-id="4157"></path><path d="M798.753421 628.39801c10.042727 0 18.185174-8.147564 18.185174-18.198477 0-10.057053-8.141424-18.204617-18.185174-18.204617-10.070356 0-18.21178 8.147564-18.21178 18.204617C780.542664 620.250446 788.684088 628.39801 798.753421 628.39801z" p-id="4158"></path></svg>
                </i>
                <span>我的钱包</span>
              </Link>
            </Menu.Item>
          </Menu>
          <div className="footerC">
            <div>Copyright ©2020</div>
            <div>北京甲乙电子商务有限公司</div>
          </div>
        </Sider>
        <Layout>
          <Header className="headerTor">
            <div className="Gname">
              <img src={require("../../assets/icon_logo_Gname (2).png")} alt="logo" />
              <span>{this.state.gerVenueName.name}</span>
            </div>
            <div className="time">
            
              <div className="new">
                <div onClick={this.news}>
                  <img src={require("../../assets/icon_pc_new2.png")} alt="message" />
                  <div className="number"><span>{Number(sessionStorage.getItem('mess'))>=999?'...':sessionStorage.getItem('mess')}</span></div>
                </div>
              </div>
              <div className="lvyue">场地履约率：{this.state.gerVenueName.rate}%</div>
            </div>
          </Header>
         
        <div className="xian"></div>
          <Content style={{
            background: '#fff',
           
          }}>
            <div className={this.state.path !== '/home' ? 'homePageT' : 'homePage'} >
              <span className="title" style={this.state.nookod !== '' ? { opacity: '1' } : { opacity: '0' }}>{this.state.nookod}! 欢迎使用找对手场馆端</span>
              <div style={{ height: 8, background: '#F5F5F5', width: '100%' }}></div>
              <div className="divContent">
                <div onClick={this.income}>
                  <div className="left"><span>本月收入</span><span>￥{this.state.getVenue.month_money}</span></div>
                  <div className="right"><img src={require("../../assets/icon_pc_money.png")} alt="icon" /></div>
                </div>
                <div onClick={this.daysIncome}>
                  <div className="left"><span>今日收入</span><span>￥{this.state.getVenue.today_money}</span></div>
                  <div className="right" ><img src={require("../../assets/icon_pc_money.png")} alt="icon" /></div>
                </div>
                <div onClick={this.mounthOrderTwo}>
                  <div className="left"><span>本月成功预约</span><span>{this.state.getVenue.month_count}单</span></div>
                  <div className="right"><img src={require("../../assets/icon_pc_biji.png")} alt="icon" /></div>
                </div>
                <div onClick={this.mounthOrder}>
                  <div className="left"><span>今日成功预约</span><span>{this.state.getVenue.today_count}单</span></div>
                  <div className="right"><img src={require("../../assets/icon_pc_biji.png")} alt="icon" /></div>
                </div>
                <div onClick={this.lppd}> 
                  <div className="left"><span style={{ marginTop: '20%' }}>场馆评分{this.state.getVenue.score}分</span>
                    <div className="xing">
                      <img src={this.state.getVenue.score >= 1 ? require('../../assets/50xing (3).png') : require('../../assets/oneXing.png') && this.state.getVenue.score < 1 && this.state.getVenue.score > 0 ? require('../../assets/50xing (1).png') : require('../../assets/oneXing.png')} alt="666" />
                      <img src={this.state.getVenue.score >= 2 ? require('../../assets/50xing (3).png') : require('../../assets/oneXing.png') && this.state.getVenue.score < 2 && this.state.getVenue.score > 1 ? require('../../assets/50xing (1).png') : require('../../assets/oneXing.png')} alt="666" />
                      <img src={this.state.getVenue.score >= 3 ? require('../../assets/50xing (3).png') : require('../../assets/oneXing.png') && this.state.getVenue.score < 3 && this.state.getVenue.score > 2 ? require('../../assets/50xing (1).png') : require('../../assets/oneXing.png')} alt="666" />
                      <img src={this.state.getVenue.score >= 4 ? require('../../assets/50xing (3).png') : require('../../assets/oneXing.png') && this.state.getVenue.score < 4 && this.state.getVenue.score > 3 ? require('../../assets/50xing (1).png') : require('../../assets/oneXing.png')} alt="666" />
                      <img src={this.state.getVenue.score >= 5 ? require('../../assets/50xing (3).png') : require('../../assets/oneXing.png') && this.state.getVenue.score < 5 && this.state.getVenue.score > 4 ? require('../../assets/50xing (1).png') : require('../../assets/oneXing.png')} alt="666" />
                    </div>
                  </div>
                  <div className="right"><img src={require("../../assets/icon_pc_xingxin.png")} alt="icon" /></div>
                </div>
              </div>
            </div>
            <Route path="/home/homePage" component={homePage} />
            <Route path="/home/information" component={information} />
            <Route path="/home/siteSettings" component={siteSettings} />
            <Route path="/home/preferential" component={preferentialTwo} />
            <Route path="/home/stadiums" component={stadiums} />
            <Route path="/home/systemSettings" component={systemSettings} />
            <Route path="/home/myWallet" component={myWallet} />
            <Route path="/home/comment" component={comment} />
            <Route path="/home/news" component={news} />
            <Route path="/home/closeYu" component={closeYu} />
            <Route path="/home/appointmentList" component={appointmentList} />
            <Route path="/home/special" component={special} />

          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default home;