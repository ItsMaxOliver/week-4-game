function generateRandomNumber () {
    let targetNumber = Math.floor(Math.random() * ((120-19) + 1) + 19);
    //chooses a random number between 19-120
    $("#number-to-guess").append(targetNumber);
    //displays targetNumber on the page
}

var crystalNum = Math.floor(Math.random() * ((15-1) + 1) + 1);
//chooses a random number between 1-15 for crystal values
function generateRandomCrystalNumbers () {
    
}

generateRandomNumber();
