function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    var slideIndex = n;
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function dropInit() {
    var dropmenu = document.querySelector('#hidden');
    document.querySelector('.drop-button').addEventListener("click", function (event) {
        event.preventDefault();
        dropmenu.classList.toggle('active');
    });
}

function slideGallery() {
    var slideGallery = document.querySelector('.slider'); // slider div container
    var slidesList = slideGallery.querySelector('ul'); // slides ul list
    var slideItems = slideGallery.querySelectorAll('ul li'); // slides li elements
    var slidesNumber = slideItems.length;
    var slidesWidth = slideItems[0].offsetWidth; // getting width by first element
    var currentSlide = 0; // active slide indicator
    
    // lets set our slides ul width by slides number;
    var slidesListWidth = slidesWidth * slidesNumber;
    slidesList.style.width = slidesListWidth + "px";

    // default state, slide[0] active;
    setPosition();

    // slide to next
    function slideLeft() {
        if (currentSlide < slidesNumber - 1) { // -1 cause our first element has index [0]
            currentSlide++;
        }
        else {
            currentSlide = 0;
        }
        setPosition();
    }

    // slide to prev
    function slideRight() {
        if (currentSlide != 0) {
            currentSlide--;
        }
        else {
            currentSlide = slidesNumber - 1; // -1 cause our first element has index [0]
        }
        setPosition();
    }

    // set slides list position
    function setPosition() {
        var offset = currentSlide * slidesWidth * -1 + 'px';
        slidesList.style.marginLeft = offset;
        setActiveClass();
    }

    // set active class for slide element
    function setActiveClass() {
        // reset all active classes
        for (item of slideItems) {
            item.classList.remove('active');
        }
        
        // set active class
        slideItems[currentSlide].classList.add('active');
    }

    // adding buttons event handlers
    slideGallery.querySelector('.arrow-right').addEventListener("click", function (event) {
        event.preventDefault();
        slideLeft();
    });
    slideGallery.querySelector('.arrow-left').addEventListener("click", function (event) {
        event.preventDefault();
        slideRight();
    });
}

window.onload = function () {
    // dropdown init
    dropInit();

    // fade gallery
    showSlides(1);

    // slide gallery
    slideGallery();
};
