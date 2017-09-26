$( document ).ready(function() {
function hover(element) {
    element.fadeOut;
    element.setAttribute('src', '/assets/qrcode.png');
    element.classList.remove('bild');
    element.classList.add('qr');
}
function unhover(element) {
    element.setAttribute('src', '/assets/dumbledumb.jpg');
    element.classList.remove('qr');
    element.classList.add('bild');
}
var $root = $('html, body');
$('a').click(function() {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});
});