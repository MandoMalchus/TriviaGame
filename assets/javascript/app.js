
var timeremaining = 50;
var win = 0;
var loss = 0;
var intervalId;
$(".exposed").hide();



function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    timeremaining--;

    $("#watch").html("<h3 class=text-center> Time Remaining: " + timeremaining + " Seconds!</h3>");

    if (timeremaining === 0) {
        stop();
        alert("Time Up!");

        console.log("#watch");

        var correctDiv = $("<h2>");
        var incorrectDiv = $("<h2>");
        correctDiv.text("Correct Answers: " + win);
        incorrectDiv.text("Incorrect Answers: " + loss);
        
        $(".correct").each(function(){
            if($(this).prop("checked")){
                win++;
            }
        });
    
        $(".incorrect").each(function(){
            if($(this).prop("checked")){
                loss++;
            }
        });

        $("#mainTrivia").hide();
        $("#correct").html(win);
        $("#incorrect").html(loss);
        $(".exposed").show();
    }
};


function stop() {
    clearInterval(intervalId);
}

run();



// $(".correct").click(function () {
//     win++;
// });
// $(".incorrect").click(function () {
//     loss++;
// });

$("#submitBtn").on("click", function () {

    $(".correct").each(function(){
        if($(this).prop("checked")){
            win++;
        }
    });

    $(".incorrect").each(function(){
        if($(this).prop("checked")){
            loss++;
        }
    });

    $("#mainTrivia").hide();
    $("#correct").html(win);
    $("#incorrect").html(loss);
    $(".exposed").show();





});