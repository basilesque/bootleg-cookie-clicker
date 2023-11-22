var clickingPower = 1;
var clickingPowerCost = 50;
var score = 0;
var cursorCost = 15;
var cursors = 0;
var grandmaCost = 100;
var grandmas = 0;
var ovenCost = 1000;
var ovens = 0;
var factoryCost = 25000;
var factories = 0;

function buyClickingPower() {
    if (score >= clickingPowerCost) {
        score -= clickingPowerCost;
        clickingPower += 1;
        clickingPowerCost = Math.round(clickingPowerCost * 1.20);
        document.getElementById("score").innerHTML = score;
        document.getElementById("clickingPower").innerHTML = clickingPower - 1;
        document.getElementById("clickingPowerCost").innerHTML = clickingPowerCost;
        updateScorePerSecond();
    }
};

function buyCursor() {
    if (score >= cursorCost) {
        score -= cursorCost;
        cursors += 1;
        cursorCost = Math.round(cursorCost * 1.20);
        document.getElementById("score").innerHTML = score;
        document.getElementById("cursorCost").innerHTML = cursorCost;
        document.getElementById("cursors").innerHTML = cursors;
        updateScorePerSecond();
    }
};

function buyGrandma() {
    if (score >= grandmaCost) {
        score -= grandmaCost;
        grandmas += 1;
        grandmaCost = Math.round(grandmaCost * 1.20);
        document.getElementById("score").innerHTML = score;
        document.getElementById("grandmaCost").innerHTML = grandmaCost;
        document.getElementById("grandmas").innerHTML = grandmas;
        updateScorePerSecond();
    }
};

function buyOven() {
    if (score >= ovenCost) {
        score -= ovenCost;
        ovens += 1;
        ovenCost = Math.round(ovenCost * 1.20);
        document.getElementById("score").innerHTML = score;
        document.getElementById("ovenCost").innerHTML = ovenCost;
        document.getElementById("ovens").innerHTML = ovens;
        updateScorePerSecond();
    }
};

function buyFactory() {
    if (score >= factoryCost) {
        score -= factoryCost;
        factories += 1;
        factoryCost = Math.round(factoryCost * 1.20);
        document.getElementById("score").innerHTML = score;
        document.getElementById("factoryCost").innerHTML = factoryCost;
        document.getElementById("factories").innerHTML = factories;
        updateScorePerSecond();
    }
};

document.getElementById("score").innerHTML = score;
function addToScore(amount) {
    score += amount;
    document.getElementById("score").innerHTML = score;
};

function updateScorePerSecond() {
    ScorePerSecond = cursors + grandmas * 5 + ovens * 20 + factories * 100;
    document.getElementById("ScorePerSecond").innerHTML = ScorePerSecond
};

function loadGame() {
    var savedGame = JSON.parse(localStorage.getItem("gameSave"));
    if (typeof savedGame.score !== "undefined") score = savedGame.score;
    if (typeof savedGame.clickingPower !== "undefined") clickingPower = savedGame.clickingPower;
    if (typeof savedGame.clickingPowerCost !== "undefined") clickingPowerCost = savedGame.clickingPowerCost;
    if (typeof savedGame.cursorCost !== "undefined") cursorCost = savedGame.cursorCost;
    if (typeof savedGame.cursors !== "undefined") cursors = savedGame.cursors;
    if (typeof savedGame.grandmaCost !== "undefined") grandmaCost = savedGame.grandmaCost;
    if (typeof savedGame.grandmas !== "undefined") grandmas = savedGame.grandmas;
    if (typeof savedGame.ovenCost !== "undefined") ovenCost = savedGame.ovenCost;
    if (typeof savedGame.ovens !== "undefined") ovens = savedGame.ovens;
    if (typeof savedGame.factoryCost !== "undefined") factoryCost = savedGame.factoryCost;
    if (typeof savedGame.factories !== "undefined") factories = savedGame.factories;
};

function saveGame() {
    var gameSave = {
        score: score,
        clickingPower: clickingPower,
        clickingPowerCost: clickingPowerCost,
        cursorCost: cursorCost,
        cursors: cursors,
        grandmaCost: grandmaCost,
        grandmas: grandmas,
        ovenCost: ovenCost,
        ovens: ovens,
        factoryCost: factoryCost,
        factories: factories
    };
    localStorage.setItem("gameSave", JSON.stringify(gameSave));
};

function resetGame() {
    if (confirm("Are you sure you want to reset your game?")) {
        var gameSave = {};
        localStorage.setItem("gameSave", JSON.stringify(gameSave));
        location.reload();
    }
};

window.onload = function () {
    loadGame();
    updateScorePerSecond();
    document.getElementById("score").innerHTML = score;
    document.getElementById("clickingPower").innerHTML = clickingPower - 1;
    document.getElementById("clickingPowerCost").innerHTML = clickingPowerCost;
    document.getElementById("cursorCost").innerHTML = cursorCost;
    document.getElementById("cursors").innerHTML = cursors;
    document.getElementById("grandmaCost").innerHTML = grandmaCost;
    document.getElementById("grandmas").innerHTML = grandmas;
    document.getElementById("ovenCost").innerHTML = ovenCost;
    document.getElementById("ovens").innerHTML = ovens;
    document.getElementById("factoryCost").innerHTML = factoryCost;
    document.getElementById("factories").innerHTML = factories;
};

setInterval(function () {
    score = score + cursors;
    score = score + grandmas * 5;
    score = score + ovens * 20;
    score = score + factories * 100;
    document.getElementById("score").innerHTML = score;
    document.getElementById("clicking-power").innerHTML = clickingPower;
    document.title = score + " cookies!! - Cookie Clicker";
}, 1000);

setInterval(function () {
    saveGame();
}, 10000);

document.addEventListener("keydown", function (event) {
    if (event.ctrlKey && event.which == 83) {
        event.preventDefault();
        saveGame();
    }
}, false);

document.addEventListener("keydown", function (event) {
    if (event.ctrlKey && event.which == 72) {
        event.preventDefault();
    }
}, false);

document.addEventListener("keydown", function (event) {
    if (event.ctrlKey && event.which == 80) {
        event.preventDefault();
    }
}, false);

document.addEventListener("keydown", function (event) {
    if (event.ctrlKey && event.which == 70) {
        event.preventDefault();
    }
}, false);

document.addEventListener("keydown", function (event) {
    if (event.ctrlKey && event.which == 65) {
        event.preventDefault();
    }
}, false);