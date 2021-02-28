const allDice = [
  {
    name: "⚀",
    value: 1,
  },
  {
    name: "⚁",
    value: 2,
  },
  {
    name: "⚂",
    value: 3,
  },
  {
    name: "⚃",
    value: 4,
  },
  {
    name: "⚄",
    value: 5,
  },
  {
    name: "⚅",
    value: 6,
  },
];

const diceForm = document.querySelector("form");
const p1 = document.querySelector("#dice-para");
const p2 = document.querySelector("#sum-para");

const diceRoll = (event) => {
  event.preventDefault();
  p1.textContent = "";
  let sum = 0;
  const numberInput = document.querySelector("#dice-input");
  for (let i = 0; i < numberInput.valueAsNumber; i++) {
    const randomDice = Math.floor(Math.random() * allDice.length);
    p1.textContent += allDice[randomDice].name;
    sum += Number(allDice[randomDice].value);
    p2.textContent = `Sum = ${sum}`;
  }

  const ul = document.querySelector("ul");
  const li = document.createElement("li");
  li.textContent = `${p1.textContent} = ${sum}`;
  ul.appendChild(li);
};

diceForm.addEventListener("submit", diceRoll);
