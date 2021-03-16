const donutMaker = new DonutMaker();
const displayCount = document.querySelector('.count');
const generateDonut = document.querySelector('.btn');

const updateCount = (totalDisplay, dM) => {
    totalDisplay.innerText = dM.getCount();
}

const makeIncreaseButton = (buttonToClick, totalDisplay, dM) => {
    buttonToClick.addEventListener('click', () => {
        dM.addOne();
        updateCount(totalDisplay, dM);
    });
}

makeIncreaseButton(generateDonut, displayCount, donutMaker);

const multiplier = (dM, numOfMultipliers) => {
    dM.incrementor = Math.pow(1.2, numOfMultipliers);
}

//multiplier(donutMaker, 4);