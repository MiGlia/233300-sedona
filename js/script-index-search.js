
var link = document.querySelector(".search-hotels");
var popup = document.querySelector(".index-search");
link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.toggle("index-search-close");
});
