$(document).ready(function() {
    $(function() {
        $("#stateUseCirc").percircle();
    });
    $("#rfrshBtn").click(function() {
        window.location.reload(true);
    });

    $("#rfrshBtn").hover(function(e) {
        $(this).toggleClass('fa-spin');
        $(this).css("color", e.type === "mouseenter" ? "lime" : "white");
    });
});

$("body").flowtype({
    minFont: 8,
    maxFont: 14
});
