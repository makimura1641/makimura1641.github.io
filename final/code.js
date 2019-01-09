
document.body.addEventListener("click", drop, false);

function drop(e) {

  var x = e.pageX;
  var y = e.pageY;

  var sizuku = document.createElement("div");
  sizuku.style.top = y + "px";
  sizuku.style.left = x + "px";
  document.body.appendChild(sizuku);

  sizuku.className = "sizuku";

  sizuku.addEventListener("animationend", function() {
    this.parentNode.removeChild(this);
  }, false);
}


function topButton(elmId, duration) {

  //トップに戻るボタンの要素の取得
  var topButton = document.getElementById(elmId);

  topButton.addEventListener("click", function(e){

    //デフォルトの動作の制御
    e.preventDefault();

    var begin = new Date() - 0;
    var yOffset = window.pageYOffset;
    var timer= setInterval(function() {
      var current = new Date() - begin;
      if (current > duration) {
        clearInterval(timer);
        current = duration;
      }

      //スクロール位置を単位時間で変更する
      window.scrollTo(0, yOffset * (1 - current / duration))
    }, 10);
  }, false)

}

// 使用例 トップに戻るボタンの id とアニメーションにかかる時間をミリ秒で指定
topButton("return-top", 300)


var gYear = 2019,
    gMonth = 2,
    gDay = 9,
    gHour = 0,
    gMinute = 0,
    gSecond = 0;

var goal = new Date(gYear, gMonth-1, gDay, gHour, gMinute, gSecond);

var currentTime, period,
    cDay, cHour, cMinute, cSecond,
    insert = "";

function countdown() {

  currentTime = new Date();
  period = goal.getTime() - currentTime.getTime();

  if(period >= 0) {
    cDay = Math.floor(period / (1000 * 60 * 60 * 24));
    period -= (cDay * (1000 * 60 * 60 * 24));

    cHour = Math.floor(period / (1000 * 60 * 60));
    period -= (cHour * (1000 * 60 * 60));

    cMinute = Math.floor(period / (1000 * 60));
    period -= (cMinute * (1000 * 60));

    cSecond = Math.floor(period / (1000));
    period -= (cSecond * (1000));

    cFlame = Math.floor(period / (10));

    insert = "";
    insert += '<span class="d">' + cDay + '</span>' + "日";
    insert += '<span class="h">' + cHour + '</span>' + ":";
    insert += '<span class="m">' + cMinute + '</span>' + ":";
    insert += '<span class="s">' + cSecond + '</span>' + ":";
    insert += '<span class="f">' + cFlame + '</span>' + "";
    document.getElementById('countdown-unit').innerHTML = insert;

    setTimeout(countdown, 10);

  } else {
    document.getElementById('countdown-unit').innerHTML = 'Time Up';
  }
}

countdown();


