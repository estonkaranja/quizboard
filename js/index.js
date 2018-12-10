function calcScore() {

  var questionOne = document.getElementsByName("question1");
  var questionTwo = document.getElementsByName("question2");
  var questionThree = document.getElementsByName("question3");
  var questionFour = document.getElementsByName("question4");
  var questionFive = document.getElementsByName("question5");
  var score = 0;

  for (var i = 0, length = questionOne.length; i < length; i++) {
    if (questionOne[i].checked) {
      var ans1 = questionOne[i].value
      if (questionOne[i].value === 'C') {
        score += 25
      }
    }
  }
  for (var i = 0, length = questionTwo.length; i < length; i++) {
    if (questionTwo[i].checked) {
      var ans2 = questionTwo[i].value
      if (questionTwo[i].value === 'D') {
        score += 25
      }
    }
  }
  for (var i = 0, length = questionThree.length; i < length; i++) {
    if (questionThree[i].checked) {
      var ans3 = questionThree[i].value;
      if (questionThree[i].value === 'A') {
        score += 25
      }
    }
  }
  for (var i = 0, length = questionFour.length; i < length; i++) {
    if (questionFour[i].checked) {
      var ans4 = questionFour[i].value
      if (questionFour[i].value === 'C') {
        score += 25
      }
    }
  }
  for (var i = 0, length = questionFive.length; i < length; i++) {
    if (questionFive[i].checked) {
      var ans5 = questionFive[i].value
      if (questionFive[i].value === 'C') {
        score += 25
      }
    }
  }

  if (score === 0) {
    document.getElementById("answer").value = "You got " + score;
  } else if (score === 25) {
    document.getElementById("answer").value = "You got " + score;
  } else if (score === 50) {
    document.getElementById("answer").value = "You got " + score;
  } else if (score === 75) {
    document.getElementById("answer").value = "You got " + score;
  } else if (score === 100) {
    document.getElementById("answer").value = "You got " + score;
  }

  event.preventDefault();

}

$(document).ready(function() {
  $("#q1,#q2,#q3,#q4,#q5,#submit,footer").hide();
})
$(document).ready(function() {
  $("#next").click(function() {
    $("#q1,footer").show(2000);
    $("#heading,#q2,#q3,#q4,#q5,#submit").hide();
  })
})
$(document).ready(function() {
  $("#next1").click(function() {
    $("#q2,footer").show();
    $("#q1,#q3,#q4,#q5,#submit").hide();
  })
})
$(document).ready(function() {
  $("#next2").click(function() {
    $("#q3,footer").show();
    $("#q1,#q2,#q4,#q5,#submit").hide();
  })
})
$(document).ready(function() {
  $("#next3").click(function() {
    $("#q4,footer").show();
    $("#q1,#q2,#q3,#q5,#submit").hide();
  })
})
$(document).ready(function() {
  $("#next4").click(function() {
    $("#q5,#submit,footer").show();
    $("#q1,#q2,#q3,#q4").hide();
  })
})
$(document).ready(function() {
  $("#submit").click(function() {
    $("#answer").show(2000);
    $("#q1,#q2,#q3,#q4,#q5,#submit,footer").hide();
  })
})
