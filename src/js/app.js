let donutCount = 0;
let result = document.getElementById('count');
result.innerText = donutCount;

function AddDonutOnClick(){
    let buttonClick = document.getElementsByTagName("button")[0];
    buttonClick.addEventListener("click", IncreaseDonutCountByOne);
}

function IncreaseDonutCountByOne(){
    donutCount++;
    //console.log(donutCount);
    result.innerText = donutCount;
}

const clicker = new DonutMaker();
let result2 = document.getElementById('count2');
result2.innerText = clicker.getCount();



