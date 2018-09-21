// Built by LucyBot. www.lucybot.com
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "270119312d3f42e6bc0f872ecc751104"
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {


    // var article = $("#searchInput").text();

    // var results = result.data;


    // personImage.attr("src", results[i].images.fixed_height.url);

    for (var i = 0; i < results.length; i++) {

        var article = results.docs[i];

        var articleImage = $("<img>");
        articleImage.attr("src", result.docs[i].web_url)

        console.log()


    }



  console.log(result);
}).fail(function(err) {
  throw err;
});


