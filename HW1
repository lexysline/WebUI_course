
//-------------------------------------------------
//------------    task 1
//-------------------------------------------------

const length = '20';
const height = '1.8';
const width = '4.5';
const canVolume = 16;

function culcAmountOfPaint(l, h, w) {
 
  if (!(Number(l) && Number(h) && Number(w))) return new Error ('Please, enter correct data.')
  
  let squareOfWalls = ((l * h) + (h * w)) * 2;

  return `Number of paint cans: ${Math.ceil(squareOfWalls/canVolume)}`;
}

console.log(culcAmountOfPaint(length, height, width))

//-------------------------------------------------
//------------    task 2
//-------------------------------------------------

function isValidNum(el) {  
  el = Number(el);
 
  if (!el || !(el > 0 && el < 100)) {
    return false;
  } else {
    return true;
  };
}

function bestValue(A1, A2, A3, ...pots) {

  const bestPrice = [A1, A2, A3].sort((a, b) => b - a);
  const bestPot = pots.sort((a, b) => b - a);

  let sum = 0;

  for (let i = 0; i <= bestPot.length - 1; i++){

    if (!isValidNum(bestPrice[i])
      || !isValidNum(bestPot[i]))
      return new Error('Check your value !')
    
    //- неявное приведение 
    sum = sum + bestPrice[i] * bestPot[i];
  }
  return ` ${ sum } рублей`;
}

console.log(bestValue('5','1','8.5','2','4','99'))

//-------------------------------------------------
//------------    task 3
//-------------------------------------------------

//- явное приведение через Number('')
function checkIsNum(el) {   
  if (isNaN(Number(el))) 
  return new Error ('Check your ticket number!')  ;
}

//- неявное приведение через умножение
function isTicketWinning([...str]) {  
  const half1 = str.slice(0, 3).reduce((acc, curr) => {
    checkIsNum(curr);
    return acc + (curr * 1);
  }, 0);

  const half2 = str.slice(3,6).reduce((acc, curr) => {
    checkIsNum(curr);
    return acc + (curr*1);
  }, 0)
 
  return half1 === half2 ? "yes" : "no";
}

console.log(isTicketWinning('232511'))
