const Renderer = function () {

    const renderFrogs = function (Gamenum) {

            $(".frog").empty()
            for (let i = 0; i < Gamenum.numoffrogs; i++) {
                $("#Gamezone").append(`<span class="frog"> <i class="fas fa-frog"></i> </span>`)             
            }
    }

    return {
        renderFrogs:renderFrogs
    }
}