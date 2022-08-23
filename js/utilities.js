const playerCart = [];
function getInputFieldbyId(Id) {
  const inputFeild = document.getElementById(Id);
  const inputFieldValueString = inputFeild.value;
  const inputFieldValue = parseInt(inputFieldValueString);
  return inputFieldValue;
}

function selectToCart(element) {
  if (playerCart.length <= 4) {
    const playerName =
      element.parentNode.parentNode.children[0].children[0].innerText;
    const name = {
      playerName: playerName,
    };

    playerCart.push(name);

    displayPalayerName();
    element.disabled = true;
  } else {
    alert(" Hey Buddy ---You Can Select Only Five Players");
  }
}
