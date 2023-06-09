const form = document.getElementById("form");
const input = document.getElementById("input");
const ul = document.getElementById("ul");

//フォームの値の取得
form.addEventListener("submit", function(event){
  event.preventDefault(); //ブラウザのリロードを中断できる
  add(); //add関数の呼び出し
});

function add() {
  const li = document.createElement("li"); //liタグをつくる
  li.innerText = input.value; //input.valueをとってきてinnerTextに代入
  li.classList.add("list-group-item"); //addでクラスを追加（スタイルをあてるため）
  ul.appendChild(li); //ulタグの子要素としてliを追加
  input.value = ""; //空にすることで使いやすく
};