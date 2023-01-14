let thanks = $(".thanks");
let buttons = $("#buttons");
let registerBtn = $(".accept-btn");
let form = $("#register-form");
let registerContainer = $("#register-container");
let participant = $("#participant");
let roister = $("#roister");
let players = $("#players");

function buttonsClickHandler() {
    buttons.addClass("hide");
    setTimeout(() => {
        buttons.addClass("remove");
        registerContainer.removeClass("remove");
        setTimeout(() => {
            registerContainer.removeClass("hide"); 
        }, 200);
    }, 200);
}

participant.click(() => {
    buttonsClickHandler();
    players.val("participant");
})
roister.click(() => {
    buttonsClickHandler();
    players.val("roister");
})

registerBtn.click((e) => {
    e.preventDefault();
    form.addClass("hide");
    form.css("visibility", "hidden");
    thanks.removeClass("hide");
    thanks.removeClass("remove");
})