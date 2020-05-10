const api = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72";
const cardsContainer = document.getElementById('cards');
let data = [];

async function fetchCards() {
  try {
    let response =  await fetch(api)
    return await response.json()
  } catch {
    // Create error handling logic
    console.log("Error")
  }
}

function renderCards(cards) {
  cardsContainer.innerHTML = "";
  cards.map(renderCard);
}

function renderCard(card) {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `
  <a data-toggle="modal" data-target="#exampleModal">
  <img src="${card.photo}" class="card-img-top" alt="${card.name}" width="304" height="202">
  <div class="card-body">
    <p class="type">${card.property_type}</p>
    <h5 class="card-title title">${card.name}</h5>
    <p class="card-text price"><strong>R$${card.price}</strong>/noite</p>
    <p class="totalPrice">Total de R$ ${card.price}</p>
  </div>
  </a>
`;
  cardsContainer.appendChild(div);
}

async function main() {
  data = await fetchCards();
  if(data) {
    renderCards(data);
  }
}

main();