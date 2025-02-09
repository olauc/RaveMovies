$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll > 100){
            $(".rave-navbar").css("background", "#000");
        } else{
            $(".rave-navbar").css("background", "transparent");
        }
    });
    });

    const dramaArr = [];
    const actionArr = [];
    const comedyArr = [];

    const url = 'https://imdb236.p.rapidapi.com/imdb/top250-movies';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '1cba5780f4msh1e775f4503dbbcfp170377jsn5dcd7ceb9b14',
            'x-rapidapi-host': 'imdb236.p.rapidapi.com'
        }
    };
    
    fetchTopMovies(url,options);

    async function fetchTopMovies(url,options) {
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
            showMovies(result);
            
        } catch (error) {
            console.error(error);
        }
    }
    const moviesContainer = document.getElementById("movies-container");
    function showMovies(movies){
        moviesContainer.innerHTML = ``;
        title = '';
        for (let i = 0; i < 3; i++) {
          if (i === 0) {
            title = 'Drama'
          } else if(i===1){
            title = 'Action'
          } else{
            title = 'Comedy'
          }
            moviesContainer.innerHTML += `<div class="row d-flex justify-content-center align-items-center">
      <div class="col-12">
        <div class="d-flex justify-content-between">
          <p class="text-white"> <b>${title}</b> </p>
          <div class="">
            <button type="button" data-bs-target="#carouselExampleIndicators${i}" data-bs-slide-to="0" class="active"
              aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators${i}" data-bs-slide-to="1"
              aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators${i}" data-bs-slide-to="2"
              aria-label="Slide 3"></button>
          </div>
        </div>

        <div id="carouselExampleIndicators${i}" class="carousel slide">
          <div class="carousel-inner" style="overflow: visible;">
            <div class="carousel-item active" >
              <section class="d-flex" id="row${i}-slider${i}">
              </section>
            </div>
            <div class="carousel-item" >
              <section class="d-flex"id="row${i}-slider${i+1}">
              </section>
            </div>
            <div class="carousel-item" >
              <section class="d-flex" id="row${i}-slider${i+2}">
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>`;   
        }
    var slider1 = document.getElementById("row0-slider0");
    var slider2 = document.getElementById("row0-slider1");
    var slider3 = document.getElementById("row0-slider2");
    var slider4 = document.getElementById("row1-slider1");
    var slider5 = document.getElementById("row1-slider2");
    var slider6 = document.getElementById("row1-slider3");
    var slider7 = document.getElementById("row2-slider2");
    var slider8 = document.getElementById("row2-slider3");
    var slider9 = document.getElementById("row2-slider4");

        movies.forEach(movie => {
            if (movie.genres[0] === 'Drama'){
                dramaArr.push(movie);
            } else if (movie.genres[0] === 'Comedy'){
                comedyArr.push(movie);
            } else if (movie.genres[0] === 'Action'){
                actionArr.push(movie);
            }
        });
         const mixedMovies = [
          ...dramaArr.slice(0, 18),
          ...actionArr.slice(0, 18),
          ...comedyArr.slice(0, 18)
        ];
        localStorage.setItem("movies",JSON.stringify(mixedMovies));
        
        slider1.innerHTML = '';
        slider2.innerHTML = '';
        slider3.innerHTML = '';
        slider4.innerHTML = '';
        slider5.innerHTML = '';
        slider6.innerHTML = '';
        slider7.innerHTML = '';
        slider8.innerHTML = '';
        slider9.innerHTML = '';
        for (let index = 0; index < 18; index++) {
            if (index < 6){
                slider1.innerHTML += `<div class="card">
        <img src=${dramaArr[index].primaryImage} class="card-img-top" alt="...">
        <div class="card-body">
          <section class="d-flex justify-content-between">
            <div>
              <i class="bi bi-play-circle-fill card-icon" id = "btn-${index}"></i>
              <i class="bi bi-plus-circle card-icon"></i>
            </div>
            <div>
              <i class="bi bi-arrow-down-circle-fill card-icon"></i>
            </div>
          </section>

          <section class="d-flex justify-content-between align-items-center">
            <p class="rave-card-text m-0" style="color: rgb(0, 186, 0);">${dramaArr[index].averageRating}</p>
            <span class="rave-card-text m-2 text-white">${dramaArr[index].startYear}</span>
            <span class="rave-card-text border text-white p-1">${dramaArr[index].runtimeMinutes}</span>
          </section>
          <p class="m-0 rave-card-text text-white">${dramaArr[index].originalTitle}</p>
        </div>
      </div>`;
            } else if (index >= 6 && index < 12){
                slider2.innerHTML += `<div class="card">
        <img src=${dramaArr[index].primaryImage} class="card-img-top" alt="...">
        <div class="card-body">
          <section class="d-flex justify-content-between">
            <div>
              <i class="bi bi-play-circle-fill card-icon" id = "btn-${index}"></i>
              <i class="bi bi-plus-circle card-icon"></i>
            </div>
            <div>
              <i class="bi bi-arrow-down-circle-fill card-icon"></i>
            </div>
          </section>

          <section class="d-flex justify-content-between align-items-center">
            <p class="rave-card-text m-0" style="color: rgb(0, 186, 0);">${dramaArr[index].averageRating}</p>
            <span class="rave-card-text m-2 text-white">${dramaArr[index].startYear}</span>
            <span class="rave-card-text border text-white p-1">${dramaArr[index].runtimeMinutes}</span>
          </section>
          <p class="m-0 rave-card-text text-white">${dramaArr[index].originalTitle}</p>
        </div>
      </div>`;
            } else {
                slider3.innerHTML += `<div class="card">
        <img src=${dramaArr[index].primaryImage} class="card-img-top" alt="...">
        <div class="card-body">
          <section class="d-flex justify-content-between">
            <div>
              <i class="bi bi-play-circle-fill card-icon" id = "btn-${index}"></i>
              <i class="bi bi-plus-circle card-icon"></i>
            </div>
            <div>
              <i class="bi bi-arrow-down-circle-fill card-icon"></i>
            </div>
          </section>

          <section class="d-flex justify-content-between align-items-center">
            <p class="rave-card-text m-0" style="color: rgb(0, 186, 0);">${dramaArr[index].averageRating}</p>
            <span class="rave-card-text m-2 text-white">${dramaArr[index].startYear}</span>
            <span class="rave-card-text border text-white p-1">${dramaArr[index].runtimeMinutes}</span>
          </section>
          <p class="m-0 rave-card-text text-white">${dramaArr[index].originalTitle}</p>
        </div>
      </div>`;
            }
        }
        for (let index = 0; index < 18; index++) {
            if (index < 6){
                slider4.innerHTML += `<div class="card">
        <img src=${actionArr[index].primaryImage} class="card-img-top" alt="...">
        <div class="card-body">
          <section class="d-flex justify-content-between">
            <div>
              <i class="bi bi-play-circle-fill card-icon" id = "btn-${index + 18}"></i>
              <i class="bi bi-plus-circle card-icon"></i>
            </div>
            <div>
              <i class="bi bi-arrow-down-circle-fill card-icon"></i>
            </div>
          </section>

          <section class="d-flex justify-content-between align-items-center">
            <p class="rave-card-text m-0" style="color: rgb(0, 186, 0);">${actionArr[index].averageRating}</p>
            <span class="rave-card-text m-2 text-white">${actionArr[index].startYear}</span>
            <span class="rave-card-text border text-white p-1">${actionArr[index].runtimeMinutes}</span>
          </section>
          <p class="m-0 rave-card-text text-white">${actionArr[index].originalTitle}</p>
        </div>
      </div>`;
            } else if (index >= 6 && index < 12){
                slider5.innerHTML += `<div class="card">
        <img src=${actionArr[index].primaryImage} class="card-img-top" alt="...">
        <div class="card-body">
          <section class="d-flex justify-content-between">
            <div>
              <i class="bi bi-play-circle-fill card-icon" id = "btn-${index + 18}"></i>
              <i class="bi bi-plus-circle card-icon"></i>
            </div>
            <div>
              <i class="bi bi-arrow-down-circle-fill card-icon"></i>
            </div>
          </section>

          <section class="d-flex justify-content-between align-items-center">
            <p class="rave-card-text m-0" style="color: rgb(0, 186, 0);">${actionArr[index].averageRating}</p>
            <span class="rave-card-text m-2 text-white">${actionArr[index].startYear}</span>
            <span class="rave-card-text border text-white p-1">${actionArr[index].runtimeMinutes}</span>
          </section>
          <p class="m-0 rave-card-text text-white">${actionArr[index].originalTitle}</p>
        </div>
      </div>`;
            } else {
                slider6.innerHTML += `<div class="card">
        <img src=${actionArr[index].primaryImage} class="card-img-top" alt="...">
        <div class="card-body">
          <section class="d-flex justify-content-between">
            <div>
              <i class="bi bi-play-circle-fill card-icon" id = "btn-${index + 18}"></i>
              <i class="bi bi-plus-circle card-icon"></i>
            </div>
            <div>
              <i class="bi bi-arrow-down-circle-fill card-icon"></i>
            </div>
          </section>

          <section class="d-flex justify-content-between align-items-center">
            <p class="rave-card-text m-0" style="color: rgb(0, 186, 0);">${actionArr[index].averageRating}</p>
            <span class="rave-card-text m-2 text-white">${actionArr[index].startYear}</span>
            <span class="rave-card-text border text-white p-1">${actionArr[index].runtimeMinutes}</span>
          </section>
          <p class="m-0 rave-card-text text-white">${actionArr[index].originalTitle}</p>
        </div>
      </div>`;
            }
        }
        for (let index = 0; index < 18; index++) {
            if (index < 6){
                slider7.innerHTML += `<div class="card">
        <img src=${comedyArr[index].primaryImage} class="card-img-top" alt="...">
        <div class="card-body">
          <section class="d-flex justify-content-between">
            <div>
              <i class="bi bi-play-circle-fill card-icon" id = "btn-${index + 36}"></i>
              <i class="bi bi-plus-circle card-icon"></i>
            </div>
            <div>
              <i class="bi bi-arrow-down-circle-fill card-icon"></i>
            </div>
          </section>

          <section class="d-flex justify-content-between align-items-center">
            <p class="rave-card-text m-0" style="color: rgb(0, 186, 0);">${comedyArr[index].averageRating}</p>
            <span class="rave-card-text m-2 text-white">${comedyArr[index].startYear}</span>
            <span class="rave-card-text border text-white p-1">${comedyArr[index].runtimeMinutes}</span>
          </section>
          <p class="m-0 rave-card-text text-white">${comedyArr[index].originalTitle}</p>
        </div>
      </div>`;
            } else if (index >= 6 && index < 12){
                slider8.innerHTML += `<div class="card">
        <img src=${comedyArr[index].primaryImage} class="card-img-top" alt="...">
        <div class="card-body">
          <section class="d-flex justify-content-between">
            <div>
              <i class="bi bi-play-circle-fill card-icon" id = "btn-${index + 36}"></i>
              <i class="bi bi-plus-circle card-icon"></i>
            </div>
            <div>
              <i class="bi bi-arrow-down-circle-fill card-icon"></i>
            </div>
          </section>

          <section class="d-flex justify-content-between align-items-center">
            <p class="rave-card-text m-0" style="color: rgb(0, 186, 0);">${comedyArr[index].averageRating}</p>
            <span class="rave-card-text m-2 text-white">${comedyArr[index].startYear}</span>
            <span class="rave-card-text border text-white p-1">${comedyArr[index].runtimeMinutes}</span>
          </section>
          <p class="m-0 rave-card-text text-white">${comedyArr[index].originalTitle}</p>
        </div>
      </div>`;
            } else {
                slider9.innerHTML += `<div class="card">
        <img src=${comedyArr[index].primaryImage} class="card-img-top" alt="...">
        <div class="card-body">
          <section class="d-flex justify-content-between">
            <div>
              <i class="bi bi-play-circle-fill card-icon" id = "btn-${index + 36}"></i>
              <i class="bi bi-plus-circle card-icon"></i>
            </div>
            <div>
              <i class="bi bi-arrow-down-circle-fill card-icon"></i>
            </div>
          </section>

          <section class="d-flex justify-content-between align-items-center">
            <p class="rave-card-text m-0" style="color: rgb(0, 186, 0);">${comedyArr[index].averageRating}</p>
            <span class="rave-card-text m-2 text-white">${comedyArr[index].startYear}</span>
            <span class="rave-card-text border text-white p-1">${comedyArr[index].runtimeMinutes}</span>
          </section>
          <p class="m-0 rave-card-text text-white">${comedyArr[index].originalTitle}</p>
        </div>
      </div>`;
            }
        }

        for (let i = 0; i < mixedMovies.length; i++) {
          const movieBtn = document.getElementById(`btn-${i}`);
          movieBtn.addEventListener("click", function() {
            sessionStorage.setItem("index",i);
            window.location.href = "Movie.html";
          });
        }
    }

