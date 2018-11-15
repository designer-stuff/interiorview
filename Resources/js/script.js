const img = document.querySelectorAll(".image");
const btn = document.getElementById("carousel");

// carousel
$("#carousel").on("click", () => {
  let count = 1;
  let interval = 1000;
  img.forEach((el, index) => {
    setTimeout(() => {
      if (index <= img.length - 1) {
        el.classList.add("fadeIn"); // add fadeIn class
        el.style.zIndex = count++; // change z-index by 1
      }
    }, 2 * index * interval);
    el.style.zIndex = 0; // reset z-index
    el.classList.remove("fadeIn"); // remove the fadeIn class
  });
  if (count => img.length) count = 1; // reset the count
});

// sidebar

// sidebar dismiss
$(".overlay, .components li > a").on("click", () => {
  $("#sidebar").removeClass("active");
  $(".overlay").removeClass("active");
});

$("#sidebarCollapse").on("click", () => {
  $("#sidebar").addClass("active");
  $(".overlay").addClass("active");
});

// smooth scrolling
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top - 150
          },
          1000
        );
        return false;
      }
    }
  });
});
