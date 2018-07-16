const cartdata = (state = {
  cartlist:[],
  totalPrice: 0,
  totalNum:0
}, {type, data}) => {
  switch (type) {
    case 'CART_LIST':
    	state.cartlist = data
      //计算总价总数量
      var totalNum = 0
      var totalPrice = 0
      state.cartlist.map((item,index) => {
      	totalNum += item.number * 1
      	totalPrice += item.number * item.price
      })
      state.totalNum = totalNum
      state.totalPrice = totalPrice
      return state
    case 'UPDATE_CART_LIST':
      const {index, number} = data
      state.cartlist[index].number = number
      //计算总价总数量
      var totalNum = 0
      var totalPrice = 0
      state.cartlist.map((item,index) => {
      	totalNum += item.number * 1
      	totalPrice += item.number * item.price
      })
      state.totalNum = totalNum
      state.totalPrice = totalPrice
      return state
  }
}


export default cartdata
