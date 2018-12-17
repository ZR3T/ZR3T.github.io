var i = 0;
var txt = 'GOOGLE OWNS YOU.'; /* The text */
var speed = 800; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}