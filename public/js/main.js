$(function () {
    $(".about_project").hide();
    $(".less_info_link").hide();
});//ready

var open_details = function (project, openlink, closelink) {
    project.show();
    openlink.hide();
    closelink.show();
}

var close_details = function (project, openlink, closelink) {
    project.hide();
    openlink.show();
    closelink.hide();
}