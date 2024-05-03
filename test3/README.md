## タブ切り替えのデモ

<div class="tabs">
    <input type="radio" name="tab" id="tab1" checked>
    <label for="tab1">タブ1</label>
    
    <input type="radio" name="tab" id="tab2">
    <label for="tab2">タブ2</label>
    
    <div class="tab-content" id="content1">
        ここにはタブ1の内容が表示されます。
    </div>
    
    <div class="tab-content" id="content2">
        ここにはタブ2の内容が表示されます。
    </div>
</div>

<style>
/* タブのスタイル */
.tabs {
  position: relative;
  margin-top: 20px;
}

/* タブのラベルのスタイル */
.tabs label {
  display: inline-block;
  padding: 10px 20px;
  border-radius: 5px 5px 0 0;
  background: #f2f2f2;
  cursor: pointer;
}

/* タブのコンテンツのスタイル */
.tabs .tab-content {
  display: none;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 0 0 5px 5px;
}

/* タブが選択されたときのスタイル */
.tabs input[type="radio"]:checked + label {
  background: #fff;
}

/* 選択されたタブのコンテンツを表示 */
#tab1:checked ~ #content1,
#tab2:checked ~ #content2 {
  display: block;
}
</style>

