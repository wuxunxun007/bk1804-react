import fetchJsonp from 'fetch-jsonp'
import {DETAIL_URL, ADD_UPDATE_CART_URL} from '@/server/index.js'

export default {
  getData (goodsID, cb) {
    fetchJsonp(DETAIL_URL + '?goodsID=' +goodsID)
        .then(res => res.json())
        .then(data => cb(data[0]))
        .catch(err => console.log(err))
  },
  addCart({userID, goodsID, number}, cb){
    fetch(ADD_UPDATE_CART_URL + '?userID='+ userID+'&goodsID=' +goodsID+'&number='+number)
    		.then(res => res.json())
    		.then(data => cb(data))
    		.catch(err => console.log(err))
  }
}