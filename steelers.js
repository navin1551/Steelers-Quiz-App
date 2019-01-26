'use strict';

const questionSet = [
  {
    number: 1,
    problem: 'How many Super Bowls have the Steelers won?',
    choice1: '4',
    choice2: '6',
    choice3: '0',
    choice4: '11',
    answer: '6'
  },

  {
    number: 2,
    problem: 'What is the name of the stadium the Steelers play their home games at currently?',
    choice1: 'Heinz Field',
    choice2: 'Miners Dome',
    choice3: 'Three Rivers Stadium',
    choice4: 'PNC Park',
    answer: 'Heinz Field'
  },

  {
    number: 3,
    problem: 'The Pittsburgh Steelers have only been owned by one family. What is their last name?',
    choice1: 'Carrol',
    choice2: 'Knoll',
    choice3: 'Rockefeller',
    choice4: 'Rooney',
    answer: 'Rooney'
  },

  {
    number: 4,
    problem: "Who was not a member of the feared Killer B's?",
    choice1: 'Antonio Brown',
    choice2: 'Chris Boswell',
    choice3: 'Ben Roethlisberger',
    choice4: "Le'Veon Bell",
    answer: 'Chris Boswell',
  },

  {
    number: 5,
    problem: 'What division do the Pittsburgh Steelers play in currently?',
    choice1: 'NFC North',
    choice2: 'AFC East',
    choice3: 'AFC North',
    choice4: 'NFC East',
    answer: 'AFC North',
  },

  {
    number: 6,
    problem: 'What do the yellow, red, and blue diamonds in the teams logo stand for?',
    choice1: 'The blood, sweat, and tears players put into the game',
    choice2: 'Art Rooneys children’s favorite colors',
    choice3: 'The three elements that combine to create steel',
    choice4: 'The teams colors',
    answer: 'The three elements that combine to create steel',
  },

  {
    number: 7,
    problem: 'Who beat the Pittsburgh Steelers in the 2010 Super Bowl in Arlington, Texas?',
    choice1: 'Green Bay Packers',
    choice2: 'New England Patriots',
    choice3: 'Arizona Cardinals',
    choice4: 'Dallas Cowboys',
    answer: 'Green Bay Packers',
  },

  {
    number: 8,
    problem: 'What is the name of the yellow rally towels Steeler fans are known to carry at games and other places?',
    choice1: 'Tomlin Towel',
    choice2: 'Touchdown Towel',
    choice3: 'Terrible Towel',
    choice4: 'Turnover Towel',
    answer: 'Terrible Towel',
  },

  {
    number: 9,
    problem:'How many head coaches has the Steelers organization had since their creation in 1933?',
    choice1: '3',
    choice2: '5',
    choice3: '6',
    choice4: '10',
    answer: '3',
  },

  {
  number: 10,
  problem: 'In 1943, due to depleted NFL rosters from World War 2, the Steelers merged with this Philadelphia team to become what?',
  choice1: 'Pirates',
  choice2: 'Redwings',
  choice3: 'Steagles',
  choice4: 'Seahawks',
  answer: 'Steagles',
  }
];


let correctNum = 0
let currentQuestion = 0;


function quizQuestions(question) {
  return `<section>
    <div class= 'totals'>
        <span>Score: ${correctNum}/10</span>
        <span>Question: ${currentQuestion + 1}/10</span>
    </div>

    <form id='question-form'>
        <fieldset>
            <legend><h2>${question.problem}</h2></legend>
            <label>
                <input type="radio" name="question" value='${question.choice1}'>
                <span>${question.choice1}</span>
            </label>

            <label>
                <input type="radio" name="question" value='${question.choice2}'>
                <span>${question.choice2}</span>
            </label>

            <label>
                <input type="radio" name="question" value='${question.choice3}'>
                <span>${question.choice3}</span>
            </label>

            <label>
                <input type="radio" name="question" value='${question.choice4}'>
                <span>${question.choice4}</span>
            </label>
        </fieldset>
        <input type="submit" value="submit">
    </form>
</section>`
        };


function startButtonHandle(){
  $('#start-button').on('click', function(event) {
    $('.main').hide();
    let firstQuestion = questionSet[currentQuestion];
    let firstQuestionHTML = quizQuestions(firstQuestion);
    $('#question-area').html(firstQuestionHTML);
  })
}

function formButtonHandle() {
  $('#question-area').on('submit', '#question-form', function(event) {
    event.preventDefault();
    let userChoice = $('input[name=question]:checked').val();
    let realAnswers = questionSet[currentQuestion].answer;
    if(userChoice === realAnswers) {
      correctNum++;
    }
    currentQuestion+=1;
    let nextQuestion = questionSet[currentQuestion];
    let nextQuestionHTML = quizQuestions(nextQuestion);
    $('#question-area').html(nextQuestionHTML);
  });
}

function resultsPage() {
return `<section>
    <div class='summary'>
      <h1>Did You Make It?</h1>
      <span>Your Score: ${correctNum}/10</span>
     <button type="reset">Restart Quiz</button>
    </div>
  </section>`
};

function endPageHandle() {
  $('#question-area').on('submit', '#question-form', function(event) {
    if(currentQuestion == 10) {
      $('#question-form').hide();

    }
  });
}


$(startButtonHandle);
$(formButtonHandle);
$(endPageHandle);