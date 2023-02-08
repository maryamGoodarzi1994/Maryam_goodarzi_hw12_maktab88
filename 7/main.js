const fs = require("fs");

const readFile = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf8", (err, data) => {
      if (!!err) return reject(err);
      resolve(data);
    });
  });
};

const mapData = (names, numbers) => {
  const name = names.split("\n");
  const number = numbers.split("\n");
  const splitedNames = name.map((item) => item.split("-"));
  const splitedNumbers = number.map((item) => item.split("-"));
  let arrOfNames = [];
  let arrOfNumbers = [];
  let arrOfUsers = new Array(name.length).fill(0)
  for (let i = 0; i < splitedNames.length; i++) {
  
    for (let j = 0; j < splitedNumbers.length; j++) {
      if (splitedNames[i][0] == splitedNumbers[j][0]) {
        arrOfUsers[i]++
        arrOfNumbers.push(splitedNumbers[j][1])
      }
    }
  }
  console.log(arrOfNames,arrOfNumbers);
  console.log(arrOfUsers);
};
(() => {
  let names = "";
  let numbers = "";
  readFile("names.txt")
    .then((data) => {
      names = data;
      return readFile("numbers.txt");
    })
    .then((data) => {
      numbers = data;
      mapData(names, numbers);
    })
    .catch((err) => console.log(err));
})();
