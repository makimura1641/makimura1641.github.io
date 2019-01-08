//click イベントで発火
document.body.addEventListener("click", drop, false);

function drop(e) {

  //座標の取得
  var x = e.pageX;
  var y = e.pageY;

  //しずくになるdivの生成、座標の設定
  var sizuku = document.createElement("div");
  sizuku.style.top = y + "px";
  sizuku.style.left = x + "px";
  document.body.appendChild(sizuku);

  //アニメーションをする className を付ける
  sizuku.className = "sizuku";

  //アニメーションが終わった事を感知してしずくを remove する
  sizuku.addEventListener("animationend", function() {
    this.parentNode.removeChild(this);
  }, false);
}



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


