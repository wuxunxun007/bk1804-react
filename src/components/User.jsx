import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { Carousel, WingBlank, ActionSheet, WhiteSpace, Button, Toast, DatePicker } from 'antd-mobile';

const CustomChildren = ({ extra, onClick, children }) => (
  <div
    onClick={onClick}
    style={{ backgroundColor: '#fff', height: '45px', lineHeight: '45px', padding: '0 15px' }}
  >
    {children}
    <span style={{ float: 'right', color: '#888' }}>{'---'+extra}</span>
  </div>
);

class User extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: ['1', '2', '3'],
      imgHeight: 176,
       clicked: 'none',
      clicked1: 'none',
      clicked2: 'none',
      customChildValue: null,
      dataList: [
      	{ url: 'OpHiXAcYzmPQHcdlLFrc', title: '发送给朋友' },
      	{ url: 'wvEzCMiDZjthhAOcwTOu', title: '新浪微博' },
      	{ url: 'cTTayShKtEIdQVEMuiWt', title: '生活圈' },
      	{ url: 'umnHwvEgSyQtXlZjNJTt', title: '微信好友' },
      	{ url: 'SxpunpETIwdxNjcJamwB', title: 'QQ' },
      ].map(obj => ({
      	icon: <img src={`https://gw.alipayobjects.com/zos/rmsportal/${obj.url}.png`} alt={obj.title} style={{ width: 36 }} />,
      	title: obj.title,
      }))
    }
  }
  
  
  
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);
  }
  
  
   showShareActionSheetMulpitleLine () {
    const data = [[...this.state.dataList, this.state.dataList[2]], [this.state.dataList[3], this.state.dataList[4]]];
    ActionSheet.showShareActionSheetWithOptions({
      options: data,
      message: 'I am description, description, description',
    },
    (buttonIndex, rowIndex) => {
      this.setState({ clicked2: buttonIndex > -1 ? data[rowIndex][buttonIndex].title : 'cancel' });
    });
  }
  render () {
    var str = ''
    if(localStorage.getItem('isLogin') == 1){
      str = <div>欢迎您,{localStorage.getItem('userID')}</div>
    }else {
      str = <div>
              <Link to='/login'><button>登录</button></Link>
              <Link to='/register'><button>注册</button></Link>
            </div>
    }
    
    return (
      <div className = 'main'>
        <header>
          User头部
        </header>
        <div className = 'content'>
          {str}
          
          <WingBlank>
        <Carousel className="space-carousel"
          frameOverflow="visible"
          cellSpacing={10}
          slideWidth={0.8}
          autoplay
          infinite
        >
          {this.state.data.map((val, index) => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{
                display: 'block',
                position: 'relative',
                top: this.state.slideIndex === index ? -10 : 0,
                height: this.state.imgHeight,
                boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
              }}
            >
              <img
                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
      <Button onClick={this.showShareActionSheetMulpitleLine.bind(this)}>showShareActionSheetMulpitleLine</Button>
        <DatePicker
          mode="time"
          format="HH:mm"
          title="Select Time"
          value={this.state.customChildValue}
          onChange={v => {console.log(v);this.setState({ customChildValue: v })}}
          extra="click to choose"
        >
          <CustomChildren>选择配送时间</CustomChildren>
        </DatePicker>
        
        </div>
      </div>
    )
  }
}

export default User
