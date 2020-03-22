//SIDE TAB


    function openCity(evt, cityName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
        }

        // Get the element with id="defaultOpen" and click on it
        document.getElementById("defaultOpen").click();

//horizontal tab


          
function openPage(pageName,elmnt,color) {
    var j, htabcontent, htablinks;
    htabcontent = document.getElementsByClassName("htabcontent");
    for (j = 0; j < htabcontent.length; j++) {
      htabcontent[j].style.display = "none";
    }
    htablinks = document.getElementsByClassName("htablink");
    for (j = 0; j < htablinks.length; j++) {
      htablinks[j].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();
          
