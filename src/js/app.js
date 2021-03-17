const donutMaker = new DonutMaker();
const displayCount = document.querySelector('.count');
const generateDonut = document.querySelector('.donutBtn');
const displayAutoClicker = document.querySelector('.auto');
const displayMultiplier = document.querySelector('.multiplier');

const updateCount = (totalDisplay, dM) => {
    totalDisplay.innerText = dM.getCount();
}

const updateAuto = (displayAutoClicker, dM) => {
    console.log("this fired");
    displayAutoClicker.innerText = dM.getAutoClicker();
}

const updateMultiplier = (displayMultiplier, dM) => {
    displayMultiplier.innerText = dM.getMultiplier();
}

const makeIncreaseButton = (buttonToClick, totalDisplay, dM) => {
    buttonToClick.addEventListener('click', () => {
        dM.addDonuts();
        updateCount(totalDisplay, dM);
    });
}

// To implement:
//const buyMultiplier = () => {}

updateCount(displayCount, donutMaker);
updateAuto(displayAutoClicker, donutMaker);
makeIncreaseButton(generateDonut, displayCount, donutMaker);
donutMaker.addMultiplier();
donutMaker.addMultiplier();
updateMultiplier(displayMultiplier, donutMaker);

// const multiplier = (dM, numOfMultipliers) => {
//     dM.incrementor = Math.pow(1.2, numOfMultipliers);
// }

// multiplier(donutMaker, 4);