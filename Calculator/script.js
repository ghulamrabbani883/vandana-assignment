const numbers = document.querySelectorAll(".number");
const answer = document.querySelector(".answer");
const clear = document.querySelector(".ac");

let answerText = "";

clear.addEventListener("click", () => {
  answerText = "";
  answer.innerHTML = answerText;
});

numbers.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    let current = e.target.innerHTML;
    if(current == "="){
      const ans = eval(answerText)
      answer.innerHTML = ans
      answerText = ans
    }else{
      answerText = answerText + current
      answer.innerHTML = answerText
    }
  });
});

