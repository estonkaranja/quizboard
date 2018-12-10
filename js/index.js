function calcScore() {

  var Q1 = document.getElementsByName("question1");
  var Q2 = document.getElementsByName("question2");
  var Q3 = document.getElementsByName("question3");
  var Q4 = document.getElementsByName("question4");
  var Q5 = document.getElementsByName("question5");
  var score = 0;

  for (var i = 0, length = Q1.length; i < length; i++) {
    if (Q1[i].checked) {
      var ans1 = Q1[i].value
      if (Q1[i].value === 'C') {
        score += 25
      }
    }
  }
  for (var i = 0, length = Q2.length; i < length; i++) {
    if (Q2[i].checked) {
      var ans2 = Q2[i].value
      if (Q2[i].value === 'D') {
        score += 25
      }
    }
  }
  for (var i = 0, length = Q3.length; i < length; i++) {
    if (Q3[i].checked) {
      var ans3 = Q3[i].value;
      if (Q3[i].value === 'A') {
        score += 25
      }
    }
  }
  for (var i = 0, length = Q4.length; i < length; i++) {
    if (Q4[i].checked) {
      var ans4 = Q4[i].value
      if (Q4[i].value === 'C') {
        score += 25
      }
    }
  }
  for (var i = 0, length = Q5.length; i < length; i++) {
    if (Q5[i].checked) {
      var ans5 = Q5[i].value
      if (Q5[i].value === 'C') {
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
  } else if (score === 100){
    document.getElementById("answer").value = "You got " + score;
  }

  event.preventDefault();

}

$(document).ready(function() {
  $("#q2,#q3,#q4,#q5,#submit").hide();
})
$(document).ready(function() {
  $("#next1").click(function() {
    $("#q2").show();
    $("#q1,#q3,#q4,#q5,#submit").hide();
  })
})
$(document).ready(function() {
  $("#next2").click(function() {
    $("#q3").show();
    $("#q1,#q2,#q4,#q5,#submit").hide();
  })
})
$(document).ready(function() {
  $("#next3").click(function() {
    $("#q4").show();
    $("#q1,#q2,#q3,#q5,#submit").hide();
  })
})
$(document).ready(function() {
  $("#next4").click(function() {
    $("#q5,#submit").show();
    $("#q1,#q2,#q3,#q4").hide();
  })
})
$(document).ready(function() {
  $("#submit").click(function() {
    $("#answer").show();
    $("#q1,#q2,#q3,#q4,#q5").hide();
  })
})
