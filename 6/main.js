// const userData = require("./user-data.json");
const { readFile, writeFile } = require("fs");

const validation = ({
  uid,
  firstname,
  lastname,
  city,
  postalCode,
  phoneNumber,
  position,
}) => {
  if (!uid || isNaN(Number(uid))) throw new Error("uid should be a number");
  //   if (!(firstname?.trim())) throw new Error("firstname should be a string");
  if (!firstname.trim()) throw new Error("firstname should be a string");
  if (!lastname.trim()) throw new Error("lastname should be a string");
  if (!city.trim()) throw new Error("city should be a string");
  if (!postalCode || isNaN(Number(postalCode)))
    throw new Error("postalCode should be a number");
  if (!phoneNumber || isNaN(Number(phoneNumber)))
    throw new Error("phoneNumber should be a number");
  if (!position.trim()) throw new Error("position should be a string");
  return true;
};
const read = () => {
  return new Promise((resolve, reject) => {
    readFile("./user-data.json", "utf8", (err, data) => {
      if (!!err) return reject(err);
      resolve(JSON.parse(data));
    });
  });
};
const write = (updatedData) => {
  return new Promise((resolve, reject) => {
    writeFile("./user-data.json", updatedData, (err) => {
      if (!!err) return reject(err);
      resolve();
    });
  });
};

const add = () => {
  const newUser = {
    uid: 2233,
    firstname: "mary",
    lastname: "goody",
    city: "tehran",
    postalCode: "2345672345",
    phoneNumber: "03111234234",
    position: "web developer",
  };
  if (!validation(newUser)) return "invalid user data";
  read()
    .then((data) => {
      data.push(newData);
      const updatedData = JSON.stringify(currentData);

      return write(updatedData);
    })
    .then(() => {
      console.log("is written successfully!");
    })
    .catch((err) => err.message);
};
const update = (uid, newUser) => {
  read()
    .then((data) => {
      const consideredUser = data.find((user) => user.uid == uid);
      if (!consideredUser) throw new Error("403: user is not found");
      const updatedData = JSON.stringify(
        data.map((user) => {
          return user.uid !== uid ? user : newUser;
        })
      );

      return write(updatedData);
    })
    .then(console.log("is written successfully!"))
    .catch((err) => console.log(err.message));
};
const deleteUser = (uid)=>{
read().then(data => {
  const updatedUser = JSON.stringify(data.filter(user => user.uid !== uid))
  return write(updatedUser)
}).then(console.log("is written successfully!")).catch(err => console.log(err.message))
}
const newUser = {
  uid: 112233,
  firstname: "mary",
  lastname: "good",
  city: "tehran",
  postalCode: "111",
  phoneNumber: "03111234234",
  position: "web developer",
};
console.log(deleteUser(112233));
