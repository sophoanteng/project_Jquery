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
       getStep(item.instructions);
      }
  });
}
function showRecipe(name, img) {
  var result = "";
  result += `
      <div class="row">
        <div class="col-3"></div>
        <div class="col-3"><h2>${name}</h2></div>
        <div class="col-3"><img src= "${img}" width ="100%"></div>
        <div class="col-3"></div>
      </div>
  `;
  $('#recipe').html(result);
}
function getSelection (add){
  var store = "";
  add.forEach(item => {
     store +=`
      <tr>
          <td><img src="${item.iconUrl}" width="30%" ></td>
          <td>${item.name}</td>
          <td>${item.quantity}</td>
          <td>${item.unit}</td>
      </tr>
     `;
  });
  $('#show').html(store);
}
function getStep(step){
let cutStep = step.split('<step>');
  var resultStep ="";
   for(let i=1; i<cutStep.length; i++){
     resultStep +=`
     Step ${i} :
       ${cutStep[i]}
       <br>
     `;
   }
  $('#step').html(resultStep);
}


$(document).ready(function() {
  $('#minus').on('click', function() {
      var members = $('#member').val();
      decreaseMember(members);
  });
  $('#add').on('click', function() {
      var members = $('#member').val();
      increaseMember(members);
  });
});

function decreaseMember (minus) {
  var member = parseInt(minus) - 1;
  if(member >= 0) {
    $('#member').val(member);
    compute(member);
  }
}

function increaseMember(add) {
  var members = parseInt(add) + 1;
  if(members <= 15) {
      $('#member').val(members);
      compute(members); 
  }
}








