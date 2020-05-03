//Add click function to listen for task being added to list, then add task to list.
//Add close option so users can click "x" to remove tasks.
//Allow users to edit tasks by clicking on the text.
$(document).ready(function () {
    $('button').click(function () {
        $('#todo').append("<ul>" + $("input[name=task]").val() + " <a href='#' class='close' aria-hidden='true'>&times;</a></ul>");
    });
    $("body").on('click', '#todo a', function () {
        $(this).closest("ul").remove();
    });
});

//Sort tasks using jQuery sortable
  $("#todo").sortable();
