const IGNORE_KEYS = [9,13,16,17,18,19,20,27,33,34,35,36,37,38,39,40,44,45,91,92,93,112,113,114,115,116,117,118,119,120,121,122,123,144,145];
const RESET_KEYS = [8,9,46];

function getInput() {
  var $input = document.querySelectorAll('.input-group input');
  return $input;
}

function modifyInputStyle(input) {
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

$input = getInput();

for (var i = 0; i < $input.length; i++) {

  $input[i].addEventListener('keyup', function(e) {

    // Chek if the key pressed is not present inside the ignore keys array.
    // If the key is not in the array i proceed to check if the input is 
    // already styled if not i proceed to style it.
    if (!IGNORE_KEYS.includes(e.keyCode)) {
      // if (!(this.value)) {
        console.log('fired');
        modifyInputStyle(this);
      // }
    }

    // Check if the key pressed is present inside the reset keys array
    // If the input has no value i proceed to reset the style of the input
    if (RESET_KEYS.includes(e.keyCode)) {
      if (!(this.value)) {
        resetStyleInput(this);
      }
    }

  });   

  $input[i].addEventListener('cut', function() {
    resetStyleInput(this);
  });

}
