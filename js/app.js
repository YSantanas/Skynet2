document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".sidenav");
  var instances = M.Sidenav.init(elems);
  var elems = document.querySelectorAll(".tooltipped");
  var instances = M.Tooltip.init(elems);
  var elems = document.querySelectorAll(".collapsible");
  var instances = M.Collapsible.init(elems, {
    accordion: false,
  });
  var elems = document.querySelectorAll(".parallax");
  var instances = M.Parallax.init(elems);
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems);
  
});


