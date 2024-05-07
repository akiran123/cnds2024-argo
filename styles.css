function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";

  // Load markdown content
  fetch(tabName + ".md")
    .then(response => response.text())
    .then(text => {
      // Convert markdown to HTML
      var html = marked(text);
      // Display HTML content
      document.getElementById(tabName).innerHTML = html;
    });
}

// Open default tab on page load
document.getElementsByClassName("tablinks")[0].click();
