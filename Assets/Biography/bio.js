$(document).ready(function() {
    var images = $('.slideshow img');
    var currentIndex = 0;

    function showImage(index) {
        images.removeClass('active');
        images.eq(index).addClass('active');
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    // Show the first image initially
    showImage(currentIndex);

    // Set interval to switch images every 3 seconds
    setInterval(nextImage, 3000);
});