const clicker = new DonutMaker();
const clickDisplay = document.querySelector('.count');
const mainClickButton = document.querySelector('.btn');

const updateCount = (clickDisplay, clicker) => {
    clickDisplay.innerText = clicker.getCount();
}

const makeIncreaseButton = (mainClicker, clickDisp, clicker) => {
    mainClicker.addEventListener('click', () => {
        clicker.addOne();
        updateCount(clickDisp, clicker);
    });
}

makeIncreaseButton(mainClickButton, clickDisplay, clicker);

