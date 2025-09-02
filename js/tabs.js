$(document).ready(function () {
    $('.tabs li').click(function () {
        var tab = $(this).data('target');
        $('.tabs li').removeClass('is-active');
        $(this).addClass('is-active');
        $('.tab-pane').hide();
        $('#' + tab).show();
    });
});