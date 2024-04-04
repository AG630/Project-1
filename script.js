$(document).ready(function() {
    var images = $('.slideshow img');
    var currentIndex = 0;

    function showImage(index) {
        images.removeClass('active');
        images.eq(index).addClass('active').fadeIn();
    }

    function nextImage() {
        var randomIndex = Math.floor(Math.random() * images.length);
        while (randomIndex === currentIndex) {
            randomIndex = Math.floor(Math.random() * images.length);
        }
        currentIndex = randomIndex;
        showImage(currentIndex);
    }

    // Show a random image initially
    currentIndex = Math.floor(Math.random() * images.length);
    showImage(currentIndex);

    // Set interval to switch images every 3 seconds
    setInterval(nextImage, 3000);
});
