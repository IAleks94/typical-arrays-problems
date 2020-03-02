
exports.min = function min (array = []) {
  if (array.length === 0) {
    return 0;
  }
  return array.sort((a, b) =>  a-b )[0];
  
}

exports.max = function max (array = []) {
  if (array.length === 0) {
    return 0;
  }
  return array.sort((a, b) =>  a-b )[array.length-1];
 
}

exports.avg = function avg (array = []) {
  if (array.length === 0) {
    return 0;
  }

  return (array.reduce((sum, item) => sum +=item, 0)/array.length).toFixed(2);
}




// console.log('avg: -1.8 ', avg([-9,3,4,37,17,-2,35,-18,15,36,28,39,-7,28,18,6,-37,-18,2,-15]));