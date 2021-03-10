
$('#showBtn').on('click', function(event) {
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

        $('h5.randomQuote').html(function(){
           return data;
        });
          console.log(data);

        $.each(data, function(key, value){
            $('ol.quote').append('<li>' + value + '</li>');
        });
    });

});

