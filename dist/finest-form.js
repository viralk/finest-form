function hasClass(el, className) {
  return el.classList ? el.classList.contains(className) : new RegExp('\\b' + className + '\\b').test(el.className);
}

function addClass(el, className) {
  if (el.classList) el.classList.add(className);
  else if (!hasClass(el, className)) el.className += ' ' + className;
}

function removeClass(el, className) {
  if (el.classList) el.classList.remove(className);
  else el.className = el.className.replace(new RegExp('\\b' + className + '\\b', 'g'), '');
}

(function () {
  const $input = document.querySelectorAll('.input-group input');

  for (let i = 0; i < $input.length; i += 1) {
    $input[i].addEventListener('focus', function () {
      addClass(this, 'active');
      addClass(this.nextElementSibling, 'active');
    });
    $input[i].addEventListener('blur', function () {
      if (!this.value) {
        removeClass(this, 'active');
        removeClass(this.nextElementSibling, 'active');
      }
    });
  }
}());
