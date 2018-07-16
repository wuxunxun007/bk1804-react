import React, {Component} from 'react'
import detailApi from '@/api/detail.js'
import {Link} from 'react-router-dom'
class Detail extends Component {
  constructor (props) {
    super(props)
    this.state = {
      goodsListImg: '',
      goodsName: '',
      className: '',
      price: '',
      number: ''
    }
  }
  
  backHandler () {
    // console.log(this.props.location.state.flag)
    this.props.history.goBack()
  }
  
  componentDidMount () {
    // console.log(this.props.match.params.goodsID)
    const goodsID = this.props.match.params.goodsID
    detailApi.getData(goodsID, ({goodsListImg,goodsName,className,price,number}) => {
      this.setState({
        goodsName,className,price,number,goodsListImg
      })
    })
  }
  
  addCart () {
    if(localStorage.getItem('isLogin') == 1){
      const userID = localStorage.getItem('userID')
      const goodsID = this.props.match.params.goodsID
      const number = 1
      
      detailApi.addCart({userID, goodsID, number}, (data) => {
        if(data == 1){
          alert('添加成功')
        }else {
          alert('添加失败')
        }
      })

    }else {
      this.props.history.push('/login')
    }
  }
  
  render () {
    
    return (
      <div className = 'container'>
        <div className = 'main'>
        	<header>
        		<div className='left' onClick = {this.backHandler.bind(this)}>
              返回
            </div>
            <div className='center'>
            	详情
            </div>
            <div className='right'>
            	分享
            </div>
        	</header>
        	<div className = 'content'>
        		Detail
            <img src={this.state.goodsListImg} /> 
            {this.state.goodsName}
        	</div>
        </div>
        <footer>
          <button onClick = {this.addCart.bind(this)}>加入购物车</button>
          <Link to='/cart'>查看购物车</Link>
        </footer>
      </div>
    )
  }
}

export default Detail
