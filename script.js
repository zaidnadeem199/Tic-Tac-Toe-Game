let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset_btn"); //button access
let newGame = document.querySelector("#newGame");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turn0 = true; //playerO, playerX
const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
//enable button for reset game.
const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide")
}
// loop for assigning the values (O,X) to each box.
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("clicked");
        if(turn0 === true) {
            box.innerText = "O";
            turn0 = false;
        }
        else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;

        checkWninner();
    });
});
//show winner on the screen.
const showWinner = (winner) => {
    msg.innerText = `congratulatios! ${winner} is the winner.`;
    msgContainer.classList.remove("hide");
}
//check winner.
const checkWninner = () => {
    for(let pattern of winPattern){
        let posOne = boxes[pattern[0]].innerText;
        let posTwo = boxes[pattern[1]].innerText;
        let posThree = boxes[pattern[2]].innerText;
        if(posOne != "" && posTwo != "" && posThree != ""){
            if(posOne === posTwo && posTwo === posThree){
                console.log("winner",posOne);
                showWinner(posOne);
                disableBoxes();
            }
        }
    }
}
//after winning all boxes becomes disable
const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}
resetBtn.addEventListener("click",resetGame);
//new game
newGame.addEventListener("click",resetGame);