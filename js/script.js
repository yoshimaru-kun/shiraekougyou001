// モーダルの要素を取得
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-image');
const closeBtn = document.getElementsByClassName('modal-close')[0];

// クリックされる画像（トリガー）をすべて取得
const triggers = document.getElementsByClassName('modal-trigger');

// 各画像にクリックイベントを設定
for (let i = 0; i < triggers.length; i++) {
  triggers[i].onclick = function(){
    modal.style.display = "flex";
    modalImg.src = this.src;
  }
}

// 閉じるボタンがクリックされたらモーダルを閉じる
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// モーダルの背景がクリックされたらモーダルを閉じる
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
