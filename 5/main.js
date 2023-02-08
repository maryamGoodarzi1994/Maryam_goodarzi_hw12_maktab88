const fetch =require("node-fetch");

const getUserListPerPage = () => {

    fetch(
        "https://reqres.in/api/users?page=1"
      )
        ((response) => response.json())
        ((result) => {
            console.log(result);
        })
};
getUserListPerPage();
//   $.ajax({
//     methode: "GET",
//     url: "https://reqres.in/api/users?page=1",
//     async: false,
//     success: function (response) {
//       if (
//         response.data &&
//         Array.isArray(response.data) &&
//         response.data.length
//       ) {
//         userList = response.data;
//         totalPage = response.total_pages;
//       }
//     },
//     error: function (err) {
//       console.log(err);
//     },
//   });
