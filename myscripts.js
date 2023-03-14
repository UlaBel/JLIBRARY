document.querySelector("#show-signup").addEventListener("click",function(){
    document.querySelector(".popup").classList.add("active");
    $("div#overlay").fadeIn('500');
    $("div#popup").delay('800');
    $("div#popup").fadeIn('500');
    $('body').css('overflow', 'hidden');  //ADD THIS

 }); 
 document.querySelector(".popup .close-btn").addEventListener("click",function(){
    document.querySelector(".popup").classList.remove("active");
    $("div#popup").fadeOut('500');
    $("div#overlay").delay('500');
    $("div#overlay").fadeOut('500');
    $('body').css('overflow', 'auto');
 }); 
 document.querySelector("#show-signup2").addEventListener("click",function(){
   document.querySelector(".popup2").classList.add("active");
}); 
document.querySelector(".popup2 .close-btn").addEventListener("click",function(){
   document.querySelector(".popup2").classList.remove("active");
}); 

$(document).ready(function () {
   $("input#show-signup").click(function () {
       $("div#overlay").fadeIn('500');
       $("div#popup").delay('800');
       $("div#popup").fadeIn('500');
       $('body').css('overflow', 'hidden');  //ADD THIS
   });

   $(document).on('click', '.close', function () {
       $("div#popup").fadeOut('500');
       $("div#overlay").delay('500');
       $("div#overlay").fadeOut('500');
       $('body').css('overflow', 'auto');  //ADD THIS
   });
});


