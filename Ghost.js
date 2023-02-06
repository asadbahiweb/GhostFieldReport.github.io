// get all the navbar links
var navbarLinks = document.querySelectorAll("#navbar a");

// loop through each link and add a click event listener
navbarLinks.forEach(function(link) {
  link.addEventListener("click", function(event) {
    event.preventDefault(); // prevent the default link behavior
    var target = event.target.getAttribute("href"); // get the href attribute of the link
    var targetElement = document.querySelector(target); // get the target element
    var offset = targetElement.offsetTop; // get the distance from the top of the page to the target element

    // smoothly scroll to the target element
    window.scroll({
      top: offset,
      behavior: "smooth"
    });
  });
});
