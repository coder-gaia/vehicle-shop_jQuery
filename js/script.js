$(document).ready(function(){
    $(`#images-carousel`).slick({
        autoplay: true
    })
    $(`.hamburguer-menu`).click(function(){
        $(`nav`).slideToggle()
    })
    $(`#tel`).mask(`(00) 00000-0000`)
    $(`form`).validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true, 
            },
            telephone: {
                required: true
            },
            chosenCar: {
                required: false
            },
            msg: {
                required: true
            }
        },
        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(event, validator){
            let incorrectFields = validator.numberOfInvalids()
            console.log(incorrectFields)
            if(incorrectFields){
                alert(`There are ${incorrectFields} incorrects fields on the formulary!`)
            }
        }
    })
    $(`.automobile-list button`).click(function(){
        const whereTo = $(`#contact`)

        const vehicleName = $(this).parent().find(`h3`).text()
        $("#chosenCar").val(vehicleName)

        $(`html`).animate({
            scrollTop: whereTo.offset().top
        },1000)
    })
})