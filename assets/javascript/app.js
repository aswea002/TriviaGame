// when button is clicked proceed to questions

$(".start").click(function(){
  console.log ("this button has been clicked");
    
  $(".start").slideDown();
    $(this).hide();
    $(".btn-primary").css("cssText", "display: block !important; margin:auto; width: 30%;");
});
 

// list trivia questions
    var questions = [

      {
        question: "Which celebrity couple spent over 2.8 million on their Big Day?",
        options: ["Bradgelina", "Kimye", "Nickanka"],
        correctAnswer: 'Kimye'
      },
    ]

    //append trivia questions and answer choices to the page
    $(".content").append(questions[0]);



  

      
