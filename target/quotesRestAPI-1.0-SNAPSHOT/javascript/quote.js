// receives JSON data from API
//
//var jsonData = $(document).ready(function(){
//    var url = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";
//    $.getJSON(url).done(function(data){
//      $.each(data, function(key, value){
//        console.log(value);
//        $('h2.head').html(function(){
//        return value;
//        });
//      	$('li:first').before('<li>' + value + '</li>');
//    });
//  });
//});

//
//$('.button').on('click', function(event) {
//    var getUrl = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";
//    var jsonData = $.getJSON(getUrl).done(function(data){
//        $.each(data, function(key, value){
//          console.log(value);
//          $('h2.head').html(function(){
//                  return value;
//                  });
//          	$('li:first').before('<li>' + value + '</li>');
//        });
//      });
////    event.preventDefault();
//
//    var postUrl = "http://localhost:8080/quotesRestAPI-1.0-SNAPSHOT/rest/quote";
////    location.replace(url);
//    $.post(postUrl, jsonData, function(data){
//       console.log(data);
//    });
//
//});

$('.button').on('click', function(event) {
    var getUrl = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";
    var jsonData = $.getJSON(getUrl).done(function(data){

          console.log(data);
          $('h2.head').html(function(){
                  return data;
                  });
          	$('li:first').before('<li>' + data + '</li>');

      });

});

//$('.button').on('click', function(e){
//    $.ajax({
//    url: "https://ron-swanson-quotes.herokuapp.com/v2/quotes",
//    dataType: "json"
//    }).done(function(data){
//        console.log(data);
//        $('h2.head').html(function(){
//          return data;
//        });
//        $('li:first').before('<li>' + data + '</li>');
//    });
//
//});

//$('.button').on('click', function(e){
//    var quote = $.ajax({
//    url: "https://ron-swanson-quotes.herokuapp.com/v2/quotes",
//    dataType: "json"
//    });

//    var postUrl = "http://localhost:8080/quotesRestAPI-1.0-SNAPSHOT/rest/quote";
//    location.replace(url);
//        $.post(postUrl, quote, function(data){
//           console.log(data);
//        });

//    $.ajax({
//        type: "POST",
//        url : "http://localhost:8080/quotesRestAPI-1.0-SNAPSHOT/rest/quote",
//        data : quote,
//        dataType: "json"
//    });
//});








