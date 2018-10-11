var question = ["What is one?", "two", "three", "four"]
var answer = [["one", "two", "three", "four"], ["one", "two", "three", "four"], ["one", "two", "three", "four"], ["one", "two", "three", "four"]]
var correct = ["one", "two", "three", "four"]
var selection = []
var currentAnswer = []
var currentQuestion = 0
var score = 0
$(document).ready(function () {
    var start = $("<button>")
    start.addClass("startbutton")
    start.text("Start")
    start.css({ "margin-top": "100px", "width": "200px", "font-size": "20px" })
    $("#game").append(start)

})

$(document).on("click", ".startbutton", game)
function game() {
    $("#game").empty()
    currentAnswer = []
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
            console.log(currentAnswer)
        }
        else {
            console.log("repeat")
        }
    }

        $(".answerbutton").click(function checkanswer() {
            var x = $(this).val()
            console.log(x)

            if (x === correct[currentQuestion]) {
                score++
                currentQuestion = currentQuestion + 1
                console.log(currentQuestion)
                alert("you're right")
                game()
            }
            else {
                currentQuestion = currentQuestion + 1
                console.log(currentQuestion)
                game()
            }



        })


        console.log(selection)

    


}

