let deck;
let res2;
let card1;
let card2;

function pick2() {
  axios
    .get("https://deckofcardsapi.com/api/deck/new/shuffle")
    .then(function (res) {
      console.log("deck: ", res.data);
      deck = res.data;
      return axios.get(
        `https://deckofcardsapi.com/api/deck/${res.data.deck_id}/draw`
      );
    })
    .then(function (res) {
      // console.log("card res: ", res.data.cards[0]);
      res2 = res;
      card1 = res.data.cards[0];
      return axios.get(
        `https://deckofcardsapi.com/api/deck/${res.data.deck_id}/draw`
      );
    })
    .then(function (res) {
      // console.log("card res 2:", res.data.cards);
      card2 = res.data.cards[0];
      console.log("cards: ", card1, card2);
    });
}

function getDeck() {
  axios
    .get("https://deckofcardsapi.com/api/deck/new/shuffle")
    .then(function (res) {
      console.log("deck: ", res.data);
      deck = res.data;
    });
}

let rotAngle = 0;
const rotInc = 10;
let cardsLeft = 52;

function clickNext() {
  if (!cardsLeft) {
    return;
  }
  // console.log("next");
  axios
    .get(`https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw`)
    .then(function (res) {
      console.log(53 - cardsLeft, res.data.cards[0]);
      div = document.createElement("IMG");
      div.classList.add("card");
      div.setAttribute("src", res.data.cards[0].images.png);
      // div.setAttribute("style", `transform:rotate(${rotAngle}deg)`);
      rotAngle = Math.floor(Math.random() * 25) - 12;
      const shiftX = Math.floor(Math.random() * 30) - 15;
      const shiftY = Math.floor(Math.random() * 30) - 15;
      const dir = `transform: rotate(${rotAngle}deg); transform: translate(${shiftX}px, ${shiftY}px)`;
      console.log(dir);
      div.setAttribute(
        "style",
        `transform: rotate(${rotAngle}deg) translate(${shiftX}px, ${shiftY}px)`
      );
      cardsLeft--;
      document.querySelector("#cards").appendChild(div);
      // console.log("there");
    });
}

getDeck();
document.querySelector("#next").addEventListener("click", clickNext);
