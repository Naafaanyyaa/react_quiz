import $ from 'jquery';

$(".input100").each(function () {
    console.log('sad');
    $(this).keydown(function () {
        console.log('sad');
    })
})
