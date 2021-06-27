$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "/image",
        dataType: "text",
        success: function (data) {
            if (data) {
                console.log(data);
                $("body").css("background", `url(${data}) no-repeat center center fixed`);
            }
            else {
                console.log("No wallpaper was returned.\n" + data);
            }
        },
        error: function (xhr, status, error) {
            var errorMessage = xhr.status + ": " + xhr.statusText;
            console.log(errorMessage);
            console.log(error);
        }
    });

    $(function() {
        $(".media-draggable").draggable({
            cursor: "move",
            revert: true,
            opacity: 0.75,
            zIndex: 100,
            containment: "#draggable-container",
            start: function() {
                $(".card").addClass("no-transition");
            },
            stop: function() {
                $(".card").removeClass("no-transition");
            }
        });
    });
});