
export default {
  backTop () {//backTop的父元素为可滚动的
    $("#backTop").parent().eq(0).scroll(function () {
      console.log($(this).scrollTop())
      if ( $(this).scrollTop() > 100 ){
        $("#backTop").show()
      }else {
        $("#backTop").hide()
      }
    })

    $("#backTop").click(function (){
    
      $(this).parent().animate({
        scrollTop: 0
      }, 1000)
    }) 
  }
}