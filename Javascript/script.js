document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
      var aboutMe = document.querySelector('.text');
      var scrollPosition = window.scrollY + window.innerHeight;
      var aboutMePosition = aboutMe.offsetTop;

      if (scrollPosition > aboutMePosition) {
        aboutMe.classList.add('show-text');
      }
    });
  });