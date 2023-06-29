let kotae = Math.floor(Math.random() * 10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

let kaisu = 0;

function hantei() {
  let yoso = 4;
  kaisu++;

  let kaisuElement = document.getElementById('kaisu');
  let answerElement = document.getElementById('answer');
  let resultElement = document.getElementById('result');

  kaisuElement.textContent = kaisu;
  answerElement.textContent = yoso;
  resultElement.textContent = kaisu + '回目の予想: ' + yoso;

  if (kaisu >= 4) {
    resultElement.textContent += ' 答えは ' + kotae + ' でした．すでにゲームは終わっています';
    return;
  }

  if (kotae === yoso) {
    resultElement.textContent += ' 正解です．おめでとう!';
  } else {
    resultElement.textContent += ' まちがい．残念でした．答えは ' + kotae + ' です．';

    if (kotae > yoso) {
      resultElement.textContent += ' まちがい．答えはもっと大きいですよ';
    } else {
      resultElement.textContent += ' まちがい．答えはもっと小さいですよ';
    }
  }
}

hantei();


