// Add your code here

let formData = {
  name: "Steve",
  email: "steve@steve.com"
};
 
let configObj = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify(formData)
};

function submitData(name, email) {
  then(function(response) {
    return response.json();
  })
  .then(function(object) {
    console.log(object);
  })
  .catch(function(error) {
    console.log(error.message);
  });
}