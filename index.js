// Add your code here

function submitData() {
  return fetch('http://localhost:3000')
    .then(function(response) {
      return response.json();
    })
    .then(function(json){
      renderBooks(json);
    });
}