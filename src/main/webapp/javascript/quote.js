
$('.button').on('click', function(event) {
    var getUrl = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";
    $.getJSON(getUrl).done(function(data){

        var str = '';
        var i;
        for(i = 0; i< data.length; i++){
        str = str + data[i];
        }

        $.ajax({
                type: "POST",
                url : "http://localhost:8080/quotesRestAPI-1.0-SNAPSHOT/rest/quote/randomQuote",
                data : JSON.stringify(str),
                dataType: "json",
                contentType : 'application/json'
            });

        $('h2.head').html(function(){
           return data;
        });
          console.log(data);
    });
});

//$('.button').on('click', function(e){
//    var dataJson = $.ajax({
//                    type: "GET",
//                    url: "https://ron-swanson-quotes.herokuapp.com/v2/quotes",
//                    dataType: "json"
//                 });
//
//    var data =
//    $.ajax({
//        type: "POST",
//        url : "http://localhost:8080/quotesRestAPI-1.0-SNAPSHOT/rest/quote/randomQuote",
//        data : data,
//        dataType: "json"
//    });
//});

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
//    var jsonData = {"1" : "Hello"};
//    event.preventDefault();
//
//    var postUrl = "http://localhost:8080/quotesRestAPI-1.0-SNAPSHOT/rest/quote/randomQuote";
////    location.replace(url);
//    $.post(postUrl, jsonData, function(data){
//       console.log(data);
//    });
//
//});








