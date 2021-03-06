import React from 'react';
import './siteSettings.css';
import 'antd/dist/antd.css';
import { getSiteSettingList, addVenueField, getVenueSport, AddSiteSetting, DelSiteSetting, getVenueSportidTitle, VenueRelatSave, getSiteSettinglevelSetup,getSiteSettinglevelEdit, getSiteSettinglevelPrice, getSiteMemberlevelDel, getSiteAddMember, getSiteSelectMemberlevel, getVenueRelatList, getSiteSettingList_member, VenueRelatRelieve, getLabelRelatVenueNumber, DelVenueTitle, getSpecialDaysForVenue, SiteSettingDiscountSave, getSiteSettingHistoryList, getVenueNumberTitleFirst, getSiteSettingFirst, getSiteSelectedTitle, DelVenueNumberTitle, getSiteSelectedVenueid, getVenueTitleSave, getVenueNumberTitleSave, getVenueNumberTitleList, DelSiteSettingDiscount } from '../../api';
import { Select, Row, Col, Modal, Input, message, Pagination, Popconfirm, Divider, Popover, Spin, Drawer, InputNumber, Calendar, Form, Button } from 'antd';
import { PlusOutlined, CloseCircleOutlined } from '@ant-design/icons';
import 'moment/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';
const { Option } = Select;
const { TextArea } = Input;









class siteSettings extends React.Component {


  state = {
    visible: false,
    ListSport: [],
    list: [],
    runId: '',//场地类型id
    runIdTwo: '',//场地类型id设置价格
    runName: '',//场地类型名称
    tags: '',
    openday: '',//营业时间段Id
    opendayname: '',//营业时间端名称
    starttime: '',//开始时间
    endtime: '',//结束时间
    costperhour_cg: '',//价格
    number: 1,//数量
    maxScheduledDate_cg: '',//最长可预定日期、
    appointmenttime_cg: '',//最短可提前预定时间
    comment: '',//备注
    loading: true,//加载
    Disid: '',
    hidden: '',
    other: 0,
    page: 1,
    deletUid: 0,
    maxScheduledDate_cgName: [],
    siteEditor: 0,//场地设置打开修改
    headerData: '1',
    joinXi: false,
    joinTil: [],
    items: ['jack', 'lucy'],
    name: '',
    joinB: true,
    serialNumber: false,
    arrNum: [],
    arrCheked: [],//选择完的场地
    arrChekedLen: 0,//选择场地的数量
    interpretation: false,
    nameChang: '',
    joinXiList: [],
    otherseris: 0,
    venNumid: '',
    confirmserisa: '',
    nosubdivisions: false,
    selecdTil: [],
    arrTitle: [],
    tagsTwo: '',
    chekedTwo: '',
    chekedTwoLen: 0,
    tagsTwoId: '',
    tags_type: '',
    arrJoinTil: [],
    moneyId: '',
    pageOne: 1,
    Preferential: false,
    firstList: '',
    arrNumTwo: [],
    siteListId: '',
    typeList: null,
    chekedThree: '',
    discount_edate: null,
    discount_end: null,
    discount_sdate: null,
    discount_start: null,
    typeDetel: 0,
    tooltip: false,
    update: 0,
    chekedFour: [],
    lppd: 0,
    lppding: true,
    titleDel: '',
    timer: [{ name: '00:00' }, { name: '00:30' }, { name: '01:00' }, { name: '01:30' }, { name: '02:00' }, { name: '02:30' }, { name: '03:00' }, { name: '03:30' }, { name: '04:00' }, { name: '04:30' }, { name: '05:00' }, { name: '05:30' }, { name: '06:00' }, { name: '06:30' }, { name: '07:00' }, { name: '07:30' }, { name: '08:00' }, { name: '08:30' }, { name: '09:00' }, { name: '09:30' }, { name: '10:00' }, { name: '10:30' }, { name: '11:00' }, { name: '11:30' }, { name: '12:00' }, { name: '12:30' }, { name: '13:00' }, { name: '13:30' }, { name: '14:00' }, { name: '14:30' }, { name: '15:00' }, { name: '15:30' }, { name: '16:00' }, { name: '16:30' }, { name: '17:00' }, { name: '17:30' }, { name: '18:00' }, { name: '18:30' }, { name: '19:00' }, { name: '19:30' }, { name: '20:00' }, { name: '20:30' }, { name: '21:00' }, { name: '21:30' }, { name: '22:00' }, { name: '22:30' }, { name: '23:00' }, { name: '23:30' }, { name: '24:00' }],
    timerTwo: [{ name: '00:00' }, { name: '01:00' }, { name: '02:00' }, { name: '03:00' }, { name: '04:00' }, { name: '05:00' }, { name: '06:00' }, { name: '07:00' }, { name: '08:00' }, { name: '09:00' }, { name: '10:00' }, { name: '11:00' }, { name: '12:00' }, { name: '13:00' }, { name: '14:00' }, { name: '15:00' }, { name: '16:00' }, { name: '17:00' }, { name: '18:00' }, { name: '19:00' }, { name: '20:00' }, { name: '21:00' }, { name: '22:00' }, { name: '23:00' }, { name: '24:00' }],
    open: false,
    historyArr: [],
    pageThree: 1,
    pageFour: 1,
    detail: false,
    deData: [],
    dateArr: [],
    appointmenttime_cgTwo: '',
    ListSportTwoLO: [{ name: '半场', id: 1 }, { name: '散场', id: 2 }, { name: '全场', id: 5 }],
    ListSportThreeLO: [{ name: '按时(收费)', id: 3 }, { name: '按次(收费)', id: 4 }],
    typeTwo: 0,
    you: [],
    timeFalg: true,
    timeLimit: 1,
    timeLimitTwo: 1,
    selectDA: '',
    indexBtnSon: '0',
    workingDayList: [],
    relatedness: false,
    relatednessRunid: '',
    connected: false,
    connectedName: '',
    connectedOne: '',
    connectedOneLen: 0,
    relatednessRunidTwo: '',
    connectedTwo: false,
    connectedNameTwo: '',
    connectedOneTwo: '',
    connectedOneLenTwo: 0,
    relatList: [],
    otherFour: 1,
    relatUuid: '',
    sportArrTwoSo: [
      { name: '羽毛球', id: 1 },
      { name: '乒乓球', id: 2 },
      { name: '台球中式黑八', id: 3 },
      { name: '台球美式九球', id: 4 },
      { name: '台球斯诺克', id: 5 },
      { name: '篮球（全场）', id: 6 },
      { name: '篮球（半场）', id: 15 },
      { name: '足球11人制', id: 7 },
      { name: '足球8人制', id: 8 },
      { name: '足球7人制', id: 9 },
      { name: '足球6人制', id: 13 },
      { name: '足球9人制', id: 14 },
      { name: '足球5人制', id: 10 },
      { name: '排球', id: 11 },
      { name: '网球', id: 12 }
    ],
    sportArrTwoBe: [
      { name: '羽毛球', id: 1 },
      { name: '乒乓球', id: 2 },
      { name: '台球中式黑八', id: 3 },
      { name: '台球美式九球', id: 4 },
      { name: '台球斯诺克', id: 5 },
      { name: '篮球（半场）', id: 6 },
      { name: '足球11人制', id: 7 },
      { name: '足球8人制', id: 8 },
      { name: '足球9人制', id: 14 },
      { name: '足球7人制', id: 9 },
      { name: '足球6人制', id: 13 },
      { name: '足球5人制', id: 10 },
      { name: '排球', id: 11 },
      { name: '网球', id: 12 }
    ],
    commentTitle: '',
    public: 1,
    memberList: [],
    memberListPage: 1,
    vipPrice: false,
    levelSetup: [],
    joinVipTitle: false,
    vipGrade: '1',
    levelList: [],
    memberLevel: [],
    levelSetupList: [],
    levelSetupid: '',
    lookDetails: false,
    lookDetailsList: [],
    flag:false,
  };
  async getVenueSport(data) {
    const res = await getVenueSport(data, sessionStorage.getItem('venue_token'))
    if (res.data.code === 4001) {
      this.props.history.push('/')
      message.error('登录超时请重新登录!')
    }
    this.setState({ ListSport: res.data.data })
  }





  async getSiteSettingList(data) {
    const res = await getSiteSettingList(data, sessionStorage.getItem('venue_token'))
    if (res.data.code === 2000) {
      for (let i in res.data.data) {
        if (res.data.data[i].maxScheduledDate_cg === '0.1') {
          res.data.data[i].maxScheduledDateTwo = '1周'
        } else if (res.data.data[i].maxScheduledDate_cg === '0.2') {
          res.data.data[i].maxScheduledDateTwo = '2周'
        } else if (res.data.data[i].maxScheduledDate_cg === '0.3') {
          res.data.data[i].maxScheduledDateTwo = '3周'
        } else if (res.data.data[i].maxScheduledDate_cg === '1') {
          res.data.data[i].maxScheduledDateTwo = '1个月'
        } else if (res.data.data[i].maxScheduledDate_cg === '2') {
          res.data.data[i].maxScheduledDateTwo = '2个月'
        }
      }

      for (let i in res.data.data) {
        res.data.data[i].opendaynameTwo = ''
        if (res.data.data[i].openday.split(',').indexOf('1') !== -1) {
          res.data.data[i].opendaynameTwo = res.data.data[i].opendaynameTwo + ',周一'
        } if (res.data.data[i].openday.split(',').indexOf('2') !== -1) {
          res.data.data[i].opendaynameTwo = res.data.data[i].opendaynameTwo + ',周二'
        } if (res.data.data[i].openday.split(',').indexOf('3') !== -1) {
          res.data.data[i].opendaynameTwo = res.data.data[i].opendaynameTwo + ',周三'
        } if (res.data.data[i].openday.split(',').indexOf('4') !== -1) {
          res.data.data[i].opendaynameTwo = res.data.data[i].opendaynameTwo + ',周四'
        } if (res.data.data[i].openday.split(',').indexOf('5') !== -1) {
          res.data.data[i].opendaynameTwo = res.data.data[i].opendaynameTwo + ',周五'
        } if (res.data.data[i].openday.split(',').indexOf('6') !== -1) {
          res.data.data[i].opendaynameTwo = res.data.data[i].opendaynameTwo + ',周六'
        } if (res.data.data[i].openday.split(',').indexOf('7') !== -1) {
          res.data.data[i].opendaynameTwo = res.data.data[i].opendaynameTwo + ',周日'
        }
      }

      this.setState({ list: res.data.data, other: res.data.other, loading: false, hidden: true, lppding: false })
    } else if (res.data.code === 4001) {
      this.props.history.push('/')
      message.error('登录超时请重新登录！')
    } else {
      this.setState({ list: res.data.data, loading: false, hidden: false, lppding: false })
    }
  }






  componentDidMount() {


    this.getVenueSport()
    this.getSiteSettingList({ sportid: this.state.nameChang, page: this.state.page })
    this.getSiteSettingHistoryList({ sportid: this.state.nameChang, page: 1 })
    this.getVenueRelatList({ sportid: this.state.nameChang, page: 1 })
    this.getSiteSettingList_member({ sportid: this.state.nameChang, page: 1, sid: sessionStorage.getItem('siteuid') })

    sessionStorage.setItem('siteSettings', '')
    if (this.state.runId !== '') {
      this.setState({
        joinB: false
      })
    }
    let arrNum = []
    for (let i = 1; i <= 100; i++) {
      let p = {
        id: i, cheked: false
      }
      arrNum.push(p)
    }
    this.setState({
      arrNum: arrNum,
      headerData: sessionStorage.getItem('headerData')
    })
    this.getVenueNumberTitleList({ sportid: this.state.nameChang })
  }

  nameChang = e => {
    this.setState({
      nameChang: e
    })
    if (this.state.headerData === '1') {
      this.setState({ pageOne: 1 })
      this.getVenueNumberTitleList({ sportid: e, page: 1 })
    } else if (this.state.headerData === '2') {

      this.getSiteSettingList_member({ sportid: e, page: this.state.memberListPage, sid: sessionStorage.getItem('siteuid') })

      this.setState({ page: 1, memberListPage: 1 })
      this.getSiteSettingList({ sportid: e, page: 1 })


    } else if (this.state.headerData === '3') {
      this.setState({ pageThree: 1 })
      this.getSiteSettingHistoryList({ sportid: e, page: 1 })
    } else if (this.state.headerData === '4') {
      this.setState({ pageFour: 1 })
      this.getVenueRelatList({ sportid: e, page: 1 })
    }
  }



  handleOk = e => {
    this.setState({
      visible: false,
      update: 0
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false, update: 0, Disid: '', lookDetails: false,
      // runIdTwo: '', tagsTwo: '', opendayname: '', openday: '', starttime: '',
      // endtime: '', costperhour: '', chekedTwo: '', chekedTwoLen: 0, appointmenttime_cg: '',
      // tagsTwoId: '', comment: '', maxScheduledDate_cg: '', maxScheduledDate_cgName: [], runNameTwo: '', Disid: ''   用于价格设置弹窗清空
    })
  }
  handleChangeOne = e => {
    this.setState({ runId: e, joinB: false, tags: '', typeTwo: 0 })
    if (e === 6) {
      this.setState({
        ListSportTwoLO: [{ name: '半场', id: 1 }, { name: '散场', id: 2 }, { name: '全场', id: 5 }]
      })
    } else if (e === 2) {
      this.setState({
        ListSportTwoLO: [{ name: '按时(收费)', id: 3 }, { name: '按次(收费)', id: 4 }]
      })
    }
    this.getVenueSportidTitle({ sportid: e })
    let day = ''
    switch (parseInt(e)) {
      case 1:
        day = "羽毛球";
        break;
      case 2:
        day = "乒乓球";
        break;
      case 3:
        day = "台球中式黑八";
        break;
      case 4:
        day = "台球美式九球";
        break;
      case 5:
        day = "台球斯诺克";
        break;
      case 6:
        day = "篮球";
        break;
      case 7:
        day = "足球11人制";
        break;
      case 8:
        day = "足球8人制";
        break;
      case 9:
        day = "足球7人制";
        break;
      case 10:
        day = "足球5人制";
        break;
      case 11:
        day = "排球";
        break;
      case 12:
        day = "网球";
        break;
      case 13:
        day = "足球6人制";
        break;
      case 14:
        day = "足球9人制";
        break;

      default:
        day = "";
    }
    this.setState({ runName: day })
  }


  handleChangeOneTwo = e => {
    this.getSiteSelectedTitle({ sportid: e })
    this.setState({ runIdTwo: e, joinB: false, tagsTwo: '', chekedTwo: '', chekedTwoLen: 0 })
    this.getVenueSportidTitle({ sportid: e })
    let day = ''
    switch (parseInt(e)) {
      case 1:
        day = "羽毛球";
        break;
      case 2:
        day = "乒乓球";
        break;
      case 3:
        day = "台球中式黑八";
        break;
      case 4:
        day = "台球美式九球";
        break;
      case 5:
        day = "台球斯诺克";
        break;
      case 6:
        day = "篮球";
        break;
      case 7:
        day = "足球11人制";
        break;
      case 8:
        day = "足球8人制";
        break;
      case 9:
        day = "足球7人制";
        break;
      case 10:
        day = "足球5人制";
        break;
      case 11:
        day = "排球";
        break;
      case 12:
        day = "网球";
        break;
      case 13:
        day = "足球6人制";
        break;
      case 14:
        day = "足球9人制";
        break;
      default:
        day = "";
    }
    this.setState({ runNameTwo: day })
  }



  handleChangeTwo = e => {
    if (typeof (e) === 'object') {
      this.setState({ openday: e })
    } else {
      this.setState({ openday: parseInt(e) })
      let day = ''
      switch (parseInt(e)) {
        case 1:
          day = "周一";
          break;
        case 2:
          day = "周二";
          break;
        case 3:
          day = "周三";
          break;
        case 4:
          day = "周四";
          break;
        case 5:
          day = "周五";
          break;
        case 6:
          day = "周六";
          break;
        case 7:
          day = "周日";
          break;
        default:
          day = "";
      }
      this.setState({ opendayname: day })
    }
  }

  handleChangThree = (time, timeString) => {
    this.setState({
      starttime: timeString[0],
      endtime: timeString[1]
    })
  }
  starttime = e => {
    this.setState({
      starttime: e
    })
  }
  endtime = e => {
    if (this.state.starttime === e) {
      message.error('开始时间不能等于结束时间')
      this.setState({ endtime: '' })
    } else {
      this.setState({ endtime: e })
    }
  }


  money = e => {
    this.setState({ costperhour_cg: e })
  }
  moneyTwo = e => {
    this.setState({ costperhourTwo: e.target.value })
  }
  handleChangeFour = e => {
    this.setState({ maxScheduledDate_cg: e })
    let dayTwo = ''
    switch (e) {
      case '0.1':
        dayTwo = "一周";
        break;
      case '0.2':
        dayTwo = "两周";
        break;
      case '0.3':
        dayTwo = "三周";
        break;
      case '1':
        dayTwo = "一个月";
        break;
      case '2':
        dayTwo = "两个月";
        break;
      default:
        dayTwo = "请选择";
    }
    this.setState({ maxScheduledDate_cgName: dayTwo })
  }
  handleChangeFive = e => {
    if (this.state.maxScheduledDate_cg === '') {
      message.warning('请选择最长提前预订时间')
    } else if (this.state.maxScheduledDate_cg === '0.1' && parseInt(e) > 10080) {
      message.warning('最短提前预订时间超出最长提前预订时间范围')
    } else if (this.state.maxScheduledDate_cg === '0.2' && parseInt(e) > 20160) {
      message.warning('最短提前预订时间超出最长提前预订时间范围')
    } else {
      this.setState({ appointmenttime_cg: parseInt(e) })
    }

  }
  textArea = e => {
    this.setState({ comment: e.target.value })
  }

  jian = () => {
    if (this.state.number > 0) {
      this.setState({ number: this.state.number - 1 })
    }
  }

  jia = () => {
    if (this.state.number < 100) {
      this.setState({ number: this.state.number + 1 })
    }
  }

  async addVenueField(data) {
    const res = await addVenueField(data, sessionStorage.getItem('venue_token'))
    if (res.data.code !== 2000) {
      message.error(res.data.msg)
    } else if (res.data.code === 4001) {
      this.props.history.push('/')
      message.error('登录超时请重新登录!')
    } else {
      this.setState({
        visible: false,
        update: 0,
      })
      this.getSiteSettingList({ sportid: this.state.nameChang, page: this.state.page })
    }
  }



  async AddSiteSetting(data) {
    const res = await AddSiteSetting(data, sessionStorage.getItem('venue_token'))
    if (res.data.code === 2000) {
      this.getSiteSettingList({ sportid: this.state.nameChang, page: this.state.page })
      this.setState({
        visible: false, update: 0, Disid: '', selectDA: ''
      })
    } else if (res.data.code === 4001) {
      this.props.history.push('/')
      message.error('登录超时请重新登录!')
    } else {
      message.error(res.data.msg)
    }
  }

  submit = (e) => {
    let { runIdTwo, runNameTwo, tagsTwo, openday, selectDA, starttime, timeLimit, timeLimitTwo, endtime, costperhour_cg, chekedTwo, chekedTwoLen, maxScheduledDate_cg, appointmenttime_cg, comment, tagsTwoId, tags_type } = this.state
    if (runIdTwo === '') {
      message.warning('请选择场地类型')
    } else if (tagsTwo === '') {
      message.warning('请选择细分标签类型')
    } else if (tagsTwo.indexOf('散场') === -1 && tagsTwo.indexOf('按次') === -1 && openday.length === 0) {
      message.warning('请选择星期')
    } else if (starttime === '') {
      message.warning('请选择时间范围（开始时间）')
    } else if (endtime === '') {
      message.warning('请选择时间范围（结束时间）')
    } else if (costperhour_cg === '' || costperhour_cg === null) {
      message.warning('请填写价格')
    } else if (maxScheduledDate_cg === '') {
      message.warning('请选择最长可预订日期')
    } else if (appointmenttime_cg === '') {
      message.warning('请选择最短提前预订时间')
    } else {
      let obj = {
        uuid: e.currentTarget.dataset.uuid,
        sportid: runIdTwo,
        sportname: runNameTwo,
        tags: tagsTwo,
        openday: tagsTwo.indexOf('散场') !== -1 || tagsTwo.indexOf('按次') !== -1 ? '1,2,3,4,5,6,7' : typeof (openday) === 'string' ? openday : openday.join(','),
        opendayname: '',
        starttime: starttime,
        endtime: endtime,
        costperhour_cg: Number(costperhour_cg).toFixed(2),
        venueid: chekedTwo,
        sitenumber: chekedTwoLen,
        maxScheduledDate_cg: maxScheduledDate_cg,
        appointmenttime_cg: appointmenttime_cg === -1 ? 0 : appointmenttime_cg,
        comment: comment,
        tags_id: tagsTwoId,
        tags_type: tags_type,
        timelimit: timeLimit,
        durationlimit: timeLimitTwo,
        priceunit: selectDA
      }
      this.AddSiteSetting(obj)
    }
  }




  update = e => {
    this.setState({
      visible: true,
      update: 1
    });

    this.getSiteSettingFirst({ uuid: e.currentTarget.dataset.uid })
  }



  async getSiteSettingFirst(data) {
    const res = await getSiteSettingFirst(data, sessionStorage.getItem('venue_token'))
    if (res.data.code === 2000) {
      let attop = []
      if (res.data.data[0].openday.split(',').indexOf('1') !== -1) {
        attop.push('周一')
      } if (res.data.data[0].openday.split(',').indexOf('2') !== -1) {
        attop.push('周二')
      } if (res.data.data[0].openday.split(',').indexOf('3') !== -1) {
        attop.push('周三')
      } if (res.data.data[0].openday.split(',').indexOf('4') !== -1) {
        attop.push('周四')
      } if (res.data.data[0].openday.split(',').indexOf('5') !== -1) {
        attop.push('周五')
      } if (res.data.data[0].openday.split(',').indexOf('6') !== -1) {
        attop.push('周六')
      } if (res.data.data[0].openday.split(',').indexOf('7') !== -1) {
        attop.push('周日')
      }
      let dayTwo = ''
      switch (res.data.data[0].maxScheduledDate_cg) {
        case '0.1':
          dayTwo = "一周";
          break;
        case '0.2':
          dayTwo = "两周";
          break;
        case '0.3':
          dayTwo = "三周";
          break;
        case '1':
          dayTwo = "一个月";
          break;
        case '2':
          dayTwo = "两个月";
          break;
        default:

          dayTwo = "请选择";
      }
      this.setState({ maxScheduledDate_cgName: dayTwo })
      if (res.data.data[0].tags.indexOf('散') !== -1) {
        this.setState({ timeFalg: 'no', starttime: '00:00', endtime: '24:00', })
      } else if (res.data.data[0].tags.indexOf('按次') !== -1) {
        this.setState({ timeFalg: 'yes', starttime: '00:00', endtime: '24:00', })
      } else if (res.data.data[0].tags.indexOf('散') !== -1 || res.data.data[0].tags.indexOf('按次') !== -1) {
        this.setState({ appointmenttime_cg: res.data.data[0].appointmenttime_cg, starttime: '00:00', endtime: '24:00', timeFalg: false })
      } else {
        this.setState({ appointmenttime_cg: res.data.data[0].appointmenttime_cg, starttime: res.data.data[0].starttime, endtime: res.data.data[0].endtime, timeFalg: true })
      }
      this.setState({
        runId: res.data.data[0].sportid, tags: res.data.data[0].tags,
        discount_sdate: res.data.data[0].discount_sdate, discount_edate: res.data.data[0].discount_edate, discount_start: res.data.data[0].discount_start,
        discount_end: res.data.data[0].discount_end, costperhourTwo: res.data.data[0].discount_costperhour_cg === null ? res.data.data[0].costperhour_cg.slice(0, res.data.data[0].costperhour_cg.indexOf('.')) : res.data.data[0].discount_costperhour_cg.slice(0, res.data.data[0].discount_costperhour_cg.indexOf('.')),
        runIdTwo: res.data.data[0].sportid, tagsTwo: res.data.data[0].tags, opendayname: attop, openday: res.data.data[0].openday.split(','), starttime: res.data.data[0].starttime,
        costperhour_cg: res.data.data[0].costperhour_cg.slice(0, res.data.data[0].costperhour_cg.indexOf('.')), chekedTwo: res.data.data[0].venueid, chekedFour: res.data.data[0].venueid, chekedThree: res.data.data[0].venueid !== null ? res.data.data[0].venueid : res.data.data[0].venueid, chekedTwoLen: res.data.data[0].sitenumber, appointmenttime_cg: res.data.data[0].appointmenttime_cg,
        tagsTwoId: res.data.data[0].tags_id, tags_type: res.data.data[0].tags_type, comment: res.data.data[0].comment, maxScheduledDate_cg: res.data.data[0].maxScheduledDate_cg, runNameTwo: res.data.data[0].sportname, Disid: res.data.data[0].uuid, appointmenttime_cgTwo: res.data.data[0].discount_appointment_cg === null ? 0 : res.data.data[0].discount_appointment_cg, workingDayList: res.data.data[0].discount_date === null ? [] : res.data.data[0].discount_date.split(','),
        timeLimit: res.data.data[0].timelimit, timeLimitTwo: res.data.data[0].durationlimit, selectDA: res.data.data[0].priceunit,
      })
      if (this.state.runIdTwo !== '') {
        this.getVenueSportidTitle({ sportid: this.state.runIdTwo })
        this.getSiteSelectedTitle({ sportid: this.state.runIdTwo })
      }
    } else if (res.data.code === 4001) {
      this.props.history.push('/')
      message.error('登录超时请重新登录!')
    }

  }

  delet = e => {
    this.setState({ deletUid: e.target.dataset.uid })
  }

  deletTwoMoney = e => {
    this.setState({
      moneyId: e.currentTarget.dataset.uuid
    })
  }
  current = (page, pageSize) => {
    this.setState({ page: page })
    this.getSiteSettingList({ sportid: this.state.nameChang, page: page })
  }
  recordListOther = (page, pageSize) => {
    this.setState({ pageOne: page })
    this.getVenueNumberTitleList({ sportid: this.state.nameChang, page: page })
  }


  async getSiteSettingHistoryList(data) {
    const res = await getSiteSettingHistoryList(data, sessionStorage.getItem('venue_token'))

    if (res.data.code === 2000) {
      for (let i in res.data.data) {
        if (res.data.data[i].maxScheduledDate === '0.1') {
          res.data.data[i].maxScheduledDateTwo = '1周'
        } else if (res.data.data[i].maxScheduledDate === '0.2') {
          res.data.data[i].maxScheduledDateTwo = '2周'
        } else if (res.data.data[i].maxScheduledDate === '0.3') {
          res.data.data[i].maxScheduledDateTwo = '3周'
        } else if (res.data.data[i].maxScheduledDate === '1') {
          res.data.data[i].maxScheduledDateTwo = '1个月'
        } else if (res.data.data[i].maxScheduledDate === '2') {
          res.data.data[i].maxScheduledDateTwo = '2个月'
        }
      }
    }
    for (let i in res.data.data) {
      res.data.data[i].opendaynameTwo = ''
      if (res.data.data[i].openday.split(',').indexOf('1') !== -1) {
        res.data.data[i].opendaynameTwo = res.data.data[i].opendaynameTwo + ',周一'
      } if (res.data.data[i].openday.split(',').indexOf('2') !== -1) {
        res.data.data[i].opendaynameTwo = res.data.data[i].opendaynameTwo + ',周二'
      } if (res.data.data[i].openday.split(',').indexOf('3') !== -1) {
        res.data.data[i].opendaynameTwo = res.data.data[i].opendaynameTwo + ',周三'
      } if (res.data.data[i].openday.split(',').indexOf('4') !== -1) {
        res.data.data[i].opendaynameTwo = res.data.data[i].opendaynameTwo + ',周四'
      } if (res.data.data[i].openday.split(',').indexOf('5') !== -1) {
        res.data.data[i].opendaynameTwo = res.data.data[i].opendaynameTwo + ',周五'
      } if (res.data.data[i].openday.split(',').indexOf('6') !== -1) {
        res.data.data[i].opendaynameTwo = res.data.data[i].opendaynameTwo + ',周六'
      } if (res.data.data[i].openday.split(',').indexOf('7') !== -1) {
        res.data.data[i].opendaynameTwo = res.data.data[i].opendaynameTwo + ',周日'
      }
    }

    this.setState({ historyArr: res.data.data, otherThree: res.data.other })
  }

  pageThree = (page, pageSize) => {
    this.setState({ pageThree: page })
    this.getSiteSettingHistoryList({ sportid: this.state.nameChang, page: page })
  }

  pageFour = (page, pageSize) => {
    this.setState({ pageFour: page })
    this.getVenueRelatList({ sportid: this.state.nameChang, page: page })
  }



  headerCli = e => {
    if (e.currentTarget.dataset.id === '2') {
      this.getSiteSettingList({ sportid: this.state.nameChang, page: 1 })
      this.setState({ page: 1 })
    } else if (e.currentTarget.dataset.id === '1') {
      this.getVenueNumberTitleList({ sportid: this.state.nameChang, page: 1 })
      this.setState({ pageOne: 1 })
    } else if (e.currentTarget.dataset.id === '3') {
      this.setState({ pageThree: 1 })
      this.getSiteSettingHistoryList({ sportid: this.state.nameChang, page: 1 })
    } else if (e.currentTarget.dataset.id === '4') {
      this.setState({ pageFour: 1 })
      this.getVenueRelatList({ sportid: this.state.nameChang, page: 1 })
    }
    this.setState({
      headerData: e.currentTarget.dataset.id,
    })
    sessionStorage.setItem('headerData', e.currentTarget.dataset.id)
  }
  handlejoinXi = () => {
    this.setState({
      joinXi: false,
      typeDetel: 0,
      lppd: 0,
      relatedness: false,

    })
  }

  onNameChange = event => {

    this.setState({
      name: event.target.value,
    })
  };
  async getVenueSportidTitle(data) {
    const res = await getVenueSportidTitle(data, sessionStorage.getItem('venue_token'))
    // if (res.data.data.length === 0 && this.state.headerData === '2') {
    //   this.setState({
    //     nosubdivisions: true
    //   })
    // }
    let arrJoinTil = []
    for (let i in res.data.data) {
      arrJoinTil.push(res.data.data[i].title)
    }

    const arrTo = [{ title: '普通', uuid: 1 }, { title: 'VIP', uuid: 1 }]

    this.setState({
      joinTil: [...arrTo, ...res.data.data]
    })

    this.setState({ arrJoinTil: arrJoinTil, name: '', })
  }



  async getVenueTitleSave(data) {
    const res = await getVenueTitleSave(data, sessionStorage.getItem('venue_token'))
    if (res.data.code === 2000) {
      this.getVenueSportidTitle({ sportid: this.state.runId })
    } else if (res.data.code === 4002) {
      message.warning('请选择场地类型')
    } else {
      message.warning(res.data.msg)
    }
  }


  addItem = () => {
    const { name } = this.state;
    if (name === '') {
      message.warning('请输入标签')
    } else if (name.replace(/\s*/g, "") === '普通') {
      message.warning('该标签已存在')
    } else if (name.replace(/\s*/g, "").toUpperCase() === 'VIP') {
      message.warning('该标签已存在')
    } else if (name === '半场' || name === '散场' || name === '按次' || name === '按时') {
      message.warning('该标签不可设置')
    } else {
      this.getVenueTitleSave({ sportid: this.state.runId, title: name })
    }
  }


  title = e => {
    this.setState({
      tags: e
    })
  }
  serial = () => {
    if (this.state.runId === '') {
      message.error('请选择场地类型')
    } else {
      if (this.state.runId === 6 || this.state.runId === 2) {
        if (this.state.typeTwo === 0) {
          message.error('请选择收费类型')
        } else if (this.state.tags === '') {
          message.error('请选择细分标签')
        } else {
          if (this.state.typeTwo === 1) {
            this.setState({
              arrNum: [
                { id: '1A', cheked: false, num: 0 },
                { id: '1B', cheked: false, num: 1 },
                { id: '2A', cheked: false, num: 2 },
                { id: '2B', cheked: false, num: 3 },
                { id: '3A', cheked: false, num: 4 },
                { id: '3B', cheked: false, num: 5 },
                { id: '4A', cheked: false, num: 6 },
                { id: '4B', cheked: false, num: 7 },
                { id: '5A', cheked: false, num: 8 },
                { id: '5B', cheked: false, num: 9 },
                { id: '6A', cheked: false, num: 10 },
                { id: '6B', cheked: false, num: 11 },
                { id: '7A', cheked: false, num: 12 },
                { id: '7B', cheked: false, num: 13 },
                { id: '8A', cheked: false, num: 14 },
                { id: '8B', cheked: false, num: 15 },
                { id: '9A', cheked: false, num: 16 },
                { id: '9B', cheked: false, num: 17 },
                { id: '10A', cheked: false, num: 18 },
                { id: '10B', cheked: false, num: 19 },
                { id: '11A', cheked: false, num: 20 },
                { id: '11B', cheked: false, num: 21 },
                { id: '12A', cheked: false, num: 22 },
                { id: '12B', cheked: false, num: 23 },
                { id: '13A', cheked: false, num: 24 },
                { id: '13B', cheked: false, num: 25 },
                { id: '14A', cheked: false, num: 26 },
                { id: '14B', cheked: false, num: 27 },
                { id: '15A', cheked: false, num: 28 },
                { id: '15B', cheked: false, num: 29 },
                { id: '16A', cheked: false, num: 30 },
                { id: '16B', cheked: false, num: 31 },
                { id: '17A', cheked: false, num: 32 },
                { id: '17B', cheked: false, num: 33 },
                { id: '18A', cheked: false, num: 34 },
                { id: '18B', cheked: false, num: 35 },
                { id: '19A', cheked: false, num: 36 },
                { id: '19B', cheked: false, num: 37 },
                { id: '20A', cheked: false, num: 38 },
                { id: '20B', cheked: false, num: 39 },
                { id: '21A', cheked: false, num: 40 },
                { id: '21B', cheked: false, num: 41 },
                { id: '22A', cheked: false, num: 42 },
                { id: '22B', cheked: false, num: 43 },
                { id: '23A', cheked: false, num: 44 },
                { id: '23B', cheked: false, num: 45 },
                { id: '24A', cheked: false, num: 46 }]

            })
          } else if (this.state.typeTwo === 2) {
            this.setState({
              arrNum: [
                { id: '1A', cheked: false, num: 0 },
                { id: '1B', cheked: false, num: 1 },
                { id: '2A', cheked: false, num: 2 },
                { id: '2B', cheked: false, num: 3 },
                { id: '3A', cheked: false, num: 4 },
                { id: '3B', cheked: false, num: 5 },
                { id: '4A', cheked: false, num: 6 },
                { id: '4B', cheked: false, num: 7 },
                { id: '5A', cheked: false, num: 8 },
                { id: '5B', cheked: false, num: 9 },
                { id: '6A', cheked: false, num: 10 },
                { id: '6B', cheked: false, num: 11 },
                { id: '7A', cheked: false, num: 12 },
                { id: '7B', cheked: false, num: 13 },
                { id: '8A', cheked: false, num: 14 },
                { id: '8B', cheked: false, num: 15 },
                { id: '9A', cheked: false, num: 16 },
                { id: '9B', cheked: false, num: 17 },
                { id: '10A', cheked: false, num: 18 },
                { id: '10B', cheked: false, num: 19 },
                { id: '11A', cheked: false, num: 20 },
                { id: '11B', cheked: false, num: 21 },
                { id: '12A', cheked: false, num: 22 },
                { id: '12B', cheked: false, num: 23 },
                { id: '13A', cheked: false, num: 24 },
                { id: '13B', cheked: false, num: 25 },
                { id: '14A', cheked: false, num: 26 },
                { id: '14B', cheked: false, num: 27 },
                { id: '15A', cheked: false, num: 28 },
                { id: '15B', cheked: false, num: 29 },
                { id: '16A', cheked: false, num: 30 },
                { id: '16B', cheked: false, num: 31 },
                { id: '17A', cheked: false, num: 32 },
                { id: '17B', cheked: false, num: 33 },
                { id: '18A', cheked: false, num: 34 },
                { id: '18B', cheked: false, num: 35 },
                { id: '19A', cheked: false, num: 36 },
                { id: '19B', cheked: false, num: 37 },
                { id: '20A', cheked: false, num: 38 },
                { id: '20B', cheked: false, num: 39 },
                { id: '21A', cheked: false, num: 40 },
                { id: '21B', cheked: false, num: 41 },
                { id: '22A', cheked: false, num: 42 },
                { id: '22B', cheked: false, num: 43 },
                { id: '23A', cheked: false, num: 44 },
                { id: '23B', cheked: false, num: 45 },
                { id: '24A', cheked: false, num: 46 },
                { id: '场地不固定', cheked: false, num: 47 }]
            })
          } else if (this.state.typeTwo === 3) {
            this.setState({
              arrNum: [
                { id: '1', cheked: false, num: 0 },
                { id: '2', cheked: false, num: 1 },
                { id: '3', cheked: false, num: 2 },
                { id: '4', cheked: false, num: 3 },
                { id: '5', cheked: false, num: 4 },
                { id: '6', cheked: false, num: 5 },
                { id: '7', cheked: false, num: 6 },
                { id: '8', cheked: false, num: 7 },
                { id: '9', cheked: false, num: 8 },
                { id: '10', cheked: false, num: 9 },
                { id: '11', cheked: false, num: 10 },
                { id: '12', cheked: false, num: 11 },
                { id: '13', cheked: false, num: 12 },
                { id: '14', cheked: false, num: 13 },
                { id: '15', cheked: false, num: 14 },
                { id: '16', cheked: false, num: 15 },
                { id: '17', cheked: false, num: 16 },
                { id: '18', cheked: false, num: 17 },
                { id: '19', cheked: false, num: 18 },
                { id: '20', cheked: false, num: 19 },
                { id: '21', cheked: false, num: 20 },
                { id: '22', cheked: false, num: 21 },
                { id: '23', cheked: false, num: 22 },
                { id: '24', cheked: false, num: 23 },
                { id: '25', cheked: false, num: 24 },
                { id: '26', cheked: false, num: 25 },
                { id: '27', cheked: false, num: 26 },
                { id: '28', cheked: false, num: 27 },
                { id: '29', cheked: false, num: 28 },
                { id: '30', cheked: false, num: 29 },
                { id: '31', cheked: false, num: 30 },
                { id: '32', cheked: false, num: 31 },
                { id: '33', cheked: false, num: 32 },
                { id: '34', cheked: false, num: 33 },
                { id: '35', cheked: false, num: 34 },
                { id: '36', cheked: false, num: 35 },
                { id: '37', cheked: false, num: 36 },
                { id: '38', cheked: false, num: 37 },
                { id: '39', cheked: false, num: 38 },
                { id: '40', cheked: false, num: 39 },
                { id: '41', cheked: false, num: 40 },
                { id: '42', cheked: false, num: 41 },
                { id: '43', cheked: false, num: 42 },
                { id: '44', cheked: false, num: 43 },
                { id: '45', cheked: false, num: 44 },
                { id: '46', cheked: false, num: 45 },
                { id: '47', cheked: false, num: 46 },]
            })

          } else if (this.state.typeTwo === 4) {
            this.setState({
              arrNum: [
                { id: '1', cheked: false, num: 0 },
                { id: '2', cheked: false, num: 1 },
                { id: '3', cheked: false, num: 2 },
                { id: '4', cheked: false, num: 3 },
                { id: '5', cheked: false, num: 4 },
                { id: '6', cheked: false, num: 5 },
                { id: '7', cheked: false, num: 6 },
                { id: '8', cheked: false, num: 7 },
                { id: '9', cheked: false, num: 8 },
                { id: '10', cheked: false, num: 9 },
                { id: '11', cheked: false, num: 10 },
                { id: '12', cheked: false, num: 11 },
                { id: '13', cheked: false, num: 12 },
                { id: '14', cheked: false, num: 13 },
                { id: '15', cheked: false, num: 14 },
                { id: '16', cheked: false, num: 15 },
                { id: '17', cheked: false, num: 16 },
                { id: '18', cheked: false, num: 17 },
                { id: '19', cheked: false, num: 18 },
                { id: '20', cheked: false, num: 19 },
                { id: '21', cheked: false, num: 20 },
                { id: '22', cheked: false, num: 21 },
                { id: '23', cheked: false, num: 22 },
                { id: '24', cheked: false, num: 23 },
                { id: '25', cheked: false, num: 24 },
                { id: '26', cheked: false, num: 25 },
                { id: '27', cheked: false, num: 26 },
                { id: '28', cheked: false, num: 27 },
                { id: '29', cheked: false, num: 28 },
                { id: '30', cheked: false, num: 29 },
                { id: '31', cheked: false, num: 30 },
                { id: '32', cheked: false, num: 31 },
                { id: '33', cheked: false, num: 32 },
                { id: '34', cheked: false, num: 33 },
                { id: '35', cheked: false, num: 34 },
                { id: '36', cheked: false, num: 35 },
                { id: '37', cheked: false, num: 36 },
                { id: '38', cheked: false, num: 37 },
                { id: '39', cheked: false, num: 38 },
                { id: '40', cheked: false, num: 39 },
                { id: '41', cheked: false, num: 40 },
                { id: '42', cheked: false, num: 41 },
                { id: '43', cheked: false, num: 42 },
                { id: '44', cheked: false, num: 43 },
                { id: '45', cheked: false, num: 44 },
                { id: '46', cheked: false, num: 45 },
                { id: '47', cheked: false, num: 46 },
                { id: '场地不固定', cheked: false, num: 47 }]
            })

          } else {
            let arrNum = []
            for (let i = 1; i <= 100; i++) {
              let p = {
                id: i, cheked: false
              }
              arrNum.push(p)

            }
            this.setState({
              arrNum: arrNum
            })
          }

          this.getSiteSelectedVenueid({ sportid: this.state.runId })
          this.setState({
            serialNumber: true
          })
        }
      } else {
        if (this.state.tags === '') {
          message.error('请选择细分标签')
        } else {
          let arrNum = []
          for (let i = 1; i <= 100; i++) {
            let p = {
              id: i, cheked: false
            }
            arrNum.push(p)
          }
          this.setState({
            serialNumber: true,
            arrNum: arrNum
          })
          this.getSiteSelectedVenueid({ sportid: this.state.runId })

        }
      }
    }

  }
  handleserialNumber = () => {
    this.setState({
      serialNumber: false
    })
  }

  handleserialNumberTwo = () => {
    this.setState({
      interpretation: false,
      serialNumberTwo: false,
      arrNumTwo: []
    })
  }

  seriaSon = e => {
    let { arrNum, runId } = this.state
    if (this.state.typeTwo === 1 || this.state.typeTwo === 2 || runId === 2) {
      if (arrNum[e.currentTarget.dataset.num].cheked === true) {
        arrNum[e.currentTarget.dataset.num].cheked = false
      } else if (arrNum[e.currentTarget.dataset.num].cheked === false) {
        arrNum[e.currentTarget.dataset.num].cheked = true
      }
      if (e.currentTarget.dataset.id === '场地不固定') {
        if (arrNum[47].cheked === true) {
          for (let i in arrNum) {
            arrNum[i].cheked = 'no'
            arrNum[47].cheked = true
          }
        } else {
          for (let i in this.state.arrNum) {
            arrNum[i].cheked = false
          }
          this.getSiteSelectedVenueidTwo({ sportid: this.state.runId })
        }
      }


      this.setState({
        arrNum: arrNum
      })
    } else {
      if (arrNum[e.currentTarget.dataset.id - 1].cheked === true) {
        arrNum[e.currentTarget.dataset.id - 1].cheked = false
      } else if (arrNum[e.currentTarget.dataset.id - 1].cheked === false) {
        arrNum[e.currentTarget.dataset.id - 1].cheked = true
      }
      this.setState({
        arrNum: arrNum
      })
    }
  }

  async getSiteSelectedVenueidTwo(data) {

    const res = await getSiteSelectedVenueid(data, sessionStorage.getItem('venue_token'))
    if (this.state.runId === 6) {
      for (let j in res.data.data) {
        for (let i in this.state.arrNum) {
          if (this.state.arrNum[i].id === res.data.data[j]) {
            this.state.arrNum[parseInt(this.state.arrNum[i].num)].cheked = 'no'
          }
          for (let k in this.state.arrChekedTwope) {
            if (this.state.arrChekedTwope[k] === this.state.arrNum[i].id) {
              this.state.arrNum[parseInt(this.state.arrNum[i].num)].cheked = false
            }
          }
        }
      }
      this.setState({ arrNum: this.state.arrNum })
    }



  }







  allOfThem = () => {
    let { arrNum } = this.state
    for (let i in arrNum) {
      if (arrNum[i].cheked !== 'no' && arrNum[i].id !== '场地不固定') {
        arrNum[i].cheked = true
      }
    }
    this.setState({
      arrNum: arrNum
    })
  }
  reverseElection = () => {
    let { arrNum } = this.state
    for (let i in arrNum) {
      if (arrNum[i].cheked === true && arrNum[i].id !== '场地不固定') {
        arrNum[i].cheked = false
      } else if (arrNum[i].cheked === false && arrNum[i].id !== '场地不固定') {
        arrNum[i].cheked = true
      }
    }
    this.setState({
      arrNum: arrNum
    })
  }

  serialComfir = () => {
    let { arrNum } = this.state
    let arrCheked = []
    for (let i in arrNum) {
      if (arrNum[i].cheked === true) {
        arrCheked.push(arrNum[i].id)
      }
    }
    if (arrCheked.length === 0) {
      message.warning('请选择场地编号')
    } else {

      this.setState({
        arrCheked: arrCheked,
        serialNumber: false,
        arrChekedLen: arrCheked.length
      })


    }

  }

  async getVenueNumberTitleSave(data) {
    const res = await getVenueNumberTitleSave(data, sessionStorage.getItem('venue_token'))
    if (res.data.code === 2000) {
      this.setState({ joinXi: false, arrCheked: [], arrChekedTwope: [], lppd: 0, typeTwo: 0, arrChekedLen: 0 })
      this.getVenueNumberTitleList({ sportid: this.state.nameChang, page: this.state.pageOne })
    } else if (res.data.code === 4002) {
      message.warning('请选择场地类型')
    } else {
      message.warning(res.data.msg)
    }
  }

  subSiteSubdivision = (e) => {
    let { runId, tags, arrCheked, typeTwo, commentTitle } = this.state
    let obj = {
      sportid: runId,
      title: tags.indexOf('-') === -1 ? typeTwo === 2 ? tags + '-散场' : typeTwo === 1 ? tags + '-半场' : typeTwo === 3 ? tags + '-按时' : typeTwo === 4 ? tags + '-按次' : typeTwo === 5 ? tags + '-全场' : tags : tags,
      venueid: typeof (arrCheked) === 'string' ? arrCheked : arrCheked.join(),
      number: this.state.arrChekedLen,
      uuid: e.currentTarget.dataset.id,
      type: typeTwo,
      com: commentTitle,
    }


    this.getVenueNumberTitleSave(obj)

  }

  interpretation = () => {
    this.setState({
      interpretation: true
    })
  }


  async getVenueNumberTitleList(data) {
    const res = await getVenueNumberTitleList(data, sessionStorage.getItem('venue_token'))
    if (res.data.code === 2000) {

      for (let i in res.data.data) {
        if (res.data.data[i].sportid === 1) {
          res.data.data[i].sportid = '羽毛球'
        } else if (res.data.data[i].sportid === 2) {
          res.data.data[i].sportid = '兵乓球'
        } else if (res.data.data[i].sportid === 3) {
          res.data.data[i].sportid = '台球中式黑八'
        } else if (res.data.data[i].sportid === 4) {
          res.data.data[i].sportid = '台球美式九球'
        } else if (res.data.data[i].sportid === 5) {
          res.data.data[i].sportid = '台球斯诺克'
        } else if (res.data.data[i].sportid === 6) {
          res.data.data[i].sportid = '篮球'
        } else if (res.data.data[i].sportid === 7) {
          res.data.data[i].sportid = '足球11人制'
        } else if (res.data.data[i].sportid === 8) {
          res.data.data[i].sportid = '足球8人制'
        } else if (res.data.data[i].sportid === 9) {
          res.data.data[i].sportid = '足球7人制'
        } else if (res.data.data[i].sportid === 10) {
          res.data.data[i].sportid = '足球5人制'
        } else if (res.data.data[i].sportid === 11) {
          res.data.data[i].sportid = '排球'
        } else if (res.data.data[i].sportid === 12) {
          res.data.data[i].sportid = '网球'
        } else if (res.data.data[i].sportid === 13) {
          res.data.data[i].sportid = '足球6人制'
        } else if (res.data.data[i].sportid === 14) {
          res.data.data[i].sportid = '足球9人制'
        }
      }
      this.setState({ joinXiList: res.data.data, otherseris: res.data.other })
    }
  }


  showModal = () => {
    this.setState({
      joinXi: true,
      runId: '', joinB: false, tags: '', arrCheked: [], arrChekedTwope: [], venNumid: '', typeDetel: 1
    });
  };

  async getVenueNumberTitleFirst(data) {
    const res = await getVenueNumberTitleFirst(data, sessionStorage.getItem('venue_token'))
    this.getVenueSportidTitle({ sportid: res.data.data[0].sportid })
    if (res.data.data[0].title.indexOf('全场') !== -1) {
      this.setState({
        runId: res.data.data[0].sportid, joinB: false, tags: res.data.data[0].title, arrChekedLen: res.data.data[0].venueid.split(',').length / 2, arrCheked: res.data.data[0].venueid.split(','), arrChekedTwope: res.data.data[0].venueid.split(','), venNumid: res.data.data[0].uuid, typeTwo: res.data.data[0].type,
        commentTitle: res.data.data[0].comment
      })
    } else {
      this.setState({
        runId: res.data.data[0].sportid, joinB: false, tags: res.data.data[0].title, arrChekedLen: res.data.data[0].venueid.split(',').length, arrCheked: res.data.data[0].venueid.split(','), arrChekedTwope: res.data.data[0].venueid.split(','), venNumid: res.data.data[0].uuid, typeTwo: res.data.data[0].type, commentTitle: res.data.data[0].comment
      })
    }


  }

  async getSiteSelectedVenueid(data) {
    let { arrNum, runId } = this.state
    const res = await getSiteSelectedVenueid(data, sessionStorage.getItem('venue_token'))
    if (this.state.typeTwo === 1 || this.state.typeTwo === 2 || this.state.typeTwo === 5 || runId === 2) {
      for (let j in res.data.data) {
        for (let i in this.state.arrNum) {
          if (this.state.arrNum.length === 48) {
            if (this.state.arrNum[47].cheked === true) {
              this.state.arrNum[i].cheked = 'no'
              this.state.arrNum[47].cheked = true
            } else {
              if (this.state.arrNum[i].id === res.data.data[j]) {
                this.state.arrNum[parseInt(this.state.arrNum[i].num)].cheked = 'no'
              }
            }
          } else {
            if (this.state.arrNum[i].id.toString() === res.data.data[j]) {
              this.state.arrNum[parseInt(this.state.arrNum[i].id)].cheked = 'no'
            }
          }
          for (let k in this.state.arrChekedTwope) {
            if (this.state.arrChekedTwope[k] === this.state.arrNum[i].id) {
              this.state.arrNum[parseInt(this.state.arrNum[i].num)].cheked = true
            }
          }
        }
      }
      this.setState({ arrNum: this.state.arrNum })
    } else {
      for (let i in res.data.data) {
        if (res.data.data[i].indexOf('A') === -1 && res.data.data[i].indexOf('B') === -1) {
          this.state.arrNum[parseInt(res.data.data[i]) - 1].cheked = 'no'
        }

      }
      this.setState({ arrNum: this.state.arrNum })
    }

    if (this.state.lppd === 1 && runId !== 6 && runId !== 2) {
      if (this.state.arrCheked.length > 0) {
        for (let k in this.state.arrChekedTwope) {
          this.state.arrNum[parseInt(this.state.arrChekedTwope[k]) - 1].cheked = false
        }
        for (let j in this.state.arrCheked) {
          this.state.arrNum[parseInt(this.state.arrCheked[j]) - 1].cheked = true
        }
      } else if (res.data.data.length === 0 && this.state.arrCheked === 0) {
        for (let i in arrNum) {
          this.state.arrNum[i].cheked = false
        }
      }
    } else if (this.state.lppd !== 1 && runId !== 6 && runId !== 2) {
      if (this.state.arrCheked.length > 0) {
        for (let j in this.state.arrCheked) {
          this.state.arrNum[parseInt(this.state.arrCheked[j]) - 1].cheked = true
        }
      } else if (res.data.data.length === 0 && this.state.arrCheked === 0) {
        for (let i in arrNum) {
          this.state.arrNum[i].cheked = false
        }
      }
    }




  }

  modification = e => {
    let obj = {
      uuid: e.currentTarget.dataset.uuid
    }
    this.getVenueNumberTitleFirst(obj)
    this.setState({
      joinXi: true,
      lppd: 1,
      typeDetel: 0,
    })
  }

  deletserisa = e => {
    this.setState({
      confirmserisa: e.currentTarget.dataset.id
    })
  }

  async DelVenueNumberTitle(data) {
    const res = await DelVenueNumberTitle(data, sessionStorage.getItem('venue_token'))
    if (res.data.code === 2000) {
      message.success('删除成功')
      if (this.state.otherseris % 10 === 1) {
        this.getVenueNumberTitleList({ sportid: this.state.nameChang, page: Number(this.state.pageOne) === 1 ? Number(this.state.pageOne) : Number(this.state.pageOne) - 1 })
        this.setState({ pageOne: Number(this.state.pageOne) === 1 ? Number(this.state.pageOne) : Number(this.state.pageOne) - 1 })
      } else {
        this.setState({ pageOne: this.state.pageOne })
        this.getVenueNumberTitleList({ sportid: this.state.nameChang, page: this.state.pageOne })
      }

    } else {
      message.error(res.data.msg)
    }
  }

  confirmserisa = e => {
    this.DelVenueNumberTitle({ uuid: this.state.confirmserisa })
  }

  showModalTwo = () => {
    this.setState({
      visible: true,
      update: 0,
      // starttime: '',
      // endtime: '',
    })
    if (this.state.update === 0 && this.state.runNameTwo !== '' && this.state.runNameTwo !== undefined) {
      this.getSiteSelectedTitle({ sportid: this.state.runIdTwo })
    }

  }
  toSetUp = () => {
    this.setState({
      headerData: '1',
      nosubdivisions: false,
      visible: false,
      joinXi: true,
      update: 0,
      // starttime: '',
      // endtime: '',
      typeDetel: 1,
      runIdTwo: '',
      tags: '',

    })
  }
  async getSiteSelectedTitle(data) {
    const res = await getSiteSelectedTitle(data, sessionStorage.getItem('venue_token'))
    if (res.data.data.length === 0 && this.state.headerData === '2' && this.state.runIdTwo !== '') {
      this.setState({
        nosubdivisions: true,
        runId: data.sportid
      })

      if (data.sportid === 6) {
        this.setState({
          ListSportTwoLO: [{ name: '半场', id: 1 }, { name: '散场', id: 2 }, { name: '全场', id: 5 }]
        })
      } else if (data.sportid === 2) {
        this.setState({
          ListSportTwoLO: [{ name: '按时(收费)', id: 3 }, { name: '按次(收费)', id: 4 }]
        })
      }



    }
    let title = res.data.data
    let arrTitle = []
    for (let i in title) {
      arrTitle.push(title[i].title)
    }

    this.setState({
      selecdTil: res.data.data,
      arrTitle: arrTitle
    })
  }
  handleChangeTags = e => {
    if (e.indexOf('散') !== -1) {
      this.setState({ timeFalg: 'no', starttime: '00:00', endtime: '24:00', appointmenttime_cg: -1, })
    } else if (e.indexOf('按次') !== -1) {
      this.setState({ timeFalg: 'yes', starttime: '00:00', endtime: '24:00', appointmenttime_cg: -1, })
    } else if (e.indexOf('散') !== -1 || e.indexOf('按次') !== -1) {
      this.setState({ appointmenttime_cg: -1, starttime: '00:00', endtime: '24:00', timeFalg: false })
    } else {
      this.setState({ appointmenttime_cg: '', starttime: '', endtime: '', timeFalg: true })
    }

    if (this.state.arrTitle.indexOf(e) === -1) {
      this.setState({
        nosubdivisions: true
      })
    } else {
      this.setState({
        tagsTwo: e,
        tags_type: this.state.selecdTil[this.state.arrTitle.indexOf(e)].type,
        tagsTwoId: this.state.selecdTil[this.state.arrTitle.indexOf(e)].uuid,
        chekedTwo: this.state.selecdTil[this.state.arrTitle.indexOf(e)].venueid,
        chekedTwoLen: this.state.selecdTil[this.state.arrTitle.indexOf(e)].number
      })
    }
  }

  async DelSiteSetting(data) {
    const res = await DelSiteSetting(data, sessionStorage.getItem('venue_token'))
    if (res.data.code === 2000) {
      message.success('删除成功')
      if (this.state.other % 10 === 1) {
        this.setState({ page: Number(this.state.page) - 1 })
        this.getSiteSettingList({ sportid: this.state.nameChang, page: Number(this.state.page) - 1 })
      } else {
        this.setState({ page: Number(this.state.page) })
        this.getSiteSettingList({ sportid: this.state.nameChang, page: this.state.page })
      }

    } else {
      message.error(res.data.msg)
    }
  }



  confirmMoney = () => {
    this.DelSiteSetting({ uuid: this.state.moneyId })
  }

  preferential = (e) => {
    this.getSiteSettingFirst({ uuid: e.currentTarget.dataset.uid })
    this.setState({
      Preferential: true,
      siteListId: e.currentTarget.dataset.uid,
      typeList: e.currentTarget.dataset.type
    })
  }
  PreferentialCan = () => {
    this.setState({
      Preferential: false, runIdTwo: '', tagsTwo: '', opendayname: '', openday: '', starttime: '00:00',
      endtime: '', costperhour_cg: '', chekedTwo: '', chekedTwoLen: '', appointmenttime_cg: '',
      tagsTwoId: '', comment: '', maxScheduledDate_cg: '', maxScheduledDate_cgName: [], runNameTwo: '', Disid: '', runId: '', tags: '', update: 0, tags_type: '',
    })
  }

  serialTwo = () => {
    let chekedTwoarr = typeof (this.state.chekedThree) === 'string' ? this.state.chekedThree.split(',') : this.state.chekedThree
    let chekedFour = typeof (this.state.chekedFour) === 'string' ? this.state.chekedFour.split(',') : this.state.chekedFour
    if (this.state.arrNumTwo.length === 0) {
      let arrNumTwo = []
      for (let i in chekedFour) {
        let obj = {
          idIdx: chekedFour[i],
          cheked: false
        }
        arrNumTwo.push(obj)
        if (chekedTwoarr.indexOf(chekedFour[i]) !== -1) {
          arrNumTwo[i].cheked = true
        }

      }

      this.setState({
        serialNumberTwo: true,
        arrNumTwo: arrNumTwo
      })

    } else {
      this.setState({
        serialNumberTwo: true,
        arrNumTwo: this.state.arrNumTwo
      })
    }
  }

  seriaSonTwo = e => {
    let { arrNumTwo } = this.state
    if (arrNumTwo[e.currentTarget.dataset.id].cheked === true) {
      arrNumTwo[e.currentTarget.dataset.id].cheked = false
    } else if (arrNumTwo[e.currentTarget.dataset.id].cheked === false) {
      arrNumTwo[e.currentTarget.dataset.id].cheked = true
    }
    this.setState({
      arrNumTwo: arrNumTwo
    })
  }
  serialComfirTwo = () => {
    let { arrNumTwo } = this.state
    let arrCheked = []
    for (let i in arrNumTwo) {
      if (arrNumTwo[i].cheked === true) {
        arrCheked.push(arrNumTwo[i].idIdx)
      }
    }
    this.setState({
      chekedThree: arrCheked,
      serialNumberTwo: false,
      arrNumTwo: []
    })
  }
  startDate = (date, dateString) => {
    this.setState({
      discount_sdate: dateString[0].slice(0, 10),
      discount_start: dateString[0].slice(11, 16),
      discount_edate: dateString[1].slice(0, 10),
      discount_end: dateString[1].slice(11, 16),
    })

  }
  endDate = (date, dateString) => {
    this.setState({
      discount_edate: dateString.replace(/['/']/g, '-').slice(0, 10),
      discount_end: dateString.replace(/['/']/g, '-').slice(11, 16)
    })
  }


  async SiteSettingDiscountSave(data) {
    const res = await SiteSettingDiscountSave(data, sessionStorage.getItem('venue_token'))
    if (res.data.code === 2000) {
      this.setState({
        Preferential: false
      })
      this.getSiteSettingList({ sportid: this.state.nameChang, page: this.state.page })
    } else {
      message.error(res.data.msg)
    }
  }

  PreferentialComfir = (e) => {
    let { siteListId, workingDayList, costperhourTwo, appointmenttime_cgTwo } = this.state
    let obj = {
      uuid: siteListId,
      discount_date: workingDayList.join(','),
      discount_costperhour_cg: costperhourTwo,
      discount_appointment_cg: appointmenttime_cgTwo
    }
    if (Number(costperhourTwo) === 0) {
      message.warning('价格不能小于等于0')
    } else {
      this.SiteSettingDiscountSave(obj)
    }
  }
  tooltip = () => {
    this.setState({
      tooltip: true
    })
  }

  async DelSiteSettingDiscount(data) {
    const res = await DelSiteSettingDiscount(data, sessionStorage.getItem('venue_token'))

    if (res.data.code === 2000) {
      if (this.state.list % 10 === 1) {
        this.setState({ page: Number(this.state.page) - 1 })
        this.getSiteSettingList({ sportid: this.state.nameChang, page: this.state.page })
      } else {
        this.setState({ page: this.state.page })
        this.getSiteSettingList({ sportid: this.state.nameChang, page: this.state.page })
      }
      this.setState({
        Preferential: false
      })
      message.success(res.data.msg)
    } else {
      message.error(res.data.msg)
    }
  }

  DelSiteSettingcount = () => {
    this.DelSiteSettingDiscount({ uuid: this.state.siteListId })
  }
  async DelVenueTitle(data) {
    const res = await DelVenueTitle(data, sessionStorage.getItem('venue_token'))
    if (res.data.code === 2000) {
      message.success('删除成功')
      if (this.state.titleDel === this.state.tags) {
        this.setState({ tags: '' })
      }
      this.getVenueSportidTitle({ sportid: this.state.runId })
    } else {
      message.error(res.data.msg)
    }
  }
  deletSelect = (e) => {
    if (e.currentTarget.dataset.id !== '1') {
      this.setState({ titleDel: e.currentTarget.dataset.title })
      this.DelVenueTitle({ uuid: e.currentTarget.dataset.id })
    }

  }
  getPosition = e => {
    const titleDom = e.target
    const X = titleDom.getBoundingClientRect().left
    const Y = document.getElementsByClassName('group')[0].offsetTop
    let mouseX = e.pageX
    let mouseY = e.screenY
    const diffX = mouseX - X
    const diffY = mouseY - Y
    return { X, Y, mouseX, mouseY, diffX, diffY }
  }
  onMouseDown = e => {
    const position = this.getPosition(e)
    window.onmousemove = this.onMouseMove
    window.onmouseup = this.onMouseUp
    this.setState({ moving: true, diffX: position.diffX, diffY: position.diffY })
  }
  onMouseUp = e => {
    const { moving } = this.state
    moving && this.setState({ moving: false });
  }

  onMouseMove = e => {
    const { moving, diffX, diffY } = this.state
    if (moving) {
      const position = this.getPosition(e)
      const x = position.mouseX - diffX
      const y = position.mouseY - diffY
      const { clientWidth, clientHeight } = document.documentElement
      const modal = document.getElementsByClassName("group")[0]
      if (modal) {
        const maxHeight = clientHeight - modal.offsetHeight
        const maxWidth = clientWidth - modal.offsetWidth
        const left = x > 0 ? (x < maxWidth ? x : maxWidth) : 0
        const top = y > 0 ? (y < maxHeight ? y : maxHeight) : 0
        this.setState({ pageX: left, pageY: top })
      }
    }
  }
  openSelect = (open) => {
    this.setState({ open: open })
  }
  allChed = () => {
    let items = this.state.arrNumTwo
    for (let i in items) {
      items[i].cheked = true
    }
    this.setState({ arrNumTwo: items })
  }
  allChedTwo = () => {
    let items = this.state.arrNumTwo
    for (let i in items) {
      items[i].cheked = !items[i].cheked
    }
    this.setState({ arrNumTwo: items })
  }
  details = (e) => {
    this.setState({ detail: true, deData: e.currentTarget.dataset })
  }
  onClose = () => {
    this.setState({ detail: false })
  }



  onPanelChange = (date) => {
    let dateSelect = date.format('YYYY-MM-DD')
    let dateArr = []
    if (this.state.workingDayList.indexOf(dateSelect) === -1) {
      dateArr.push(dateSelect)
      this.setState({ workingDayList: [...this.state.workingDayList, ...dateArr] })
    }
  }
  deletDate = () => {
    this.setState({ dateArr: this.state.dateArr.slice(0, this.state.dateArr.length - 1) })
  }
  handleChangeFiveTwo = e => {
    this.setState({ appointmenttime_cgTwo: parseInt(e) })
  }
  handleChangeType = e => {
    this.setState({ typeTwo: e, arrCheked: [] })
  }

  timeLimit = e => {
    this.setState({ timeLimit: Number(e) })
  }

  timeLimitTwo = e => {
    this.setState({ timeLimitTwo: Number(e) })
  }

  selectDA = e => {
    this.setState({ selectDA: e })
  }


  async getSpecialDaysForVenue(data) {
    const res = await getSpecialDaysForVenue(data, sessionStorage.getItem('venue_token'))
    if (res.data.code === 4001) {
      this.props.history.push('/')
      message.error('登录超时请重新登录!')
    }
    this.setState({ workingDayList: res.data.data })
  }


  workingDay = e => {
    let index = e.currentTarget.dataset.index
    this.getSpecialDaysForVenue({ type: index })
    this.setState({ indexBtnSon: index })
  }
  small = e => {
    let p = this.state.workingDayList
    p.splice(p.indexOf(e.currentTarget.dataset.date), 1)
    this.setState({ workingDayList: p })
  }





  async getVenueRelatList(data) {
    const res = await getVenueRelatList(data, sessionStorage.getItem('venue_token'))
    if (res.data.code === 2000) {
      this.setState({ relatList: res.data.data, otherFour: res.data.other.maxcount })
    } else {
      message.warning(res.data.msg)
    }
  }







  relatedness = () => {
    this.setState({ relatedness: true })
  }


  async getLabelRelatVenueNumber(data) {
    const res = await getLabelRelatVenueNumber(data, sessionStorage.getItem('venue_token'))
    if (res.data.code === 2000) {
      let arrd = res.data.data
      let data = this.state.arrNum
      for (let j in arrd) {
        for (let i in data) {
          if (data[i].id.toString() === arrd[j]) {
            data[i].cheked = 'no'
          }
        }
      }

      this.setState({ arrNum: data })

    } else {
      message.warning(res.data.msg)
    }
  }

  handleChangeThree = e => {
    this.setState({ relatednessRunid: [e], connectedName: '', connectedOne: '', connectedOneLen: 0 })
  }

  connectedCale = () => {
    this.setState({ connected: false })
  }

  connected = (e) => {
    if (this.state.relatednessRunid !== '') {
      let num = e.currentTarget.dataset.num
      let arrNum = []
      if (this.state.relatednessRunid[0] === 2) {
        arrNum = [
          { id: '1', cheked: false, num: 0 },
          { id: '2', cheked: false, num: 1 },
          { id: '3', cheked: false, num: 2 },
          { id: '4', cheked: false, num: 3 },
          { id: '5', cheked: false, num: 4 },
          { id: '6', cheked: false, num: 5 },
          { id: '7', cheked: false, num: 6 },
          { id: '8', cheked: false, num: 7 },
          { id: '9', cheked: false, num: 8 },
          { id: '10', cheked: false, num: 9 },
          { id: '11', cheked: false, num: 10 },
          { id: '12', cheked: false, num: 11 },
          { id: '13', cheked: false, num: 12 },
          { id: '14', cheked: false, num: 13 },
          { id: '15', cheked: false, num: 14 },
          { id: '16', cheked: false, num: 15 },
          { id: '17', cheked: false, num: 16 },
          { id: '18', cheked: false, num: 17 },
          { id: '19', cheked: false, num: 18 },
          { id: '20', cheked: false, num: 19 },
          { id: '21', cheked: false, num: 20 },
          { id: '22', cheked: false, num: 21 },
          { id: '23', cheked: false, num: 22 },
          { id: '24', cheked: false, num: 23 },
          { id: '25', cheked: false, num: 24 },
          { id: '26', cheked: false, num: 25 },
          { id: '27', cheked: false, num: 26 },
          { id: '28', cheked: false, num: 27 },
          { id: '29', cheked: false, num: 28 },
          { id: '30', cheked: false, num: 29 },
          { id: '31', cheked: false, num: 30 },
          { id: '32', cheked: false, num: 31 },
          { id: '33', cheked: false, num: 32 },
          { id: '34', cheked: false, num: 33 },
          { id: '35', cheked: false, num: 34 },
          { id: '36', cheked: false, num: 35 },
          { id: '37', cheked: false, num: 36 },
          { id: '38', cheked: false, num: 37 },
          { id: '39', cheked: false, num: 38 },
          { id: '40', cheked: false, num: 39 },
          { id: '41', cheked: false, num: 40 },
          { id: '42', cheked: false, num: 41 },
          { id: '43', cheked: false, num: 42 },
          { id: '44', cheked: false, num: 43 },
          { id: '45', cheked: false, num: 44 },
          { id: '46', cheked: false, num: 45 },
          { id: '47', cheked: false, num: 46 },]
      } else if (this.state.relatednessRunid[0] === 15) {
        arrNum = [
          { id: '1A', cheked: false, num: 0 },
          { id: '1B', cheked: false, num: 1 },
          { id: '2A', cheked: false, num: 2 },
          { id: '2B', cheked: false, num: 3 },
          { id: '3A', cheked: false, num: 4 },
          { id: '3B', cheked: false, num: 5 },
          { id: '4A', cheked: false, num: 6 },
          { id: '4B', cheked: false, num: 7 },
          { id: '5A', cheked: false, num: 8 },
          { id: '5B', cheked: false, num: 9 },
          { id: '6A', cheked: false, num: 10 },
          { id: '6B', cheked: false, num: 11 },
          { id: '7A', cheked: false, num: 12 },
          { id: '7B', cheked: false, num: 13 },
          { id: '8A', cheked: false, num: 14 },
          { id: '8B', cheked: false, num: 15 },
          { id: '9A', cheked: false, num: 16 },
          { id: '9B', cheked: false, num: 17 },
          { id: '10A', cheked: false, num: 18 },
          { id: '10B', cheked: false, num: 19 },
          { id: '11A', cheked: false, num: 20 },
          { id: '11B', cheked: false, num: 21 },
          { id: '12A', cheked: false, num: 22 },
          { id: '12B', cheked: false, num: 23 },
          { id: '13A', cheked: false, num: 24 },
          { id: '13B', cheked: false, num: 25 },
          { id: '14A', cheked: false, num: 26 },
          { id: '14B', cheked: false, num: 27 },
          { id: '15A', cheked: false, num: 28 },
          { id: '15B', cheked: false, num: 29 },
          { id: '16A', cheked: false, num: 30 },
          { id: '16B', cheked: false, num: 31 },
          { id: '17A', cheked: false, num: 32 },
          { id: '17B', cheked: false, num: 33 },
          { id: '18A', cheked: false, num: 34 },
          { id: '18B', cheked: false, num: 35 },
          { id: '19A', cheked: false, num: 36 },
          { id: '19B', cheked: false, num: 37 },
          { id: '20A', cheked: false, num: 38 },
          { id: '20B', cheked: false, num: 39 },
          { id: '21A', cheked: false, num: 40 },
          { id: '21B', cheked: false, num: 41 },
          { id: '22A', cheked: false, num: 42 },
          { id: '22B', cheked: false, num: 43 },
          { id: '23A', cheked: false, num: 44 },
          { id: '23B', cheked: false, num: 45 },
          { id: '24A', cheked: false, num: 46 }]
      } else {
        for (let i = 1; i <= 100; i++) {
          let p = {
            id: i, cheked: false
          }

          arrNum.push(p)
        }

      }
      this.getLabelRelatVenueNumber({ sportid: this.state.relatednessRunid[0], type: 2 })

      if (num !== '') {
        if (this.state.relatednessRunid[0] === 6) {
          let numT = num.split(',')
          for (let i in numT) {
            for (let j in arrNum) {
              if (arrNum[j].id === numT[i]) {
                arrNum[j].cheked = true
              }
            }
          }
        } else if (this.state.relatednessRunid[0] === 15) {
          let numT = num.split(',')
          for (let i in numT) {
            for (let j in arrNum) {
              if (arrNum[j].id === numT[i]) {
                arrNum[j].cheked = true
              }
            }
          }
        } else {
          let numT = num.split(',')
          for (let i in numT) {
            arrNum[numT[i] - 1].cheked = true
          }
        }
      }
      let ko = ''
      if (this.state.relatednessRunid[0] === 1) {
        ko = '羽毛球'
      } else if (this.state.relatednessRunid[0] === 2) {
        ko = '兵乓球'
      } else if (this.state.relatednessRunid[0] === 3) {
        ko = '台球中式黑八'
      } else if (this.state.relatednessRunid[0] === 4) {
        ko = '台球美式九球'
      } else if (this.state.relatednessRunid[0] === 5) {
        ko = '台球斯诺克'
      } else if (this.state.relatednessRunid[0] === 6) {
        ko = '篮球'
      } else if (this.state.relatednessRunid[0] === 7) {
        ko = '足球11人制'
      } else if (this.state.relatednessRunid[0] === 8) {
        ko = '足球8人制'
      } else if (this.state.relatednessRunid[0] === 9) {
        ko = '足球7人制'
      } else if (this.state.relatednessRunid[0] === 10) {
        ko = '足球5人制'
      } else if (this.state.relatednessRunid[0] === 11) {
        ko = '排球'
      } else if (this.state.relatednessRunid[0] === 12) {
        ko = '网球'
      } else if (this.state.relatednessRunid[0] === 13) {
        ko = '足球6人制'
      } else if (this.state.relatednessRunid[0] === 14) {
        ko = '足球9人制'
      } else if (this.state.relatednessRunid[0] === 15) {
        ko = '篮球(半场)'
      }
      this.setState({ connectedName: ko, arrNum: arrNum, connected: true })
    } else {
      message.warning('请选择场地类型')
    }

  }
  connectedSelsed = e => {


    if (this.state.relatednessRunid[0] === 15) {
      let data = this.state.arrNum
      for (let i in data) {
        data[i].cheked = false
      }
      data[e.currentTarget.dataset.num].cheked = true

      this.setState({ arrNum: data })
    } else {
      let data = this.state.arrNum
      for (let i in data) {
        data[i].cheked = false
      }
      data[e.currentTarget.dataset.id - 1].cheked = true

      this.setState({ arrNum: data })
    }



  }
  connectedBtn = () => {
    let data = this.state.arrNum
    let arr = []
    for (let i in data) {
      if (data[i].cheked === true) {
        arr.push(data[i].id)
      }
    }
    for (let i in data) {
      data[i].cheked = false
    }
    this.setState({ connectedOne: arr.join(','), connectedOneLen: arr.length, connected: false, arrNum: data })
  }

  handleChangeGFour = e => {

    this.setState({ relatednessRunidTwo: [e], connectedNameTwo: '', connectedOneTwo: '' })

  }


  connectedCaleTwo = () => {
    this.setState({ connectedTwo: false })
  }
  connectedTwo = (e) => {
    if (this.state.relatednessRunidTwo !== '') {
      let arrNum = []
      if (this.state.relatednessRunidTwo[0] === 6) {
        arrNum = [
          { id: '1A', cheked: false, num: 0 },
          { id: '1B', cheked: false, num: 1 },
          { id: '2A', cheked: false, num: 2 },
          { id: '2B', cheked: false, num: 3 },
          { id: '3A', cheked: false, num: 4 },
          { id: '3B', cheked: false, num: 5 },
          { id: '4A', cheked: false, num: 6 },
          { id: '4B', cheked: false, num: 7 },
          { id: '5A', cheked: false, num: 8 },
          { id: '5B', cheked: false, num: 9 },
          { id: '6A', cheked: false, num: 10 },
          { id: '6B', cheked: false, num: 11 },
          { id: '7A', cheked: false, num: 12 },
          { id: '7B', cheked: false, num: 13 },
          { id: '8A', cheked: false, num: 14 },
          { id: '8B', cheked: false, num: 15 },
          { id: '9A', cheked: false, num: 16 },
          { id: '9B', cheked: false, num: 17 },
          { id: '10A', cheked: false, num: 18 },
          { id: '10B', cheked: false, num: 19 },
          { id: '11A', cheked: false, num: 20 },
          { id: '11B', cheked: false, num: 21 },
          { id: '12A', cheked: false, num: 22 },
          { id: '12B', cheked: false, num: 23 },
          { id: '13A', cheked: false, num: 24 },
          { id: '13B', cheked: false, num: 25 },
          { id: '14A', cheked: false, num: 26 },
          { id: '14B', cheked: false, num: 27 },
          { id: '15A', cheked: false, num: 28 },
          { id: '15B', cheked: false, num: 29 },
          { id: '16A', cheked: false, num: 30 },
          { id: '16B', cheked: false, num: 31 },
          { id: '17A', cheked: false, num: 32 },
          { id: '17B', cheked: false, num: 33 },
          { id: '18A', cheked: false, num: 34 },
          { id: '18B', cheked: false, num: 35 },
          { id: '19A', cheked: false, num: 36 },
          { id: '19B', cheked: false, num: 37 },
          { id: '20A', cheked: false, num: 38 },
          { id: '20B', cheked: false, num: 39 },
          { id: '21A', cheked: false, num: 40 },
          { id: '21B', cheked: false, num: 41 },
          { id: '22A', cheked: false, num: 42 },
          { id: '22B', cheked: false, num: 43 },
          { id: '23A', cheked: false, num: 44 },
          { id: '23B', cheked: false, num: 45 },
          { id: '24A', cheked: false, num: 46 }]
      } else if (this.state.relatednessRunidTwo[0] === 2) {
        arrNum = [
          { id: '1', cheked: false, num: 0 },
          { id: '2', cheked: false, num: 1 },
          { id: '3', cheked: false, num: 2 },
          { id: '4', cheked: false, num: 3 },
          { id: '5', cheked: false, num: 4 },
          { id: '6', cheked: false, num: 5 },
          { id: '7', cheked: false, num: 6 },
          { id: '8', cheked: false, num: 7 },
          { id: '9', cheked: false, num: 8 },
          { id: '10', cheked: false, num: 9 },
          { id: '11', cheked: false, num: 10 },
          { id: '12', cheked: false, num: 11 },
          { id: '13', cheked: false, num: 12 },
          { id: '14', cheked: false, num: 13 },
          { id: '15', cheked: false, num: 14 },
          { id: '16', cheked: false, num: 15 },
          { id: '17', cheked: false, num: 16 },
          { id: '18', cheked: false, num: 17 },
          { id: '19', cheked: false, num: 18 },
          { id: '20', cheked: false, num: 19 },
          { id: '21', cheked: false, num: 20 },
          { id: '22', cheked: false, num: 21 },
          { id: '23', cheked: false, num: 22 },
          { id: '24', cheked: false, num: 23 },
          { id: '25', cheked: false, num: 24 },
          { id: '26', cheked: false, num: 25 },
          { id: '27', cheked: false, num: 26 },
          { id: '28', cheked: false, num: 27 },
          { id: '29', cheked: false, num: 28 },
          { id: '30', cheked: false, num: 29 },
          { id: '31', cheked: false, num: 30 },
          { id: '32', cheked: false, num: 31 },
          { id: '33', cheked: false, num: 32 },
          { id: '34', cheked: false, num: 33 },
          { id: '35', cheked: false, num: 34 },
          { id: '36', cheked: false, num: 35 },
          { id: '37', cheked: false, num: 36 },
          { id: '38', cheked: false, num: 37 },
          { id: '39', cheked: false, num: 38 },
          { id: '40', cheked: false, num: 39 },
          { id: '41', cheked: false, num: 40 },
          { id: '42', cheked: false, num: 41 },
          { id: '43', cheked: false, num: 42 },
          { id: '44', cheked: false, num: 43 },
          { id: '45', cheked: false, num: 44 },
          { id: '46', cheked: false, num: 45 },
          { id: '47', cheked: false, num: 46 },]
      } else {
        for (let i = 1; i <= 100; i++) {
          let p = {
            id: i, cheked: false
          }
          arrNum.push(p)
        }
      }




      this.getLabelRelatVenueNumber({ sportid: this.state.relatednessRunidTwo[0], type: 1 })
      let num = e.currentTarget.dataset.num
      if (num !== '') {
        if (this.state.relatednessRunidTwo[0] === 6) {
          let numT = num.split(',')
          for (let i in numT) {
            for (let j in arrNum) {
              if (arrNum[j].id === numT[i]) {
                arrNum[j].cheked = true
              }
            }
          }
        } else {
          let numT = num.split(',')
          for (let i in numT) {
            arrNum[numT[i] - 1].cheked = true
          }
        }

      }

      let ko = ''
      if (this.state.relatednessRunidTwo[0] === 1) {
        ko = '羽毛球'
      } else if (this.state.relatednessRunidTwo[0] === 2) {
        ko = '兵乓球'
      } else if (this.state.relatednessRunidTwo[0] === 3) {
        ko = '台球中式黑八'
      } else if (this.state.relatednessRunidTwo[0] === 4) {
        ko = '台球美式九球'
      } else if (this.state.relatednessRunidTwo[0] === 5) {
        ko = '台球斯诺克'
      } else if (this.state.relatednessRunidTwo[0] === 6) {
        ko = '篮球'
      } else if (this.state.relatednessRunidTwo[0] === 7) {
        ko = '足球11人制'
      } else if (this.state.relatednessRunidTwo[0] === 8) {
        ko = '足球8人制'
      } else if (this.state.relatednessRunidTwo[0] === 9) {
        ko = '足球7人制'
      } else if (this.state.relatednessRunidTwo[0] === 10) {
        ko = '足球5人制'
      } else if (this.state.relatednessRunidTwo[0] === 11) {
        ko = '排球'
      } else if (this.state.relatednessRunidTwo[0] === 12) {
        ko = '网球'
      } else if (this.state.relatednessRunidTwo[0] === 13) {
        ko = '足球6人制'
      } else if (this.state.relatednessRunidTwo[0] === 14) {
        ko = '足球9人制'
      }
      this.setState({ connectedTwo: true, connectedNameTwo: ko, arrNum: arrNum })
    } else {
      message.warning('请选择母关联场地类型')
    }

  }
  connectedSelsedTwo = e => {
    if (this.state.relatednessRunidTwo[0] === 6) {
      let data = this.state.arrNum
      if (data[e.currentTarget.dataset.num].cheked === true) {
        data[e.currentTarget.dataset.num].cheked = false
      } else if (data[e.currentTarget.dataset.num].cheked === false) {
        data[e.currentTarget.dataset.num].cheked = true
      }
      this.setState({ arrNum: data })
    } else {
      let data = this.state.arrNum
      if (data[e.currentTarget.dataset.id - 1].cheked === true) {
        data[e.currentTarget.dataset.id - 1].cheked = false
      } else if (data[e.currentTarget.dataset.id - 1].cheked === false) {
        data[e.currentTarget.dataset.id - 1].cheked = true
      }
      this.setState({ arrNum: data })
    }



  }
  connectedBtnTwo = () => {
    let data = this.state.arrNum
    let arr = []
    for (let i in data) {
      if (data[i].cheked === true) {
        arr.push(data[i].id)
      }
    }
    for (let i in data) {
      data[i].cheked = false
    }
    this.setState({ connectedOneTwo: arr.join(','), connectedOneLenTwo: arr.length, connectedTwo: false, arrNum: data })
  }

  async VenueRelatSave(data) {
    const res = await VenueRelatSave(data, sessionStorage.getItem('venue_token'))
    if (res.data.code === 2000) {
      message.success('添加成功')
      this.setState({ relatedness: false, pageFour: 1 })
      this.getVenueRelatList({ page: 1 })
    } else if (res.data.code === 4002) {
      message.warning('母关联者只能选择单个场地')
    } else {
      message.warning(res.data.msg)
    }
  }

  subSiteSubdivisionTwo = () => {

    if (this.state.relatednessRunid === '') {
      message.warning('请选择母关联场地类型')
    } else if (this.state.connectedOne === '') {
      message.warning('请选择母关联场地编号')
    } else if (this.state.relatednessRunidTwo === '') {
      message.warning('请选择子关联场地类型')
    } else if (this.state.connectedOneTwo === '') {
      message.warning('请选择子关联场地编号')
    } else {
      let data = {
        two_sportid: this.state.relatednessRunid[0] === 15 ? 6 : this.state.relatednessRunid[0],
        two_sportname: this.state.connectedName,
        two_venueid: this.state.connectedOne,
        one_sportid: this.state.relatednessRunidTwo[0],
        one_sportname: this.state.connectedNameTwo,
        one_venueid: this.state.connectedOneTwo,
      }
      this.VenueRelatSave(data)
    }

  }
  relat = (e) => {
    this.setState({ relatUuid: e.currentTarget.dataset.uuid })
  }


  async VenueRelatRelieve(data) {
    const res = await VenueRelatRelieve(data, sessionStorage.getItem('venue_token'))
    if (res.data.code === 2000) {
      this.getVenueRelatList({ page: this.state.pageFour - 1 })
      this.setState({ pageFour: this.state.pageFour - 1 })
    }
  }


  relatfirm = () => {
    this.VenueRelatRelieve({ relatid: this.state.relatUuid })
  }
  commentTitle = e => {
    this.setState({ commentTitle: e.target.value })
  }


  async getSiteSettingList_member(data) {
    const res = await getSiteSettingList_member(data, sessionStorage.getItem('venue_token'))
    if (res.data.code === 2000) {
      for (let i in res.data.data) {
        res.data.data[i].opendaynameTwo = ''
        if (res.data.data[i].openday.split(',').indexOf('1') !== -1) {
          res.data.data[i].opendaynameTwo = res.data.data[i].opendaynameTwo + ',周一'
        } if (res.data.data[i].openday.split(',').indexOf('2') !== -1) {
          res.data.data[i].opendaynameTwo = res.data.data[i].opendaynameTwo + ',周二'
        } if (res.data.data[i].openday.split(',').indexOf('3') !== -1) {
          res.data.data[i].opendaynameTwo = res.data.data[i].opendaynameTwo + ',周三'
        } if (res.data.data[i].openday.split(',').indexOf('4') !== -1) {
          res.data.data[i].opendaynameTwo = res.data.data[i].opendaynameTwo + ',周四'
        } if (res.data.data[i].openday.split(',').indexOf('5') !== -1) {
          res.data.data[i].opendaynameTwo = res.data.data[i].opendaynameTwo + ',周五'
        } if (res.data.data[i].openday.split(',').indexOf('6') !== -1) {
          res.data.data[i].opendaynameTwo = res.data.data[i].opendaynameTwo + ',周六'
        } if (res.data.data[i].openday.split(',').indexOf('7') !== -1) {
          res.data.data[i].opendaynameTwo = res.data.data[i].opendaynameTwo + ',周日'
        }
        let arr = []
        for (let j in res.data.data[i].level) {
          if (res.data.data[i].level[j].discount !== null && res.data.data[i].level[j].price !== null) {
            arr.push(res.data.data[i].level[j])
          }
        }
        res.data.data[i].level = arr
      }

      this.setState({ memberList: res.data.data, memberListOther: res.data.other.total, memberLevel: res.data.other.level })
    }
  }


  public = e => {
    if (e.currentTarget.dataset.index === '2') {
      this.getSiteSettingList_member({ sportid: this.state.nameChang, page: this.state.memberListPage, sid: sessionStorage.getItem('siteuid') })

    }
    if (e.currentTarget.dataset.index === '3') {
      this.getSiteSelectMemberlevel()
    }
    this.setState({ public: Number(e.currentTarget.dataset.index) })
  }

  memberListCurrent = (page, pageSize) => {
    this.setState({ memberListPage: page })
    this.getSiteSettingList_member({ sportid: this.state.nameChang, page: page, sid: sessionStorage.getItem('siteuid') })
  }


  async getSiteSettinglevelSetup(data) {
    const res = await getSiteSettinglevelSetup(data, sessionStorage.getItem('venue_token'))
    if (res.data.code === 2000) {
      for (let i in res.data.data) {
        res.data.data[i].opendaynameTwo = ''
        if (res.data.data[i].openday.split(',').indexOf('1') !== -1) {
          res.data.data[i].opendaynameTwo = res.data.data[i].opendaynameTwo + ',周一'
        } if (res.data.data[i].openday.split(',').indexOf('2') !== -1) {
          res.data.data[i].opendaynameTwo = res.data.data[i].opendaynameTwo + ',周二'
        } if (res.data.data[i].openday.split(',').indexOf('3') !== -1) {
          res.data.data[i].opendaynameTwo = res.data.data[i].opendaynameTwo + ',周三'
        } if (res.data.data[i].openday.split(',').indexOf('4') !== -1) {
          res.data.data[i].opendaynameTwo = res.data.data[i].opendaynameTwo + ',周四'
        } if (res.data.data[i].openday.split(',').indexOf('5') !== -1) {
          res.data.data[i].opendaynameTwo = res.data.data[i].opendaynameTwo + ',周五'
        } if (res.data.data[i].openday.split(',').indexOf('6') !== -1) {
          res.data.data[i].opendaynameTwo = res.data.data[i].opendaynameTwo + ',周六'
        } if (res.data.data[i].openday.split(',').indexOf('7') !== -1) {
          res.data.data[i].opendaynameTwo = res.data.data[i].opendaynameTwo + ',周日'
        } 
        res.data.data[i].opendaynameTwo = res.data.data[i].opendaynameTwo.slice(1, res.data.data[i].opendaynameTwo.length)
      }

      this.setState({ levelSetup: res.data.data[0], vipPrice: true, levelSetupList: res.data.data[0].level })

    }
  }

  vipPrice = e => {
    this.setState({ levelSetupid: e.currentTarget.dataset.uuid })
    this.getSiteSettinglevelSetup({ uuid: e.currentTarget.dataset.uuid })
  }

  vipPriceTwo = () => {
    this.setState({ vipPrice: false })

  }
  joinVipTitle = () => {
    this.setState({ joinVipTitle: true })
  }
  joinVipTitleTwo = () => {
    this.setState({ joinVipTitle: false,flag:false })
  }

  vipGrade = e => {
    this.setState({ vipGrade: e,vipTextArea:'' })
  }
  vipTextArea = e => {
    this.setState({ vipTextArea: e.target.value })
  }


  async getSiteAddMember(data) {
    const res = await getSiteAddMember(data, sessionStorage.getItem('venue_token'))
    if (res.data.code === 2000) {
      message.success(res.data.msg)
      this.setState({ joinVipTitle: false,flag:false })
      this.getSiteSelectMemberlevel()
    } else {
      message.warning(res.data.msg)
    }
  }

  async getSiteSettinglevelEdit(data) {
    const res = await getSiteSettinglevelEdit(data, sessionStorage.getItem('venue_token'))
    if (res.data.code === 2000) {
      message.success(res.data.msg)
      this.setState({ joinVipTitle: false,flag:false })
      this.getSiteSelectMemberlevel()
    } else {
      message.warning(res.data.msg)
    }
  }


  btnVipTitle = () => {
    if(this.state.flag===true){
      this.getSiteSettinglevelEdit({id:this.state.gradeId, grade_name: this.state.vipTextArea, grade_level: this.state.vipGrade })
    }else{
      this.getSiteAddMember({ grade_name: this.state.vipTextArea, grade_level: this.state.vipGrade })
    }
  }

  async getSiteSelectMemberlevel(data) {
    const res = await getSiteSelectMemberlevel(data, sessionStorage.getItem('venue_token'))
    if (res.data.code === 2000) {
      this.setState({ levelList: res.data.data })
    } else {
      message.warning(res.data.msg)
    }
  }

  async getSiteMemberlevelDel(data) {
    const res = await getSiteMemberlevelDel(data, sessionStorage.getItem('venue_token'))
    if (res.data.code === 2000) {
      message.success(res.data.msg)
      this.getSiteSelectMemberlevel()
    } else {
      message.warning(res.data.msg)
    }
  }




  detelTitle = e => {
    this.setState({ levelDel: e.currentTarget.dataset.id })
  }

  detelTitleTwo = () => {
    this.getSiteMemberlevelDel({ uuid: this.state.levelSetupid, id: this.state.levelDel })
  }





  async getSiteSettinglevelPrice(data) {
    const res = await getSiteSettinglevelPrice(data, sessionStorage.getItem('venue_token'))
    if (res.data.code === 2000) {
      this.getSiteSettingList_member({ sportid: this.state.nameChang, page: 1, sid: sessionStorage.getItem('siteuid') })
      this.setState({ vipPrice: false })
    } else {
      message.error(res.data.msg)
    }
  }



  handleSubmit = (values) => {
    values.uuid = this.state.levelSetup.uuid
    this.getSiteSettinglevelPrice(values)
  }

  changeForm = (e) => {
    let p = Object.keys(e)[0]
    if (p.substr(0, 8) === 'discount') {
      let u = ['price' + p.substr(8, 1)]
      let money = this.state.levelSetup.costperhour_cg
      this.form.current.setFieldsValue({
        [u]: (money / 10 * e[Object.keys(e)[0]]).toFixed(2)
      })
    } else {
      let u = ['discount' + p.substr(5, 1)]
      let money = this.state.levelSetup.costperhour_cg
      this.form.current.setFieldsValue({
        [u]: (e[Object.keys(e)[0]] * 10 / money).toFixed(2)
      })
    }
  }

  lookDetails = e => {
    let i = e.currentTarget.dataset.index
    this.setState({ lookDetails: true, lookDetailsList: this.state.memberList[i].level })
  }

  updateGrade=e=>{
     this.setState({gradeId:this.state.levelList[e.currentTarget.dataset.index].id, vipGrade:this.state.levelList[e.currentTarget.dataset.index].grade_level, vipTextArea:this.state.levelList[e.currentTarget.dataset.index].grade_name,joinVipTitle:true,flag:true})
  }



  render() {
    const { name } = this.state;

    return (
      <Spin spinning={this.state.lppding} style={{ height: '100%' }}>
        <div className="siteStting">
          <div className="header">
            <div className="left" style={this.state.headerData === '1' ? { color: '#fff', background: '#F5A623', border: '1px solid #F5A623' } : {}} onClick={this.headerCli} data-id='1'>场地细分</div>
            <div className="left" style={this.state.headerData === '2' ? { color: '#fff', background: '#F5A623', border: '1px solid #F5A623' } : {}} onClick={this.headerCli} data-id='2'>价格设置</div>
            <div className="left" style={this.state.headerData === '4' ? { color: '#fff', background: '#F5A623', border: '1px solid #F5A623' } : {}} onClick={this.headerCli} data-id='4'>场地关联</div>
            <div className="left" style={this.state.headerData === '3' ? { color: '#fff', background: '#F5A623', border: '1px solid #F5A623' } : {}} onClick={this.headerCli} data-id='3'>历史设置</div>

            <div className="right"><span>场地类型</span>
              <Select className="selectName" defaultValue="类型名称" value={this.state.nameChang === '' ? '全部' : this.state.nameChang} style={{ width: 130, padding: 0, textAlign: 'center' }} onChange={this.nameChang}>
                <Option value="0">全部</Option>
                <Option value="1">羽毛球</Option>
                <Option value="2">兵乓球</Option>
                <Option value="3">台球中式黑八</Option>
                <Option value="4">台球美式九球</Option>
                <Option value="5">台球斯诺克</Option>
                <Option value="6">篮球</Option>
                <Option value="7">足球11人制</Option>
                <Option value="8">足球8人制</Option>
                <Option value="9">足球7人制</Option>
                <Option value="13">足球6人制</Option>
                <Option value="10">足球5人制</Option>
                <Option value="11">排球</Option>
                <Option value="12">网球</Option>
                <Option value="13">足球6人制</Option>
                <Option value="14">足球9人制</Option>
              </Select>
            </div>
          </div>
          <div className="xiange"></div>
          <div className="clieaTwo" style={this.state.headerData === '2' ? {} : { display: 'none' }}>
            <div onClick={this.public} data-index='1' style={this.state.public === 1 ? { borderBottom: '2px solid #000' } : {}}>公开价格设置</div>
            <div onClick={this.public} data-index='3' style={this.state.public === 3 ? { borderBottom: '2px solid #000' } : {}}>会员等级设置</div>
            <div onClick={this.public} data-index='2' style={this.state.public === 2 ? { borderBottom: '2px solid #000' } : {}}>会员价格设置</div>
          </div>
          <div className="xiange"></div>
          <div style={this.state.headerData === '2' && this.state.public === 1 ? { overflowY: 'auto', height: '85%' } : { display: 'none' }}>
            <div className='siteList' style={{ paddingBottom: 0 }}>
              <Row className="rowConten" style={{ background: '#FCF7EE' }}>
                <Col xs={{ span: 2 }}>场地类型</Col>
                <Col xs={{ span: 2 }}>细分标签</Col>
                <Col xs={{ span: 2 }}>场地编号</Col>
                <Col xs={{ span: 1 }}>场地数量</Col>
                <Col xs={{ span: 2 }}>星期</Col>
                <Col xs={{ span: 1 }}>时间范围</Col>
                <Col xs={{ span: 2 }}>价格</Col>
                <Popover content={(<span>最长提前预订时间</span>)} title='详情' trigger="click">
                  <Col xs={{ span: 2 }}>最长提前预订时间</Col>
                </Popover>
                <Popover content={(<span>最短提前预订时间</span>)} title='详情' trigger="click">
                  <Col xs={{ span: 2 }}>最短提前预订时间</Col>
                </Popover>
                <Popover content={(<span>开始时间限制</span>)} title='详情' trigger="click">
                  <Col xs={{ span: 2 }}>开始时间限制</Col>
                </Popover>
                <Popover content={(<span>时长限制</span>)} title='详情' trigger="click">
                  <Col xs={{ span: 2 }}>时长限制</Col>
                </Popover>
                <Col xs={{ span: 1 }}>备注</Col>
                <Col xs={{ span: 1 }}>特定日期</Col>
                <Col xs={{ span: 2, }}>操作</Col>
              </Row>
              <div className="dataList">
                {
                  this.state.list.map((item, i) => (
                    <Row key={i} className="rowList">
                      <Col xs={{ span: 2 }}>{item.sportname}</Col>
                      <Col xs={{ span: 2 }}>{item.tags}</Col>
                      <Popover content={(<div style={{ maxWidth: '200px', wordBreak: 'break-all' }}>{item.venueid}</div>)} title='详情' trigger="click">
                        <Col xs={{ span: 2 }} style={{ cursor: 'pointer' }}>{item.venueid}</Col>
                      </Popover>
                      <Col xs={{ span: 1 }}>{item.sitenumber}</Col>
                      <Popover content={(<span>{item.opendaynameTwo.slice(1, item.opendaynameTwo.length)}</span>)} title='详情' trigger="click">
                        <Col style={{ cursor: 'pointer' }} xs={{ span: 2 }}>{item.opendaynameTwo.slice(1, item.opendaynameTwo.length)}</Col>
                      </Popover>
                      <Col xs={{ span: 1 }} style={{ lineHeight: '24px' }}>{item.starttime}<br />{item.endtime}</Col>
                      <Popover content={(<span>{item.tags.indexOf('散') === -1 && item.tags.indexOf('按次') === -1 ? item.costperhour_cg + '(元/时)' : item.costperhour_cg + '(元/次)'}</span>)} title='详情' trigger="click">
                        <Col xs={{ span: 2 }} style={{ cursor: 'pointer' }}>{item.tags.indexOf('散') === -1 && item.tags.indexOf('按次') === -1 ? item.costperhour_cg + '(元/时)' : item.costperhour_cg + '(元/次)'}</Col>
                      </Popover>
                      <Col xs={{ span: 2 }}>{item.maxScheduledDate_cg === null ? '' : item.maxScheduledDateTwo}</Col>
                      <Col xs={{ span: 2 }}>{item.appointmenttime_cg === null ? '' : item.appointmenttime_cg > 2879 ? item.appointmenttime_cg / 60 / 24 + '天' : item.appointmenttime_cg / 60 + '小时'}</Col>
                      <Col xs={{ span: 2 }}>{item.timelimit === 1 ? '不限' : item.timelimit === 2 ? '整点' : item.timelimit === 3 ? '单数整点' : item.timelimit === 4 ? '双数整点' : '不限'}</Col>
                      <Col xs={{ span: 2 }}>{item.tags.indexOf('散') !== -1 || item.tags.indexOf('按次') !== -1 ? '不限' : item.durationlimit === 1 ? '1小时以上' : item.durationlimit === 2 ? '1小时整数倍' : item.durationlimit === 3 ? '2小时整数倍' : '不限'}</Col>
                      <Popover content={(<span>{item.comment === '' ? '无' : item.comment}</span>)} title='详情' trigger="click">
                        <Col xs={{ span: 1 }} style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', cursor: 'pointer' }}>{item.comment === '' ? '无' : item.comment}</Col>
                      </Popover>
                      <Col xs={{ span: 1 }} ><span style={item.tags.indexOf('散') !== -1 || item.tags.indexOf('按次') !== -1 ? {} : { display: 'none' }}>不可设置</span><span style={item.tags.indexOf('散') !== -1 || item.tags.indexOf('按次') !== -1 ? { display: 'none' } : { cursor: 'pointer', padding: '3px 6px', color: 'blue' }} data-uid={item.uuid} data-type={item.discount_date} onClick={this.preferential}>{item.discount_date === null ? '添加' : '查看'}</span></Col>
                      <Col xs={{ span: 2 }}>
                        <img onClick={this.update} style={{ cursor: 'pointer' }} data-uid={item.uuid} src={require("../../assets/icon_pc_updata.png")} alt="修改" />&nbsp;&nbsp;&nbsp;
                      <Popconfirm
                          title={"你确定要删除该条价格设置么?删除后用户将无法预订该时间段" + item.sportname + '的' + item.tags + '场地'}
                          onConfirm={this.confirmMoney}
                          onCancel={this.cancel}
                          okText="确定"
                          cancelText="取消"
                        >
                          <img onClick={this.deletTwoMoney} style={{ cursor: 'pointer' }} data-uuid={item.uuid} src={require("../../assets/icon_pc_delet.png")} alt="删除" />
                        </Popconfirm>
                      </Col>
                    </Row>
                  ))
                }
              </div>
            </div>

            <div style={this.state.list.length === 0 ? { width: '100%' } : { display: 'none' }}><img style={{ width: '84px', height: '84px', display: 'block', margin: '64px auto 0' }} src={require('../../assets/xifen (6).png')} alt='icon' /><span style={{ display: 'block', textAlign: 'center' }}>您还没有设置场地价格!</span></div>
            <Pagination style={{ marginBottom: '15px' }} hideOnSinglePage={true} showSizeChanger={false} className={this.state.hidden === true ? 'fenye' : 'hidden'} current={this.state.page} total={this.state.other} onChange={this.current} />
          </div>

          <div className="join" style={this.state.headerData === '2' && this.state.public === 1 ? {} : { display: 'none' }} onClick={this.showModalTwo}><div id="join" style={{ textAlign: 'center', width: '150px', margin: '0 auto' }}>+添加价格设置</div></div>



          <div style={this.state.headerData === '2' && this.state.public === 2 ? { overflowY: 'auto', height: '90%' } : { display: 'none' }}>
            <Row className="rowConten" style={{ background: '#FCF7EE' }}>
              <Col xs={{ span: 2 }}>场地类型</Col>
              <Col xs={{ span: 3 }}>细分标签</Col>
              <Col xs={{ span: 3 }}>场地编号</Col>
              <Col xs={{ span: 2 }}>场地数量</Col>
              <Col xs={{ span: 4 }}>星期</Col>
              <Col xs={{ span: 3 }}>时间范围</Col>
              <Col xs={{ span: 2 }}>公开价格(元/时)</Col>
              <Col xs={{ span: 3 }}>会员价格详情</Col>
              <Col xs={{ span: 2 }}>操作</Col>
            </Row>


            {
              this.state.memberList.map((item, i) => (
                <Row className="rowConten" key={i}>
                  <Col xs={{ span: 2 }}>{item.sportname}</Col>
                  <Col xs={{ span: 3 }}>{item.tags}</Col>
                  <Popover content={(<span>{item.venueid}</span>)} title='详情' trigger="click">
                    <Col xs={{ span: 3 }}>{item.venueid}</Col>
                  </Popover>
                  <Col xs={{ span: 2 }}>{item.sitenumber}</Col>
                  <Popover content={(<span>{item.opendaynameTwo.slice(1, item.opendaynameTwo.length)}</span>)} title='详情' trigger="click">
                    <Col style={{ cursor: 'pointer' }} xs={{ span: 4 }}>{item.opendaynameTwo.slice(1, item.opendaynameTwo.length)}</Col>
                  </Popover>
                  <Col xs={{ span: 3 }}>{item.starttime}-{item.endtime}</Col>
                  <Col xs={{ span: 2 }}>{item.costperhour_cg}</Col>
                  <Col xs={{ span: 3 }}><span onClick={this.lookDetails} data-index={i} style={item.level.length !== 0 ? { color: 'blue', cursor: 'pointer' } : { display: 'none' }}>查看详情</span><span style={item.level.length === 0 ? {} : { display: 'none' }}>暂无设置</span></Col>
                  <Col xs={{ span: 2 }}><img style={{ cursor: 'pointer' }} data-uuid={item.uuid} onClick={this.vipPrice} src={require("../../assets/icon_pc_updata.png")} alt='编辑' /></Col>
                </Row>
              ))
            }

            <div style={this.state.list.length === 0 ? { width: '100%' } : { display: 'none' }}><img style={{ width: '84px', height: '84px', display: 'block', margin: '64px auto 0' }} src={require('../../assets/xifen (6).png')} alt='icon' /><span style={{ display: 'block', textAlign: 'center' }}>您还没有设置场地价格!</span></div>
            <Pagination style={{ marginBottom: '15px' }} hideOnSinglePage={true} showSizeChanger={false} className='fenye' current={this.state.memberListPage} total={this.state.memberListOther} onChange={this.memberListCurrent} />

          </div>

          <div style={this.state.headerData === '2' && this.state.public === 3 ? { overflowY: 'auto', height: '85%' } : { display: 'none' }}>
            <Row className="rowConten" style={{ background: '#FCF7EE' }}>
              <Col xs={{ span: 4 }}>序号</Col>
              <Col xs={{ span: 7 }}>会员等级名称</Col>
              <Col xs={{ span: 7 }}>会员等级</Col>
              <Col xs={{ span: 4 }}>操作</Col>
            </Row>
            {
              this.state.levelList.map((item, i) => (
                <Row key={i} className="rowConten">
                  <Col xs={{ span: 4 }}>{i + 1}</Col>
                  <Col xs={{ span: 7 }}>{item.grade_name}</Col>
                  <Col xs={{ span: 7 }}>{item.grade_level}</Col>
                  <Col xs={{ span: 4 }}>
                    <Popconfirm
                      title="你确定删除该条会员等级吗?"
                      onConfirm={this.detelTitleTwo}
                      onCancel={this.cancel}
                      okText="确认"
                      cancelText="取消"
                    ><img style={{ cursor: 'pointer' }} onClick={this.detelTitle} data-id={item.id} src={require("../../assets/icon_pc_delet.png")} alt='编辑' /></Popconfirm>
                  <img style={{ cursor: 'pointer',marginLeft:'20px' }} onClick={this.updateGrade} data-index={i}  src={require("../../assets/icon_pc_updata.png")} alt="修改"/>
                  </Col>
                </Row>
              ))
            }

            <div style={this.state.levelList.length === 0 ? { width: '100%' } : { display: 'none' }}><img style={{ width: '84px', height: '84px', display: 'block', margin: '64px auto 0' }} src={require('../../assets/xifen (6).png')} alt='icon' /><span style={{ display: 'block', textAlign: 'center' }}>您还没有设置会员等级!</span></div>

          </div>

          <div className="join" style={this.state.headerData === '2' && this.state.public === 3 ? {} : { display: 'none' }} onClick={this.joinVipTitle}><div id="join" style={{ textAlign: 'center', width: '150px', margin: '0 auto' }}>+添加会员等级</div></div>






          <Modal
            title="会员价格详情"
            visible={this.state.lookDetails}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            width={630}
            style={{ zIndex: 999 }}
            className='model'
            closeIcon={<CloseCircleOutlined style={{ color: '#fff', fontSize: '20px' }} />}
          >
            <Row style={{ textAlign: 'center' }}>
              <Col xs={{ span: 8 }}>会员等级</Col>
              <Col xs={{ span: 8 }}>会员折扣</Col>
              <Col xs={{ span: 8 }}>会员价格</Col>
            </Row>
            {
              this.state.lookDetailsList.map((item, i) => (
                <Row key={i} style={{ textAlign: 'center', lineHeight: '30px' }}>
                  <Col xs={{ span: 8 }}>{item.grade_name}</Col>
                  <Col xs={{ span: 8 }}>{item.discount}折</Col>
                  <Col xs={{ span: 8 }}>{item.price}元</Col>
                </Row>
              ))
            }

          </Modal>




          <Modal
            title="设置会员价格"
            visible={this.state.vipPrice}
            onOk={this.handleOk}
            onCancel={this.vipPriceTwo}
            width={630}
            destroyOnClose={true}
            style={{ zIndex: 999 }}
            className='model'
            closeIcon={<CloseCircleOutlined style={{ color: '#fff', fontSize: '20px' }} />}
          >
            <div className="modelList" style={{ height: '32px' }}>
              <span>场地类型</span>
              <Input className="startTime" style={{ paddingLeft: '10px', height: 32, width: 269, cursor: 'pointer' }} disabled={true} value={this.state.levelSetup.sportname} />
            </div>
            <div className="modelList" style={{ height: '32px' }}>
              <span>细分标签</span>
              <Input className="startTime" style={{ paddingLeft: '10px', height: 32, width: 269, cursor: 'pointer' }} disabled={true} value={this.state.levelSetup.tags} />
            </div>
            <div className="modelList" style={{ height: '32px' }}>
              <span>场地编号</span>
              <Input className="startTime" style={{ paddingLeft: '10px', height: 32, width: 269, cursor: 'pointer' }} disabled={true} value={this.state.levelSetup.venueid} />
            </div>
            <div className="modelList" style={{ height: '32px' }}>
              <span>数量</span>
              <div style={{ marginLeft: 165 }}>{this.state.levelSetup.sitenumber}</div>
            </div>
            <div className="modelList" style={{ height: '32px' }}>
              <span>星期</span>
              <Input className="startTime" style={{ paddingLeft: '10px', height: 32, width: 269, cursor: 'pointer' }} disabled={true} value={this.state.levelSetup.opendaynameTwo} />
            </div>
            <div className="modelList" style={{ height: '32px' }}>
              <span>时间范围</span>
              <Input className="startTime" style={{ paddingLeft: '10px', height: 32, width: 269, cursor: 'pointer' }} disabled={true} value={this.state.levelSetup.starttime + '-' + this.state.levelSetup.endtime} />
            </div>
            <div className="modelList" style={{ height: '32px' }}>
              <span>价格(元/时)</span>
              <Input className="startTime" style={{ paddingLeft: '10px', height: 32, width: 269, cursor: 'pointer' }} disabled={true} value={this.state.levelSetup.costperhour_cg} />
            </div>

            <div className="memFooter">

            </div>


            <div style={this.state.levelSetupList.length !== 0 ? {} : { display: 'none' }}>
              <Form ref={this.form} onFinish={this.handleSubmit} onValuesChange={this.changeForm} preserve={false}>
                {
                  this.state.levelSetupList.map((item, i) => (
                    <div key={i} style={{ overflow: 'hidden' }}>
                      <span style={{ float: 'left', lineHeight: '32px' }}>价格{i + 1}</span>
                      <Form.Item className="form" style={{ display: 'none' }} name={'grade_level' + (i + 1)} initialValue={item.grade_level}>
                        <div style={{ display: 'none' }}>{item.grade_level}</div>
                        <Input className="sdgfdfgdfgd" disabled={true} value={item.grade_level} />
                      </Form.Item>
                      <Form.Item className="form" name={'grade_name' + (i + 1)} initialValue={item.grade_name}>
                        <div style={{ display: 'none' }}>{item.grade_name}</div>
                        <Input className="sdgfdfgdfgd" disabled={true} value={item.grade_name} />
                      </Form.Item>
                      <Form.Item className="form" name={'discount' + (i + 1)} rules={[{ required: true, message: '请输入折扣!' }]} initialValue={item.discount}>
                        <InputNumber className="sdgfdfgdfgd dsgfghfgh" min={1} max={10} placeholder="请输入折扣" value={item.discount} />
                      </Form.Item>
                      <Form.Item className="form" name={'price' + (i + 1)} rules={[{ required: true, message: '请输入价格!' }]} initialValue={item.price}>
                        <InputNumber className="sdgfdfgdfgd dsgfghfgh" min={1} max={this.state.levelSetup.costperhour_cg} placeholder="请输入价格" value={item.price} />
                      </Form.Item>

                      <div style={{ display: 'none' }}>{item.grade_name}</div>

                    </div>
                  ))
                }
                <Form.Item >
                  <Button className="save" htmlType="submit">
                    提交
                   </Button>
                </Form.Item>
              </Form>

            </div>

            <div style={this.state.levelSetupList.length === 0 ? { color: 'red' } : { display: 'none' }}>
              请去会员等级设置页面，设置会员等级。
              </div>



          </Modal>


          <Modal
            title="添加/修改会员等级"
            visible={this.state.joinVipTitle}
            onOk={this.handleOk}
            onCancel={this.joinVipTitleTwo}
            width={630}
            style={{ zIndex: 999 }}
            className='model'
            closeIcon={<CloseCircleOutlined style={{ color: '#fff', fontSize: '20px' }} />}
          >

            <div className="modelList" style={{ height: '32px' }}>
              <span>等级</span>
              <Select value={this.state.vipGrade} style={{ width: 120, marginLeft: '25px' }} disabled={this.state.flag} onChange={this.vipGrade}>
                <Option value="1">1级</Option>
                <Option value="2">2级</Option>
                <Option value="3">3级</Option>
                <Option value="4">4级</Option>
                <Option value="5">5级</Option>
                <Option value="6">6级</Option>
                <Option value="7">7级</Option>
                <Option value="8">8级</Option>
                <Option value="9">9级</Option>
              </Select>
            </div>
            <div className="modelList">
              <span>名称</span>
              <TextArea className="textAreaName" value={this.state.vipTextArea} onChange={this.vipTextArea} placeholder="请输入会员等级名称"></TextArea>
            </div>
            <button className="submit" onClick={this.btnVipTitle} style={{ border: 'none' }}>提交</button>

          </Modal>











          <div style={this.state.headerData === '1' ? { overflowY: 'auto', height: '89%' } : { display: 'none' }}>
            <Row className="rowConten" style={{ background: '#FCF7EE', borderBottom: '1px solid #E1E0E1' }}>
              <Col xs={{ span: 5 }}>场地类型</Col>
              <Col xs={{ span: 5 }}>细分标签</Col>
              <Col xs={{ span: 5 }}>场地编号</Col>
              <Col xs={{ span: 5 }}>场地数量</Col>
              <Col xs={{ span: 3 }}>操作</Col>
            </Row>
            {
              this.state.joinXiList.map((item, i) => (
                <Row key={i} style={{ borderBottom: '1px solid #E1E0E1' }}>
                  <Col xs={{ span: 5 }}>{item.sportid}</Col>
                  <Col xs={{ span: 5 }}>{item.title}</Col>
                  <Popover content={(<div style={{ maxWidth: '200px', wordBreak: 'break-all' }}>{item.venueid}</div>)} title='详情' trigger="click">
                    <Col xs={{ span: 5 }} style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', cursor: 'pointer' }} onClick={this.tooltip}>{item.venueid}</Col>
                  </Popover>
                  <Col xs={{ span: 5 }}>{item.number}</Col>
                  <Col xs={{ span: 3 }}>
                    <img onClick={this.modification} data-uuid={item.uuid} style={{ marginRight: '5px', cursor: 'pointer' }} src={require("../../assets/icon_pc_updata.png")} alt="修改" />
                    <Popconfirm
                      title={'您确定要删除该条场地细分么?删除后用户将无法预订' + item.sportid + '的' + item.title + '场地'}
                      onConfirm={this.confirmserisa}
                      onCancel={this.cancel}
                      okText="确定"
                      cancelText="取消"
                    >
                      <img style={{ marginLeft: '5px', cursor: 'pointer' }} onClick={this.deletserisa} data-id={item.uuid} src={require("../../assets/icon_pc_delet.png")} alt="删除" />
                    </Popconfirm>
                  </Col>
                </Row>
              ))
            }

            <div style={this.state.joinXiList.length === 0 ? { width: '100%' } : { display: 'none' }}><img style={{ width: '84px', height: '84px', display: 'block', margin: '64px auto 0' }} src={require('../../assets/xifen (1).png')} alt='icon' /><span style={{ display: 'block', textAlign: 'center' }}>您还没有设置场地细分!</span></div>
            <Pagination style={{ marginBottom: '15px' }} hideOnSinglePage={true} showSizeChanger={false} className='fenye' current={this.state.pageOne} onChange={this.recordListOther} total={this.state.otherseris} />
          </div>
          <div className="join" style={this.state.headerData === '1' ? {} : { display: 'none' }} onClick={this.showModal}><div style={{ textAlign: 'center', width: '150px', margin: '0 auto' }}>+添加场地细分</div></div>
          <div style={this.state.headerData === '3' ? { overflowY: 'auto', height: '95%' } : { display: 'none' }}>

            <Row className="rowConten" style={{ background: '#FCF7EE', borderBottom: '1px solid #E1E0E1' }}>
              <Col xs={{ span: 2 }}>场地类型</Col>
              <Col xs={{ span: 2 }}>细分标签</Col>
              <Col xs={{ span: 2 }}>场地编号</Col>
              <Col xs={{ span: 1 }}>场地数量</Col>
              <Col xs={{ span: 2 }}>星期</Col>
              <Col xs={{ span: 2 }}>时间范围</Col>
              <Col xs={{ span: 1 }}>价格</Col>
              <Popover content={(<span>最长提前预订时间</span>)} title='详情' trigger="click">
                <Col style={{ cursor: 'pointer' }} xs={{ span: 1 }}>最长提前预订时间</Col>
              </Popover>
              <Popover content={(<span>最短提前预订时间</span>)} title='详情' trigger="click">
                <Col style={{ cursor: 'pointer' }} xs={{ span: 1 }}>最短提前预订时间</Col>
              </Popover>
              <Popover content={(<span>开始时间限制</span>)} title='详情' trigger="click">
                <Col xs={{ span: 2 }}>开始时间限制</Col>
              </Popover>
              <Popover content={(<span>时长限制</span>)} title='详情' trigger="click">
                <Col xs={{ span: 2 }}>时长限制</Col>
              </Popover>
              <Col xs={{ span: 1 }}>备注</Col>
              <Popover content={(<span>特定日期</span>)} title='详情' trigger="click">
                <Col style={{ cursor: 'pointer' }} xs={{ span: 1 }}>特定日期价格</Col>
              </Popover>
              <Col xs={{ span: 1 }}>操作</Col>
              <Col xs={{ span: 2 }}>操作时间</Col>
            </Row>
            {
              this.state.historyArr.map((item, i) => (
                <Row className="rowConten" key={i}>
                  <Popover content={(<span>{item.sportname}</span>)} title='详情' trigger="click">
                    <Col style={{ cursor: 'pointer' }} xs={{ span: 2 }}>{item.sportname}</Col>
                  </Popover>
                  <Col xs={{ span: 2 }}>{item.tags}</Col>
                  <Popover content={(<div style={{ maxWidth: '200px', wordBreak: 'break-all' }}>{item.venueid}</div>)} title='详情' trigger="click">
                    <Col style={{ cursor: 'pointer' }} xs={{ span: 2 }}>{item.venueid}</Col>
                  </Popover>
                  <Col xs={{ span: 1 }}>{item.sitenumber}</Col>
                  <Popover content={(<span>{item.opendaynameTwo.slice(1, item.opendaynameTwo.length)}</span>)} title='详情' trigger="click">
                    <Col style={{ cursor: 'pointer' }} xs={{ span: 2 }}>{item.opendaynameTwo.slice(1, item.opendaynameTwo.length)}</Col>
                  </Popover>
                  <Popover content={(<span>{item.starttime}-{item.endtime}</span>)} title='详情' trigger="click">
                    <Col style={{ cursor: 'pointer' }} xs={{ span: 2 }}>{item.starttime}-{item.endtime}</Col>
                  </Popover>
                  <Popover content={(<span>{item.tags.indexOf('散') === -1 && item.tags.indexOf('按次') === -1 ? item.costperhour + '(元/时)' : item.costperhour + '(元/次)'}</span>)} title='详情' trigger="click">
                    <Col xs={{ span: 1 }} style={{ cursor: 'pointer' }}>{item.tags.indexOf('散') === -1 && item.tags.indexOf('按次') === -1 ? item.costperhour + '(元/时)' : item.costperhour + '(元/次)'}</Col>
                  </Popover>
                  <Col xs={{ span: 1 }}>{item.maxScheduledDate === null ? '' : item.maxScheduledDateTwo}</Col>
                  <Col xs={{ span: 1 }}>{item.appointmenttime === null ? '' : item.appointmenttime > 2879 ? item.appointmenttime / 60 / 24 + '天' : item.appointmenttime / 60 + '小时'}</Col>
                  <Col xs={{ span: 2 }}>{item.timelimit === 1 ? '不限' : item.timelimit === 2 ? '整点' : item.timelimit === 3 ? '单数整点' : item.timelimit === 4 ? '双数整点' : '不限'}</Col>
                  <Col xs={{ span: 2 }}>{item.durationlimit === 1 ? '1小时以上' : item.durationlimit === 2 ? '1小时整数倍' : item.durationlimit === 3 ? '2小时整数倍' : '1小时以上'}</Col>

                  <Popover content={(<span>{item.comment === '' ? '无' : item.comment}</span>)} title='详情' trigger="click">
                    <Col style={{ cursor: 'pointer' }} xs={{ span: 1 }}>{item.comment === '' ? '无' : item.comment}</Col>
                  </Popover>
                  <Col xs={{ span: 1 }}>{item.discount_edate === '' ? '无' : <span style={{ cursor: 'pointer', color: 'blue' }} data-sd={item.discount_date} data-app={item.discount_appointment} data-cos={item.discount_costperhour} onClick={item.discount_date === '' ? null : this.details}>{item.discount_date === '' ? '无' : '查看'}</span>}</Col>
                  <Col xs={{ span: 1 }}>{item.operation === 1 ? '添加' : item.operation === 2 ? '修改' : item.operation === 3 ? '删除' : '无操作'}</Col>
                  <Popover content={(<span>{item.intime}</span>)} title='详情' trigger="click">
                    <Col style={{ cursor: 'pointer' }} xs={{ span: 2 }}>{item.intime}</Col>
                  </Popover>
                </Row>
              ))
            }
            <Pagination style={{ marginBottom: '15px' }} hideOnSinglePage={true} showSizeChanger={false} className='fenye' current={this.state.pageThree} onChange={this.pageThree} total={this.state.otherThree} />
          </div>





          <div style={this.state.headerData === '4' ? { overflowY: 'auto', height: '90%' } : { display: 'none' }}>
            <Row className="rowConten" style={{ background: '#FCF7EE', borderBottom: '1px solid #E1E0E1' }}>
              <Col xs={{ span: 5 }}>母关联场地类型</Col>
              <Col xs={{ span: 5 }}>母关联场地编号</Col>
              <Col xs={{ span: 5 }}>子关联场地类型</Col>
              <Col xs={{ span: 5 }}>子关联场地编号</Col>
              <Col xs={{ span: 4 }}>操作</Col>
            </Row>
            {
              this.state.relatList.map((item, i) => (
                <Row className="rowConten" style={{ marginTop: '5px' }} key={i}>
                  <Col xs={{ span: 5 }}>{item.two_sportname === '篮球' ? item.two_sportname + '（全场）' : item.two_sportname}</Col>
                  <Col xs={{ span: 5 }}>{item.two_venueid}</Col>
                  <Col xs={{ span: 5 }}>{item.one_sportname === '篮球' ? item.one_sportname + '（半场）' : item.one_sportname}</Col>
                  <Col xs={{ span: 5 }}>{item.one_venueid}</Col>
                  <Col xs={{ span: 4 }}>
                    <Popconfirm
                      title={"你确定要删除该条场地关联么?"}
                      onConfirm={this.relatfirm}
                      onCancel={this.cancel}
                      okText="确定"
                      cancelText="取消"
                    >
                      <img onClick={this.relat} style={{ cursor: 'pointer' }} data-uuid={item.uuid} src={require("../../assets/icon_pc_delet.png")} alt="删除" />
                    </Popconfirm></Col>
                </Row>
              ))
            }
            <div style={this.state.relatList.length === 0 ? { width: '100%' } : { display: 'none' }}><img style={{ width: '84px', height: '84px', display: 'block', margin: '64px auto 0' }} src={require('../../assets/xifen (6).png')} alt='icon' /><span style={{ display: 'block', textAlign: 'center' }}>您还没有设置关联场地!</span></div>
            <Pagination style={{ marginBottom: '15px' }} hideOnSinglePage={true} showSizeChanger={false} className='fenye' current={this.state.pageFour} onChange={this.pageFour} total={this.state.otherFour} />

          </div>
          <div className="join" style={this.state.headerData === '4' ? {} : { display: 'none' }} onClick={this.relatedness}><div id="join" style={{ textAlign: 'center', width: '150px', margin: '0 auto' }}>+添加场地关联</div></div>




          <Modal
            title="添加/修改关联场地"
            visible={this.state.relatedness}
            onOk={this.relatednessBtn}
            onCancel={this.handlejoinXi}
            width={500}
            className='model'
            closeIcon={<CloseCircleOutlined style={{ color: '#fff', fontSize: '20px' }} />}
          >
            <div className="modelList" style={{ height: '32px' }}>
              <span>母关联场地类型</span>
              <Select placeholder="请选择" className="selectModel" value={this.state.relatednessRunid === '' ? [] : this.state.relatednessRunid} style={{ width: 249, height: 32, marginRight: 80 }} onChange={this.handleChangeThree}>
                {
                  this.state.sportArrTwoSo.map((item, i) => (
                    <Option key={i} value={item.id}>{item.name}</Option>
                  ))
                }
              </Select>
            </div>

            <div className="modelList" style={{ height: '32px' }} data-num={this.state.connectedOne} onClick={this.connected}>
              <span>母关联场地编号</span>
              <Input className="startTime" value={this.state.connectedOne.length !== 0 ? this.state.connectedOne : []} style={{ paddingLeft: '10px', height: 32, background: '#fff', color: '#333', cursor: 'pointer', marginRight: 80 }} disabled={true} placeholder="点击进行选择" />
            </div>

            <div className="modelList" style={{ height: '32px' }} >
              <span>子关联场地数量</span>
              <div className="startTime" style={{ marginRight: 75, fontSize: '14px' }}>{this.state.connectedOneLen}</div>
            </div>
            <div className="modelList" style={{ height: '32px' }}>
              <span>子关联场地类型</span>
              <Select placeholder="请选择" className="selectModel" value={this.state.relatednessRunidTwo === '' ? [] : this.state.relatednessRunidTwo} style={{ width: 249, height: 32, marginRight: 80 }} onChange={this.handleChangeGFour}>
                {
                  this.state.sportArrTwoBe.map((item, i) => (
                    <Option key={i} value={item.id}>{item.name}</Option>
                  ))
                }
              </Select>
            </div>
            <div className="modelList" style={{ height: '32px' }} data-num={this.state.connectedOneTwo} onClick={this.connectedTwo}>
              <span>关联场地编号</span>
              <Input className="startTime" value={this.state.connectedOneTwo.length !== 0 ? this.state.connectedOneTwo : []} style={{ paddingLeft: '10px', height: 32, background: '#fff', color: '#333', cursor: 'pointer', marginRight: 80 }} disabled={true} placeholder="点击进行选择" />
            </div>
            <div className="footerLok">
              <div className="submit" data-id={this.state.venNumid} onClick={this.subSiteSubdivisionTwo}>提交</div>
            </div>
          </Modal>



          <Modal
            title="母关联场地编号"
            visible={this.state.connected}
            onOk={this.handleOk}
            onCancel={this.connectedCale}
            width={630}
            style={{ zIndex: 999 }}
            className='model'
            closeIcon={<CloseCircleOutlined style={{ color: '#fff', fontSize: '20px' }} />}
          >
            <div className="serialNumberTop"><span>请选择母关联的{this.state.connectedName}场地编号</span></div>
            <div style={{ clear: 'both' }}>
              {
                this.state.arrNum.map((item, i) => (
                  <div key={i} className="serialSon" onClick={this.connectedSelsed} data-num={item.num} data-id={item.id} style={item.cheked === true ? { color: '#fff', background: '#F5A623', transition: '0.3s' } : {} && item.cheked === 'no' ? { color: '#fff', background: '#F5A623', transition: '0.3s', opacity: '0.2' } : item.id === '场地不固定' ? { width: '80px' } : {}}>{item.id}</div>
                ))
              }
            </div>
            <div className="footerSerial">
              <div className="seriaComfir" onClick={this.connectedBtn}>提交</div>
            </div>
          </Modal>


          <Modal
            title="子关联场地编号"
            visible={this.state.connectedTwo}
            onOk={this.handleOk}
            onCancel={this.connectedCaleTwo}
            width={630}
            style={{ zIndex: 999 }}
            className='model'
            closeIcon={<CloseCircleOutlined style={{ color: '#fff', fontSize: '20px' }} />}
          >
            <div className="serialNumberTop"><span>请选择您要子关联的{this.state.connectedNameTwo}场地编号</span></div>
            <div style={{ clear: 'both' }}>
              {
                this.state.arrNum.map((item, i) => (
                  <div key={i} className="serialSon" onClick={this.connectedSelsedTwo} data-num={item.num} data-id={item.id} style={item.cheked === true ? { color: '#fff', background: '#F5A623', transition: '0.3s' } : {} && item.cheked === 'no' ? { color: '#fff', background: '#F5A623', transition: '0.3s', opacity: '0.2' } : item.id === '场地不固定' ? { width: '80px' } : {}}>{item.id}</div>
                ))
              }
            </div>
            <div className="footerSerial">
              <div className="seriaComfir" onClick={this.connectedBtnTwo}>提交</div>
            </div>
          </Modal>







          <Drawer
            title="特定日期价格设置"
            placement="right"
            closable={false}
            onClose={this.onClose}
            visible={this.state.detail}
          >
            <p>特定日期：{this.state.deData.sd}</p>
            <p>最短提前预约时间：{this.state.deData.app / 60}小时</p>
            <p>特定日期价格：{this.state.deData.cos}(元/小时)</p>
          </Drawer>





          <Modal
            title="添加/修改价格设置"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            width={630}

            className='model'
            style={{ marginLeft: this.state.pageX, marginTop: this.state.pageY, top: 20 }}
            closeIcon={<CloseCircleOutlined style={{ color: '#fff', fontSize: '20px' }} />}

          >
            <div className="group" onClick={this.getPosition} onMouseDown={this.onMouseDown} onMouseUp={this.onMouseUp} onMouseMove={this.onMouseMove}>
            </div>
            <div className="modelList" style={{ height: '32px' }}>
              <span>场地类型</span>
              <Select placeholder="请选择" onInputKeyDown={this.ko} disabled={this.state.update === 1 ? true : false} showArrow={this.state.update === 1 ? false : true} value={this.state.runIdTwo === '' ? [] : this.state.runIdTwo} className="selectModel" style={{ width: 269, height: 32 }} onChange={this.handleChangeOneTwo}>
                {
                  this.state.ListSport.map((item, i) => (
                    <Option key={i} value={item.id}>{item.name}</Option>
                  ))
                }
              </Select>
            </div>

            <div className="modelList" style={{ height: '32px' }}>
              <span>细分标签</span>
              <Select placeholder="请选择" disabled={this.state.update === 1 ? true : false} showArrow={this.state.update === 1 ? false : true} value={this.state.tagsTwo === '' ? [] : this.state.tagsTwo} className="selectModel" style={{ width: 269, height: 32 }} onChange={this.handleChangeTags}>
                {
                  this.state.selecdTil.map((item, i) => (
                    <Option key={i} value={item.title}>{item.title}</Option>
                  ))
                }
              </Select>
            </div>
            <div className="modelList" style={{ height: '32px' }}>
              <span>场地编号</span>
              <Input className="startTime" style={{ paddingLeft: '10px', height: 32, width: 269, cursor: 'pointer' }} value={this.state.chekedTwo === '' ? [] : this.state.chekedTwo} disabled={true} placeholder="请选择场地类型/细分标签" onChange={this.money} />
            </div>
            <div className="modelList">
              <span>场地数量</span>
              <div className="startTime" style={{ marginRight: 168 }}>{this.state.chekedTwoLen}</div>
            </div>

            <div className="modelList" style={this.state.tagsTwo.indexOf('散场') !== -1 || this.state.tagsTwo.indexOf('按次') !== -1 ? { display: 'none' } : { height: 'auto' }}>
              <span>星期</span>
              <Select placeholder="请选择" mode='multiple' className="selectModel"
                value={this.state.openday === '' ? [] : this.state.openday}
                style={{ width: 269, height: 'auto' }} onChange={this.handleChangeTwo}>
                <Option value="1">周一</Option>
                <Option value="2">周二</Option>
                <Option value="3">周三</Option>
                <Option value="4">周四</Option>
                <Option value="5">周五</Option>
                <Option value="6">周六</Option>
                <Option value="7">周日</Option>
              </Select>
            </div>


            <div className="modelList" style={this.state.timeFalg === true ? { height: '32px' } : { display: 'none' }}>
              <span>时间范围</span>
              <div style={this.state.runIdTwo === 3 || this.state.runIdTwo === 4 || this.state.runIdTwo === 5 ? { marginLeft: 88, float: 'left' } : { display: 'none' }}>

                <Select style={{ width: 128, height: 'auto', float: 'left' }} value={this.state.starttime === '' ? undefined : this.state.starttime} onChange={this.starttime} placeholder="开始时间">
                  {this.state.timer.map((item, i) => (
                    <Option key={i} value={item.name}>{item.name}</Option>
                  ))}
                </Select>
            ~
            <Select style={{ width: 130, height: 'auto' }} value={this.state.endtime === '' ? undefined : this.state.endtime} onChange={this.endtime} placeholder="结束时间">
                  {this.state.timer.map((item, i) => (
                    <Option key={i} value={item.name}>{item.name}</Option>
                  ))}
                </Select>

              </div>





              <div style={this.state.runIdTwo !== 3 || this.state.runIdTwo !== 4 || this.state.runIdTwo !== 5 ? { width: 269, float: 'left', marginLeft: 88, } : { display: 'none' }}>
                <Select style={{ width: 128, height: 'auto', float: 'left' }} value={this.state.starttime === '' ? undefined : this.state.starttime} onChange={this.starttime} placeholder="开始时间">
                  {this.state.timerTwo.map((item, i) => (
                    <Option key={i} value={item.name}>{item.name}</Option>
                  ))}
                </Select>
            ~
            <Select style={{ width: 130, height: 'auto' }} value={this.state.endtime === '' ? undefined : this.state.endtime} onChange={this.endtime} placeholder="结束时间">
                  {this.state.timerTwo.map((item, i) => (
                    <Option key={i} value={item.name}>{item.name}</Option>
                  ))}
                </Select>
              </div>



            </div>



            <div className="modelList" style={{ height: '32px' }}>
              <span>开始时间限制</span>
              <Select style={{ width: 269, height: 'auto', marginLeft: 60, float: 'left' }} disabled={this.state.timeFalg === true ? false : true} value={this.state.timeLimit === 1 ? '不限' : this.state.timeLimit === 2 ? '整点' : this.state.timeLimit === 3 ? '单数整点' : this.state.timeLimit === 4 ? '双数整点' : '不限'} onChange={this.timeLimit} placeholder="开始时间限制">
                <Option value='1'>不限</Option>
                <Option value='2'>整点</Option>
                <Option value='3'>单数整点</Option>
                <Option value='4'>双数整点</Option>
              </Select>
            </div>

            <div className="modelList" style={{ height: '32px' }}>
              <span>时长限制</span>
              <Select style={{ width: 269, height: 'auto', marginLeft: 88, float: 'left' }} disabled={this.state.timeFalg === true ? false : true} value={this.state.timeFalg === false ? '不限' : this.state.timeLimitTwo === 1 ? '一小时以上' : this.state.timeLimitTwo === 2 ? '一小时整数倍' : this.state.timeLimitTwo === 3 ? '二小时整数倍' : '一小时以上'} onChange={this.timeLimitTwo} placeholder="时长限制">
                <Option value='1'>一小时以上</Option>
                <Option value='2'>一小时整数倍</Option>
                <Option value='3'>二小时整数倍</Option>
              </Select>
            </div>




            <div className="modelList" style={{ height: '32px' }}>
              <span>价格</span><span>{this.state.timeFalg === 'no' ? '' : this.state.timeFalg === 'yes' ? '' : '(元/时)'}</span>
              <InputNumber className="startTime" value={this.state.costperhour_cg} min={1} style={this.state.timeFalg === 'no' ? { height: 32, width: 269, marginLeft: '115px', paddingLeft: '11px', marginRight: 0, float: 'left' } : this.state.timeFalg === 'yes' ? { height: 32, width: 269, marginLeft: '115px', paddingLeft: '11px', marginRight: 0, float: 'left' } : { height: 32, width: 269, paddingLeft: '11px' }} placeholder="请输入" onChange={this.money} />
              <Select placeholder="请选择" onChange={this.selectDA} value={this.state.selectDA} style={this.state.timeFalg === 'no' ? { float: 'right', marginRight: '50px', width: '80px', height: '32px' } : this.state.timeFalg === 'yes' ? { float: 'right', marginRight: '50px', width: '80px', height: '32px' } : { display: 'none' }}>
                <Option value="/次">/次</Option>
                <Option value="/H">/H</Option>
                <Option value="/2H">/2H</Option>
                <Option value="/3H">/3H</Option>
                <Option value="/4H">/4H</Option>
                <Option value="/5H">/5H</Option>
                <Option value="/6H">/6H</Option>
              </Select>
            </div>
            <div className="modelList" style={{ height: 32 }}>
              <span>最长提前预订时间</span>
              <Select placeholder="请选择" className="selectModel" value={this.state.maxScheduledDate_cgName} style={{ width: 269, height: 32 }} onChange={this.handleChangeFour}>
                <Option value="0.1">一周</Option>
                <Option value="0.2">两周</Option>
                <Option value="0.3">三周</Option>
                <Option value="1">一个月</Option>
                <Option value="2">两个月</Option>
              </Select>
            </div>
            <div className="modelList" style={{ height: 32 }}>
              <span>最短提前预订时间</span>
              <Select placeholder="请选择" disabled={this.state.timeFalg === 'no' ? true : this.state.timeFalg === 'yes' ? true : false} className="selectModel"
                defaultActiveFirstOption={false}
                value={
                  this.state.appointmenttime_cg_cg === -1 ? '不限' : []
                    && this.state.appointmenttime_cg === 0 ? '不限' : []
                      && this.state.appointmenttime_cg === 30 ? '30分钟' : []
                        && this.state.appointmenttime_cg === 60 ? '60分钟' : []
                          && this.state.appointmenttime_cg === 120 ? '2小时' : []
                            && this.state.appointmenttime_cg === 180 ? '3小时' : []
                              && this.state.appointmenttime_cg === 240 ? '4小时' : []
                                && this.state.appointmenttime_cg === 300 ? '5小时' : []
                                  && this.state.appointmenttime_cg === 360 ? '6小时' : []
                                    && this.state.appointmenttime_cg === 1440 ? '24小时' : []
                                      && this.state.appointmenttime_cg === 2880 ? '2天' : []
                                        && this.state.appointmenttime_cg === 4320 ? '3天' : []
                                          && this.state.appointmenttime_cg === 5760 ? '4天' : []
                                            && this.state.appointmenttime_cg === 7200 ? '5天' : []
                                              && this.state.appointmenttime_cg === 8640 ? '6天' : []
                                                && this.state.appointmenttime_cg === 10080 ? '7天' : []
                                                  && this.state.appointmenttime_cg === 11520 ? '8天' : []
                                                    && this.state.appointmenttime_cg === 12960 ? '9天' : []
                                                      && this.state.appointmenttime_cg === 14400 ? '10天' : []
                                                        && this.state.appointmenttime_cg === 15840 ? '11天' : []
                                                          && this.state.appointmenttime_cg === 17280 ? '12天' : []
                                                            && this.state.appointmenttime_cg === 18720 ? '13天' : []
                                                              && this.state.appointmenttime_cg === 20160 ? '14天' : []
                                                                && this.state.appointmenttime_cg === 21600 ? '15天' : []
                }
                style={{ width: 269, height: 32 }}
                onChange={this.handleChangeFive}
              >
                <Option value="0">0分钟</Option>
                <Option value="30">30分钟</Option>
                <Option value="60">60分钟</Option>
                <Option value="120">2小时</Option>
                <Option value="180">3小时</Option>
                <Option value="240">4小时</Option>
                <Option value="300">5小时</Option>
                <Option value="360">6小时</Option>
                <Option value="1440">24小时</Option>
                <Option value="2880">2天</Option>
                <Option value="4320">3天</Option>
                <Option value="5760">4天</Option>
                <Option value="7200">5天</Option>
                <Option value="8640">6天</Option>
                <Option value="10080">7天</Option>
                <Option value="11520">8天</Option>
                <Option value="12960">9天</Option>
                <Option value="14400">10天</Option>
                <Option value="15840">11天</Option>
                <Option value="17280">12天</Option>
                <Option value="18720">13天</Option>
                <Option value="20160">14天</Option>
                <Option value="21600">15天</Option>
              </Select>
            </div>
            <div className="modelListT">
              <span>备注</span>
              <TextArea className="textArea" rows={4} placeholder='请输入' maxLength={50} style={{ marginRight: 151, width: 269 }} value={this.state.comment} onChange={this.textArea} />
            </div>
            <div className="submit" data-uuid={this.state.Disid !== '' ? this.state.Disid : ''} onClick={this.submit}>提交</div>
          </Modal>




          <Modal
            title="添加/修改场地细分"
            visible={this.state.joinXi}
            onOk={this.handleOk}
            onCancel={this.handlejoinXi}
            width={500}
            className='model'
            closeIcon={<CloseCircleOutlined style={{ color: '#fff', fontSize: '20px' }} />}
          >
            <span style={{ position: 'absolute', bottom: 70, left: 45, color: '#F5A623', cursor: 'pointer' }} onClick={this.interpretation}>什么是细分标签?</span>
            <div className="modelList" style={{ height: '32px' }}>
              <span>场地类型</span>
              <Select placeholder="请选择" className="selectModel" showArrow={this.state.typeDetel === 0 ? false : true} disabled={this.state.typeDetel === 0 ? true : false} value={this.state.runId === '' ? [] : this.state.runId} style={{ width: 249, height: 32, marginRight: 100 }} onChange={this.handleChangeOne}>
                {
                  this.state.ListSport.map((item, i) => (
                    <Option key={i} value={item.id}>{item.name}</Option>
                  ))
                }
              </Select>
            </div>

            <div className="modelList" style={{ height: '32px' }}>
              <span>细分标签</span>
              <Select
                style={{ width: 249, height: 32, marginRight: 100, background: '#fff' }}
                placeholder="请选择/添加后选择"
                className="selectModel"
                onChange={this.title}
                onDropdownVisibleChange={this.openSelect}
                value={this.state.tags === '' ? [] : this.state.tags}
                disabled={this.state.typeDetel === 0 ? true : false}
                showArrow={this.state.typeDetel === 0 ? false : true}
                dropdownRender={menu => (
                  <div>
                    {menu}
                    <Divider style={{ margin: '4px 0' }} />
                    <div style={{ display: 'flex', padding: 8 }}>
                      <Input style={{ height: 32, background: '#fff' }} value={name} onChange={this.onNameChange} maxLength={4} />
                      <span style={{ flex: 'none', padding: '8px', display: 'block', cursor: 'pointer' }} onClick={this.addItem}>
                        <PlusOutlined />自定义(4个汉字以内)
                  </span>
                    </div>
                  </div>
                )}
              >
                {this.state.joinTil.map((item, i) => (
                  <Option key={i} onContextMenu={this.deletSelect} data-id={item.uuid} data-title={item.title} value={item.title}><div><span>{item.title}</span><span style={item.uuid === 1 || this.state.open === false ? { display: 'none' } : { float: 'right', fontSize: '12px', color: '#ccc' }}>(右键删除)</span></div></Option>
                ))}
              </Select>
            </div>

            <div className="modelList" style={this.state.runId === 6 || this.state.runId === 2 ? { height: '32px' } : { display: 'none' }}>
              <span>收费类型</span>
              <Select placeholder="请选择" className="selectModel" showArrow={this.state.typeDetel === 0 ? false : true} disabled={this.state.typeDetel === 0 ? true : false} value={this.state.typeTwo === 0 ? [] : this.state.typeTwo} style={{ width: 249, height: 32, marginRight: 100 }} onChange={this.handleChangeType}>
                {
                  this.state.ListSportTwoLO.map((item, i) => (
                    <Option key={i} value={item.id}>{item.name}</Option>
                  ))
                }
              </Select>
            </div>

            <div className="modelList" style={{ height: '32px' }}>
              <span>标签描述</span>
              <Input className="startTime" value={this.state.commentTitle} onChange={this.commentTitle} style={{ paddingLeft: '10px', height: 32, background: '#fff', color: '#333', cursor: 'pointer', marginRight: 100 }} placeholder="请填写(选填)" />
            </div>

            <div className="modelList" style={{ height: '32px' }} onClick={this.serial}>
              <span>场地编号</span>
              <Input className="startTime" value={this.state.arrCheked.length !== 0 ? this.state.arrCheked : []} style={{ paddingLeft: '10px', height: 32, background: '#fff', color: '#333', cursor: 'pointer', marginRight: 100 }} disabled={true} placeholder="点击进行添加" />
            </div>

            <div className="modelList" style={{ height: '32px' }} >
              <span>场地数量</span>
              <div className="startTime" style={{ marginRight: 100 }}>{this.state.arrChekedLen}</div>
            </div>
            <div className="footerLok">
              <div className="submit" data-id={this.state.venNumid} onClick={this.subSiteSubdivision}>提交</div>
            </div>
          </Modal>



          <Modal
            title="添加场地编号"
            visible={this.state.serialNumber}
            onOk={this.handleOk}
            onCancel={this.handleserialNumber}
            width={630}
            style={{ zIndex: 999 }}
            className='model'
            closeIcon={<CloseCircleOutlined style={{ color: '#fff', fontSize: '20px' }} />}
          >
            <div className="serialNumberTop"><span>请选择您要设置的场地编号</span><div onClick={this.reverseElection}>反选</div><div onClick={this.allOfThem} style={{ marginRight: '10px' }}>全选</div></div>
            <div style={{ clear: 'both' }}>
              {
                this.state.arrNum.map((item, i) => (
                  <div key={i} className={this.state.typeTwo === 2 || this.state.typeTwo === 4 ? "serialSonTwo" : "serialSon"} onClick={this.seriaSon} data-num={item.num} data-id={item.id} style={item.cheked === true ? { color: '#fff', background: '#F5A623', transition: '0.3s' } : {} && item.cheked === 'no' ? { color: '#fff', background: '#F5A623', transition: '0.3s', opacity: '0.2' } : item.id === '场地不固定' ? { width: '80px' } : {}}>{item.id}</div>
                ))
              }
            </div>
            <div className="footerSerial">
              <div className="seriaComfir" onClick={this.serialComfir}>提交</div>
            </div>
          </Modal>




          <Modal
            title="什么是细分标签?"
            visible={this.state.interpretation}
            onOk={this.handleOk}
            onCancel={this.handleserialNumberTwo}
            width={630}
            className='model'
            closeIcon={<CloseCircleOutlined style={{ color: '#fff', fontSize: '20px' }} />}
          >
            <div>请对所选场地类型进行再细分，如场地类型选择的是羽毛球，贵场馆羽毛球场地是否有普通场、VIP场等之分? 如没有，则所有场地选择一个标签即可，如有，则分开设置标签及对应的“场地编号”。总之，同一时刻，不同价格的场地须细分并给出标签。</div>
          </Modal>


          <Modal
            title="提示"
            visible={this.state.nosubdivisions}
            onOk={this.handleOk}
            width={350}
            closable={false}
            style={{ paddingBottom: '0' }}
            className='model'
          >
            <div>您还没对<span style={{ color: '#F5A623' }}>{this.state.runNameTwo}场地</span>进行场地细分，无法选择细分标签，请先去进行场地细分，谢谢！ </div>
            <div onClick={this.toSetUp} style={{ width: '100px', height: '26px', background: '#F5A623', fontSize: '14px', color: '#fff', textAlign: 'center', lineHeight: '26px', margin: '30px auto 0', cursor: 'pointer' }}>确定,去设置</div>
          </Modal>


          <Modal
            title="添加/修改特定日期价格设置"
            visible={this.state.Preferential}
            onOk={this.handleOk}
            onCancel={this.PreferentialCan}
            width={630}
            className='model'
            closeIcon={<CloseCircleOutlined style={{ color: '#fff', fontSize: '20px' }} />}
          >
            <div className="modelList" style={{ height: '32px' }}>
              <span>场地类型</span>
              <Select placeholder="请选择" disabled={true} showArrow={false} value={this.state.runIdTwo === '' ? [] : this.state.runIdTwo} className="selectModel" style={{ width: 330, height: 32, marginRight: 100, cursor: 'pointer' }} onChange={this.handleChangeOneTwo}>
                {
                  this.state.ListSport.map((item, i) => (
                    <Option key={i} value={item.id}>{item.name}</Option>
                  ))
                }
              </Select>
            </div>

            <div className="modelList" style={{ height: '32px' }}>
              <span>场地标签</span>
              <Select placeholder="请选择" disabled={true} showArrow={false} value={this.state.tagsTwo === '' ? [] : this.state.tagsTwo} className="selectModel" style={{ width: 330, height: 32, marginRight: 100 }} onChange={this.handleChangeTags}>
                {
                  this.state.joinTil.map((item, i) => (
                    <Option key={i} value={item.title}>{item.title}</Option>
                  ))
                }
              </Select>
            </div>



            <div className="modelList" style={{ height: '32px' }}>
              <span>时间范围</span>
              <Select style={{ width: 159, height: 'auto', marginLeft: 77, float: 'left' }} disabled={true} value={this.state.starttime === '' ? undefined : this.state.starttime} onChange={this.starttime} placeholder="开始时间">
                {this.state.timer.map((item, i) => (
                  <Option key={i} value={item.name}>{item.name}</Option>
                ))}
              </Select>
            ~
            <Select style={{ width: 159, height: 'auto' }} disabled={true} value={this.state.endtime === '' ? undefined : this.state.endtime} onChange={this.endtime} placeholder="结束时间">
                {this.state.timer.map((item, i) => (
                  <Option key={i} value={item.name}>{item.name}</Option>
                ))}
              </Select>
            </div>

            <div className="modelList" style={{ height: '32px' }}>
              <span>场地号</span>
              <Input className="startTime" style={{ paddingLeft: '10px', height: 32, width: 330, cursor: 'pointer', marginRight: 100 }} disabled={true} value={this.state.chekedThree === '' ? [] : this.state.chekedThree} placeholder="点击进行添加" />
            </div>

            <div className="modelList" style={{ height: 32 }}>
              <span>最短提前预订时间</span>
              <Select placeholder="请选择" className="selectModel"
                defaultActiveFirstOption={false}
                value={
                  this.state.appointmenttime_cgTwo === -1 ? '不限' : []
                    && this.state.appointmenttime_cgTwo === 0 ? '不限' : []
                      && this.state.appointmenttime_cgTwo === 30 ? '30分钟' : []
                        && this.state.appointmenttime_cgTwo === 60 ? '60分钟' : []
                          && this.state.appointmenttime_cgTwo === 120 ? '2小时' : []
                            && this.state.appointmenttime_cgTwo === 180 ? '3小时' : []
                              && this.state.appointmenttime_cgTwo === 240 ? '4小时' : []
                                && this.state.appointmenttime_cgTwo === 300 ? '5小时' : []
                                  && this.state.appointmenttime_cgTwo === 360 ? '6小时' : []
                                    && this.state.appointmenttime_cgTwo === 1440 ? '24小时' : []
                                      && this.state.appointmenttime_cgTwo === 2880 ? '2天' : []
                                        && this.state.appointmenttime_cgTwo === 4320 ? '3天' : []
                                          && this.state.appointmenttime_cgTwo === 5760 ? '4天' : []
                                            && this.state.appointmenttime_cgTwo === 7200 ? '5天' : []
                                              && this.state.appointmenttime_cgTwo === 8640 ? '6天' : []
                                                && this.state.appointmenttime_cgTwo === 10080 ? '7天' : []
                                                  && this.state.appointmenttime_cgTwo === 11520 ? '8天' : []
                                                    && this.state.appointmenttime_cgTwo === 12960 ? '9天' : []
                                                      && this.state.appointmenttime_cgTwo === 14400 ? '10天' : []
                                                        && this.state.appointmenttime_cgTwo === 15840 ? '11天' : []
                                                          && this.state.appointmenttime_cgTwo === 17280 ? '12天' : []
                                                            && this.state.appointmenttime_cgTwo === 18720 ? '13天' : []
                                                              && this.state.appointmenttime_cgTwo === 20160 ? '14天' : []
                                                                && this.state.appointmenttime_cgTwo === 21600 ? '15天' : []
                }
                style={{ width: 330, height: 32, float: 'right', marginRight: '100px' }}
                onChange={this.handleChangeFiveTwo}
              >
                <Option value="0">0分钟</Option>
                <Option value="30">30分钟</Option>
                <Option value="60">60分钟</Option>
                <Option value="120">2小时</Option>
                <Option value="180">3小时</Option>
                <Option value="240">4小时</Option>
                <Option value="300">5小时</Option>
                <Option value="360">6小时</Option>
                <Option value="1440">24小时</Option>
                <Option value="2880">2天</Option>
                <Option value="4320">3天</Option>
                <Option value="5760">4天</Option>
                <Option value="7200">5天</Option>
                <Option value="8640">6天</Option>
                <Option value="10080">7天</Option>
                <Option value="11520">8天</Option>
                <Option value="12960">9天</Option>
                <Option value="14400">10天</Option>
                <Option value="15840">11天</Option>
                <Option value="17280">12天</Option>
                <Option value="18720">13天</Option>
                <Option value="20160">14天</Option>
                <Option value="21600">15天</Option>
              </Select>
            </div>

            <div className="modelList" style={{ height: '32px' }}>
              <span>价格</span><span style={{ marginLeft: 0 }}>(元/小时)</span>
              <Input type="number" className="startTime" value={String(this.state.costperhourTwo).replace('.', '')} min={0} style={{ paddingLeft: '10px', height: 32, width: 330, marginRight: 100 }} placeholder="请输入" onChange={this.moneyTwo} />
            </div>

            <div className="modelList" style={{ height: 'auto' }}>
              <span>特定日期</span>
              <div className="specificList">
                <div className="specificListSon">

                  {
                    this.state.workingDayList.map((item, i) => (

                      <span className="small" key={i}>{item}<span onClick={this.small} data-date={item} >×</span></span>
                    ))
                  }

                </div>
                <div className="footer">
                  <div onClick={this.workingDay} data-index="1" style={this.state.indexBtnSon === '1' ? { background: '#F5A623' } : {}}>当年工作日</div>
                  <div onClick={this.workingDay} data-index="2" style={this.state.indexBtnSon === '2' ? { background: '#F5A623' } : {}}>当年周六日</div>
                  <div onClick={this.workingDay} data-index="3" style={this.state.indexBtnSon === '3' ? { background: '#F5A623' } : {}}>当年法定节假日</div>
                </div>


              </div>

            </div>




            <div className="site-calendar-demo-card" style={{ border: '1px solid #e9e9e9', width: '56.5%', marginLeft: 153, marginTop: 15 }}>
              <Calendar fullscreen={false} className="startTime" dateCellRender={this.dateCellRender} locale={locale} mode='month' onChange={this.onPanelChange} />
            </div>



            <div className="footerSerial">
              <div className="seriaComfir" onClick={this.PreferentialComfir} data-type="1">{this.state.typeList === undefined ? '提交' : '提交修改'}</div>
              <Popconfirm
                title="您确定删除该条特定日期设置么?"
                onConfirm={this.DelSiteSettingcount}
                onCancel={this.btncancel}
                okText="确定"
                cancelText="取消"
              >
                <div className="seriaComfir" data-type="2" style={this.state.typeList === undefined ? { display: 'none' } : { display: 'block', marginRight: '15px' }}>删除</div>
              </Popconfirm>
            </div>
          </Modal>



          <Modal
            title="添加场地编号"
            visible={this.state.serialNumberTwo}
            onOk={this.handleOk}
            onCancel={this.handleserialNumberTwo}
            width={630}
            style={{ zIndex: 999 }}
            className='model'
            closeIcon={<CloseCircleOutlined style={{ color: '#fff', fontSize: '20px' }} />}
          >
            <div className="serialNumberTop"><span>请选择您要设置的场地编号</span></div>
            <div className="serialNumberTop" style={{ float: 'right', marginTop: '-8px' }}><span onClick={this.allChed}>全选</span><span onClick={this.allChedTwo}>反选</span></div>
            <div style={{ clear: 'both' }}>
              {
                this.state.arrNumTwo.map((item, i) => (
                  <div key={i} className="serialSon" onClick={this.seriaSonTwo} data-id={i} style={item.cheked === true ? { color: '#fff', background: '#F5A623', transition: '0.3s' } : {}}>{item.idIdx}</div>
                ))
              }
            </div>
            <div className="footerSerial" style={{ marginTop: '60px' }}>
              <div className="seriaComfir" onClick={this.serialComfirTwo}>确定</div>
            </div>
          </Modal>




        </div ></Spin>
    )
  }
  form = React.createRef();
}

export default siteSettings;