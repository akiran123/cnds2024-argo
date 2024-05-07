// タブ切り替え時の処理
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

  // marked.jsを読み込んだ後に処理を行う
  loadMarkdown(tabName);
}

// Markdownファイルを読み込んでHTMLに変換し、コンテンツを表示する
function loadMarkdown(tabName) {
  fetch(tabName + ".md")
    .then(response => response.text())
    .then(text => {
      var html = marked(text); // marked()関数を使用してMarkdownをHTMLに変換
      document.getElementById(tabName).innerHTML = html;
    })
    .catch(error => console.error('Error fetching markdown:', error));
}

// 初期状態で最初のタブを開く
document.getElementsByClassName("tablinks")[0].click();
