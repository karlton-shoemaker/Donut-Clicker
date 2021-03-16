// let donutCount = 0;
// let result = document.getElementById('count');
// result.innerText = donutCount;

// function AddDonutOnClick(){
//     let buttonClick = document.getElementsByTagName("button")[0];
//     buttonClick.addEventListener("click", IncreaseDonutCountByOne);
// }

// function IncreaseDonutCountByOne(){
//     donutCount++;
//     //console.log(donutCount);
//     result.innerText = donutCount;
// }

const clicker = new DonutMaker();
const clickDisplay = document.querySelector('.count');
const mainClickButton = document.querySelector('.btn');

//clickDisplay.innerText = clicker.getCount();
const updateCount = (clickDisplay, clicker) => {
    clickDisplay.innerText = clicker.getCount();
}

// updateCount(clickDisplay, clicker);
// mainClickButton.addEventListener('click', () => {
//     clicker.addOne;
//     updateCount(clickDisplay, clicker);
// });

const makeIncreaseButton = (mainClicker, clickDisp, clicker) => {
    mainClicker.addEventListener('click', () => {
        clicker.addOne();
        updateCount(clickDisp, clicker);
    });
}

makeIncreaseButton(mainClickButton, clickDisplay, clicker);

