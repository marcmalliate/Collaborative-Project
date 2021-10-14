console.log("test")









function getApi() {
    var ApiKey = "881d8641320234ecee7d0f7a4de6ff8d";
    var requestUrl = 'https://developer.marvel.com/v1/public/characters';

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        });