$(document).ready(function(){

var qr = false;
$('#me').click(function(){   
    event.preventDefault();
    $(this).toggleClass('bild');
    $(this).toggleClass('qr');
    if(qr === false){
        $(this).attr('src', './assets/qrcode.png');
        qr = true;
    }
    else{
        $(this).attr('src', './assets/dumbledumb.jpg');
        qr = false;
    }

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

var $root = $('html, body');
$('#socialspacer').on('click',function() {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
}); 

function getpos (){
    var pos = ($('#socialspacer').offset().top - $(window).scrollTop());
    if(pos < 200){
        $('#socialspacer').attr('href', '#home');
        $("#arrow").attr('class', 'fa fa-angle-double-up fa-3x');
    }
    else{
        $('#socialspacer').attr('href', '#socialspacer');
        $("#arrow").attr('class', 'fa fa-angle-double-down fa-3x');
    }
}
getpos();
$(window).scroll(getpos);

$('#waform').validate( );
   
});
