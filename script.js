window.onload = function(){
    let button = document.getElementById("calculate");
    button.addEventListener("click",calculateLove)
}

function calculateLove(){
    let yourName = document.getElementById("yourName").value;
    let crushName = document.getElementById("crushName").value;
    
    if(yourName != "" && crushName != ""){
        let percentage = Math.floor(Math.random() * 100) + 1;
        document.getElementById("resultMessage").innerText = "Love percentage of "+yourName+" and "+crushName+" is:";    
        document.getElementById("result-percentage").innerText = percentage.toString() + "%";
    }
}