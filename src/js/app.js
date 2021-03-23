const donutMaker = new DonutMaker();
const displayCount = document.querySelector('.count');
const generateDonut = document.querySelector('.donutBtn');
const displayAutoClicker = document.querySelector('.auto');
const displayMultiplier = document.querySelector('.multiplier');
const generateMultiplier = document.querySelector('.multiBtn');
const displayIncrementor = document.querySelector('.incrementor');
const displayMultiPrice = document.querySelector('.multiPrice');
const displayAutoPrice = document.querySelector('.autoPrice');
const generateAutoClicker = document.querySelector('.autoBtn');
const resetBtn = document.getElementById('reset');

const updateCount = (displayCount, dM) => {
    displayCount.innerText = dM.getCount().toFixed();
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

const updateAll = (displayCount, displayAutoClicker, displayAutoPrice, displayMultiplier, displayMultiPrice, displayIncrementor, dM) => {
    displayCount.innerText = dM.getCount().toFixed();
    displayAutoClicker.innerText = dM.getAutoClicker();
    displayAutoPrice.innerText = dM.getAutoClickerPrice();
    displayMultiplier.innerText = dM.getMultiplier();
    displayMultiPrice.innerText = dM.getMultiplierPrice();
    displayIncrementor.innerText = dM.getIncrementor().toFixed(2);
}
let refreshAll = () => updateAll(displayCount, displayAutoClicker, displayAutoPrice, displayMultiplier, displayMultiPrice, displayIncrementor, donutMaker);

const makeResetButton = (resetBtn, dM) => {
    resetBtn.addEventListener("click", () => {
        dM.count = 0;
        dM.incrementor = 1;
        dM.autoClicker = 0;
        dM.multiplier = 0;
        dM.autoClickerPrice = 100;
        dM.multiplierPrice = 10;
    });
}

const makeIncreaseButton = (generateDonut, displayCount, dM) => {
    generateDonut.addEventListener('click', () => {
        dM.addDonuts();
        updateCount(displayCount, dM);
    });
}

const makeMultiplierButton = (generateMultiplier, dM) => {
    generateMultiplier.addEventListener('click', () => {
        dM.addMultiplier();
    });
}

const makeAutoClickerButton = (generateAutoClicker, dM) => {
    generateAutoClicker.addEventListener('click', () => {
        if(dM.count < dM.autoClickerPrice){

        }
        else{
            dM.addAutoClicker();
        }
    });
}

makeIncreaseButton(generateDonut, displayCount, donutMaker);
makeMultiplierButton(generateMultiplier, donutMaker);
makeAutoClickerButton(generateAutoClicker, donutMaker);
makeResetButton(resetBtn, donutMaker, displayCount, displayAutoClicker, displayAutoPrice, displayMultiplier, displayMultiPrice, displayIncrementor);

setInterval(refreshAll, 100);