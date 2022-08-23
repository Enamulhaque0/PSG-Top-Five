function displayPalayerName() {
  const playerContainer = document.getElementById("player-container");
  playerContainer.textContent = "";

  for (let i = 0; i < playerCart.length; i++) {
    if (i <= 4) {
      const div = document.createElement("div");
      div.innerHTML = `
            <ol class=" flex my-6">
              <li class="ms-4">${i + 1}.</li>
              <li class="mx-6">${playerCart[i].playerName}</li>
            </ol>`;

      playerContainer.appendChild(div);
    } else {
      return;
    }
  }
}
