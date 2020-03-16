$(function () {

    //Onclick of the submit button log the input and pass it to the backend 
    $(".submitBtn").on("click", function (event) {
        event.preventDefault()
        var burgerName = $("#burgerTxt").val()

        //Send the POST request 
        $.ajax("/api/burgers", {
            type: "POST",
            data: { burgerName }
        }).then(
            function () {
                location.reload();
            }
        );
    });

    //onClick of the devour button an ajax call will be sent to the backend with the id of the burger and telling it to set the devoured boolean to true 
    $(".devourBTN").on("click", function (event) {
        var id = $(this).data("id");
        var eatenBurger = {
            id: id,
            devoured: true
        }

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: eatenBurger
        }).then(
            function () {
                location.reload();
            }
        );
    });
})