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
$('#show').hide();
function eachValue(id){
  allData.forEach(item => {
      if(item.id == id){
       showRecipe(item.name, item.iconUrl);  
       getSelection(item.ingredients);
       getStep(item.instructions);
       content = item;
       older = item.nbGuests;
       $('#show').show();
      }
  });
}
function showRecipe(name, img) {
  var result = "";
  result += `
      <div class="row">
        <div class="col-3"></div>
        <div class="col-3"><h2 id="name">${name}</h2></div>
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
    <table class="table table-bordered">
    <tr>
    <td><img src="${item.iconUrl}" width="100px"></td>
    <td><p id="text">${item.name}</p></td>
    <td><p id="text">${item.quantity}</p></td>
    <td><p id="text">${item.unit[0]}</p></td>
</tr>
    </table>
     `;
  });
  $('#show').html(store);
}
function getStep(step){
let cutStep = step.split('<step>');
  var resultStep ="";
   for(let i=1; i<cutStep.length; i++){
     resultStep +=`
     <div class="card" id="color">
     <div class="card-body">
     Step ${i} :
       ${cutStep[i]}
       <br>
       </div>
       </div>
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
  if(member >= 1) {
    $('#member').val(member);
    compute($('#member').val());
  }
}
function compute(person){
  var divice;
  var getQuality;
  var display = "";
  content.ingredients.forEach(item =>{
    var {quantity, iconUrl, name, unit} = item;
    divice = quantity / older;
    getQuality = divice * person;
    display +=`
     <table class="table table-bordered">
    <tr>
    <td><img src="${iconUrl}" width="30%" ></td>
    <td><p id="text">${name}</p></td>
    <td><p id="text">${getQuality}</p></td>
    <td><p id="text">${unit[0]}</p></td>
</tr>
</table>
    `;
  })
   $('#show').html(display);
}
function increaseMember(add) {
  var members = parseInt(add) + 1;
  if(members <= 15) {
      $('#member').val(members);
      compute(members); 
  }
}
