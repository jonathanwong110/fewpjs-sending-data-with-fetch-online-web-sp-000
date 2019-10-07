// Add your code here

function submitData("http://localhost:3000/users", ) {
  fetch("http://localhost:3000/users", configObj)
  .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    console.log(object);
  });
}