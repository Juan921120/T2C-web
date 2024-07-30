
n = 1

$(".move").css({ left: -231 });
//right arrow
$(".right").click(function () {
  if (n < 5) {
    n = n + 1;
    $(".move").animate({ left: -231 * n });
    $(".carousel_img").removeClass("firstImg").eq(n).addClass("firstImg");
  } else {
    $(".carousel_img").removeClass("firstImg").eq(n+1).addClass("firstImg");
    $(".move").animate({ left: -231 * (n+1) }, function() {
      $(".move").css({ left: -231 });
      $(".carousel_img").removeClass("firstImg").eq(1).addClass("firstImg");
    });
    n=1;
   
  }

  $(".img_number").text(n);
});
//left arrow
$(".left_arrow").click(function () {
  if (n > 1) {
    n = n - 1;
    $(".move").animate({ left: -231 * n });
    $(".carousel_img").removeClass("firstImg").eq(n).addClass("firstImg");
  } else {
    $(".carousel_img").removeClass("firstImg").eq(0).addClass("firstImg");
    $(".move").animate({ left: 0 }, function() {
      $(".carousel_img").removeClass("firstImg").eq(5).addClass("firstImg");
      $(".move").css({ left: -231 * 5 })
    });
    n = 5
   
  }
  $(".img_number").text(n);
 

});

//自动
// function x(){
//   document.title=n
//       if(n<$(".carousel img").length-1){
//           n=n+1;
//           }else{n=2
//           $(".move").css({left:-231})//Go back to the second （first image）        
//           }		
//       $(".move").animate({left:-231*n})	

//       console.log("Removing and adding class for index: " + n);
//       $(".carousel img").removeClass("firstImg").eq(n-1).addClass("firstImg");
//   }

//定时
t = setInterval(x, 2000)
$(".carousel").mouseenter(
  function () {
    clearInterval(t)
  })
$(".carousel").mouseleave(
  function () {
    t = setInterval(x, 2000)
  })