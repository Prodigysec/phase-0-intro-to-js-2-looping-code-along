// Code your solutions in this file

let name = ["Guadalupe", "Ollie", "Aki"];

let occasion = "surprise";

function writeCards(name, occasion) {
  const thankyouMessage = [];
  for (let i = 0; i < name.length; i++) {
    thankyouMessage.push(
      `Thank you, ${name[i]}, for the wonderful ${occasion} gift!`
    );
  }
  return thankyouMessage;
}

function countDown(number) {
  for (let i = number; i >= 0; i--) {
    console.log(i);
  }
}