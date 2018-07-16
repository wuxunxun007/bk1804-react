import fetchJsonp from 'fetch-jsonp'
import {KING_MENU_URL, KING_LIST_URL} from '@/server/index.js'

export default {
  getMenuList (cb) {
    var kindmenu = localStorage.kindmenu
    if(kindmenu){
      var data = JSON.parse(kindmenu)
      cb(data)
      return;
    }
    // console.log(111111111111111)
    fetch(KING_MENU_URL)
        .then(res => res.json())
        .then(data => {
          localStorage.kindmenu = JSON.stringify(data)
          cb(data)
        })
        .catch(err => console.log(err))
  },
  getListData (classID, cb) {
    // console.log('classID', classID)
    fetchJsonp(KING_LIST_URL + "?classID=" + classID)
    		.then(res => res.json())
    		.then(data => {
    			cb(data)
    		})
    		.catch(err => console.log(err))
  }
}