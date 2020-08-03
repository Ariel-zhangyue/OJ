// 0 => A, 1 => B, 25 => Z, 26 => AA, 27 => AB, ..., 52 => BA
function toAlphabetical(num) {
  let res = '';
  let i = num;
  while (Math.floor(i / 26) > 0) { 
    res = numToStr(i % 26) + res;
    i = Math.floor((i - 26) / 26);
  }
  res =  numToStr(i % 26) + res;
  return res;
}


const startCode = 'A'.charCodeAt(0);
function numToStr(num) {
  return String.fromCharCode(startCode + num);
}


console.log(toAlphabetical(704));

