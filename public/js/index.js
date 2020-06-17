$(document).ready(function () {
  
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      //  $('.navbar').css('top','0') work;
      //  $('nav').slideDown();
      // $('.navbar').css({"background-image":" linear-gradient(to bottom, red 50%, black 50%)"," -webkit-transition":"background-position 1s","-moz-transition":" background-position 1s",})
        $('.navbar').css('background-position',"0 -100%");
        $('#navbarNav a').removeClass('font-color2');
        $('#navbarNav a').addClass('font-color1');
    }else {
      // $('nav').css('display',"none");
      // $('.navbar').css('top','-56px');
      // $('.navbar').css('top','-5rem'); work
      $('.navbar').css('background-position',"initial");
    $('#navbarNav a').removeClass('font-color1');
       $('#navbarNav a').addClass('font-color2');
     

    }
  

});

});


var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
  delta = this.period;
  this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  this.loopNum++;
  delta = 500;
  }

  setTimeout(function() {
  that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};