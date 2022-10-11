import { genres } from "./genres.js"
import { makeElement } from "./modules/makeElement.js"

let baseURL = "https://api.themoviedb.org/3"
let apikey = "ad55dcf4459bd5972e3cb59cf4ff2ac7"

let wrapperElm = document.querySelector(".wrapper")

let headerElm = makeElement("header", "header")
wrapperElm.append(headerElm)

let mainElm = document.createElement("main")
wrapperElm.append(mainElm)

let footerElm = document.createElement("footer")
wrapperElm.append(footerElm)

headerElm.innerHTML = `
    <h1>MyMovies</h1>
    <input type="checkbox" id="darkmode_toggle">
    <label for="darkmode_toggle"></label>
    `

document.getElementById("darkmode_toggle").addEventListener("change", function() {
    if (document.getElementById("darkmode_toggle").checked == true) {
        document.getElementsByTagName("body")[0].setAttribute("style", "color: white; background-color: black;");

    } else {
        document.getElementsByTagName("body")[0].setAttribute("style", "color: black; background-color: white");
    }
});

//Now showing logic here!!!




let nowshowingElm = document.createElement("section")
nowshowingElm.classList.add("now_showing")
mainElm.append(nowshowingElm)

let nowshowingHeader = document.createElement("header")
nowshowingHeader.innerHTML = `
    <h2>Now Showing</h2>
    <a href="#">See more</a>
    `
nowshowingElm.append(nowshowingHeader)

let nowshowingMovies = document.createElement("div")
nowshowingElm.append(nowshowingMovies)

fetch(`${baseURL}/movie/now_playing?api_key=${apikey}`)
    .then(response => response.json())
    .then(data => {
        console.log(data.results[0])
        data.results.forEach(movie => {
                let article = document.createElement("article")
                article.classList.add("movie-article")
                article.innerHTML = `
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title} poster">
                <div>
                  <h3>${movie.title}</h3>
                  <p>${movie.vote_average}/10 IMDb</p>
                </div>
                `
                nowshowingMovies.append(article)
                    //data.results.forEach end
            })
            // Fetching popular movies end
    })






let popularElm = document.createElement("section")
popularElm.classList.add("popular")
mainElm.append(popularElm)

let popularHeader = document.createElement("header")
popularHeader.innerHTML = `
    <h2>Popular</h2>
    <a href="#">See more</a>
    `
popularElm.append(popularHeader)

let popularMovies = document.createElement("div")
popularElm.append(popularMovies)

fetch(`${baseURL}/movie/popular?api_key=${apikey}`)
    .then(response => response.json())
    .then(data => {
        console.log(data.results[0])
        data.results.forEach(movie => {
                let article = document.createElement("article")
                article.classList.add("movie-article")
                article.innerHTML = `
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title} poster">
                <div>
                  <h3>${movie.title}</h3>
                  <p>${movie.vote_average}/10 IMDb</p>
                  <p class="genres"></p>
                </div>
                `
                popularMovies.append(article)
                let genreElm = article.querySelector(".genres")
                movie.genre_ids.forEach(id => {
                        let currentGenre = genres.find(genre => genre.id == id)
                        console.log(currentGenre)
                        let genreSpan = document.createElement("span")
                        genreSpan.classList.add("genre__pill")
                        genreSpan.innerText = currentGenre.name
                        genreElm.append(genreSpan)
                            // Movie genre id's - forEach end
                    })
                    //data.results.forEach end
            })
            // Fetching popular movies end
    })

fetch(`${baseURL}/movie/now_playing?api_key=${apikey}`)
    .then(response => response.json())
    .then(data => {
        console.log(data.results)
    })