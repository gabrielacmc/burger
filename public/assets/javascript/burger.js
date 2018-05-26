// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#newBurger").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/eat-da-burer", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("created new cat");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".eat").on("click", function(event) {
    var id = $(this).data("id");

    var eaten = {
      devoured: "TRUE"
    };

    // Send the PUT request.
    $.ajax("/api/eaten/" + id, {
      type: "PUT",
      data: eaten
    }).then(
      function() {
        console.log("changed devoured to", eaten);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });


});
