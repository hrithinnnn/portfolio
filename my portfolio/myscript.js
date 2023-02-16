var picPaths = ['images/img1.jpg', 'images/img2.jpg'];
var imageIndex = 0;
var bannerImage;
function startInterval() {
    setInterval(displayNextImage, 3000);
}

function displayNextImage() {
    bannerImage.src = picPaths[imageIndex];
    if (imageIndex === (picPaths.length - 1)) {
        imageIndex = 0;
    }
    else {
        imageIndex = imageIndex + 1;
    }

}

window.onload = function () {
    bannerImage = document.getElementById('title-img');
    startInterval();
}

function checkElementLocation() {
    var $window = $(window);
    var bottom_of_window = $window.scrollTop() + $window.height();
  
    $('.elem').each(function(i) {
      var $that = $(this);
      var bottom_of_object = $that.position().top + $that.outerHeight();
  
      //if element is in viewport, add the animate class
      if (bottom_of_window > bottom_of_object) {
        $(this).addClass('fade-in');
      }
    });
  }
  // if in viewport, show the animation
  checkElementLocation();
  
  $(window).on('scroll', function() {
    checkElementLocation();
  });
  window.addEventListener('scroll',checkElementLocation);