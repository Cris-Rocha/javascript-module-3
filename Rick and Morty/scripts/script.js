const root = document.getElementById("root");

//function that Creates the elements on HTML

const htmlElementCreator = () => {
  const buildRoot = document.getElementById("root");
  root.innerHTML =
    '<div id="header"> <img id="logo" src="https://raw.githubusercontent.com/Cris-Rocha/javascript-module-3/main/Rick%20and%20Morty/images/image4.png" alt="Ricky & Morty Logo"></a></div>' +
    '<div id="content">' +
    '<div id="sidebar"><div id="chapters"></div></div>' +
    '<div id="main"></div>';
  ("</div>");
};

htmlElementCreator();
loadEpisodes();

// es lo mismo que hacer asi, pero para cada uno de los elementos:

// const headerSection = document.createElement("div"); // con comillas
// headerSection.id = "header";
// root.appendChild(headerSection); // aqui sin comillas

function loadEpisodes() {
  fetch("https://rickandmortyapi.com/api/episode")
    .then((res) => res.json()) // el fetch devuelve una promesa, cuando este cumplida quiero una respuesta y la respuesta  que me devuelva json
    .then((episodes) => showEpisodeLinks(episodes));
}

function showEpisodeLinks(episodes) {
  const sidebar = document.getElementById("sidebar")
  episodes.results
    .map((episode) => createEpisodeLink(episode)) // this put on the HTML the information of this function
    // .forEach((episode) => console.log(episode.name))
    .forEach(node => sidebar.appendChild(node))
}

function createEpisodeLink(episode) {
  const episodeLink = document.createElement("div")
  episodeLink.classList.add("episodeLink")
  episodeLink.innerText = episode.name
  // episodeLink.addEventListener("click", () => showEpisodeDetail(episode));
  return episodeLink
}

// function showEpisodeDetail(episode) {
//   const main = document.getElementById("main");
//   main.innerText =
//     `<h2>${episode.name}</h2>` +
//     `<h3>${episode.episode} | ${episode.air_date}</h3>`;

//   episode.character.forEach((characterUrl) => console.log(characterUrl));
// }

// function createCharacterThumbnail(characterUrl) {}

// function renderCharacterThumbnail() {}
