$(document).ready(function () {
    svg4everybody({});
});


$('.btn-call').on('click', function(){
  $('.contact-form--recall').addClass('contact-form-popup--active')
  $('body').addClass('overflow-hidden')
});

$('.btn-help').on('click', function(){
  $('.contact-form--help-area').addClass('contact-form-popup--active')
  $('body').addClass('overflow-hidden')
});

$('.btn-project').on('click', function(){
  $('.contact-form--help-build').addClass('contact-form-popup--active')
  $('body').addClass('overflow-hidden')
});

$('.icon-close-icon').on('click', function(){
  $('.contact-form-popup').removeClass('contact-form-popup--active');
    $('body').removeClass('overflow-hidden')
});
