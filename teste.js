function scrollText() {
    var elem = document.getElementById("scrollingText");
    var pos = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (pos == 200) {
        clearInterval(id);
      } else {
        pos++;
        elem.style.left = pos + 'px';
      }
    }
  }
  