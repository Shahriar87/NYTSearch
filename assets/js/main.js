var authKey = "270119312d3f42e6bc0f872ecc751104";

var urlBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?" + "api-key=" + authKey;

var searchInput = "";
var numberResults = 0;
var startYear = 0;
var endYear = 0;

var counter = 0;

function queryRun(numberArticle, Url) {
    $.ajax({
        url: Url,
        method: "GET"
    }).done(function (result) {
        console.log(Url);
        console.log(numberArticle);
        console.log(result);

        $("#topArticles").empty();

        for (var i = 0; i < numberArticle; i++) {

            var articleDiv = $("<div>");
            articleDiv.addClass("well");
            articleDiv.attr("id", "article-" + i);
            articleDiv.attr("style", "border: 1px solid black; padding: 10px");

            $("#topArticles").append($(articleDiv));

            if (result.response.docs[i].headline != "null") {
                $("#article-" + i).append("<h2>" + result.response.docs[i].headline.main + "</h2>");
            }

            if (result.response.docs[i].byline && result.response.docs[i].byline.hasOwnProperty("original")) {

                if (result.response.docs[i].byline.original === null) {
                    delete result.response.docs[i].byline.original;
                } else {
                    $("#article-" + i).append("<h3>" + result.response.docs[i].byline.original + "</h3>");
                }
            }

            if (result.response.docs[i].hasOwnProperty("section_name")) {
                $("#article-" + i).append("<h4>" + result.response.docs[i].section_name + "</h4>");
            }

            $("#article-" + i).append("<h4>" + result.response.docs[i].pub_date + "</h4>");
            $("#article-" + i).append("<h4><a href='" + result.response.docs[i].web_url + "' target='_blank'>" + result.response.docs[i].web_url + "</a></h4>");

        }
    })

}

$("#search").on("click", function () {

    searchInput = $("#searchInput").val().trim();
    var newURL = urlBase + "&q=" + searchInput;

    numberResults = $("#selectRecords").val();

    console.log(numberResults);

    startYear = $("#startYear").val().trim();
    endYear = $("#endYear").val().trim();


    if (parseInt(startYear)) {
        newURL = newURL + "&begin_date=" + startYear + "0101";
    }

    if (parseInt(endYear)) {
        newURL = newURL + "&end_date=" + endYear + "1231";
    }
    queryRun(numberResults, newURL);
    return false;

});
