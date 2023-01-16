let questions = {
    "Who can participate?": "Anyone can participate. Whether you're a competitor or a participant, Code in the Dark 2.0 is open to everyone to code, win and enjoy the experience.",
    "Why should I participate ?": "It’s a perfect occasion to not only relax after exams and work but also win valuable gifts and exchange knowledge with highly qualified people.",
    "How much does it cost ?": "No participation fees are required.",
    "Is the event online or offline ?": "It's an on site event.",
    "Is there any age limit ?": "No, anyone can participate.",
    "Do I need to master HTML and/or CSS?": "No, the competition is beginner friendly and only requires basic knowledge.",
}

let questionsContainer = $(".questions-container");
let chatInput = $(".chat-input");

Object.keys(questions).map((question, index) => {
    questionsContainer.append('<div class="question"><button>' + question + '</button></div>');
})

let question = $(".question");
let chat = $(".chat-messages");
var messageBody = document.querySelector('.chat-messages');


function getQuestion(elementFromClick) {
    elementFromClick = $(elementFromClick.target)
    elementFromClick = elementFromClick.text();
    return (elementFromClick)
}

function getAnswer(questionText) {
    return (questions[questionText]);
}

function makeUserMessage(txt) {
    let ch = '<div class="user-message"><div class="chat-message"><p>' + txt + '</p></div></div>'
    return (ch);
}

function makeBotMessage(txt) {
    let ch = '<div class="bot-message"><div class="chat-message"><p>' + txt + '</p></div></div>';
    return (ch);
}

function updateScrollChat() {
    messageBody.scrollTo({
        top: messageBody.scrollHeight - messageBody.clientHeight,
        behavior: 'smooth',
    });
}

var speed = 20;
function typeWriter(element, txt) {
    var i = 0;
    x = setInterval(() => {
        if (i < txt.length) {
            element.val(element.val() + txt.charAt(i));
            i++;
        } else {
            clearInterval(x);
        }
    }, speed);
}

let prevent = $(".prevent");  // a div that let me prevent user from double clicking

question.click((e) => {
    prevent.removeClass("remove");
    let q = getQuestion(e);
    let a = getAnswer(q);
    typeWriter(chatInput, q);
    setTimeout(() => {
        chat.append(makeUserMessage(q));
        chatInput.val("");
        updateScrollChat();
        setTimeout(() => {
            chat.append(makeBotMessage(a));
            updateScrollChat();
            prevent.addClass("remove");
        }, 500);
    }, q.length * speed + 200);
})