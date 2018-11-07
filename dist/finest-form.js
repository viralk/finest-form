"use strict";

function hasClass(a, b) {
  return a.classList ?
    a.classList.contains(b) :
    new RegExp("\\b" + b + "\\b").test(a.className);
}

function addClass(a, b) {
  a.classList ?
    a.classList.add(b) :
    !hasClass(a, b) && (a.className += " " + b);
}

function removeClass(a, b) {
  a.classList ?
    a.classList.remove(b) :
    (a.className = a.className.replace(
      new RegExp("\\b" + b + "\\b", "g"),
      ""
    ));
}
(function () {
  for (
    var a = document.querySelectorAll(".input-group input"), b = 0; b < a.length; b += 1
  )
    a[b].addEventListener("focus", function () {
      addClass(this, "active"), addClass(this.nextElementSibling, "active");
    }),
    a[b].addEventListener("blur", function () {
      this.value ||
        (removeClass(this, "active"),
          removeClass(this.nextElementSibling, "active"));
    });
})();
