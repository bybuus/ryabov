let mybutton = document.getElementById("upbutton");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Grid overlay
$(".option.grid").click(function () {
  appGridOverlay();
});

// Keyboard Shortcuts
// reference https://www.w3.org/2002/09/tests/keys.html
$(document).keydown(function (key) {
  switch (parseInt(key.which, 10)) {
    // 'g' key pressed
    case 71:
      // console.log('g key pressed');
      appGridOverlay();
      break;
  }
});
