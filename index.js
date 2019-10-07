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