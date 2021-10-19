

console.log("test")
var bodyEl = document.querySelector("body");
var card1 = document.getElementById("1");
var cardContainer = document.getElementById("cardContainer");
var giphyContainer = document.getElementById("giphyContainer");


// for (i = 1; i<=20; i++) {
//     var card = document.createElement("div");
//     card.setAttribute("class", "giphyCard");
//     card.setAttribute("id", i);
//     giphyContainer.appendChild(card);
// };

function getMarvelCharacter() {
    var superHeroArray = ["Thor", "Loki", "Captain America", "Hulk", "Thanos", "Wolverine", "Black Panther", "Groot", "Gamora", "Falcon", "Black Widow", "Storm", "Shang-Chi", "Beast", "Scarlet Witch", "Mystique", "Hawkeye", "Silver Surfer", "Professor X", "Magneto"];
    for (i = 0; i < 20; i++) {
        var apiKey = "a626e5d44818f075594e06593d461dce";
        var requestUrl = "https://gateway.marvel.com:443/v1/public/characters?name=" + superHeroArray[i] + "&apikey=" + apiKey;

        fetch(requestUrl)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data.data);
                if (data.data) {
                    console.log(data.data.results[0].thumbnail.path + "." + data.data.results[0].thumbnail.extension)


                    // for (i = 1; i<=20; i++) {
                    var card = document.createElement("div");
                    var imgUrl = data.data.results[0].thumbnail.path + "." + data.data.results[0].thumbnail.extension;
                    var titleUrl = data.data.results[0].name;
                    var img = document.createElement('img');
                    var title = document.createElement('h2');
                    card.setAttribute("class", "marvelCard");
                    card.setAttribute("id", i);
                    img.setAttribute("src", imgUrl);
                    img.setAttribute("width", 250);
                    title.textContent = titleUrl;
                    cardContainer.appendChild(card);
                    card.appendChild(title);
                    card.appendChild(img);

                    // };
                    // var imgUrl = data.data.results[0].thumbnail.path + "." + data.data.results[0].thumbnail.extension;
                    // // var titleUrl = data.data.results[0].name;
                    // var img = document.createElement('img');
                    // // var title = document.createElement('h2');
                    // img.setAttribute("src", imgUrl);
                    // img.setAttribute("width", 250);
                    // // title.textContent(titleUrl);
                    // bodyEl.appendChild(img);

                }
            })

    }
};

getMarvelCharacter();


function getGiphy() {
    // superhero array to loop through
    var superHero = "groot";

    var apiKey = "x0rZHGLHnNG2XixxUlW3r3Og3I6WVEvG"
    var requestUrl = "https://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&q=" + superHero + "&limit=20&offset=0&rating=g&lang=en";

    
        fetch(requestUrl)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                for (i = 1; i <= 20; i++) {
                console.log(data);
                console.log(data.data[i].images.original);

                var cardGif = document.createElement("div");
                var gifUrl = data.data[i].images.original.url;
                var gif = document.createElement('img');
                cardGif.setAttribute("id", i);
                cardGif.setAttribute("class", "giphyCard");
                gif.setAttribute("src", gifUrl);
                giphyContainer.appendChild(cardGif);
                cardGif.appendChild(gif);
                }
            })

    
};

// // Mobile Menu
// const burgerIcon = document.querySelector('burger');
// const navbarMenu = document.querySelector('#nav-links');

// burgerIcon.addEventListener('click', () =>{
//     navbarMenu.classList.toggle('is-active');
// });



getGiphy();

