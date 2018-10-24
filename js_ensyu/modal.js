function showModal(){
  console.log("おやすみなさい");
  document.querySelector("#modal").innerHTML="押された"
}
function changeRed() {
  document.querySelector("#modal").style.background="red"
}

function changeYellow() {
  document.querySelector("#modal").style.background="yellow"
}

function changeGreen() {
  document.querySelector("#modal").style.background="green"
}

function appendCircle() {
  document.querySelector("#modal").innerHTML=
      document.querySelector("#modal").innerHTML+"〇"



}

function appendCross() {
  document.querySelector("#modal").innerHTML=
      document.querySelector("#modal").innerHTML+"✖"

}

function plusOne() {
  document.querySelector("#modal").innerHTML=
      Number(document.querySelector("#modal").innerHTML)+1;
}

function plusFive() {
  document.querySelector("#modal").innerHTML=
      Number(document.querySelector("#modal").innerHTML)+5;
}

function plusTen() {
  document.querySelector("#modal").innerHTML=
      Number(document.querySelector("#modal").innerHTML)+10;
}

function test(num1, num2, num3) {
  console.log(num1+num2);
  console.log(num1+num3);
  console.log(num2);
}

test(10,20,30);
test(1,2,3);

function calc(a, b, callback){
  console.log(`デバッグ: a: ${a}, b: ${b}`);
  callback(a, b);
}

function add(a, b){
  return a + b;
}

function sub(a, b){
  return a - b;
}

function multiply(a, b){
  return a * b;
}

console.log(`足し算: ${calc(1, 2, add)}`);
console.log(`引き算: ${calc(5, 2, sub)}`);
console.log(`かけ算: ${calc(3, 9, multiply)}`);