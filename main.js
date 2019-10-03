const catchTheFrog = CatchTheFrog()
//const renderer = Renderer()

//renderer.renderFrogs(catchTheFrog.getGamenum())

 $("#Gamezone").append(`<span class="frog"> <i class="fas fa-frog"></i> </span>`)
 $("#Gamezone").append(`<span class="frog"> <i class="fas fa-frog"></i> </span>`)

$("#Gamezone").on("click", ".frog", function () {
    $(this).remove()
})

catchTheFrog.addfrog()
console.log(catchTheFrog.getfrogs())
