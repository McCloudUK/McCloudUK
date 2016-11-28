activate = function(){

    

    
if ( $(window).width() < 1300) {      
    $(".mainMenuLeft, .mainMenuRight").css("width", "400");
    $("#MLTwo, #MLThree").css("top" , "15px");
    $("#MLOne").css("top" , "25px");
} 
if ( $(window).width() < 1100) {      
    $(".mainMenuLeft, .mainMenuRight").css("width", "300");
    $("#MLTwo, #MLThree").css("fontSize" , "16px");
 
} 
if ( $(window).width() > 1100) {      
    $(".mainMenuLeft, .mainMenuRight").css("width", "400");
      $("#MLTwo, #MLThree").css("fontSize" , "20px");
}
if ( $(window).width() > 1300) {      
    $(".mainMenuLeft, .mainMenuRight").css("width", "500");
    $("#MLTwo, #MLThree").css("top" , "25px");
    $("#MLOne").css("top" , "35px");
}
  
    
if ( $(window).width() <= 900) {      
    $(".mainMenuLeft, .mainMenuRight").css("display", "none");
        $(".subMenu").removeClass( 'subo');
      $(".toggleHeader").css("display", "block");
        $("#cssFlip").attr("href", "CSS/small.css");
   
    
} 
    
if ( $(window).width() > 900) {      
    $(".mainMenuLeft, .mainMenuRight").css("display", "block");
    $(".toggleHeader").css("display", "none");
    $(".subMenu").addClass( 'subo');
      $("#cssFlip").attr("href", "CSS/scroll.css");
    
} 




};


$(".toggleHeader").click(function(){
$(".toggleHeader").toggleClass( 'change');
$(".subMenu").toggleClass( 'sub');


    
    
    
    
    

                         
});    


window.onresize = function(){
    activate();
}

window.onload = function() {
     activate();
}