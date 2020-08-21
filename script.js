// Add selectors for the Books dropdowns

var acc = document.getElementsByClassName("book-title");
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      /* Toggle between adding and removing the "active" class,
      to highlight the button that controls the panel */
      this.classList.toggle("active");
  
      /* Toggle between hiding and showing the active panel */
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  };

var images = document.getElementsByClassName("projImg");
var content = document.getElementsByClassName("container projCont");

for (i = 0; i < images.length; i++) {
    images[i].addEventListener("click", function(e) {
        let curID = e.srcElement.alt;
        let currentCont = document.getElementById(curID);
        currentCont.classList.toggle("active"); 
    //   /* Toggle between hiding and showing the active panel */
       if (currentCont.style.display === "block") {
        currentCont.style.display = "none";
      } else {
        currentCont.style.display = "block";
      }
    });
  };

let popup = document.getElementById("popup");
popup.addEventListener('click', function() {
    alert("This is CS50.");
})



  function myFunction(imgs) {
    // Get the expanded image
    var expandContent = document.getElementById("expandedContent");
    // Get the image text
    var imgText = document.getElementById("imgtext");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText.innerHTML = imgs.alt;
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
  }