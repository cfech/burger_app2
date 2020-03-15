$(function () {
    

    $(".submitBtn").on("click", function (event) {
        event.preventDefault()
        console.log("clicked")
        
        var burger = $("#burgerTxt").val()
        console.log(burger)
        $.ajax("/api/burgers" ,{
            type: "post",
            value: burger
        }).then(
            function () {
               
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
})