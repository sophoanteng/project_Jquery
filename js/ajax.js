$(document).ready(function(){
  takeAPI();
  $('#sert').on('change', () =>{
    var sert = $('#sert').val();
    getRecipe(sert);
  })
});
function takeAPI() {
  var url = "https://raw.githubusercontent.com/radytrainer/test-api/master/test.json";
$.ajax({
    dataType:'JSON',
    url: url,
    success: (data) =>chooseRecipe(data.recipes),
    error:() => console.log("Can not get data"),
})
}
function chooseRecipe(done){
var option = "";
done.forEach(item =>{
    option +=`<option value="${item.id}">${item.name}</option>`;
});
$('#sert').append(option);
}
