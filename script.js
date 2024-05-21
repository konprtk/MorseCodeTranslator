const TextToMorse = {
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

const morseToText = {
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "/": " ", // Assuming "/" is used to represent space between words in Morse code
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
    if (TextToMorse[char]) {
      morse += TextToMorse[char] + " ";
    } else if (char === " ") {
      morse += "/ ";
    } else {
      morse += "? ";
    }
  }
  output.value = morse.trim();
  input.value = "";
};

// const decode = () => {
//   const morse = input.value;
//   let text = "";

//   for (let i = 0; i < morse.length; i++) {
//     const code = morse[i];
//     if (TextToMorse[code]) {
//       text += TextToMorse[code];
//     }
//   }
//   output.value = text.trim();
// };

const decode = () => {
  const morse = input.value.trim();
  let text = "";

  const parts = morse.split(" ");
  for (let i = 0; i < parts.length; i++) {
    const code = parts[i];
    if (morseToText[code]) {
      text += morseToText[code];
    } else {
      text += " "; // Add a space for unrecognized patterns or additional space
    }
  }
  output.value = text.trim();
};

encodeBtn.addEventListener("click", encode);
decodeBtn.addEventListener("click", decode);
