window.onload = function(e) {
  "use strict";

  var nav_is_open = false;
  var cutoff = 768;
  var button = document.getElementById("nav-toggle");
  var nav = document.querySelector("nav");
  var content = document.querySelector(".content");
  button.addEventListener("click", function() {
    nav_toggle_function();
  });

  function nav_toggle_function() {
    if (!nav_is_open) {
      open_nav();
    } else {
      close_nav();
    }
    nav_is_open = !nav_is_open;
  }

  var was_mobile_width = window.innerWidth < cutoff;
  window.addEventListener("resize", function(e) {
    if (was_mobile_width) {
      if (window.innerWidth > cutoff) {
        if (!nav_is_open) {
          open_nav();
          nav_is_open = true;
        }
      }
    } else {
      if (window.innerWidth < cutoff) {
        if (nav_is_open) {
          close_nav();
          nav_is_open = false;
        }
      }
    }
    was_mobile_width = window.innerWidth < cutoff;
  });

  function open_nav() {
    nav.style.transform = "translateX(0)";
    content.style.transform = "translateX(288px)";
  }

  function close_nav() {
    nav.style.transform = "translateX(-288px)";
    content.style.transform = "translateX(0)";
  }
}
