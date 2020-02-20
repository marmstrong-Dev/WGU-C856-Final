const historyBlocks = document.getElementById("historicalWrapper");
const groceryBlocks = document.getElementById("groceryWrapper");
const lodgingBlocks = document.getElementById("lodgingWrapper");
const restaurantBlocks = document.getElementById("restaurantWrapper");
const nightlifeBlocks = document.getElementById("nightlifeWrapper");


function catBarHider() {
    let catMenu = document.getElementById("catMenu");

    if (catMenu.style.display == "none") {
        catMenu.style.display = "block";
    } else {
        catMenu.style.display = "none";
    }
}

function categoryHider(catID) {
    let currentBlock = document.getElementById(catID);

    if (currentBlock.style.display == "none") {
        currentBlock.style.display = "block";

        if (currentBlock != groceryBlocks) {
            groceryBlocks.style.display = "none";
        }

        if (currentBlock != historyBlocks) {
            historyBlocks.style.display = "none";
        }

        if (currentBlock != restaurantBlocks) {
            restaurantBlocks.style.display = "none";
        }

        if (currentBlock != nightlifeBlocks) {
            nightlifeBlocks.style.display = "none";
        }

        if (currentBlock != lodgingBlocks) {
            lodgingBlocks.style.display = "none";
        }
    }
}