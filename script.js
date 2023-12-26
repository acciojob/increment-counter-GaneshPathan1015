// your JS code here. If required.
const para = document.getElementById("counter");
const incbtn = document.getElementById("incrementBtn");

incbtn.addEventListener("click", function () {
	let counter = Number(para.innerText);
	alert(`${counter}`);
	para.innerText=++counter;
})

// function incrementCounter() {
//   const counterElement = document.getElementById('counter');
//   const currentValue = parseInt(counterElement.innerText, 10);
//   alert(`Current value: ${currentValue}`);
//   const incrementedValue = currentValue + 1;
//   counterElement.innerText = incrementedValue;
// }