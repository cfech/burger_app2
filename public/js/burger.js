$(function () {


    $(".submitBtn").on("click", function (event) {
        event.preventDefault()
        console.log("clicked")

        var burgerName = $("#burgerTxt").val()
        console.log(burgerName)
        $.ajax("/api/burgers", {
            type: "POST",
            data: {burgerName}
        }).then(
            function () {
                console.log("trying to reload")
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".devourBTN").on("click", function (event) {
        console.log("help")
        var id = $(this).data("id");
        console.log(id)
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
                console.log("changed burger eaten  to", eatenBurger);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
})