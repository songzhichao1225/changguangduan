import React from 'react';
import './temporaryPh.css';
import { message, Select, Icon, Row, Col, Drawer, DatePicker, Pagination, Popconfirm,Result } from 'antd';
import { getVenueSport, VenueTemporarilyClosedList, VenueTemporarilyClosedSave, VenueTemporarilyClosedDel } from '../../api';
import moment from 'moment';
import zh_CN from 'antd/es/date-picker/locale/zh_CN';
const { Option } = Select;





class temporaryPh extends React.Component {

  state = {
    sportList: [],
    VenueTemporarilyClosedList: [],
    visible: false,
    startValue: undefined,
    sportId: null,
    EndValue: undefined,
    textarea: null,
    sportName: [],
    total: 0,
    listUUid: null,
    upUUid:'',
    temPage:0,
    clenTop: 0,  //下拉加载参数
    clickY: 0,
    moveY: 0,
    spinFlag: false,
  };
  async getVenueSport(data) {
    const res = await getVenueSport(data, localStorage.getItem('venue_token'))
    if (res.data.code === 4001) {
      this.props.history.push('/login')
      message.error('登录超时请重新登录')
    } else {
      this.setState({ sportList: res.data.data })
    }
  }


  async VenueTemporarilyClosedList(data) {
    const res = await VenueTemporarilyClosedList(data, localStorage.getItem('venue_token'))
    if (res.data.code === 4001) {
      this.props.history.push('/login')
      message.error('登录超时请重新登录')
    } else {
       this.setState({spinFlag:false })
      if(this.state.upUUid!==''){
        this.setState({ sportName:res.data.data[0].sportname,startValue:res.data.data[0].starttime,EndValue:res.data.data[0].endtime,textarea:res.data.data[0].comment})
      }else{
        this.setState({ VenueTemporarilyClosedList: res.data.data, total: res.data.other,upUUid:'' })
      }
    }
  }


  componentDidMount() {
    this.getVenueSport()
    this.VenueTemporarilyClosedList({ page: 1 })
    let start = moment().startOf('day').add(1, 'days')._d.toLocaleDateString().replace(/\//g, "-")
    let end = moment().endOf('day').add(1, 'days')._d.toLocaleDateString().replace(/\//g, "-")
    this.setState({ startValue: start, EndValue: end })
  }

  current = (page, pageSize) => {
    this.setState({temPage:page})
    this.VenueTemporarilyClosedList({ page: page })
  }

  reture = () => {
    this.props.history.goBack()
  }

  addYouList = () => {
    this.setState({ visible: true })
  }
  onClose = () => {
    this.setState({ visible: false })
  }


 

  onStartChange = (date,dateString) => {
    this.setState({startValue:dateString})
  };


  onEndChange = (date,dateString) => {
    this.setState({EndValue:dateString})
  };


  sportChange = (e) => {
    this.setState({ sportId: e })
    let day = ""
    switch (parseInt(e)) {
      case 1:
        day = "羽毛球";
        break;
      case 2:
        day = "乒乓球";
        break;
      case 3:
        day = "台球";
        break;
      case 4:
        day = "篮球";
        break;
      case 5:
        day = "足球";
        break;
      case 6:
        day = "排球";
        break;
      case 7:
        day = "网球";
        break;
      case 8:
        day = "高尔夫";
        break;
      default:
        day = "";
    }
    this.setState({ sportName: day })
  }

  textArea = (e) => {
    this.setState({ textarea: e.target.value })
  }


  async VenueTemporarilyClosedSave(data) {
    const res = await VenueTemporarilyClosedSave(data, localStorage.getItem('venue_token'))
    if (res.data.code === 4001) {
      this.props.history.push('/login')
      message.error('登录超时请重新登录')
    } else {
      message.info(res.data.msg)
      this.setState({ visible: false })
      this.VenueTemporarilyClosedList()
    }
  }
  subCilck = () => {
    let { sportId, sportName, startValue, EndValue, textarea,upUUid } = this.state
    if(upUUid===''){
      let data = {
        sportid: sportId,
        sportname: sportName,
        starttime: startValue,
        endtime: EndValue,
        comment: textarea,
      }
      this.VenueTemporarilyClosed(data)
    }else{
      let data = {
        colseuuid:upUUid,
        sportid: sportId,
        sportname: sportName,
        starttime: startValue,
        endtime: EndValue,
        comment: textarea,
      }
      this.VenueTemporarilyClosedSave(data)
    }
    
  }

  mood = (e) => {
    this.setState({ listUUid: e.target.dataset.uuid})
  }


  async VenueTemporarilyClosedDel(data) {
    const res = await VenueTemporarilyClosedDel(data, localStorage.getItem('venue_token'))
    if (res.data.code === 4001) {
      this.props.history.push('/login')
      message.error('登录超时请重新登录')
    } else {
      message.info(res.data.msg)
      this.VenueTemporarilyClosedList()
    }
  }
  temDelet = () => {
    this.VenueTemporarilyClosedDel({colseuuid:this.state.listUUid})
  }

  upload=(e)=>{
    this.VenueTemporarilyClosedList({colseuuid:e.target.dataset.uuid})
    this.setState({ visible: true,upUUid:e.target.dataset.uuid })
  }

  touClick = (e) => {
    this.setState({ clickY: e.targetTouches[0].clientY })
  }
  touMove = (e) => {
    if (this.state.clickY < e.targetTouches[0].clientY&&this.state.clickY<200) {
      this.setState({ moveY: e.targetTouches[0].clientY })
      if (e.targetTouches[0].clientY - this.state.clickY < 80) {
        this.setState({ spinFlag: true })
        this.setState({ clenTop: e.targetTouches[0].clientY - this.state.clickY })
      }
    }
  }
  touEnd = () => {
    if (this.state.moveY > this.state.clickY+10) {
      this.VenueTemporarilyClosedList({page:this.state.temPage})
      if (this.state.spinFlag === false) {
          this.setState({ clenTop: 0 })
      }
    }
  }


  render() {
    return (
      <div className="temporaryPh">
        <div className="headTitle"><Icon type="arrow-left" onClick={this.reture} style={{ position: 'absolute', left: '5%', top: '35%' }} />设置临时关闭预约</div>
        <Row className='Row'>
          <Col xs={{ span: 6 }} lg={{ span: 6 }}>运动名称</Col>
          <Col xs={{ span: 12 }} lg={{ span: 12 }}>时间</Col>
          <Col xs={{ span: 6 }} lg={{ span: 6 }}>操作</Col>
        </Row>
        <div className='headSelect' style={this.state.spinFlag === true ? { display: 'block',height:this.state.clenTop,transition: '0.3s',background:'#f5f5f5',position:'relative' } : { display: 'none' }} ><Icon type="loading" className='loadingY' style={{top:this.state.clenTop/7}} /></div>
        
        <div className="temScroll" onTouchMove={this.touMove} onTouchStart={this.touClick} onTouchEnd={this.touEnd} >
        {
          this.state.VenueTemporarilyClosedList.map((item, i) => (
            <Row className='Row' key={i}>
              <Col xs={{ span: 6 }} lg={{ span: 6 }}>{item.sportname}</Col>
              <Col style={{ lineHeight: '2rem' }} xs={{ span: 12 }} lg={{ span: 12 }}>{item.starttime}<br />{item.endtime}</Col>
              <Col xs={{ span: 6 }} lg={{ span: 6 }}>
                <img style={{ paddingRight: '0.5rem' }} data-uuid={item.uuid} onClick={this.upload} src={require("../../assets/upLoad.png")} alt='修改' />

                <Popconfirm
                  title="你确定要删除吗?"
                  onConfirm={this.temDelet}
                  onCancel={this.siteCancel}
                  okText="确定"
                  cancelText="取消"
                >
                  <img className="upLoad" style={{ right: '1.5rem' }} onClick={this.mood} data-uuid={item.uuid} src={require("../../assets/delet.png")} alt="删除" />
                </Popconfirm>
              </Col>
            </Row>
          )
          )
        }
        </div>
        <img className="addList" onClick={this.addYouList} src={require("../../assets/comeOn@2x.png")} alt="添加" />
        <Pagination className="fenye" defaultCurrent={1} style={this.state.VenueTemporarilyClosedList.length < 1 ? { display: 'none' } : {}} size="small" onChange={this.current} total={this.state.total} />
        <Result className={this.state.VenueTemporarilyClosedList.length === 0 ? '' : 'nono'} icon={<Icon type="gift" theme="twoTone" twoToneColor="#F5A623" style={{ fontSize: '2rem' }} />} title="没有场地设置" />
        <Drawer
          title="添加关闭预约信息"
          placement="right"
          closable={true}
          width={'100%'}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <div className='drawerInput'>
            <span>运动项目</span>
            <Select placeholder='请选择' style={{ width: 200, border: 'none', boxShadow: 'none' }} value={this.state.sportName} onChange={this.sportChange}>
              {
                this.state.sportList.map((item, i) => (
                  <Option key={i} value={item.id}>{item.name}</Option>
                ))
              }
            </Select>
          </div>

          <div className='drawerInput'>
            <span>开始时间</span>
            <DatePicker
              locale={zh_CN}
              disabledDate={this.disabledStartDate}
              showTime
              format="YYYY-MM-DD HH:mm"
              value={moment(this.state.startValue)}
              placeholder="开始时间"
              onChange={this.onStartChange}
            />
          </div>

          <div className='drawerInput'>
            <span>结束时间</span>
            <DatePicker
              locale={zh_CN}
              disabledDate={this.disabledStartDate}
              showTime
              format="YYYY-MM-DD HH:mm"
              value={moment(this.state.EndValue)}
              placeholder="结束时间"
              onChange={this.onEndChange}
            />
          </div>

          <div className='drawerInput'>
            <span style={{ display: 'block', float: 'left' }}>备注</span>
            <textarea rows={3} style={{ marginLeft: '2.5rem' }} maxLength={200} placeholder="请输入备注" onChange={this.textArea}></textarea>
          </div>

          <div className='drawerInput' style={{ border: 'none' }}>
            <div className="confirm" onClick={this.subCilck}>确认</div>
          </div>


        </Drawer>

      </div>
    )
  }
}

export default temporaryPh;