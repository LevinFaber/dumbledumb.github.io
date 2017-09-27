$(document).ready(function () {
    //QR CODE
    var qr = false;
    $('#me').click(function () {
        event.preventDefault();
        $(this).toggleClass('bild');
        $(this).toggleClass('qr');
        if (qr === false) {
            $(this).attr('src', './assets/qrcode.png');
            qr = true;
        } else {
            $(this).attr('src', './assets/dumbledumb.jpg');
            qr = false;
        }
    //QR CODE

    });
    //CHANNEL FRAMES
    var activeIframe = "preview";
    $("#youtubeC").click(function () {
        if(activeIframe ==="#youtube"){        
        $(activeIframe).hide();
        $(".aspect-ratio").hide();
        activeIframe = "preview";
        }
        else{
        $("iframe").hide();
        $(".aspect-ratio").show();
        $("#youtube").show(180);
        activeIframe = "#youtube"
        
        }
    });
    $("#steamC").click(function () {
        if(activeIframe ==="#steam"){
            $(activeIframe).hide();
            activeIframe = "preview";
        }
        else{
            $("iframe").hide();
            $(".aspect-ratio").hide();
            $("#steam").show(180);
            activeIframe = "#steam"
        }
    });
    $("#whatsappC").click(function () {
        if(activeIframe ==="#whatsapp"){
            $(activeIframe).hide();
            activeIframe = "preview";
        }
        else{
            $("iframe").hide();
            $(".aspect-ratio").hide();
            $("#whatsapp").show(180);
            activeIframe = "#whatsapp"
        }
    });
    $("#gmailC").click(function () {
        if(activeIframe ==="#gmail"){
            $(activeIframe).hide();
            activeIframe = "preview";
        }
        else{
            $("iframe").hide();
            $(".aspect-ratio").hide();
            $("#gmail").show(180);
            activeIframe = "#gmail"
        }
    });
    //CHANNEL FRAMES


    //SCROLL ARROWS
    var $root = $('html, body');
    $('#socialspacer').on('click', function () {
        $root.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        return false;
    });

    function getpos() {
        var pos = ($('#socialspacer').offset().top - $(window).scrollTop());
        if (pos < 200) {
            $('#socialspacer').attr('href', '#home');
            $("#arrow").attr('class', 'fa fa-angle-double-up fa-3x');
        } else {
            $('#socialspacer').attr('href', '#socialspacer');
            $("#arrow").attr('class', 'fa fa-angle-double-down fa-3x');
        }
    }
    getpos();
    $(window).scroll(getpos);
    //SCROLL ARROWS

});