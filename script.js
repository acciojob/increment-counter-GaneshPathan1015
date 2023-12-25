//your JS code here. If required.
const para = document.getElementById("counter");
let counter = 0;
const incbtn = document.getElementById("incrementBtn");
incbtn.addEventListener("click", ()=>{
	counter++;
	alert(`${counter}`);
	para.innerText=counter;
})