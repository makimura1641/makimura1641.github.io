
let tweetsHTML="<ul>";
for(let i =0; i<tweets.length;i++){
  tweetsHTML+=`<li><img src="${tweets[i].avatar}" width="50" height="50"><b>${tweets[i].name}</b> ${tweets[i].message} <i>${tweets[i].tweetedAt}</i></li>`}
  tweetsHTML +="</ul>";
document.querySelector("#answer").innerHTML =tweetsHTML;


/*function  saburou(){
  let saburouHTML="<ul>";
  for(let i=0; i<tweets.length;i++){
  if("${tweets[i].name}"==" 太郎"){
    saburouHTML+=`<li><img src="${tweets[i].avatar}" width="50" height="50"><b>${tweets[i].name}</b> ${tweets[i].message} <i>${tweets[i].tweetedAt}</i></li>`}
  };
  saburouHTML +="</ul>";
  let sabu=document.querySelector("#answer").innerHTML;
  sabu="";
  sabu=saburouHTML;
}*/
/*function doCheckAnswers() {
  document.querySelector("#answer").innerHTML="";
  let tweetsHtml = "<ul>";
  tweets.forEach(tweet => {
    console.log(tweet.name);
    if(tweet.name=="三郎BOT"){
      tweetsHTML+=`<li><img src="${tweets[i].avatar}" width="50" height="50"><b>${tweets[i].name}</b> ${tweets[i].message} <i>${tweets[i].tweetedAt}</i></li>`
  }
  });
  tweetsHTML+="</ul>";
  document.querySelector("#answer").innerHTML =tweetsHTML;
}*/

function doCheckAnswers() {
  document.querySelector("#answer").innerHTML="";
  let tweetsHTML="<ul>";
  for (let s =0; s<tweets.length;s++) {
    if(tweets[s].name=="三郎BOT"){
      console.log(tweets[s].message);
      tweetsHTML+=`<li><img src="${tweets[s].avatar}" width="50" height="50"><b>${tweets[s].name}</b> ${tweets[s].message} <i>${tweets[s].tweetedAt}</i></li>`
    }
    tweetsHTML+="</ul>"
  };
document.querySelector("#answer").innerHTML+=tweetsHTML;
}


function matchMedia() {
  document.querySelector("#answer").innerHTML="";
  let tweetsHTML="<ul>";
  for (let s =0; s<tweets.length;s++) {
    if(tweets[s].name=="次郎"){
      console.log(tweets[s].message);
      tweetsHTML+=`<li><img src="${tweets[s].avatar}" width="50" height="50"><b>${tweets[s].name}</b> ${tweets[s].message} <i>${tweets[s].tweetedAt}</i></li>`
    }
    tweetsHTML+="</ul>"
  };
  document.querySelector("#answer").innerHTML+=tweetsHTML;
}

function dataTransfer() {
  document.querySelector("#answer").innerHTML="";
  let tweetsHTML="<ul>";
  for (let s =0; s<tweets.length;s++) {
    if(tweets[s].name=="太郎"){
      console.log(tweets[s].message);
      tweetsHTML+=`<li><img src="${tweets[s].avatar}" width="50" height="50"><b>${tweets[s].name}</b> ${tweets[s].message} <i>${tweets[s].tweetedAt}</i></li>`
    }
    tweetsHTML+="</ul>"
  };
  document.querySelector("#answer").innerHTML+=tweetsHTML;
}