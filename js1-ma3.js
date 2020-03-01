//Question 1

var question1;

question1 = (a, b) => {return a - b};

question1(5,3)

//Answer: 2



//Question 2

const baseUrl = "https://api.rawg.io/api/games";
const genres = "?genres=sports";
const gamesUrl = baseUrl + genres;

fetch(gamesUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        loadGames(json);
    })
    .catch(function (error) {
        document.location.href = "error.html";
    });

function loadGames(json) {
    const games = json.results;
    console.log(games);
}



//Question 3

const catsBehavior = "These cats are outrageous."
const newCatsBehavior = catsBehavior.replace(/cats/g, "giraffes");

console.log(newCatsBehavior);



//Question 4

const queryString = document.location.search;
const params = new URLSearchParams(queryString);

let id;

if (params.has("id")) {
    id = params.get("id");
    redirectUser();
    console.log(id);
} else {
    console.log("Faen ... :()");
}

function redirectUser() {
    console.log("Hurra!");
    if (id < 10) {
        console.log(id + " mindre enn 10");
    } else {
        console.log(id + " større enn 10");
    }
};



//Question 5

const div = document.querySelector(".container");
const button = document.querySelector(".btn");

div.removeChild(button);



//Question 6

const listTag = document.createElement("li");
console.log(listTag);

listTag.className = "parrots";
console.log(listTag);

const listElement = document.createTextNode("Parrots");
console.dir(listElement);

listTag.appendChild(listElement);
console.log(listTag);

const list = document.querySelector(".animals");
list.insertBefore(listTag, list.children[1]);
console.dir(list);



//Question 7

const baseUrl = "https://api.rawg.io/api/";
const genres = "games/3801";
const gamesUrl = baseUrl + genres;

fetch(gamesUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
      loadGames(json.ratings);
    })
    .catch(function(error) {
        console.dir(error);
    });

/*function loadGames() {
  const div = document.querySelector(".rating");
  const games = json.ratings;
  const {ratings} = json;
}*/

function loadGames(jsonData) {
    let element = document.querySelector("rating");
    let {rating} = jsonData;
    element.innerText = rating;
}
