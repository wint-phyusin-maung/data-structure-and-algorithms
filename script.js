const  title = document.getElementById('title');
const  counter = document.getElementById('counter');
const  decreaseBtn = document.getElementById('decreaseBtn');
const  resetBtn = document.getElementById('resetBtn');
const  increaseBtn = document.getElementById('increaseBtn');
let count =0; 


increaseBtn.addEventListener('click',increaseBtnFun)

function increaseBtnFun()
{
    count++;
    counter.innerText = count;
}

decreaseBtn.addEventListener('click',decreaseBtnFunc)

function decreaseBtnFunc()
{
    count--;
    counter.innerText = count;
}

resetBtn.addEventListener('click',resetBtnFunc);


function resetBtnFunc()
{
    count = 0;
    counter.innerText = count;
}