    function inputKeyUp(e) {
      function urlSet(urlSrc) {
        var iframeElement = document.getElementById('iframeid');
        iframeElement.src = "http://" + urlSrc;

      }
      e.which = e.which || e.keyCode;
      if(e.which == 13) {
          var urlInput =  document.getElementById('urlInput');
          urlSet(document.getElementById("urlInput").value);
      }
    }