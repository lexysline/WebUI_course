
// MAP functionality
function mapFun(arr) {
  return arr.reduce((ac, el) => {
    return ac.concat(el[0]);
  }, [])
};

console.log(mapFun(["Яблоко", "Банан", "Ананас"]));

// FILTER functionality
function filterFun(arr) {
  return arr.reduce((ac, el) => {
    return el[0].toLowerCase() === 'а' ? ac.concat(el) : ac;
  }, [])
};

console.log(filterFun(["Яблоко", "Банан", "Ананас"]));

// FOREACH functionality
function forEachFun(arr) {
  return arr.reduce((_, el, index, arr) => {
     arr[index] = `${index + 1} : ${el}`;
  });
};

console.log(forEachFun(["Яблоко", "Банан", "Ананас"]));