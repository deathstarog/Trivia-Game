$(document).ready(function () {
    //   getting start game button 
    var startButton = $("#start-button")
    console.log(startButton)
    startButton.on('click', function () {

        // make timer
        var count = 5;
        var timer = setInterval(function elephant (){
            $("#counter").html(count--);
            console.log(count)
            if (count === -1) {
                clearInterval(timer);
                bgSubmit()
            }
        }, 1000);

        // getting clicked start button
        var btn = $(this);
        btn.addClass('hide')
        // getting form
        var form = $('#trivia-form');
        form.removeClass('hide')
        // getting submit button
        var submit = $("#submit")
        submit.on('click')


    })


})
function bgSubmit (event) {
    var btnClicked = $(this);

    var q1Value = $("input[name='q1']:checked").val();
    var q2Value = $("input[name='q1']:checked").val();
    var q3Value = $("input[name='q1']:checked").val();
       
    var isQ1Correct;
    var isQ2Correct;
    var isQ3Correct;
    var correctAnswers = [];
    var incorrectAnswers = [];
    var unanswered = [];
    
    if (q1Value == "a2") {
        isQ1Correct = true
        correctAnswers.push(isQ1Correct)
    } else if (q1Value == undefined){
        isQ1Correct = "did not select"
    } else {
        isQ1Correct = false 
    }


    if (q1Value == "b2") {
        isQ2Correct = true
        correctAnswers.push(isQ2Correct)
    } else {
        isQ2Correct = false
    }

    if (q1Value == "c2") {
        isQ3Correct = true
        correctAnswers.push(isQ3Correct)
    } else {
        isQ3Correct = false
    }

    console.log(correctAnswers.length)

    alert(isQ1Correct + isQ2Correct + isQ3Correct)
    
    console.log(isQ1Correct)
    console.log(isQ2Correct)
    console.log(isQ3Correct)
    console.log('q1Value === ', q1Value)
    console.log('q2Value === ', q2Value)
    console.log('q3Value === ', q3Value)
}