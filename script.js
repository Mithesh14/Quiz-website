const quizData = [
    {
        question: "Who is the current president of  GitHub?",
        a: "Mithesh",
        b: "Nat Friedman",
        c: "Grady Burnett",
        d: "Jeff Weiner",
        correct: "b",
    },
    {
        question: "The PHP operator index enclosure  [ ] has which associativity?",
        a: "Right",
        b: "Left",
        c: "Both",
        d: "None of the above",
        correct: "a",
    },
    {
        question: "Which element is used to group the rows within the header of a table so that common alignment and style defaults can easily be set for numerous cells?",
        a: "Multi-cell",
        b: "Scope",
        c: "Thead",
        d: "Headers",
        correct: "c",
    },
    {
        question: "If a function or method invocation preceded by the keyword new, then it is a ",
        a: "Direct invocation",
        b: "Constructor invocation",
        c: "Indirect invocation",
        d: "New invocation",
        correct: "b",
    },
    {
        question: "Which will set the color to pink on the third last div element of its parent?",
        a: " Div: nth-last-of-type(3) {color: pink;}",
        b: "Div: nth-last-child(3) {color:pink;}",
        c: " Div: last-child(3) {color:pink;}",
        d: "Div: nth-child-last(3) {color: pink;}",
        correct: "a",
    },
    {
        question: "Which of the following selector is not defined in CSS3?",
        a: ":lang(value)",
        b: ":root",
        c: ":empty",
        d: ":not(a)",
        correct: "a",
    },

    {
        question: "Which of the following is/are the media types defined in CSS",
        a: "Aural",
        b: "Embossed",
        c: "Print",
        d: "All of the above",
        correct: "d",
    },
    {
        question: "The read-only properties of any HTML element which return its on screen size, in CSS pixels is",
        a: "OffsetWidth()",
        b: "OffsetHeight()",
        c: " Both A and B",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "The unary operator typeof returns _____ if the operand value is Null",
        a: "“Object”",
        b: "“String”",
        c: "“Boolean”",
        d: "“Undefined”",
        correct: "a",
    },
    {
        question: "Arrange the following datatype in order of increasing magnitude!",
        a: "sbyte < short < int < long",
        b: "long < short < int < sbyte",
        c: "short < int < sbyte < long",
        d: "short < sbyte < int < long",
        correct: "a",
    },
    {
        question: "Which of the following are like offesetWidth and offesetHeight except that they do not include the border size, only content area and its padding?",
        a: "OffesetLeft and offesetTop",
        b: "ClientWidth and clientHeight",
        c: "ClientLeft and clientTop",
        d: "ScrollWidth and scrollHeight",
        correct: "b",
    },
    
];


const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions!</h2>
                
                <button onclick="location.reload()">Try Again!</button>
            `;
        }
    }
});