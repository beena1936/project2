 $(document).ready(function(){
   setInterval(function(){
       $(".bird").animate({"left":"85%"},6000,function(){
            $(".bird").css({"transform":"scaleX(-1)"});
        });
       $(".plane").animate({"right":"85%"},6000,function(){
            $(".plane").css({"transform":"scaleX(-1)"});
        });
       $(".bird").animate({"left":"0%"},6000,function(){
            $(".bird").css({"transform":"scaleX(1)"});
        });
       $(".plane").animate({"right":"0%"},6000,function(){
            $(".plane").css({"transform":"scaleX(1)"});
        });
   },1000);
});

   





