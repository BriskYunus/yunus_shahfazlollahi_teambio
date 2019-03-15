var nickModal = document.getElementById('myModal');

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

var briskModal = document.getElementById('myModal2');

var btn2 = document.getElementById("myBtn2");

var span2 = document.getElementsByClassName("close2")[0];

btn.onclick = function() {
  nickModal.style.display = "block";
}

span.onclick = function() {
  nickModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == nickModal) {
    nickModal.style.display = "none";
  }
}

btn2.onclick = function() {
  briskModal.style.display = "block";
}

span2.onclick = function() {
  briskModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == briskModal) {
    briskModal.style.display = "none";
  }
}