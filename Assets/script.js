// establishing document element js variables
var bodyEl = document.querySelector("body");
var card1 = document.getElementById("1");
var cardContainer = document.getElementById("cardContainer");
var giphyContainer = document.getElementById("giphyContainer");
var navItem = document.getElementsByClassName("navbar-item");
var intro = document.getElementById("intro");
var marvelCard = document.getElementsByClassName("marvelCard");

// function to obtain Marvel images using the Marvel API, using a pre-populated array of characters. Once the img url is fetched, img cards are dynamically created and appended to the Marvel card container. 
function getMarvelCharacter() {
    var superHeroArray = ["Thor", "Loki", "Captain America", "Hulk", "Thanos", "Wolverine", "Black Panther", "Groot", "Gamora", "Falcon", "Black Widow", "Storm", "Shang-Chi", "Beast", "Scarlet Witch", "Mystique", "Hawkeye", "Silver Surfer", "Professor X", "Magneto"];
    for (i = 1; i < 21; i++) {
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

                    var card = document.createElement("div");
                    var imgUrl = data.data.results[0].thumbnail.path + "." + data.data.results[0].thumbnail.extension;
                    var titleUrl = data.data.results[0].name;
                    var img = document.createElement('img');
                    var title = document.createElement('h2');
                    card.setAttribute("id", data.data.results[0].name);
                    card.setAttribute("class", "marvelCard");
                    img.setAttribute("src", imgUrl);
                    title.textContent = titleUrl;
                    cardContainer.appendChild(card);
                    card.appendChild(title);
                    card.appendChild(img);
                }
            })
    }
};

// obtaining 20 giphys for the character that is clicked upon, obtained through local storage. The giphy url is fetched, then a individual giphy card is created and appended to the giphy card container. 
function getGiphy() {
    var superHero = JSON.parse(localStorage.getItem("superHero"))
    var apiKey = "x0rZHGLHnNG2XixxUlW3r3Og3I6WVEvG"
    var requestUrl = "https://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&q=" + superHero + "&limit=20&offset=0&rating=g&lang=en";


    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (i = 1; i <= 20; i++) {
                console.log(data);
                console.log(data.data[i].images.original.url);

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

// calling the getMarvelCharacter function to dynamically populate the landing page with 20 marvel character cards
getMarvelCharacter();

// event listener for a click event on the marvel card container. When clicked, the superhero is set to local storage so the getGiphy function can parse the superhero when fetching giphy urls. Dynamically removing marvel cards, and intro text. Calling getGiphy function.
cardContainer.addEventListener("click", function (event) {
    console.log(event);
    console.log(event.path[1].id);
    var clickId = event.path[1].id;
    localStorage.setItem("superHero", JSON.stringify(event.path[1].id));

    if (clickId) {
        cardContainer.innerHTML = "";
        intro.innerHTML = "";

        getGiphy();

    }
})

