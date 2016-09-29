$(document).ready(function() {

    $('#play').click(function() {
        window.location.reload();
        console.log('the button was clicked');
    })


    function randomNumber(min, max) {
        return Math.floor(Math.random() * (1 + max - min) + min);
    }
    var ranNum = randomNumber(1, 4);

    $('#1').on('click', function(randomNumber) {
        //display you clicked 'color', you are correct
        //else diplay you clicked 'color', try again
        if (ranNum == 1) {
            $('#red').append('<span>You clicked Red. You are correct! Click Play to play again</span>');
        } else {
            $('#red').append('<span>Wrong. Click Play to play again</span>');
        }
    });

    $('#2').on('click', function(randomNumber) {
        //display you clicked 'color', you are correct
        //else diplay you clicked 'color', try again
        if (ranNum == 2) {
            $('#green').append('<span>You clicked Green. You are correct! Click Play to play again</span>');
        } else {
            $('#green').append('<span>Wrong. Click Play to play again</span>');
        }
    });

    $('#3').on('click', function(randomNumber) {
        //display you clicked 'color', you are correct
        //else diplay you clicked 'color', try again
        if (ranNum == 3) {
            $('#yellow').append('<span>You clicked Yellow. You are correct! Click Play to play again</span>');
        } else {
            $('#yellow').append('<span>Wrong. Click Play to play again</span>');
        }
    });
    $('#4').on('click', function(randomNumber) {
        //display you clicked 'color', you are correct
        //else diplay you clicked 'color', try again
        if (ranNum == 4) {
            $('#blue').append('<span>You clicked Blue. You are correct! Click Play to play again</span>');
        } else {
            $('#blue').append('<span>Wrong. Click Play to play again</span>');
        }
    });


    console.log(ranNum);


});
