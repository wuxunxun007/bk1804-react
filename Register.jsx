import React, {Component} from 'react'
import userapi from '@/api/user.js'

class Register extends Component {
  constructor (props) {
    super(props)
    this.state = {
      userIDState: ''
    }
  }
  
  checkUserID () {
    var userID = this.refs.userID.value
    if(userID.length > 5) {
      this.setState({
        userIDState: '√'
      })
    }else {
      this.setState({
      	userIDState: '×'
      })
    }
    
    if(userID == ''){
      this.setState({
      	userIDState: ''
      })
    }
    console.log(userID)
  }
  clear (type) {
    this.refs[type].value = ''
    this.setState({
    	userIDState: ''
    })
  }
  register () {
    var userID = this.refs.userID.value
    var password = this.refs.password.value
    var status = 'register'
    userapi.submitData({status,userID,password}, (data) => {
      if(data == 0){
        alert('该用户已注册,请直接登录')
      }else if(data == 1){
        alert('注册成功')
      }else {
        alert('注册失败')
      }
    })
  }
  
  render () {
    var clearStr = '';
    if(this.state.userIDState != ''){
      clearStr  = <span onClick={this.clear.bind(this, 'userID')}>清空</span>
    }else {
      clearStr = ''
    }
    return (
      <div className = 'container'>
        <div className = 'main'>
        	<header>
        		注册头部
        	</header>
        	<div className = 'content'>
        		<input type='text' placeholder='请输入您的用户名' onChange = {this.checkUserID.bind(this)} ref='userID' />
            { this.state.userIDState } 
            {clearStr}
            <br/>
            <input type='password' placeholder='请输入您的密码' ref='password' /><span onClick={this.clear.bind(this, 'password')}>清空</span>
            <button onClick = {this.register.bind(this)}>注册</button>
        	</div>
        </div>
      </div>
    )
  }
}

export default Register
