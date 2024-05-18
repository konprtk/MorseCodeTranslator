const morseCode = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  0: "-----",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
};

const input = document.querySelector("#input");
const encodeBtn = document.querySelector("#encodeBtn");
const decodeBtn = document.querySelector("#decodeBtn");
const output = document.querySelector("#output");

const encode = () => {
  const text = input.value.toUpperCase();
  let morse = "";
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (morseCode[char]) {
      morse += morseCode[char] + " ";
    } else if (char === " ") {
      morse += "/ ";
    } else {
      morse += "? ";
    }
  }
  output.value = morse.trim();
};

const decode = () => {
  // work in progress
};

encodeBtn.addEventListener("click", encode);
decodeBtn.addEventListener("click", decode);
