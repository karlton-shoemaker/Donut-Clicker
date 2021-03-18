const donutMaker = new DonutMaker();
const displayCount = document.querySelector('.count');
const generateDonut = document.querySelector('.donutBtn');
const displayAutoClicker = document.querySelector('.auto');
const displayMultiplier = document.querySelector('.multiplier');
const generateMultiplier = document.querySelector('.multiBtn');
const displayIncrementor = document.querySelector('.incrementor');

const updateCount = (totalDisplay, dM) => {
    totalDisplay.innerText = dM.getCount().toFixed();
}

const updateAuto = (displayAutoClicker, dM) => {
    displayAutoClicker.innerText = dM.getAutoClicker();
}

const updateMultiplier = (displayMultiplier, dM) => {
    displayMultiplier.innerText = dM.getMultiplier();
}

const updateIncrementor = (displayIncrementor, dM) => {
    displayIncrementor.innerText = dM.getIncrementor().toFixed(2);
}

const makeIncreaseButton = (generateDonut, displayCount, dM) => {
    generateDonut.addEventListener('click', () => {
        dM.addDonuts();
        updateCount(displayCount, dM);
    });
}

const makeMultiplierButton = (generateMultiplier, displayMultiplier, displayCount, displayIncrementor, dM) => {
    generateMultiplier.addEventListener('click', () => {
        dM.addMultiplier();
        updateMultiplier(displayMultiplier, dM);
        updateIncrementor(displayIncrementor, dM);
        updateCount(displayCount, dM);
    });
}

updateCount(displayCount, donutMaker);
updateAuto(displayAutoClicker, donutMaker);
makeIncreaseButton(generateDonut, displayCount, donutMaker);
makeMultiplierButton(generateMultiplier, displayMultiplier, displayCount, displayIncrementor, donutMaker);
updateMultiplier(displayMultiplier, donutMaker);
updateIncrementor(displayIncrementor, donutMaker);
