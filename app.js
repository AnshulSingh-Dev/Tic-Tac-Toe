let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('restart');

let turnO = true; //PlayerO

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

// for each box add a eventlistener that prints 'box clicked' when clicked.
boxes.forEach((box)=>{
    box.addEventListener('click', ()=>{
        console.log('box clicked');
    })
})

