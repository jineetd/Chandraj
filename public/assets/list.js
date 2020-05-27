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

  $('li').on('click', function(){
      var item = $(this).text().replace(/ /g, "-");
      $.ajax({
        type: 'DELETE',
        url: '/todo/' + item,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });
  });

});
