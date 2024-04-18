let apiKey = "1d8eb92d415a096a41c0f9af3fec7fc6";
let apiUrl = "https://api.themoviedb.org/3/movie/popular";

let options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: 'Bearer ${1d8eb92d415a096a41c0f9af3fec7fc6}',
  },
};

fetch(apiUrl, options)
  .then((response) => response.json())
  .then((data) => {
    data.results.forEach((movie) => {}
    let imageUrl = document.createElement("img");
    image.src = imageUrl;

    document.getElementBtId("movie-container").appendChild(image);
)
  }
