    function inputKeyUp(e) {
      function urlSet(urlSrc) {
        var iframeElement = document.getElementById('iframeid');
        iframeElement.src = urlSrc;

      }
      e.which = e.which || e.keyCode;
      if(e.which == 13) {
        if (document.getElementById('urlInput').value) {
          var urlInput =  document.getElementById('urlInput');
          urlSet(document.getElementById("urlInput").value);
        } else {
          alert('Need to write an url');
        }
      }
    }