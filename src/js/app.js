const donutMaker = new DonutMaker();
const displayCount = document.querySelector('.count');
const generateDonut = document.querySelector('.donutBtn');
const displayAutoClicker = document.querySelector('.auto');
const displayMultiplier = document.querySelector('.multiplier');
const generateMultiplier = document.querySelector('.multiBtn');

const updateCount = (totalDisplay, dM) => {
    totalDisplay.innerText = dM.getCount();
}

const updateAuto = (displayAutoClicker, dM) => {
    displayAutoClicker.innerText = dM.getAutoClicker();
}

const updateMultiplier = (displayMultiplier, dM) => {
    displayMultiplier.innerText = dM.getMultiplier();
}

const makeIncreaseButton = (generateDonut, displayCount, dM) => {
    generateDonut.addEventListener('click', () => {
        dM.addDonuts();
        updateCount(displayCount, dM);
    });
}

// To implement:
const makeMultiplierButton = (generateMultiplier, displayMultiplier, displayCount, dM) => {
    generateMultiplier.addEventListener('click', () => {
        dM.addMultiplier();
        updateMultiplier(displayMultiplier, dM);
        updateCount(displayCount, dM);
    });
}

updateCount(displayCount, donutMaker);
updateAuto(displayAutoClicker, donutMaker);
makeIncreaseButton(generateDonut, displayCount, donutMaker);
makeMultiplierButton(generateMultiplier, displayMultiplier, displayCount, donutMaker);
//donutMaker.addMultiplier();
//donutMaker.addMultiplier();
updateMultiplier(displayMultiplier, donutMaker);

// const multiplier = (dM, numOfMultipliers) => {
//     dM.incrementor = Math.pow(1.2, numOfMultipliers);
// }

// multiplier(donutMaker, 4);