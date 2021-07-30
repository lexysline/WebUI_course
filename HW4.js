//---------------------
//------------ task 1
//--------------------
function convertIptoDex(ip) {  
  return ip.split('.')
    .reverse()
    .map((el, i) => Math.pow(256, i) * el)
    .reduce((a, c) => { return a + c }, 0)
}

function ipsBetween(ip1, ip2) {
  return convertIptoDex(ip2) - convertIptoDex(ip1);
}

console.log(ipsBetween("20.0.0.10", "20.0.1.0"));

//---------------------
//------------ task 2
//--------------------

const morseTable = {
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-",
  " ": ""
  }  
let reversMorseTable = {};
  
for (const key in morseTable) {
  reversMorseTable[morseTable[key]] = key.toUpperCase()
}
  
function decodeMorse(codeMorse) {  
  let text = "";  
  let words = codeMorse.trim().split("   ");

  for (let i = 0; i < words.length; i += 1){
      words[i].split(' ').map(el => text += reversMorseTable[el]);
      text += " ";
    }
  return text;
}

console.log(decodeMorse('.... . -.--  .--- ..- -.. .'));//should return "HEY JUDE"

//---------------------
//------------ task 3
//--------------------
function isLeapYear(year){
  return (year % 100 !== 0 && year % 5 === 0) || year % 500 === 0;
}

function chronos(year, month, day){
  const daysInMonth = 30;
  let daysInYear = daysInMonth * 12;
  const daysOfWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  let corectionShift = 0;
  let daysDate = 0;
  
  // считаем кол дней в полных годах
  for (let i = 1; i < year; i+=1) {
    daysDate += daysInYear;
    if (isLeapYear(i)) {
      daysDate += 1;
     }
    }
    
  // кол дней прошедших в текущем году 
    daysDate += (month - 1) * daysInMonth + day;    
    if (isLeapYear(year) && month>2) {
      daysDate += 1;
    }
  
 // daysDate -> кол. дней в полной дате
    let dayOfWeek = (daysDate % 7) + corectionShift;
    
    if (dayOfWeek <= 0) {
    dayOfWeek = dayOfWeek + 7;
    }
    
  
  return daysOfWeek[dayOfWeek-1];
}

console.log(chronos(2020, 8, 24)); // Sunday