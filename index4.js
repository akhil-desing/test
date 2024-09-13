let btn1=document.querySelectorAll("button");
let diplay=document.querySelector("#Input1")
let string="";
let arr=Array.from(btn1);
const handle=(e)=>{
    string+=e.innerHTML;
diplay.value=string;
}
for(let i of arr){
    handle(i);
}
btn1.addEventListener("click",handle);