(function() {
  "use strict"; 
  var link = document.querySelector(".search-hotels"),
      popup = document.querySelector(".index-search");
  if (link && popup) {
    link.addEventListener("click", function(event) {
      event.preventDefault();
      popup.classList.toggle("index-search-close");
    });
  }
})();
