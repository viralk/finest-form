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

  document.addEventListener('DOMContentLoaded', function () {
    var el = document.querySelectorAll('.input-group input');
    for (var i = 0; i < el.length; i++) {
      if (el[i] && el[i].value) {
        addClass(el[i], 'active');
        addClass(el[i].nextElementSibling, 'active');
      }
    }
  });

  // Add class active to all inputs with a starting value after an ajax request
  // This is necessary for the correct behavior of the input
  var ajaxOpen = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function () {
    this.addEventListener('load', function () {
      var el = document.querySelectorAll('.input-group input');
      for (var i = 0; i < el.length; i++) {
        if (el[i] && el[i].value) {
          addClass(el[i], 'active');
          addClass(el[i].nextElementSibling, 'active');
        }
      }
    });
    ajaxOpen.apply(this, arguments);
  }

  // Add class active to all inputs that got a value after a state change of
  // the input without focusing on it, such as browser autocomplete
  document.addEventListener('change', function (e) {
    if (e.target.parentElement.classList.contains('input-group') && e.target.value) {
      addClass(e.target, 'active');
      addClass(e.target.nextElementSibling, 'active');
    }
  });

  // Add class active to the focused input
  document.addEventListener('focusin', function (e) {
    if (e.target.parentElement.classList.contains('input-group')) {
      addClass(e.target, 'active');
      addClass(e.target.nextElementSibling, 'active');
    }
  });

  // If there is no value i remove the active class from the input
  document.addEventListener('focusout', function (e) {
    if (e.target.parentElement.classList.contains('input-group') && !e.target.value) {
      removeClass(e.target, 'active');
      removeClass(e.target.nextElementSibling, 'active');
    }
  });

})();





// ============================================================================
// Only for testing purpose
// ============================================================================
(function () {
  var ajaxTest = document.getElementById('ajaxTest');
  ajaxTest.addEventListener('click', function () {

    function reqListener() {
      console.log(this.responseText);
      document.getElementsByTagName('html')[0].innerHTML = this.responseText;
    }

    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", "http://127.0.0.1:5500/index.html");
    oReq.send();


  });
})();
