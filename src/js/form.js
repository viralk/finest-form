        function getInput() {
          var $input = document.querySelectorAll('.input-group input');
          return $input;
        }
        


        $input = getInput();
        for (var i = 0; i < $input.length; i++) {

          $input[i].addEventListener('keyup', function(e) {

            modifyStyleInput(this);

            if (e.keyCode == 8 || e.keyCode == 9 || e.keyCode == 46) {
              if (!(this.value)) {
                resetStyleInput(this);
              }
            }

          });   

          $input[i].addEventListener('cut', function() {
            resetStyleInput(this);
          });

        }


        function modifyStyleInput(input) {
          input.style.padding = '20px 10px 4px';
          input.nextElementSibling.style.opacity = '1';
        }

        function resetStyleInput(input) {
          input.style.padding = '12px 10px';
          input.nextElementSibling.style.opacity = '0';
        }

        function clearInput(input) {
          input.value = "";
          resetStyleInput(input);
        }

        function clearAll() {
          $input = getInput();
          for (var i = 0; i < $input.length; i++) {
            clearInput($input[i]);
          }
        }
