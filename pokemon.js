const baseURL = "https://pokeapi.co/api/v2/";
const pokeball = document.querySelector(".pokeball");
const pokeInput = document.querySelector("input");
const button = document.querySelector("button");

//get single pokemon data
button.addEventListener("click", e => {
  let pokeId = pokeInput.value;
  axios.get(`${baseURL}pokemon/${pokeId}`).then(function(res) {
    console.log(res.data);
    let pokeInfo = document.createElement("div");
    let image = document.createElement("img");
    let pokename = document.createElement("h3");
    pokeInfo.className = "poke-info";
    image.src = res["data"]["sprites"]["front_default"];
    pokename.textContent = res.data.name;
    pokeball.appendChild(pokeInfo);
    pokeball.appendChild(image);
    pokeball.appendChild(pokename);
  });
});
