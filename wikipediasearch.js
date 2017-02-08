//help: https://www.youtube.com/watch?v=O4yAHlE3HNs

$(document).ready(function() {
    $('.searchEnter').keydown(function(event) {
        //type ENTER
        if (event.keyCode == 13) {
            wikiAPI();
         }
    });

    $('#search-button').on('click', function(){
        wikiAPI();
    });
});

function wikiAPI (){
    var searchText = $('#search-text').val();
    var url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + searchText + '&format=json&callback=?';
    console.log(url);
    $.ajax( {
        url: url,
        type: 'GET',
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        async: false,
        success: function(data, status, jqXHR) {
            // do something with data
            console.log(data);
            $('#results').html('');
            for (var i=0; i< data[1].length ; i++){
                var row = '<div class="row"><h2><a href="' + data[3][i] + '" target="_blank">' + data[1][i] +'</a></h2><p>'+ data[2][i]+ '</p></div>';
                $('#results').prepend(row);
            }
        }
    })
    .done(function(){
        console.log("success");
    })
    .fail(function(){
        console.log("error");
    })
    .always(function(){
        console.log("compete");
    });
}
