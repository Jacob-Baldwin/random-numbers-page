const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function getRandomString(length) {
  var i;
  var output = "";
  for (i = 0; i < length; i++) {
    output = output + chars[getRandomInt(0, 26)];
  }
  return output;
}

function handleRandomStringButton() {
  let input_length = document.getElementById('RandomStringLength').value;
  input_length = +input_length;
  document.getElementById('RandomStringOutput').innerHTML = getRandomString(input_length);
}
