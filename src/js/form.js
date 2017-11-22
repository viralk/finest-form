$input = document.querySelectorAll('.input-group input');

for (var i = 0; i < $input.length; i++) {
  $input[i].addEventListener('keyup', function (e) {

    $this = this;

    $this.style.padding = '20px 10px 4px';
    var el = $this.nextElementSibling;
    el.style.opacity = '1';

    if (e.keyCode == 8 || e.keyCode == 9) {
      if (!($this.value)) {
        $this.style.padding = '12px 10px';
        el.style.opacity = '0';
      }
    }

  });
}

// controlla keyup che attivano l'animazione ed escludili