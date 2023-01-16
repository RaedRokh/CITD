let thanks = $(".thanks");
let buttons = $("#buttons");
let registerBtn = $("#register-button-section");
let returnBtn = $("#return-button-section");
let form = $("#register-form");
let registerContainer = $("#register-container");
let participant = $("#participant");
let roister = $("#roister");
let players = $("#players");
let registerImage = $("#register-image")


//Image variables

let participantImage = "../images/register/player.jpg";
let roisterImage = "../images/register/roister.jpg";

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
    registerImage.addClass("participant");
    registerImage.removeClass("roister");
})
roister.click(() => {
    buttonsClickHandler();
    players.val("roister");
    registerImage.removeClass("participant");
    registerImage.addClass("roister");
})

registerBtn.click((e) => {
    e.preventDefault();
    form.addClass("hide");
    form.css("visibility", "hidden");
    thanks.removeClass("hide");
    thanks.removeClass("remove");
})

returnBtn.click((e) => {
    e.preventDefault();
    buttons.removeClass("hide");
    setTimeout(() => {
        buttons.removeClass("remove");
        registerContainer.addClass("remove");
        setTimeout(() => {
            registerContainer.addClass("hide");
        }, 200);
    }, 200);
})