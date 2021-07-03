$(function(){

    let i=0;
    function change(){  
        ++i;
        $($("div")[i-1]).animate({width:"10%"},0.01).removeClass("a");
        $($('li')[i-1]).removeClass("b");
        if(i==5){
            i=0;
        }
        $($("div")[i]).animate({width:"50%"}).addClass("a");
        $($('li')[i]).addClass("b");
    }
    var a=setInterval(change,2000);
    
    let j=0;    
    $('div').click(function(){
        clearInterval(a);
        j=$(this).index();
        if(j!=0 || j!=4){
            $('span').removeClass('c');
        }
        if($(this).hasClass("a")){}
        else{
            $('div').animate({width:"10%"},0.5).removeClass('a');
            $('li').removeClass('b');
            $(this).animate({width:"50%"},200).addClass('a');
            $( $('li')[$(this).index()] ).addClass('b');
        }
    });
    
    $('span').click(function(){
        clearInterval(a);
        j=$('.a').index();
        if(j==0 && $(this).hasClass('prev')){
            $($('div')[0]).animate({width:"10%"},0.01).removeClass("a")
            $($('li')[0]).removeClass("b");
            $($('div')[4]).animate({width:"50%"},200).addClass("a")
            $($('li')[4]).addClass("b");
        }
        else if(j==4 && $(this).hasClass('next')){
            $($('div')[4]).animate({width:"10%"},0.01).removeClass("a")
            $($('li')[4]).removeClass("b");
            $($('div')[0]).animate({width:"50%"},200).addClass("a")
            $($('li')[0]).addClass("b");
        }
        else{
            if($(this).hasClass("prev")){
                $($('div')[j]).animate({width:"10%"},0.01).removeClass("a")
                $($('li')[j]).removeClass("b");
                $($('div')[j-1]).animate({width:"50%"},200).addClass("a")
                $($('li')[j-1]).addClass("b");
            }
            else{
                $($('div')[j]).animate({width:"10%"},0.01).removeClass("a")
                $($('li')[j]).removeClass("b");
                $($('div')[j+1]).animate({width:"50%"},200).addClass("a")
                $($('li')[j+1]).addClass("b");
            }
        }
            
    });

});