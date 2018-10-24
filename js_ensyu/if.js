
function checkNumber() {
  if(Number(document.querySelector('#num').value)>10){
    window.alert("true");
  }
  else{
    window.alert("false");
  }
}

function checkUserInput(){
  if(document.querySelector('#user_input').value=="隣の客はよく柿食う客だ") {
    window.alert("true");
  }
  else{
    window.alert("false");
  }
}

function checkAge() {
  let check= document.querySelector("#age");
  let answer=document.querySelector("#answer");
  if(check.value>=65){
    answer.innerHTML="高齢者";
  }
  else if(check.value>=20){
    answer.innerHTML="成人";
  }
  else if(check.value>0){
    answer.innerHTML="未成年";
  }
  else{
    answer.innerHTML="エラー";
  }
}

function checkYear() {
  let year=document.querySelector("#year");
  let number=Number(year.value);
  let answer=document.querySelector("#answer");
  if(number % 400 == 0){
    answer.innerHTML="潤年";
  }
  else if(number%100==0){
    answer.innerHTML="平年";
  }

  else if(number%4==0){
    answer.innerHTML="潤年";
  }

  else {
    answer.innerHTML="平年";
  }
}