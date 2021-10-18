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
            console.log(data.data.results[1].thumbnail.path + "." + data.data.results[1].thumbnail.extension)

            var imgUrl = data.data.results[1].thumbnail.path + "." + data.data.results[1].thumbnail.extension;
            var img = document.createElement('img');
            img.setAttribute("src", imgUrl);
            img.setAttribute("width", 250);
            bodyEl.appendChild(img);
        })
};

getMarvelCharacter();


function getGiphy() {
    // superhero array to loop through
    for (i = 0; i<20; i++) {
    var superHeroArray = ["spiderman", "ironman", "thor", "loki", "captainamceria", "hulk", "thanos", "wolverine", "blackpanther", "natasharomanoff", "captainmarvel", "shuri", "groot", "gamora", "falcon", "blackwidow", "shangchi", "wandamaximoff", "mystique", "silversurfer"];
    // var superHero = "ironman"
    var apiKey = "x0rZHGLHnNG2XixxUlW3r3Og3I6WVEvG"
    var requestUrl = "https://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&q=" + superHeroArray[i] + "&limit=20&offset=0&rating=g&lang=en";

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            console.log(data.data[1].embed_url);

            // for (i = 0; i<20; i++) {
                // CAUTION, DONT RUN 400 TIMES, WILL DRAIN YOUR API KEY
                var imgUrl = data.data[1].embed_url;
                var img = document.createElement('iframe');
                img.setAttribute("src", imgUrl);
                img.setAttribute("alt", '"Powered By GIPHY"');
                img.setAttribute("width", 250);
                bodyEl.appendChild(img);

            // }
        })
    
}};

getGiphy();