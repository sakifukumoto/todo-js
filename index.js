const form = document.getElementById("form");
const input = document.getElementById("input");
const ul = document.getElementById("ul");

//入力フォームでエンターを押したとき
form.addEventListener("submit", function(event){
  event.preventDefault(); //ブラウザのリロードを中断できる
  add(); //add関数の呼び出し
});

function add() {
  //変数 todoTextを定義
  let todoText = input.value;

  //入力フォームに値が入力されているとき（文字数が0より大きい）→入力フォームに値が入っていないときにエンターを押しても反映されなくなる
  if(todoText.length > 0) {
    const li = document.createElement("li"); //liタグをつくる
    li.innerText = todoText; //input.valueをとってきてinnerTextに代入
    li.classList.add("list-group-item"); //addでクラスを追加（スタイルをあてるため）
    ul.appendChild(li); //ulタグの子要素としてliを追加
    input.value = ""; //空にすることで使いやすく
  }
};