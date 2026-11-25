const movies = [
  {
    name: "Avengers: Endgame",
    releaseDate: "2019-04-26",
    cast: ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo"],
    imdbScore: 8.4,
    img: "https://image.tmdb.org/t/p/original/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
  },
  {
    name: "Avengers: Infinity War",
    releaseDate: "2018-04-27",
    cast: ["Robert Downey Jr.", "Chris Hemsworth", "Josh Brolin"],
    imdbScore: 8.4,
    img: "https://image.tmdb.org/t/p/original/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
  },
  {
    name: "Spider-Man: No Way Home",
    releaseDate: "2021-12-17",
    cast: ["Tom Holland", "Zendaya", "Benedict Cumberbatch"],
    imdbScore: 8.1,
    img: "https://image.tmdb.org/t/p/original/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
  },
  {
    name: "The Avengers",
    releaseDate: "2012-05-04",
    cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
    imdbScore: 8.0,
    img: "https://image.tmdb.org/t/p/original/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
  },
  {
    name: "Guardians of the Galaxy",
    releaseDate: "2014-08-01",
    cast: ["Chris Pratt", "Zoe Saldana", "Dave Bautista"],
    imdbScore: 8.0,
    img: "https://image.tmdb.org/t/p/original/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg",
  },
  {
    name: "Iron Man",
    releaseDate: "2008-05-02",
    cast: ["Robert Downey Jr.", "Gwyneth Paltrow", "Jeff Bridges"],
    imdbScore: 7.9,
    img: "https://image.tmdb.org/t/p/original/78lPtwv72eTNqFW9COBYI0dWDJa.jpg",
  },
  {
    name: "Guardians of the Galaxy Vol. 3",
    releaseDate: "2023-05-05",
    cast: ["Chris Pratt", "Zoe Saldana", "Bradley Cooper"],
    imdbScore: 7.9,
    img: "https://image.tmdb.org/t/p/original/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
  },
  {
    name: "Thor: Ragnarok",
    releaseDate: "2017-11-03",
    cast: ["Chris Hemsworth", "Tom Hiddleston", "Cate Blanchett"],
    imdbScore: 7.9,
    img: "https://image.tmdb.org/t/p/original/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg",
  },
  {
    name: "Spider-Man: Brand New Day",
    releaseDate: "2026-07-31",
    cast: ["Tom Holland", "Zendaya", "Sadie Sink"],
    imdbScore: 7.9,
    img: "https://s3.amazonaws.com/nightjarprod/content/uploads/sites/340/2026/07/13172501/SMBND_Online_2000x3000_Hoodie_02-scaled.jpg",
  },
  {
    name: "Captain America: Civil War",
    releaseDate: "2016-05-06",
    cast: ["Chris Evans", "Robert Downey Jr.", "Scarlett Johansson"],
    imdbScore: 7.8,
    img: "https://image.tmdb.org/t/p/original/rAGiXaUfPzY7CDEyNKUofk3Kw2e.jpg",
  },
];
const container = document.getElementById("container-movies");

for (let i = 0; i < movies.length; i++) {
  const movie = movies[i];

  //CARD//
  const card = document.createElement("div");
  card.classList.add("card");

  //IMAGE//
  const cardImage = document.createElement("div");
  cardImage.classList.add("card-image");
  const figure = document.createElement("figure");
  figure.classList.add("image", "is-2by3");
  const image = document.createElement("img");
  image.src = movie.img;
  image.alt = movie.name;
  figure.appendChild(image);
  cardImage.appendChild(figure);

  //CONTENT//
  const content = document.createElement("div");
  content.classList.add("card-content");
  const rank = document.createElement("p");
  rank.classList.add("has-text-danger", "has-text-weight-bold");
  rank.textContent = "#" + (i + 1);

  //TITLE//
  const title = document.createElement("p");
  title.classList.add("title", "is-5");
  title.textContent = movie.name;

  //RELEASE DATE//
  const releaseDate = document.createElement("p");
  releaseDate.classList.add("subtitle", "is-6");
  releaseDate.textContent = movie.releaseDate;

  //SCORE//
  const score = document.createElement("span");
  score.classList.add("tag", "is-warning", "is-medium");
  score.textContent = "⭐ " + movie.imdbScore;

  //CAST//
  const cast = document.createElement("div");
  cast.classList.add("tags", "mt-3");
  for (let j = 0; j < movie.cast.length; j++) {
    const actor = document.createElement("span");
    actor.classList.add("tag", "is-dark");
    actor.textContent = movie.cast[j];
    cast.appendChild(actor);
  }

  content.appendChild(rank);
  content.appendChild(title);
  content.appendChild(releaseDate);
  content.appendChild(score);
  content.appendChild(cast);
  card.appendChild(cardImage);
  card.appendChild(content);

  container.appendChild(card);
}
