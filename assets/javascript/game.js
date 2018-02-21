var Game = {
numberOptions : [],
// initializes numberOptions array
scoreCounter : 0,
// initializes the score counter
wins : 0,
// initializes win counter
losses : 0,
// initializes losses counter
target : 0
// initializes target number
}

function initializeGame () {
    var targetNumber = Math.floor(Math.random() * ((120-19) + 1) + 19);
    Game.target = targetNumber;
    //chooses a random number between 19-120
    $("#number-to-guess").append(targetNumber);
    //displays targetNumber on the page
};

function getNumOptions () {
    for(let i = 0; i < 4; i++) {
        var crystalNum = Math.floor(Math.random() * ((15-1) + 1) + 1);
        //chooses a random number between 1-15 for crystal values
        Game.numberOptions.push(crystalNum);
    }
};

function assignCrystalValues () {
    for(let j = 0; j < Game.numberOptions.length; j++){
        var imageCrystal = $("<img>")
        // creates a new crystal image
        imageCrystal.addClass("crystal-image");
        // adds a class so that it can be targeted by CSS
        imageCrystal.attr("src", "assets/images/crystal.png");
        // gives all images an image source
        imageCrystal.attr("data-crystalvalue", Game.numberOptions[j]);
        // gives data attribue equal to the array value
        $("#crystals").append(imageCrystal);
        // adds each picture to the page
    }
};

$("#crystals").on("click", ".crystal-image", function() {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    // accesses the data attribute of the specific crystal clicked
    crystalValue = parseInt(crystalValue);
    // attributes are strings, so must convert it to integer
    Game.scoreCounter += crystalValue;
    $("#score").text(Game.scoreCounter);
    
    if (Game.scoreCounter === Game.target) {
        Game.wins = Game.wins + 1;
        $("#wins").text(Game.wins);
        reset();
    }
    else if (Game.scoreCounter > Game.target) {
        Game.losses = Game.losses + 1;
        $("#losses").text(Game.losses);
        reset();
    }
});

function reset() {
    $("#number-to-guess").empty();
    $("#score").empty();
    $("#crystals").empty();
    Game.numberOptions = [];
    Game.scoreCounter = 0;
    initializeGame();
    getNumOptions();
    assignCrystalValues();
}

initializeGame();
getNumOptions();
assignCrystalValues();