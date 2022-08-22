





function selectToCart (element) {

    const playerName=element.parentNode.parentNode.children[0].children[0].innerText;
    const name= {

        playerName : playerName
    }

    playerCart.push(name)

    displayPalayerName()

}


