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






function ffActive(el) {
  if (el && el.value) {
    addClass(el, 'active');
    addClass(el.nextElementSibling, 'active');
  }
}


(function () {

  // Add class active to all inputs with a starting value
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.input-group input').forEach(function (el) {
      ffActive(el);
    });
  });

  // Add class active to all inputs with a starting value after an ajax request
  // This is necessary for the correct behavior of the input
  var ajaxOpen = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function () {
    this.addEventListener('load', function () {
      document.querySelectorAll('.input-group input').forEach(function (el) {
        ffActive(el);
      });
    });
    ajaxOpen.apply(this, arguments);
  }

  // Add class active to all inputs that got a value after a state change of
  // the input without focusing on it, such as browser autocomplete
  document.addEventListener('change', function (e) {
    if (e.target.parentNode.className == 'input-group') {
      ffActive(e.target);
    }
  });

  // Add class active to the focused input
  document.addEventListener('focusin', function (e) {
    if (e.target.parentNode.className == 'input-group') {
      addClass(e.target, 'active');
      addClass(e.target.nextElementSibling, 'active');
    }
  });

  // If there is no value i remove the active class from the input
  document.addEventListener('focusout', function (e) {
    if (e.target.parentNode.className == 'input-group' && !e.target.value) {
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