var question = ["What is the fastest bird?", "What is the only mammal, other than the duck billed platypus, that lays eggs?", "The Python is a poisonous snake.", "What is the largest crustacean?", "Where is the heart of a shrimp located?", "What is the world's most endangered animal?", "Where does the world's largest frog, the Goilath Frog, live?", "How fast can an ostrich sprint?", "Elephants have a great memory in comparison with other mammals.", "What land animal has the strongest bite force?"]
var answer = [["Bald Eagle", "White-throated Needletail", "Peregrine Falcon", "Golden Eagle"], ["Spiney Anteater", "Canadian Goose", "Beaver", "Mongolian Gerbil"], ["True", "False",], ["American Lobster", "Japanese Spider Crab", "Coconut Crab", "King Crab"], ["it's tail", "it's head", "it's chest", "it's shoulder"], ["Orangutan", "Sea Turtle", "Sumatran Elephant", "Amur Leopard"], ["Cameroon", "Equador", "Brazil", "South Africa"], ["25mph", "35mph", "45mph", "55mph"], ["True", "False"], ["Silverback Gorilla", "Grizzly Bear", "Nile Crocodile", "African Lion"]]
var correct = ["Peregrine Falcon", "Spiney Anteater", "False", "Japanese Spider Crab", "it's head", "Amur Leopard", "Cameroon", "45mph", "True", "Nile Crocodile"]
var selection = []
var currentAnswer = []
var currentQuestion = 0
var score = 0
var badscore = 0
var unanswer = 0
var t
var m
var time = 30
var correctGIF = ["assets/images/1correct.gif", "assets/images/2correct.gif", "assets/images/3correct.gif", "assets/images/4correct.gif", "assets/images/5correct.gif", "assets/images/6correct.gif", "assets/images/7correct.png", "assets/images/8correct.gif", "assets/images/9correct.gif", "assets/images/10correct.gif"]
var wrongGIF = ["assets/images/1wrong.gif", "assets/images/2wrong.gif", "assets/images/3wrong.gif", "assets/images/4wrong.gif", "assets/images/5wrong.gif", "assets/images/6wrong.gif", "assets/images/7wrong.jpg", "assets/images/8wrong.gif", "assets/images/9wrong.gif", "assets/images/10wrong.gif"]

$(document).ready(function () {
    var start = $("<button>")
    start.addClass("startbutton")
    start.text("Start")
    start.css({ "margin-top": "100px", "width": "200px", "font-size": "40px" })
    $("#game").append(start)
    $(".startbutton").on("click", game)
})

function timer() {
    $(".timer").empty()
    $(".timer").prepend("You have " + time + " second left.")
    time--
    if (time === -1) {
        var tUp = setTimeout(game, 5000)
        clearInterval(t)
        unanswer++
        displayGIf(wrongGIF[currentQuestion], "Times Up! The correct answer was " + (correct[currentQuestion]))
    }
}

function game() {
    clearInterval(t)
    $("#game").empty()
    if (currentQuestion === question.length) {
        $("#timer").empty()
        $("#game").append("<p>All done, here's how you did!</p>")
        $("#game").append("<br><br>")
        $("#game").append("Correct Answers: " + score)
        $("#game").append("<br><br>")
        $("#game").append("Incorrect Answers: " + badscore)
        $("#game").append("<br><br>")
        $("#game").append("Unanswered: " + unanswer)
        $("#game").append("<br><br>")
        var button = $("<button type=button>")
        button.addClass("restartButton")
        button.text("Play Again")
        $("#game").append(button)
        $(".restartButton").on("click", reset)
    }
    else {
        currentAnswer = []
        time = 30
        var left = $("<div>")
        left.addClass("timer")
        $("#timer").empty()
        $("#timer").prepend(left)
        t = setInterval(timer, 1000)
        m = setTimeout(game2, 1000)
        function game2(){var q = $("<div>")
        q.addClass("question")
        q.text(question[currentQuestion])
        $("#game").append(q)
        $("#game").append(button)
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
            clearInterval(t)
            if (x === correct[currentQuestion]) {
                score++
                var youcorrect = setTimeout(game, 5000)
                displayGIf(correctGIF[currentQuestion], "That was correct!")
            }
            else {
                badscore++
                var incorrect = setTimeout(game, 5000)
                displayGIf(wrongGIF[currentQuestion], "That was incorrect. The correct answer was " + (correct[currentQuestion]))
            }
        }
    }
    }
}

function reset() {
    selection = []
    currentAnswer = []
    currentQuestion = 0
    score = 0
    badscore = 0
    unanswer = 0
    game()
}

function displayGIf(GIF, text) {
    currentQuestion = currentQuestion + 1
    $("#game").empty()
    var image = $("<img>")
    image.attr("src", GIF)
    image.addClass("gif")
    var words = $("<div>")
    words.text(text)
    $("#game").append(text)
    $("#game").append("<br><br>")
    $("#game").append(image)
}









