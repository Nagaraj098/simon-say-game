let gameseq=[];
let userseq=[];

let started=false;
let level=0;
let btns=["yellow","red","purple","green"];
let high_score=0;

let h2=document.querySelector("h2");

document.addEventListener("click",function(){
    if(started==false){
        console.log("game has started");
        levelup();
        started=true;
    }
   
});

function flashbtn(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },500);


}

function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randomIdx=Math.floor(Math.random()*3);
    let randomColor=btns[randomIdx];
    let randomBtn=document.querySelector(`.${randomColor}`);
    //    //let randomBtn=document.querySelector("."+randomColor);
    // console.log(randomIdx)
    // console.log(randomColor)
    // console.log(randomBtn);
    gameseq.push(randomColor);
    console.log(gameseq);
    setTimeout(flashbtn(randomBtn),1000);
}

function checkans(idx){
   // console.log(`current level is${level}`);
    //let idx=level-1;
    if(userseq[idx]==gameseq[idx]){
        console.log("same")
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
        }
        
    }
    else{
        if(high_score < level)
        {
            high_score=level;
        }
        h2.innerHTML=`Game over! <b>your score is ${level} and highest score is ${high_score}<b> <br> press outsode of keys to start`;
        let body=document.querySelector("body");
        body.style.backgroundColor="red";
        setTimeout(function(){
            body.style.backgroundColor="white";
        },150);

        setTimeout(reset,1000);
    }
}
function userflashbtn(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    },250);

}

function btnpress(){
    let btn=this;
   // console.log(btn);
    userflashbtn(btn);

    let userColor=btn.getAttribute("id");
    //console.log(userColor);
    userseq.push(userColor);
    checkans(userseq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for (let btn of allbtns){
    btn.addEventListener("click",btnpress);
}

function reset(){
    gameseq=[];
    userseq=[];
    level=0;
    started=false;
}