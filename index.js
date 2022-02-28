console.log("--------- 1 --------- \n");

const great = (array, number) => {
  let result = array.filter((i) => i > number);
  return result;
};
console.log(great([3, 4, 5], 4), "\n");
console.log(great([10, 20, 30], 12), "\n");
console.log(great([0, 10, 3], 4), "\n");

console.log("--------- 2 --------- \n");

const longestWord = (sentens) => {
  let senten = sentens.split(" ");
  // peyda mikone tole har khone az arrayeye senten
  const lenghtStrArray = senten.map((item) => item.length);
  // bozorgtarin tole kalamaro baram peyda mikone
  //... copye gerefte az lenghtStrArray
  const maxLenghts = Math.max(...lenghtStrArray);
  // peyda mikone on kalame ro ke bozorgtarin tolo dare
  const result = senten.find((item) => item.length == maxLenghts);
  return result;
};
console.log(longestWord("this is a web development course"), "\n");

console.log("--------- 3 --------- \n");

const reverses = (number) => {
  let num = String(number).split("").reverse().join("");
  return Number(num);
};
console.log(reverses(34572), "\n");

console.log("--------- 4 --------- \n");

const Vowels = (str) => {
  const count = str.match(/[aeiou]/gi).length;
  return count;
};
console.log(Vowels("this is a string"), "\n");

console.log("--------- 5 --------- \n");

const missingNumber = (array) => {
  let missing;
  for (let i = 1; i <= 10; i++) {
    if (array.indexOf(i) < 0) {
      missing = i;
    }
  }
  return missing;
};

console.log(missingNumber([1, 2, 3, 4, 6, 7, 8, 9, 10]), "\n");
console.log(missingNumber([7, 2, 3, 6, 5, 9, 1, 4, 8]), "\n");
console.log(missingNumber([10, 5, 1, 2, 4, 6, 8, 3, 9]), "\n");

console.log("--------- 6 --------- \n");

const Cubed = (array) => {
  let aarr = array.map((item) => item * item * item);
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += aarr[i];
  }
  return sum;
};
console.log(Cubed([1, 5, 9]), "\n");
console.log(Cubed([2]), "\n");
console.log(Cubed([]), "\n");

console.log("--------- 7 --------- \n");

const dictionary = (find, array) => {
  let result = array.filter((item) => item.startsWith(find));
  return result;
};
console.log(dictionary("bu", ["button", "breakfast", "border"]), "\n");
console.log(
  dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]),
  "\n"
);
console.log(
  dictionary("beau", ["pastry", "delicious", "name", "boring"]),
  "\n"
);

console.log("--------- 8 --------- \n");

const evenNumber = (number) => {
  let result = [];
  for (let i = 2; i <= number; i = i + 2) {
    result.push(i);
  }
  return result;
};
console.log(evenNumber(8), "\n");
console.log(evenNumber(4), "\n");
console.log(evenNumber(2), "\n");

console.log("--------- Bonus --------- \n");

/* const alphabeticalOrder = (str) => {

}; */
