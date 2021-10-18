console.log("test")
var bodyEl = document.querySelector("body");


function getMarvelCharacter() {
    ApiKey = "a626e5d44818f075594e06593d461dce";
    var requestUrl = "https://gateway.marvel.com:443/v1/public/characters?apikey=a626e5d44818f075594e06593d461dce";

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            console.log(data.results[1].thumbnail.path)
        })
};

getMarvelCharacter();



function getGiphy() {
    // need to make it that superhero is populated via input query
    var superHero = "ironman"
    var requestUrl = "https://api.giphy.com/v1/gifs/search?api_key=iUE06hTiTNKEiqwUXpeFx0OlUfon6HSX&q=" + superHero + "&limit=25&offset=0&rating=g&lang=en";

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            console.log(data[1].url);

            for (i = 0; i<data.length; i++) {
                var imgUrl = data[i].url;
                var img = document.createElement('img');
                img.setAttribute("src", )

            }
        })
};

getGiphy();