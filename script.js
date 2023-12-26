// your JS code here. If required.
const para = document.getElementById("counter");
const incbtn = document.getElementById("incrementBtn");

incbtn.addEventListener("click", function() {
	let counter = Number(para.innerText);
	alert(counter);
	para.innerText=++counter;
})

