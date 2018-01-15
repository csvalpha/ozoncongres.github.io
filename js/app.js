var currentPos, changePos, bobPos;
var prevPos = $( window ).scrollTop();
$( window ).scroll(function() {
    currentPos = $( window ).scrollTop();
    changePos = prevPos - currentPos;
    prevPos = currentPos;
    bobPos = parseFloat($("#bob").css("top")) + changePos/50;
    $("#bob").css("top", bobPos + "px");
});


$('nav a').click(function(event) {
    event.preventDefault();
    var el = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(el).offset().top
    }, 800);
});

$('#bob-logo').click(function(event) {
    event.preventDefault();
    var el = "#header";
    $('html, body').animate({
        scrollTop: $(el).offset().top
    }, 800);
});

(function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm", b="https://embed.typeform.com/"; if(!gi.call(d,id)) { js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })()