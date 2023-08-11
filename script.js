function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function randomenumber() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let randomNumber = getRandomNumber(num1, num2);
    document.getElementById("result").innerHTML = randomNumber;
  }
  function click1(){
    document.getElementById("num1").value=""
  }
  function click2(){
    document.getElementById("num2").value=""
  }