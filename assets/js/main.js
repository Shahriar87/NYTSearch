// Built by LucyBot. www.lucybot.com
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
    'api-key': "270119312d3f42e6bc0f872ecc751104"
});
$.ajax({
    url: url,
    method: 'GET',
}).done(function (result) {


    $("#search").on("click", function (event) {

        event.preventDefault();

        var articleName = $("#searchInput").val().trim()

        var article
        var articleHeadline

        var articleURL;


        console.log(articleName);


        for (var i = 0; i < result.response.docs.length; i++) {

            article = result.response.docs[i];

            // console.log(article);

            articleURL = result.response.docs[i].web_url;

            articleHeadline = result.response.docs[i].headline;


            if (window.location.href.indexOf(articleName) > -1) { 

                $("#topArticles").empty();

                $("#topArticles").append("<p><a href = " + JSON.stringify(articleURL) + " target='_blank'>" + JSON.stringify(articleHeadline) + "</a></p>");

            } else {
                $("#topArticles").empty();
                $("#topArticles").append("<p>Article Not Found</p>");
            }
            
            // console.log(articleHeadline);
            // console.log(JSON.stringify(articleHeadline));

        };

    });





    console.log(result);
}).fail(function (err) {
    throw err;
});


