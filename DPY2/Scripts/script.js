/// <reference path="jquery-2.1.4.js" />

$('.circle').click(function () {
    if ($(this).hasClass('explode'))
        $(this).addClass('implode').removeClass('explode');
    else
        $(this).addClass('explode').removeClass('implode');
});