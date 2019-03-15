$(document).ready(function() {
   $(".login").tooltip();
   
   $(".navbar li").click(function() {
      $(".navbar li").removeClass("active");
      $(this).addClass("active");
   })
});
