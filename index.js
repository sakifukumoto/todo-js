const form = document.getElementById("form");
const input = document.getElementById("input");
const ul = document.getElementById("ul");

//ローカルストレージに保存されているデータをJSON形式で取得（画面をリロードしたときもtodoが消えないように）
const todos = JSON.parse(localStorage.getItem("todos"));

//todosがtrueだったらliタグを追加する
if(todos) {
  todos.forEach(todo => {
    add(todo);
  });
}

//入力フォームでエンターを押したとき
form.addEventListener("submit", function(event){
  event.preventDefault(); //ブラウザのリロードを中断できる
  add(); //add関数の呼び出し
});

function add(todo) {
  //変数 todoTextを定義
  let todoText = input.value;

  //todoがあったときはtodoの値でliタグをつくりたいのでtodoをtodoTextに代入
  if(todo) {
    todoText = todo;
  };

  //入力フォームに値が入力されているとき（文字数が0より大きい）→入力フォームに値が入っていないときにエンターを押しても反映されなくなる
  if(todoText) {
    const li = document.createElement("li"); //liタグをつくる
    li.innerText = todoText; //input.valueをとってきてinnerTextに代入
    li.classList.add("list-group-item"); //addでクラスを追加（スタイルをあてるため

    //右クリックされたとき
    li.addEventListener("contextmenu", function(event) {
      //通常右クリックしたときにでてくるメニューを出さないようにする
      event.preventDefault();
      //liを削除
      li.remove();
      //ローカルストレージにも削除を反映させる
      saveData();
    });
    ul.appendChild(li); //ulタグの子要素としてliを追加
    input.value = ""; //空にすることで使いやすく
    saveData();
  }
};

//データをとってきてローカルストレージ(ブラウザ)に保存
function saveData() {
  const lists = document.querySelectorAll("li"); //liのリストを定義
  let todos = [];
  //繰り返すことで配列の全要素を取得し、todosに格納
  lists.forEach(list => {
    todos.push(list.innerText);
  });
  //JSONに変換して保存
  localStorage.setItem("todos", JSON.stringify(todos));
}