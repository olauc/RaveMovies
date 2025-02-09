let movies = JSON.parse(localStorage.getItem("movies"));

let index = JSON.parse(sessionStorage.getItem("index"));

console.log(movies);
console.log(index);


document.getElementById("title").textContent = movies[index].primaryTitle;
document.getElementById("movie").innerHTML = `<img src=${movies[index].primaryImage} alt="" class="movie">`;
document.getElementById("runtime").textContent = `Length: ${movies[index].runtimeMinutes} mins`;
document.getElementById("language").textContent = `Language: ${movies[index].language}`;
document.getElementById("rating").textContent = `Rating: ${movies[index].averageRating}`;
document.getElementById("release-date").textContent = `Release Date: ${movies[index].startYear}`;
document.getElementById("description").innerHTML =`Description: <br/> ${movies[index].description}` ;