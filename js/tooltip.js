// show
$('html').on('mouseover', '.tooltip', function(){
    $(this).addClass('hover');
});


// hide
$('html').on('mouseout', '.tooltip', function(){
    $(this).removeClass('hover');
});
