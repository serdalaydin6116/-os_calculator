let blind = document.getElementById("");
let lineup = document.getElementById("div_in_lineup");
let lineDown = document.getElementById("div_in_linedown");
let ac = document.getElementById("div_in_ac");
let plusMin = document.getElementById("div_in_plusmin");
let numbers = document.querySelectorAll(".number").length;
let myNumbers = document.querySelectorAll(".number");
let operand = document.querySelectorAll(".operand");
let equal = document.getElementById("div_in_equal");


        
myNumbers.forEach(item => {
    item.addEventListener("click", (e) => {
        lineDown.innerText += e.target.innerText
    })
});
        

operand.forEach(oper => {
    oper.addEventListener("click", (e) => {
        if (lineup.innerHTML == ""){
            lineup.innerHTML = (lineDown.innerHTML + e.target.innerText);
            lineDown.innerHTML = "";
        }    
        else {    
            lineup.innerHTML = lineup.innerHTML.slice(0,-1);
            lineup.innerHTML += e.target.innerText
            lineDown.innerHTML = ""
        }
    })
})


ac.addEventListener("click", () => {
    location.reload();
})

plusMin.addEventListener("click", () => {
    lineDown.innerHTML = (+lineDown.innerHTML*(-1))
    console.log(typeof lineDown.innerHTML);
})

equal.addEventListener("click", fSwitch)


function fSwitch() {

    if (lineDown.innerHTML != "") {
        
        let sign = lineup.innerHTML[lineup.innerHTML.length-1];
        switch (sign) {
            case "+":
                lineDown.innerHTML = +lineDown.innerHTML + +lineup.innerHTML.slice(0,-1);
                lineup.innerHTML = ""            
                break;
                
            case "-":        
                lineDown.innerHTML = +lineup.innerHTML.slice(0,-1) - +lineDown.innerHTML;
                lineup.innerHTML = ""  
                break;
            
            case "×":
                lineDown.innerHTML = +lineDown.innerHTML * +lineup.innerHTML.slice(0,-1);
                lineup.innerHTML = ""  
                break;
            
            case "÷":
                lineDown.innerHTML = +lineup.innerHTML.slice(0,-1) / +lineDown.innerHTML;
                lineup.innerHTML = ""
                break;
            
            case "%":
                lineDown.innerHTML = (+lineup.innerHTML.slice(0,-1) * +lineDown.innerHTML)/100;
                lineup.innerHTML = ""
                break;
        
        }
    }
    
}


    
