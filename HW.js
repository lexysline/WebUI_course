//------------------- -------------------
//------------ task 1
//------------------- -------------------

function sumOfMin(arr) {

  if (!(Array.isArray(arr)) || !arr.length) return 'ERR::Check an Array!';
  // const res = [];
  // for (let i = 0; i <= arr.length - 1;  i+=1){
  //   res.push(Math.min(...arr[i]));
  // }
  // return res.reduce((a, c) => a + c, 0);
  return arr.map(i => Math.min(...i)).reduce((a, c) =>  a + c, 0 );
}

console.log(sumOfMin([[5, 4, 6, 7], [7], [20, 21, 34, 56, 100]]));
console.log(sumOfMin(""));

//------------------- -------------------
//------------ task 2
//------------------- -------------------

function twoOldestAges(arr) {
  if (!(Array.isArray(arr)) || (arr.length < 2)) return 'Check an Array!';

  return arr.sort((a, b) => (a - b)).slice(-2);
}

console.log(twoOldestAges([1, 2, 10, 8]));
console.log(twoOldestAges({}));

//------------------- -------------------
//------------ task 3
//------------------- -------------------

function shortestWord(str) {
 
  if (typeof (str) !== 'string' || str === "") return 'Check your string.';

  const result = Math.min(...str.split(' ').map((word) => word.length));
  return result;
}

console.log(shortestWord("Lets all go on holiday somewhere very cold")); 
console.log(shortestWord([]));
