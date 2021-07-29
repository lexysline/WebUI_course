
//------------------- -------------------
//------------ task 1
//------------------- -------------------
function wordOrder(str) {
  if (!str) return str;

  let arOfStr = str.split(" ");
  const obj = {};
  
  for (let val of arOfStr) {
    let justNum = val.match(/\d/)[0]
    obj[justNum] = val;
  }
  
  return Object.values(obj).join(' ');
}
console.log(wordOrder("is2 Thi1s T4est 3a"));


//------------------- -------------------
//------------ task 3
//------------------- -------------------


function findChair(arr, chairs) {
  if (!chairs) return "Game on.";
  console.log(arr);
  const resul = [];
  for (let i = 0; i < arr.length; i += 1){
    console.log(arr[i]);
    let avalibleSeatsInRoom = arr[i][1] - arr[i][0].length;
    if (avalibleSeatsInRoom > 0) {
      resul.push(avalibleSeatsInRoom);
    }   
    
 

  }
  console.log(chairs-1);
  console.log(resul);
  return resul;
}

console.log(findChair([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9]], 4));
console.log(findChair([['XXX', 1], ['XXXXXX', 6], ['X', 2], ['XXXXXX', 8], ['X', 3], ['XXX', 1]], 5));
console.log(findChair([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 0));
console.log(findChair([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 4));

