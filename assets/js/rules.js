let command = document.querySelector("#command");
let rules = document.querySelector("#rules-text");
// let rulesTxt = '>THREE CHAMPIONS and maybe more!!! <br>>10 Rounds<br>>10 competitors, 10 minutes and ONE champion per round <br>>Only HTML & CSS <br>>No previews, no external resources <br></br>'
let nextCom = document.querySelector("#next-command");
// function isInViewport(element) {
//     const rect = element.getBoundingClientRect();
//     return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
// }


var commandRules = 'CITD --rules'; /* The text */

function typeWriter(txt, element, speed) {
    console.log("hello")
    var i = 0;
    setInterval(() => {
        element.innerHTML += txt.charAt(i);
        i++;
    }, speed);
}



let rulesBtn = $('#button-rules');
let firstTime = true;
x = setInterval(() => {
    let test = rulesBtn.hasClass("active");
    // console.log(test);
    if (test && firstTime) {
        firstTime = false;
        command.classList.remove("hide");
        // alert("hello")
        // typeWriter(commandRules, command, 100);
        var i = 0;
        setInterval(() => {
            command.innerHTML += commandRules.charAt(i);
            i++;
        }, 100);
        setTimeout(() => {
            rules.classList.remove("hide");
        }, commandRules.length * 150);
        setTimeout(() => {
            nextCom.classList.remove("hide");
        }, commandRules.length * 150 + 750);
        clearInterval(x);
    }
}, 1500);