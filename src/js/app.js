const donutMaker = new DonutMaker();
const displayCount = document.querySelector('.count');
const generateDonut = document.querySelector('.donutBtn');
const displayAutoClicker = document.querySelector('.auto');
const displayMultiplier = document.querySelector('.multiplier');
const generateMultiplier = document.querySelector('.multiBtn');
const displayIncrementor = document.querySelector('.incrementor');
const displayMultiPrice = document.querySelector('.multiPrice');
const displayAutoPrice = document.querySelector('.autoPrice');
const generateAutoClicker = document.querySelector('autoBtn');

const updateCount = (totalDisplay, dM) => {
    totalDisplay.innerText = dM.getCount().toFixed();
}

const updateAuto = (displayAutoClicker, dM) => {
    displayAutoClicker.innerText = dM.getAutoClicker();
}

const updateMultiplier = (displayMultiplier, dM) => {
    displayMultiplier.innerText = dM.getMultiplier();
}

const updateMultiPrice = (displayMultiPrice, dM) => {
    displayMultiPrice.innerText = dM.getMultiplierPrice();
}

const updateAutoPrice = (displayAutoPrice, dM) => {
    displayAutoPrice.innerText = dM.getAutoClickerPrice();
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

const makeMultiplierButton = (generateMultiplier, displayMultiplier, displayCount, displayIncrementor, displayMultiPrice, dM) => {
    generateMultiplier.addEventListener('click', () => {
        dM.addMultiplier();
        updateMultiplier(displayMultiplier, dM);
        updateIncrementor(displayIncrementor, dM);
        updateMultiPrice(displayMultiPrice, dM);
        updateCount(displayCount, dM);
    });
}

// const autoClick = (dM) => {
//     self.setInterval(dM.addDonuts, 1000) * dM.autoClicker;
//}

//donutMaker.addAutoClicker();
//autoClick();

updateCount(displayCount, donutMaker);
updateAuto(displayAutoClicker, donutMaker);
makeIncreaseButton(generateDonut, displayCount, donutMaker);
makeMultiplierButton(generateMultiplier, displayMultiplier, displayCount, displayIncrementor, displayMultiPrice, donutMaker);
updateMultiplier(displayMultiplier, donutMaker);
updateIncrementor(displayIncrementor, donutMaker);
updateMultiPrice(displayMultiPrice, donutMaker);
updateAutoPrice(displayAutoPrice, donutMaker);
let interval = setInterval(updateCount(displayCount, donutMaker), 1000);