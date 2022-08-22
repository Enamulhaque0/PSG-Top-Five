
const playerCart =[]
  


 




const Calculate=document.getElementById("Calculate-btn").addEventListener("onClik")











function displayPalayerName(){

const playerContainer =document.getElementById("player-container")
playerContainer.textContent=""

for(let i = 0; i<playerCart.length; i++){
if(i <= 4){

    const div = document.createElement("div");
    div.innerHTML=

    `
    <ol class=" flex my-6">
      <li class="ms-4">${i+1}</li>
      <li class="mx-6">${playerCart[i].playerName}</li>
    </ol>`
            
            playerContainer.appendChild(div)
}

else{
    alert("invalid")
}
    
}

}





function selectToCart (element) {

    const playerName=element.parentNode.parentNode.children[0].children[0].innerText;
    const name= {

        playerName : playerName
    }

    playerCart.push(name)

    displayPalayerName()

}


