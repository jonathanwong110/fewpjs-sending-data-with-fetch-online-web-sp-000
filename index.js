// Add your code here

function submitData() {
  return fetch('https://anapioficeandfire.com/api/books')
    .then(function(response) {
      return response.json();
    })
    .then(function(json){
      renderBooks(json);
    });
}