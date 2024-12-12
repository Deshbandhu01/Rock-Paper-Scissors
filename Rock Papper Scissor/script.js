//Modular way of programming i am using to make this project.
let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

const genCompChoice= () =>{
    const options=["rock","paper","scissor"]
    const randIdx=Math.floor(Math.random()*3)
    return options[randIdx];
}

const drawGame =()=>{
    console.log("Game was Draw.");
    msg.innerText="Game was Draw";
    msg.style.backgroundColor="yellow";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("User Win");
        msg.innerText=`You Win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("user Loss");
        msg.innerText=`You loss! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame= (userChoice) =>{
    console.log("user choice = ", userChoice);
    //Generate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice:",compChoice);

    if(userChoice===compChoice){
        //draw function to be call here ;
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice==="rock"){
            //scissor,paper
            userWin= compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            //scissor,rock
            userWin= compChoice==="scissor"?false:true;
        }
        else{
            //rock,paper
            userWin= compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
       playGame(userChoice);
    });
});

//Mode button
let modebtn1=document.querySelector("#btn1");
let body=document.querySelector("body");
let mode="light"

modebtn1.addEventListener("click",() => {
    if(mode==="black"){
        mode="light";
        console.log("Light");
        body.style.backgroundColor="white";
        body.style.color='black';
        btn1.innerHTML="Dark Mode";
    }
    else{
        console.log("dark");
        mode="black";
        body.style.backgroundColor="#28282B";
        body.style.color='white';
        btn1.innerHTML="Light Mode";
    }
})