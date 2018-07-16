import fetchJsonp from 'fetch-jsonp'
import {GET_CAR_LIST_URL, ADD_UPDATE_CART_URL} from '@/server/index.js'

export default {
  getData (userID, cb) {
    fetchJsonp(GET_CAR_LIST_URL + '?userID=' +userID)
        .then(res => res.json())
        .then(data => cb(data))
        .catch(err => console.log(err))
  },
  updataCar({userID,goodsID,number}, cb) {
    fetch(ADD_UPDATE_CART_URL + '?userID='+ userID+'&goodsID=' +goodsID+'&number='+number)
    		.then(res => res.json())
    		.then(data => cb(data))
    		.catch(err => console.log(err))
  }
}