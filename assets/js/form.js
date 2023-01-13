let participant = $("#participant-button");
let roister = $("#roister-button");
let buttons = $("#buttons");
let formCard = $("#register-card");
let form = $("#register-form")
let players = $("#players");
// let register = $("accept-button");
let thanks = $(".thanks");
console.log(players);

function clickHandler() {
    buttons.addClass("hide");
    setTimeout(() => {
        formCard.removeClass("remove");
        buttons.addClass("remove");
        setTimeout(() => {
            formCard.removeClass("hide");
        }, 300);
    }, 300);
}

participant.click(() => {
    players.val("Participant");
    clickHandler()
});
roister.click(() => {
    players.val("Roister");
    clickHandler()
});

form.submit((e) => {
    e.preventDefault();
    form.addClass("hide");
    form.css("visibility", "hidden");
    thanks.removeClass("remove");
    thanks.removeClass("hide");
})