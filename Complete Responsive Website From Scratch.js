var slideshow = document.getElementById("slideshow"),
    slides = slideshow.getElementsByTagName("img"),
    index = 0;

function nextSlide() {
    'use strict';
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
};

function prevSlide() {
    'use strict';
    slides[index].classList.remove("active");
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add("active");
};

var slideshowText = document.getElementById("slideshowText"),
    slideText = slideshowText.getElementsByTagName("div"),
    i = 0;

function nextSlideText() {
    'use strict';
    slideText[i].classList.remove("active");
    i = (i + 1) % slideText.length;
    slideText[i].classList.add("active");
};

function prevSlideText() {
    'use strict';
    slideText[i].classList.remove("active");
    i = (i - 1 + slideText.length) % slideText.length;
    slideText[i].classList.add("active");
};

function menuToggle() {
    var nav = document.getElementById("navbar");
    nav.classList.toggle("active")
}