var question = ["What is one?", "two", "three", "four"]
var answer = [["one", "two", "three", "four"], ["one", "two", "three", "four"], ["one", "two", "three", "four"], ["one", "two", "three", "four"]]
var correct = ["one", "two", "three", "four"]
var selection = []
var currentAnswer = []
var currentQuestion = 0
var score = 0
var t
var time = 30

$(document).ready(function () {
    var start = $("<button>")
    start.addClass("startbutton")
    start.text("Start")
    start.css({ "margin-top": "100px", "width": "200px", "font-size": "20px" })
    $("#game").append(start)
    $(".startbutton").on("click", game)

})


function timer() {
    $(".timer").empty()
    $(".timer").prepend("You have " + time + " second left.")
    time--

    if (time === -1) {
            var tUp = setTimeout(game, 3000)
            displayGIf("assets/images/timesup.gif", "Times Up!")
    }
}



function game() {
    clearInterval(t)
    $("#game").empty()
    if (currentQuestion === question.length) {
        $("#game").html("Game Over! Your score is " + score + "/4")
        var button = $("<button type=button>")
        button.addClass("restartButton")
        button.val("Restart Game")
        $("#game").append(button)
        $(".restartButton").on("click", reset)
    }
    else {
        currentAnswer = []
        time = 5
        var left = $("<div>")
        left.addClass("timer")
        $("#game").prepend(left)
        t = setInterval(timer, 1000)
        var q = $("<div>")
        q.addClass("question")
        q.text(question[currentQuestion])
        $("#game").append(q)

        var a = $("<form>")
        a.addClass("answer")
        $(".question").append(a)
        for (i = 0; i < answer[currentQuestion].length; i++) {
            var option = $("<input type=button>")
            option.val(answer[currentQuestion][i])
            if (currentAnswer.indexOf(option.val()) == -1) {
                option.addClass("answerbutton")
                $(".answer").append(option)
                currentAnswer.push(option.val())

            }
        }



        $(".answerbutton").on("click", checkanswer)
        function checkanswer() {
            var x = $(this).val()
            console.log(time)


            if (x === correct[currentQuestion]) {
                score++
                currentQuestion = currentQuestion + 1
                game()
            }
            else {
                var incorrect = setTimeout(game, 3000)
                displayGIf("assets/images/wrong.gif", "That was not correct!")


            }
        }
    }
}

function reset() {
    selection = []
    currentAnswer = []
    currentQuestion = 0
    score = 0
    game()
}

function displayGIf(GIF, text){
        currentQuestion = currentQuestion + 1
        $("#game").empty()
        var image = $("<img>")
        image.attr("src", GIF)
        image.addClass("gif")
        var words = $("<p>")
        words.text(text)
        $("#game").append(text)
        $("#game").append(image)
}








