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


$(".header-nav-link--new").click(function() {
    $('html,body').animate({
        scrollTop: $(".ultramodern-houses").offset().top},
        'slow');
});

$(".header-nav-link--houses").click(function() {
    $('html,body').animate({
        scrollTop: $(".circle-house").offset().top},
        'slow');
});

$(".header-nav-link--types").click(function() {
    $('html,body').animate({
        scrollTop: $(".houses-types").offset().top},
        'slow');
});

$(".header-nav-link--contact").click(function() {
    $('html,body').animate({
        scrollTop: $(".contacts").offset().top},
        'slow');
});

// 55°41'15.1"N 37°36'54.5"E
// 55.687514, 37.615142
function initMap() {
  var center = {lat: 55.687514, lng: 37.615142 };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: center
  });
}
