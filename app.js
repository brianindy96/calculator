let display = document.querySelector(".display");

let btns = Array.from(document.querySelectorAll(".btn"));

// To use map() btns is a Nodelist. Must be changed to an array first.

btns.map( button => button.addEventListener('click', (e) =>{
        // console.log(e);
        // console.log(e.target);
        // console.log(e.target.innerText);
        switch(e.target.innerText){
            case "AC":
                    display.innerText = '';
                    break;
            case "DEL":
                    if(display.innerText){
                        display.innerText = display.innerText.slice(0,-1);
                    }
                    break;
            
            
            
            
            
            
            default: 
                    display.innerHTML += e.target.innerHTML;
                
            
        }
    })
);




function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a+b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function operate(){

}