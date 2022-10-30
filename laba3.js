const re1 = / ?z...z ?/gm;
let bigString = "   ";
let zString = "   ";
var btn1 = document.getElementById(1);
var btn2 = document.getElementById(4);
btn1.onclick = (()=>{
    let txt1 = document.getElementById(2).value + " ";
    document.getElementById(2).value=""
    if (txt1) {bigString+=txt1;}
})
btn2.onclick = (()=> {
    let found = bigString.match(re1);
    document.getElementById(5).innerText += bigString;
    if (found != null) {
        found.forEach((elem)=>{
            zString+=elem + " ";
        })
        document.getElementById(3).innerText+=zString;
    }
})



