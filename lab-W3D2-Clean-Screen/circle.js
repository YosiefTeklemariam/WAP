$(function () {
    "use strict";
    let timerId = null;


    $('#start').click(showCircle);


    function showCircle() {

        let width = $('#width').val();

        let num = $('#number').val();


        $('.circle').show().css({"height": width, "width": width, "top": "200px", "left": "50%"});

        let count = parseInt($('#number').val());

        for (let i = 0; i < count; i++) {
            var $newCircle = $('<div />').appendTo('body');
            $newCircle.addClass("circle");
            $newCircle.click(hide);
        }

        //$(body).append($('<div class="circle"></div>'));


        timerId = setInterval(grow, $('#rate').val());


    }


    function grow(evt) {
        let growAmt = parseInt($('#growAmt').val());

        let circle = $('.circle');


        let newDiameter = parseInt(circle.height()) + growAmt + "px";
        let newLeft = parseInt(circle.css("left")) - growAmt / 2 + "px";
        let newTop = parseInt(circle.css("top")) - growAmt / 2 + "px";


        $(circle).css("width", newDiameter);
        $(circle).css("height", newDiameter);
        //$(circle).css("top",newTop);
        //$(circle).css("left",newLeft);


    }

    // $('.circle').click(function(evt){$(this).hide();});
    $('.circle').click(hide);


    function hide(evt) {
        //alert('hiding');
        $(this).css("visibility", "hidden");
        //$(this).hide();


    }


});