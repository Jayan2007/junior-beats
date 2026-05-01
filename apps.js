let beats = [];
let cart = [];
let messages = [];

/* ---------------- STORE ---------------- */
function renderBeats() {
  const div = document.getElementById("beats");
  div.innerHTML = "";

  beats.forEach((b, i) => {
    div.innerHTML += `
      <div>
        <h3>${b.name}</h3>
        <img src="${b.image}" width="150">
        <audio controls src="${b.audio}"></audio>
        <p>$${b.price}</p>
        <button onclick="addToCart(${i})">Add to Cart</button>
      </div>
    `;
  });
}

/* ---------------- ADMIN ---------------- */
function addBeat() {
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const audio = document.getElementById("audio").value;
  const image = document.getElementById("image").value;

  beats.push({ name, price, audio, image });

  renderBeats();
}

/* ---------------- CART ---------------- */
function addToCart(index) {
  cart.push(beats[index]);
  renderCart();
}

function renderCart() {
  const div = document.getElementById("cart");
  div.innerHTML = "";

  cart.forEach(item => {
    div.innerHTML += `<p>${item.name} - $${item.price}</p>`;
  });
}

/* ---------------- CHAT ---------------- */
function sendMsg() {
  const msg = document.getElementById("msg").value;
  messages.push(msg);
  renderChat();
}

function renderChat() {
  const div = document.getElementById("chatBox");
  div.innerHTML = "";

  messages.forEach(m => {
    div.innerHTML += `<p>${m}</p>`;
  });
}

/* INIT */
renderBeats();
renderCart();
renderChat();
