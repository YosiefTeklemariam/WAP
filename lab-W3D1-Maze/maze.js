let beginned = false;

$(document).ready(function () {
    $("#boundary1").mouseover(gettingAllRed);
    $("#boundary2").mouseover(gettingAllRed);
    $("#boundary3").mouseover(gettingAllRed);
    $("#boundary4").mouseover(gettingAllRed);
    $("#boundary5").mouseover(gettingAllRed);

    $("#start").click(start);
    $("#end").click(end);
});

/*This is a function that turns red for all of them if the mouth touch one of the boundaries*/
function gettingAllRed(evt){
    if (beginned) {
        $(".boundary").css("background-color", "#ff8888")
            .addClass("hovered");
    }
}

/*This is a function that turns red for a particular boundary that is touched by the mouth*/
function gettingRed(evt) {
    if (beginned) {
        $(this).css("background-color", "#ff8888")
            .addClass("hovered");
    }
}

function start(evt) {
    beginned = true;
    $("div.boundary").removeClass("hovered").css("background-color", "#eeeeee");
    $("#status").text('Click the "S" to begin.');
    return beginned;
}

function end(evt) {
    if (beginned) {
        beginned = false;
        if (checkResult()) {
            $("#status").text('You lose! Click the "S" to begin again.');
        } else {
            $("#status").text('You win :). Click the "S" to begin again.');
        }
    } else {
        alert('Click the "S" to begin.');
    }
}

function checkResult() {
    return $("div").hasClass("hovered");
}





