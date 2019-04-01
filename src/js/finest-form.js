function hasClass(a, b) {
  return a.classList ? a.classList.contains(b) : new RegExp('\\b' + b + '\\b').test(a.className);
}

function addClass(a, b) {
  if (a.classList) a.classList.add(b);
  else if (!hasClass(a, b)) a.className += ' ' + b;
}

function removeClass(a, b) {
  if (a.classList) a.classList.remove(b);
  else a.className = a.className.replace(new RegExp('\\b' + b + '\\b', 'g'), '');
}

(function () {
  var a = document.querySelectorAll('.input-group input');

  for (var b = 0; b < a.length; b += 1) {

    if (a[b].value) {
      addClass(a[b], 'active');
      addClass(a[b].nextElementSibling, 'active');
    }

    a[b].addEventListener('focus', function () {
      addClass(this, 'active');
      addClass(this.nextElementSibling, 'active');
    });

    a[b].addEventListener('blur', function () {
      if (!this.value) {
        removeClass(this, 'active');
        removeClass(this.nextElementSibling, 'active');
      }
    });

  }
})();