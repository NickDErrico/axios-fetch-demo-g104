const shuffleURL = `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`;
const shuffleButton = document.querySelector("#shuffle-btn");
const drawButton = document.querySelector("#draw-btn");
const cardContainer = document.querySelector(".card-container");

let drawURL;
let deckId;
let remaining;

// FETCH :
// shuffleButton.addEventListener("click", e => {
//   fetch(`${shuffleURL}`)
//     .then(res => res.json())
//     .then(jsonData => {
//       deckId = jsonData.deck_id;
//       remaining = jsonData.remaining;
//       drawURL = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`;
//       console.log(deckId);
//     });
// });

// AXIOS :
shuffleButton.addEventListener("click", e => {
  axios.get(shuffleURL).then(res => {
    deckId = res.data.deck_id;
    remaining = res.data.remaining;
    drawURL = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`;
  });
});

// FETCH :
// drawButton.addEventListener("click", e => {
//   fetch(drawURL)
//     .then(res => res.json())
//     .then(jsonData => {
//       let img = document.createElement("img");
//       img.src = jsonData.cards[0].image;
//       cardContainer.appendChild(img);
//     });
// });

// AXIOS :
drawButton.addEventListener("click", e => {
  axios.get(drawURL).then(res => {
    let img = document.createElement("img");
    img.src = res.data.cards[0].image;
    cardContainer.appendChild(img);
  });
});
