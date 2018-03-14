// scripts.js

$(function(){
	//this code will execute after the DOM is loaded
});

var carouselList = $("#carousel ul");


function changeSlide() {
    carouselList.animate({'marginLeft':-500}, 500, moveFirstSlide);
    
    function moveFirstSlide () {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        lastItem.after(firstItem);
        carouselList.css({marginLeft:0});
    }
}

setInterval(changeSlide, 3000);

function clickSlide () {
 var left = $('.slider-left');
  var right = $('.slider-right');
  left.on('click', function() {
    
    function movePreviousSlide () {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        firstItem.before(lastItem);
        carouselList.css({marginLeft: -500});
    }
    movePreviousSlide();
    carouselList.animate({'marginLeft':0}, 500, changeSlide);
      
  });
  right.on('click', function() {
    changeSlide();
  });
    
}

clickSlide();


