const action = prompt("What do you want to do?", "Add, sub, mult, div");
const actionNormalized = action.toLowerCase();
const answr1 = prompt("What is your first number?");
const answr2 = prompt("What is your second number?");
const num1 = Number.parseFloat(answr1);
const num2 = Number.parseFloat(answr2);

switch (actionNormalized) {
  case "add": 
    let sum = num1 + num2;
    alert(`${num1}+${num2}=${sum}`)
  break;

  case "sub":
    let sub = num1 - num2;
    alert(`${num1}-${num2}=${sub}`)
  break;

  case "mult":
    let mult = num1 * num2;
    alert(`${num1}*${num2}=${mult}`)
  break;

  case "div":
    let div = num1 / num2;
    alert(`${num1}/${num2}=${div}`)
  break;

  default:
    alert("Sorry we don't have such options yet :)")
}