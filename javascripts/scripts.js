(function () {

$('[class*="z-"]').addClass( function() {
    var el = $(this);
    if (el.hasClass('z-facebook'))
        $('a', el).addClass('zocial zocial-facebook');
    if (el.hasClass('z-twitter'))
        $('a', el).addClass('zocial zocial-twitter');
    if (el.hasClass('z-linkedin'))
        $('a', el).addClass('zocial zocial-linkedin');
    if (el.hasClass('z-googleplus'))
        $('a', el).addClass('zocial zocial-googleplus');
    if (el.hasClass('z-pinterest'))
        $('a', el).addClass('zocial zocial-pinterest');
    if (el.hasClass('z-instagram'))
        $('a', el).addClass('zocial zocial-instagram');
    if (el.hasClass('z-github'))
        $('a', el).addClass('zocial zocial-github');
    if (el.hasClass('z-rss'))
        $('a', el).addClass('zocial zocial-rss');
    $('a', el).text('');
} );

$('.menu > li > .sub-menu').each( function() {
    var el = $(this);
    el.parent().addClass('dropdown');
    // $('.dropdown > a' ).addClass('dropdown-toggle').attr('data-toggle', 'dropdown').attr('aria-expanded', false);
    el.addClass('dropdown-menu');
} );

$('[data-toggle="popover"]').popover();

$('body').on('click', function (e) {
    $('[data-toggle="popover"]').each(function () {
        //the 'is' for buttons that trigger popups
        //the 'has' for icons within a button that triggers a popup
        if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
            $(this).popover('hide');
        }
    });
});

$('#portfolio_modal').on( 'show.bs.modal', function(e) {
    var div = $(e.relatedTarget);
    var modal = $(this);

    modal.find('.modal-title').text( div.data('title') );
    if (typeof div.data('href') !== undefined && div.data('href').length > 0) {
        modal.find('.name').html( 'Client: <a href="'+ div.data('href') +'" target="_blank">'+ div.data('title') +'</a>' );
    } else {
        modal.find('.name').text( 'Client: ' + div.data('title') );
    }
    modal.find('.date_range').text( div.data('date_range') );
    modal.find('.project').text( 'Project: ' + div.data('project') );
    modal.find('.role').text( 'Role: ' + div.data('role') );
    modal.find('.img img').attr( 'src', div.data('img') );

    var desc = div.data('desc').split('|');
    desc_text = '';
    for (var i in desc)
        desc_text += '<li>' + desc[i] +' </li>';
    modal.find('.desc').html( desc_text );

} );

})(jQuery);




(function($) {
    if (console) console.log('If you\'re reading this, let\'s be friends. Tweet me - @kenhkelly');
}) (jQuery);