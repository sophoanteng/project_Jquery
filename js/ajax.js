function getUrl() {
  var url = "https://raw.githubusercontent.com/radytrainer/test-api/master/test.json";
  return url;
}
$(document).ready(function() {
  getApi();
  $('#sert').on('change',function(){
      var recipeId = $('#sert').val();
     eachValue(recipeId);
  });
});
function getApi() {
  $.ajax({
      dataType: 'json',
      url: getUrl(),
      success:(data) => takeAll(data.recipes),
      error: () => console.log("Can not use data"),
      
  });
}
var allData = [];
function takeAll(recipe) {
  allData = recipe;
  var option = "";
  recipe.forEach(item => {
     option += `<option value = "${item.id}">${item.name}</option>`;
  });
  $('#sert').append(option);
}
function eachValue(id){
  allData.forEach(item => {
      if(item.id == id){
       showRecipe(item.name, item.iconUrl);  
       getSelection(item.ingredients);
      }
  });
}
function showRecipe(name, img) {
  var result = "";
  result += `<img src= "${img}" width ="90%">
  <h2>${name}</h2>
  `;
  $('#recipe-result').html(result);
}
function getSelection (add){
  var store = "";
  add.forEach(item => {
     store +=`
      <tr>
          <td><img src="${item.iconUrl}" width = "80" ></td>
          <td>${item.name}</td>
          <td>${item.quantity}</td>
          <td>${item.unit}</td>
      </tr>
     `;
  });
  $('#show').html(store);
}










