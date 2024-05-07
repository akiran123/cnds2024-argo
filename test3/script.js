// Markdownファイルを読み込んでHTMLに変換する関数
function convertMarkdownFileToHTML(markdownFilePath) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                var markdownContent = xhr.responseText;
                var htmlContent = marked(markdownContent);
                document.getElementById("markdown-content").innerHTML = htmlContent;
            } else {
                console.error("Failed to load Markdown file.");
            }
        }
    };
    xhr.open("GET", markdownFilePath, true);
    xhr.send();
}

// ページが読み込まれたらMarkdownファイルをHTMLに変換する
window.onload = function() {
    convertMarkdownFileToHTML("example.md");
};
