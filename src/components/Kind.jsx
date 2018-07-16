import React, {Component} from 'react'
import kindapi from '@/api/kind.js'
import {Link, NavLink } from 'react-router-dom'
import tool from '@/tool/index.js'
import store from '@/store/index.js'
import Loading from '@/uicom/Loading.jsx'
class Kind extends Component {
  constructor (props) {
    super(props)
    this.getData = this.getData.bind(this)
    this.state = {
      // kindlist: []
      isLoading: 'none'
    }
  }
  
  componentDidMount () {
    kindapi.getMenuList((data) => {
      // console.log(data)
      store.dispatch({
        type: 'KIND_MENU_LIST',
        data
      })
    })
    
    // console.log(this.props)
    var classID = this.props.match.params['classID']
    this.getData(classID)
    tool.backTop()
    
  }
  
  componentWillReceiveProps (nextProps) {
    // console.log('componentWillReceiveProps',this.props)
    // console.log('componentWillReceiveProps', nextProps)
    var classID = nextProps.match.params['classID']
    this.getData(classID)
  }
  
  getData (classID) {
    this.setState({
      isLoading: 'block'
    })
    kindapi.getListData(classID, (data) => {
    	store.dispatch({
        type: 'KIND_LIST',
        data
      })
      	this.setState({
      		isLoading: 'none'
      	})
    })
  }
  
  render () {
    var arr = [];
    const kindlist = store.getState().kinddata.kindlist
    if( kindlist == 0){
      arr = '暂无数据'
    }else{
      kindlist.map((item,index) => {
        arr.push(
        <Link key={item.goodsID} to={'/detail/' + item.goodsID}>
          <li>
            <img src={item.goodsListImg} />
            <div className='proinfo'>
              {item.goodsName}
            </div>
          </li>
        </Link>
        )
      })
    }
    return (
      <div className='container'>
      <div className = 'main'>
        <header>
          Kind头部
        </header>
        <div className = 'content kindContent'>
          <ul className='kindMenu'>
            {
              store.getState().kinddata.kindmenulist.map((item, index) => (
                <li className= {this.state.activeIndex == index ? 'active' : ''} key = {item.classID}>
                 <NavLink to = {'/kind/'+item.classID} >{item.className}</NavLink>
                </li>
              ))
            }  
          </ul>
          <Loading display={this.state.isLoading}/>
          <div className = 'kindList'>
            <ul className = 'prolist'>
            	{
               arr
            	}
            </ul>
            <button id='backTop'>回到顶部</button>
          </div>
        </div>
      </div> </div>
    )
  }
}

export default Kind
