$(document).ready( () =>{
  $('#recipe').on('change', ()=>{
    var fruit = $('#recipe').val();
    choose(fruit);
    requestAPI();
})
})
     var choose = (data)=>{
       switch(parseInt(data)) {
         case 1:
         getNomPom();
         break;
         case 2:
         getAvocado();
         break;
        }
      }
      // get apple
      var getNomPom = () =>{
        var apple = "Nom Pom";
        printOut(apple);
      }
      var getAvocado = () =>{
        var coconut = "Avocado Shake (Toek Kalok)";
        printOut(coconut);
      }
      var printOut = (out) =>{
        $('#done').html(out);
      }

      var requestAPI = () =>{
        var url = "https://raw.githubusercontent.com/radytrainer/test-api/master/test.json";
          $.ajax({
            url: url,
            dataType:'JSON',
            success: function(data){
              var rest ="";
              data.recipes.forEach(item =>{
                if(item.id == 1){
                rest +=`
                   <div class="card">
                    <img src="${item.iconUrl}">
                   </div>
                `;
                }
              })
              $('#done').append(rest);
            }
          })
   } 

