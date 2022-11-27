console.log("Welcome to Tic-Tac-Toe");
let music = new Audio("winning music.mp3");

let turn = "X";
let isgameOver = "false";
// for changing turn
const changeTurn=()=>{
    return turn == "X"?"0":"X";
}

// for checking the win condition
const checkWin=()=>{
    let boxtext = document.getElementsByClassName('boxText');
    let win = [
        [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
    ]
    win.forEach(element=>{
        if((boxtext[element[0]].innerText===boxtext[element[1]].innerText)&&(boxtext[element[2]].innerText===boxtext[element[1]].innerText)&&(boxtext[element[0]].innerText!=='')){
            isgameOver = "true";
            document.querySelector('.imageGif').getElementsByTagName('img')[0].style.width = "50%";

            music.play();
            alert(boxtext[element[0]].innerText +" won the game");
            turn = "X";

        }
        
    })
}
//button logic
//let btn = document.getElementsByClassName('reset');
reset.addEventListener('click', ()=>{    
    let boxtexts = document.querySelectorAll('.boxText');

    Array.from(boxtexts).forEach(e =>{
        e.innerText = "";
        document.querySelector('.imageGif').getElementsByTagName('img')[0].style.width = "0";
        music.pause();
    })

})

//game logic
let boxes = document.getElementsByClassName('boxes');
Array.from(boxes).forEach(element =>{
    let boxText = element.querySelector('.boxText');
    element.addEventListener('click', ()=>{
        if(boxText.innerText === ''){
            boxText.innerText = turn;
            turn = changeTurn();
            checkWin();
            if(isgameOver != true){
            document.getElementsByClassName("info")[0].innerText = (`Turn for ${turn}`);
            }
           
        }
    })
})

