$(document).ready(function($) {
    $('#accordion').find('.accordion-toggle').click(function(){
        //Expand or collapse this panel
        $(this).next().slideToggle('slow');
        //Hide the other panels
        $(".accordion-content").not($(this).next()).slideUp('fast');
    });
});