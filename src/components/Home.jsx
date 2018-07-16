import React, {Component} from 'react'
import homeApi from '@/api/home.js'
import {Link} from 'react-router-dom'
import tool from '@/tool/index.js'
import Loading from '@/uicom/Loading.jsx'
import { SearchBar } from 'antd-mobile';

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      list: [],
      isLoading: 'none',
    }
  }
  goPage () {
    console.log(this.props.history)
    // this.props.history.push('/detail')
    this.props.history.push({
      pathname: '/detail/2',
//       state: {
//         flag: '/home'
//       }
    })
  }
  render () {
    
    return (
      <div className = 'main'>
        <header>
         <SearchBar placeholder="Search" maxLength={8} />
        </header>
        <div className = 'content'>
          首页
          <button onClick={this.goPage.bind(this)}>去详情页面</button>
          <Loading display={this.state.isLoading}/>
          <ul className = 'prolist'>
            {
              this.state.list.map((item,index) => (
              <Link key={item.goodsID} to={'/detail/' + item.goodsID}>
                <li>
                	<img src={item.goodsListImg} />
                	<div className='proinfo'>
                		{item.goodsName}
                	</div>
                	
                </li>
              
              </Link>
              ))
            }
          </ul>
          <button id='backTop'>回到顶部</button>
        </div>
      </div>
    )
  }
  
  componentDidMount () {
    this.setState({
      isLoading:'block'
    })
    homeApi.getList(data => {
      console.log(data)
      this.setState({
        list: data,
        isLoading: 'none'
      })
    })
   tool.backTop()
  }
}

export default Home
