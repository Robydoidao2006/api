

    // Click event will trigger the AJAX call
    $('button').on('click', function (event){
        $('#photoDiv').empty(); // empties the photoDiv on click/enter.

        event.preventDefault();

        // API key
        var APIKey        = '&api_key=a4a481f4f29aab2f7d12b1c3b9a16886';
        // var Secret        = '748de40600fa779a';
        // Search Criteria 
        var photoQuantity = '&per_page=' + 25;
        var safeSearch    = '&safe_search=' + 1; // 1 for safe - 2 for moderate - 3 for restricted.
        var userSearch    = '&text=' + $('#userSearch').val().trim();
        var method        = '?method=flickr.photos.search';
        var format        = '&format=json&nojsoncallback=1'
        var sort          = '&sort=relevance'; // Returns relevant search

        // Public API url plus search
        var queryURL = 'https://api.flickr.com/services/rest/' + method +''+ APIKey +''+ sort +''+ userSearch +''+ safeSearch +''+ photoQuantity +''+ format +'';

        // AJAX call.
        $.ajax({
            url    : queryURL,
            method : 'GET',
        }).done(function(response) { // AJAX response.
                $.each(response.photos.photo, function(i, value){  
                    
                    // Needed values to obtaing photos
                    var serverId = value.server;
                    var farmId   = value.farm;
                    var secret   = value.secret;
                    var id       = value.id;
                   // Placing the photo inside a div element
                    $("#photoDiv").prepend('<img src="https://farm' + farmId + '.staticflickr.com/' + serverId + '/' + id + '_' + secret + '.jpg"/>');

                }); 
        
        });// Response close.

    });// Event close.
   






  