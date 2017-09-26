$(document).ready(function(){

$('#me').hover(function(){
    $(this).attr('src', './assets/qrcode.png');
    $(this).toggleClass('bild');
    $(this).toggleClass('qr');
},function(){
    $(this).attr('src', './assets/dumbledumb.jpg');
    $(this).toggleClass('bild');
    $(this).toggleClass('qr');
});
  
var activeIframe = "preview";
$("#youtubeC").click(function() {
    $(activeIframe).toggle(100);
    $("#youtube").toggle(180);
    activeIframe = "#youtube"
});
$("#steamC").click(function() {
    $(activeIframe).toggle(100);
    $("#steam").toggle(180);
    activeIframe = "#steam"
});
$("#whatsappC").click(function() {
    $(activeIframe).toggle(100);
    $("#whatsapp").toggle(180);
    activeIframe = "#whatsapp"
});
$("#gmailC").click(function() {
    $(activeIframe).toggle(100);
    $("#gmail").toggle(180);
    activeIframe = "#gmail"
});

$('#waform').validate( {
   
};

);


});
