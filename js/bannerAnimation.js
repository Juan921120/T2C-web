$(document).ready(function() {
    
    setTimeout(function() {
        $('.parallelogram1').animate(
            { left: '-470px' },      // 目标位置
            {
                duration: 1500,   // 动画持续时间2秒
                easing: 'easeOutQuint' // 缓动函数
            }
        ); 
    }, 500); // delay 0.5s

 setTimeout(function() {
        $('.parallelogram2').animate(
            { left: '-226px' },      // target position
            {
                duration: 1500,   // animation duration
                easing: 'easeOutQuint', // 
                complete: function() {
                    // 动画完成后的回调函数
                    $('.parallelogram2').css('mix-blend-mode', ''); // 去除 mix-blend-mode 属性
                }
            }
        ); 
    }, 500); 

    setTimeout(function(){
   //text1 text2 animation
        function animateText($element) {
            $element.animate({
                opacity: 1,
                width: '300px',
                 left: '0px'
            }, {
                duration: 500,
                easing: 'easeOutQuad',
                complete: function() {
                    $element.find('span').each(function(index) {
                        $(this).delay(index * 100).animate({ opacity: 1 }, 200);
                    });
                }
            });
        }
        animateText($(".text1"));
        $(".text2").delay(400).queue(function(next) {
            animateText($(this));
            next();
        });

    },1000);
    
    // text3 animation
    $(".text3").delay(2000).animate({
        left: '0px',
        opacity: 1
    }, {
        duration: 500,
        easing: 'easeOutQuad'
    });
  
});




