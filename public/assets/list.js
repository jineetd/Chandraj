$(document).ready(function(){

  $('form').on('submit', function(){

      //var item = $('form input');
      //var todo = {item: item.val()};

      var todo = {
            'item' : $('form input[name=item]').val(),
            'rate': $('form input[name=rate]').val(),
            'quantity' : $('form input[name=quantity]').val()
        };
      $.ajax({
        type: 'POST',
        url: '/billing',
        data: todo,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });

      return false;

  });

  /*$('table').on('click',function(){

      var item = $(this).text().replace(/ /g, "-");
      console.log(item);
      $.ajax({
        type: 'DELETE',
        url: '/billing/' + item,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });
  });*/
  //var table = $('#user');
    $('#user tbody').on('click', 'tr', function () {
        var arr=$(this).closest("tr").get(0).innerText.split('\t');
        var item=arr[0];
        var rate=arr[1];
        //console.log(item);
        $.ajax({
          type: 'DELETE',
          url: '/billing/' + item,
          success: function(data){
            //do something with the data via front-end framework
            location.reload();
          }
        });
    });

});
