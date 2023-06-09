const form = document.getElementById("form");
const input = document.getElementById('input');

//フォームの値の取得
form.addEventListener('submit', function(event){
  event.preventDefault(); //ブラウザのリロードを中断できる
  console.log(input.value);
});