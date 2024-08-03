// ******************************* Movies Displays Initial Function *************************************** //


let API_key = '7cecda3';
async function displaymovies () {
let movies_names = ['Thor', 'avengers', 'Hulk', 'Resident Evil', 'The Witcher', 'Money Heist', 'John Wick', 'All of us are dead', 'stranger things', 'Alice in borderland', 'game of thrones', 'train to busan' ]
let cards = document.querySelectorAll('.movie-card')
        for (i = 0; i < movies_names.length; i++) {
            let movies_container = document.querySelector('.movies-container')
            let movie_card = document.createElement('div')
            let url = `https://www.omdbapi.com/?t=${encodeURIComponent(movies_names[i])}&apikey=${API_key}`;
            let moviedata = await fetch(url) .then (res => res.json());
            movie_card.classList.add("movie-card")
            movie_card.innerHTML = ` <img src=${moviedata.Poster} alt="">
            <p class='genre'>${moviedata.Genre}/<p>
            <h3 id="title">${moviedata.Title} </h3>
            <p class='year'>${moviedata.Year}</p>
            <p class='des'>Hindi Dubbed (ORG) & English [Dual Audio] BluRay 1080p 720p 480p [Full Movie] </p>
            `
            movies_container.append(movie_card)
            console.log(moviedata);
        }
}
displaymovies();

// ******************************* Movie Find Function *************************************** //

let input = document.querySelector('input')
let search_btn = document.querySelector('.Search')
search_btn.addEventListener('click', (e) => {
    e.preventDefault();
    findmovie(input.value)

})

let movie_box = document.querySelector('.movie-details')
async function findmovie (movie) {
      let url = `https://www.omdbapi.com/?t=${encodeURIComponent(movie)}&apikey=${API_key}`;
    let moviedata = await fetch(url) .then (res => res.json());
    movie_box.style.display = 'flex'
    
    console.log(moviedata)
    movie_box.innerHTML = `
     <div class="right">
                    <img src="${moviedata.Poster}" alt="">
                </div>
                <div class="left">
                    <div class="text-box">
                        <h3>Movie Name:</h3>
                        <p>${moviedata.Title}</p>
                    </div>
                    <div class="text-box">
                        <h3>Release Date:</h3>
                        <p>${moviedata.Released}</p>
                    </div>
                    <div class="text-box">
                        <h3>Director:</h3>
                        <p>${moviedata.Director}</p>
                    </div>
                    <div class="text-box">
                        <h3>Duration:</h3>
                        <p>${moviedata.Runtime}</p>
                    </div>
                    <div class="text-box">
                        <h3>Genre:</h3>
                        <p>${moviedata.Genre}</p>
                    </div>
                    <div class="text-box">
                        <h3>Actors:</h3>
                        <p>${moviedata.Actors}</p>
                    </div>
                    <div class="text-box">
                        <h3>Plot:</h3>
                        <p>${moviedata.Plot}</p>
                        <br>
                        </div>
                        <a class='download-btn' href='https://www.google.com/search?q=${input.value}+movie+download&oq=thor+movie+download&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQIxgnMgYIAhBFGEAyBwgDEAAYgAQyBwgEEAAYgAQyBwgFEAAYgAQyBwgGEAAYgAQyBwgHEAAYgATSAQk3MzEwajBqMTWoAgiwAgE&sourceid=chrome&ie=UTF-8/'>Download</a>
                     <i class="fa-solid fa-arrow-left arrow" onclick='remove_movie_detais()'></i>
                     
                </div>
    `
}

// ******************************* Movie Details Clear Function *************************************** //


function remove_movie_detais () {
    movie_box.style.display = 'none'
}